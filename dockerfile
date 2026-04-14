###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:22-alpine AS development

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
# Using wildcard to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies using npm ci for cleaner/faster install
RUN npm ci

# Copy the rest of the application code
COPY . .

###################
# BUILD FOR PRODUCTION
###################

FROM node:22-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

# In order to run `npm run build` we need access to the Nest CLI 
# which is a dev dependency. In the previous development stage we ran `npm ci` 
# which installed all dependencies, so we can copy them from there.
COPY --from=development /usr/src/app/node_modules ./node_modules

COPY . .

# Build the application
RUN npm run build

# Set NODE_ENV environment variable
ENV NODE_ENV=production

# Running `npm ci` removes the existing node_modules directory and passing in --only=production 
# ensures that only the production dependencies are installed. This ensures that the 
# node_modules directory is as small as possible
RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:22-alpine AS production

WORKDIR /usr/src/app

# Copy the bundled code from the build stage to the production image
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

# Use the non-root node user
USER node

EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]