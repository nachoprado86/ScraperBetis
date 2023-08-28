import Scraper from "../scraper/scraper.js";
import Parser from "../parser/parser.js";
// import PenasBetis from "../models/penasBetis.js";


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
        // this.saveData(cards);
        this.close();
        return cards;
    }
    saveData = async (cards) => {
        for(let card of cards){
            try{
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


async function prueba () {
    const controller = new PenasBetisController();
await controller.init();
const cards = await controller.getData(1);
console.log("resultado:", cards);
controller.close();
}

prueba();