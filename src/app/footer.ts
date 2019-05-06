export class Footer {
    footerText: string;

    constructor() {
        console.log(`This is Footer constructor`);
        this.footerText = `Demo for webpack 4 set up`;
    }

    getFooterText(): string {
        return this.footerText;
    }
}