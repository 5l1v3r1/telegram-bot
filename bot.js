const ttoken = 'YOUR-TOKEN-HERE';
var telegram = require('telegraf');
var bot = new telegram(ttoken);

bot.start((ctx) => ctx.reply('Welcome!'));

bot.command('today', (ctx) => ctx.reply('Today is: '+new Date()));

bot.launch();
