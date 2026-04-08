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
      .send({recipient: 'Adorabat', message: 'Have a great day!'})
      .expect(201);
  });

  it('/ (POST) with empty body', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({})
      .expect(400);
  });

  it('/ (POST) with empty recipient', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({recipient: '', message: 'Have a great day!'})
      .expect(400);
  });

  it('/ (POST) with empty message', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({recipient: 'Adorabat', message: ''})
      .expect(400);
  });

  it('/ (POST) with non-string recipient', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({recipient: 123, message: 'Have a great day!'})
      .expect(400);
  });

  it('/ (POST) with non-string message', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({recipient: 'Adorabat', message: 123})
      .expect(400);
  });

  it('/ (POST) with wrong structure', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({wrong: 'Adorabat', message: 'Have a great day!'})
      .expect(400);
  });

  afterEach(async () => {
    await app.close();
  });
});
