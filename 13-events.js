const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// First listen (.on) then emit (.emit)

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`);
})
customEmitter.on('response', () => {
    console.log(`other logic`);
})

customEmitter.emit('response', 'arka', 31);