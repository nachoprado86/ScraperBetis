import {JSDOM} from 'jsdom';

class Parser {
    constructor(html) {
        this.html = html;
        this.dom = new JSDOM(this.html);
    }
    getElInfo = () => {
        return this.dom.window.document.querySelectorAll(".el-info");
        
    }
}

export default Parser;