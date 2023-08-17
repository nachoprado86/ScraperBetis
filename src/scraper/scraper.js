import puppeteer from "puppeteer";

class Scraper {
    constructor(headless = true) {
        this.browser = null;
        this.page = null;
        this.headless = headless;
        this.baseUrl = new URL("https://www.realbetisbalompie.es/fans_club/");

    }

    init = async () => {
        this.browser = await puppeteer.launch({ headless: this.headless});
        this.page = await this.browser.newPage();
    }

    close = async () => {
        await this.browser.close();
        
    }

    scrap = async (query,page) => {
        this.baseUrl.searchParams.set("page", page);
        const url = this.baseUrl.toString();
        await this.page.goto(url);
        await new Promise(resolve => setTimeout(resolve, 15000));
        const content = await this.page.content();
        return content;
    }

    multiScrap = async (query, pages) => {
        let content = "";
        for (let i = 1; i <= pages; i++) {
            content += await this.scrap(query,i);
        }
        return content;
        
    }

}

export default Scraper;
