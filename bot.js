const botBuilder = require('claudia-bot-builder');
const fbTemplate = require('claudia-bot-builder').fbTemplate;
const suggestions = require('./suggestions');
console.log(suggestions.getRandom('NON_GEO_LOCATION'));

module.exports = botBuilder(request => {
  console.log(`BOOM: Request type: ${request.postback}`);

  // Introduce ourself
  if(!request.postback) {
    return [
      `Oh hey. I can yell out improv suggestions.`,
      new fbTemplate.Button('Whadda ya need?')
      .addButton('A non-geographical location', 'NON_GEO_LOCATION')
      .addButton('An emotion', 'EMOTION')
      .addButton('Anything at all', 'ANYTHING')
      .get()
    ]
  }

  // Reply with a suggestion
  return suggestions.getRandom(request.text)
});
