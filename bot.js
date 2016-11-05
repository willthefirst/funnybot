const botBuilder = require('claudia-bot-builder');

module.exports = botBuilder(request => `Hello from space explorer bot! Your request was: ${request.text}`);
