export default class BotBody {
    constructor(token: string | undefined) {
        if (this.instance) {
            return this.instance;
        }

        this.instance = this;
        this.token = token;
    }

    public instance: BotBody;
    private token: string | undefined;

    init(): void {

    }
}
