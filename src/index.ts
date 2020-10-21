import BotBody from './bot-body';

const psyBot = new BotBody(process.env.BOT_TOKEN);
psyBot.init();

export default psyBot;
