import * as core from '@actions/core';
import * as httpm from '@actions/http-client';

const apiKey = core.getInput('api_key', { required: true });
const serviceId = core.getInput('service_id', { required: true });

console.log(`Sending purge request for service ${serviceId}...`);

const client = new httpm.HttpClient();
client
  .post(`https://api.fastly.com/service/${serviceId}/purge_all`, '', { Accept: 'application/json', 'Fastly-Key': apiKey })
  .then(resp => {
    if (resp.message.statusCode !== 200) {
      return resp.readBody().then(body => {
        const msg = `Unable to send purge request (status ${resp.message.statusCode}): ${body}`;
        console.log(`error: ${msg}`);
        throw new Error(msg);
      });
    }
    console.log('Purge request successful!');
  })
  .catch((err: Error) => {
    core.setFailed(err.message);
  });
