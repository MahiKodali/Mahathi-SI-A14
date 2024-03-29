import {Client} from '@loopback/testlab';
import {GettingStartedApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HomePage', () => {
  let app: GettingStartedApplication;
  let client: Client;

before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

after(async () => {
    await app.stop();
  });

it('exposes a default home page', async () => {
    await client
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/);
  });

it('exposes self-hosted explorer', async () => {
    await client
      .get('/explorer/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .expect(/<title>LoopBack API Explorer/);
  });
});
function before(arg0: string, arg1: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

function after(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

