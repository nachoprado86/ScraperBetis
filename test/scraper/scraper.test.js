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
        let pages = 3;
        const content = await scraper.multiScrap(pages);
        expect (content).toContain("<title>Peñas Béticas - Real Betis Balompié</title>");
    }, 300000);
});