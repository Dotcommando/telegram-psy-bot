import Telegraf from 'telegraf';

export default class BotBody {
    constructor(token: string | undefined) {
        if (this.instance) {
            return this.instance;
        }

        if (typeof token === 'undefined') {
            throw new Error(`Bot's token is not defined.`);
        }

        this.instance = this;
        this.token = token;
        this.bot = new Telegraf<any>(this.token);
    }

    public instance: BotBody;
    private token: string;
    private bot: Telegraf<any>;

    init(): void {
        this.bot.start((ctx) => ctx.reply('Welcome'));
        this.bot.help((ctx) => ctx.reply('Send me a sticker'));
        this.bot.on('sticker', (ctx) => ctx.reply('Nice sticker!'));
        this.bot.hears('hi', (ctx) => ctx.reply('Hey there'));
        this.bot.launch();
    }
}
