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
        try {
            return card.querySelector(".el-name b").textContent.trim();
        } catch (e) {
            return "No tiene título";
        }
    }
    getCiudad = (card) => {
        try {
            return card.querySelector(".color-main i").textContent.trim();
        } catch (e) {
            return "No tiene ciudad";
        }
    }
    getDireccion = (card) => {
        try {
            return card.querySelector("p").textContent.trim();
        } catch (e) {
            return "No tiene dirección";
        }
    }
    getTelefono = (card) => {
        try {
        return card.querySelector("a").textContent.trim();
    } catch (e) {
        return "No tiene teléfono";
    }}

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