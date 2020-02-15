const ttoken = 'YOUR-TOKEN-HERE';
var telegram = require('telegraf');
var bot = new telegram(ttoken);

bot.command('hi', message => {
  message.reply("Hi!");
});

bot.launch();
