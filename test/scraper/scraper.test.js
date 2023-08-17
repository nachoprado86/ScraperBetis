import Scraper from "../../src/scraper/scraper.js";

describe("Scraper", () => {
    let scraper;
    beforeAll(async () => {
        scraper = new Scraper(false);
        await scraper.init();
    });
    afterAll(async () => {
        await scraper.close();
    });
    it ("should return a string", async () => {
        let url = "https://www.realbetisbalompie.es/fans_club/"
        const content = await scraper.scrap(url);
        expect (content).toContain("<title>Peñas Béticas - Real Betis Balompié</title>");
    }, 30000);
});