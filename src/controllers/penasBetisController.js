import Scraper from "../scraper/scraper.js";
import Parser from "../parser/parser.js";
import PenasBetis from "../models/penasBetis.js";


class PenasBetisController{
    constructor (){
        this.scraper = new Scraper();
        this.parser = null;
    }

    init = async () => {
        await this.scraper.init();
    }

    getData = async (pages) => {
        const content = await this.scraper.multiScrap(pages);
        this.parser = new Parser(content);
        const cards = this.parser.getCardsArray();
        this.saveData(cards);
        this.close();
        return cards;
    }
    saveData = async (cards) => {
        for(let card of cards){
            try{
                card.shop = "amazon"; 
                card.query = query; 
                const producto = new PenasBetis(card);
                await producto.save();
            }
            catch(e){
                console.log(e);
            }
        }
    }

    

    close = async () => {
        await this.scraper.close();
    }
}

export default PenasBetisController;