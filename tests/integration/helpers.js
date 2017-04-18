/**
 * Responsable for initialize the tests configurations
 * without need to realize that configuration in each test case
 */
import supertest from 'supertest';
import chai from 'chai';
import app from '../../src/app.js';

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;