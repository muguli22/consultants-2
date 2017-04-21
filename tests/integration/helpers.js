/**
 * Responsable for initialize the tests configurations
 * without need to realize that configuration in each test case
 */
import setupApp from '../../src/app.js';
import supertest from 'supertest';
import chai from 'chai';

global.setupApp = setupApp;
global.supertest = supertest;
global.expect = chai.expect;