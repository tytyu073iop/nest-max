import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect([{sender: 'Adorabat', message: 'Have a great day!'}]);
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({sender: 'Adorabat', message: 'Have a great day!'})
      .expect(201);
  });

  afterEach(async () => {
    await app.close();
  });
});
