const twilio = require('twilio');

const client = new twilio('ACd8fbd6b089b9be886e6c752e819bc529', '35f908097de4f9aa87a2e014337bbdd2')

client.messages
.list()
.then(messages => console.log(`The most recent message is ${messages[0].body}`)
).catch(err =>  console.error(err));

console.log("Gathering your message log ... ");