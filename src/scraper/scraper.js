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

    scrap = async (page) => {
        
        let url = this.baseUrl.toString();
        url+= `${page}`;
        console.log(page);
        await this.page.goto(url);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const content = await this.page.content();
        return content;
    }

    multiScrap = async (pages) => {
        let content = "";
        for (let i = 1; i <= pages; i++) {
            content += await this.scrap(i);
        }
        
        return content;
        
    }

}

export default Scraper;
