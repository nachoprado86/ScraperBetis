import {JSDOM} from 'jsdom';

class Parser {
    constructor(html) {
        this.html = html;
        this.dom = new JSDOM(this.html);
    }
    getCards= () => {
        return this.dom.window.document.querySelectorAll(".el-info");
        
    }
    getTitulo= (card) => {
        return card.querySelector(".el-name b").textContent.trim();
    }
    getCiudad = (card) => {
        return card.querySelector(".color-main i").textContent.trim();
    }
    getDireccion = (card) => {
        return card.querySelector(".color-main p").textContent.trim();
    }
    getTelefono = (card) => {
        return card.querySelector(".tel").textContent.trim();
    }

    getCard = (card) => {
        return {
            titulo: this.getTitulo(card),
            ciudad: this.getCiudad(card),
            direccion: this.getDireccion(card),
            telefono: this.getTelefono(card)
        };
    }
    
    getCardsArray = () => {
        const cards = this.getCards();
        const cardsArray = [];
        for(let card of cards){
            try{
                cardsArray.push(this.getCard(card));
            }
            catch(e){
                console.log(e);
            }
        }
        return cardsArray;
    }
    
}

export default Parser;