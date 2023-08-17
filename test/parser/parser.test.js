import Parser from "../../src/parser/parser.js";
import fs from "fs";

describe ("Parser", () => {
    let parser;
    let html;
    beforeAll(async () => {
        html = fs.readFileSync("./test/test.html", "utf-8");
        parser = new Parser(html);
    });
  
    it ("should return all el info", async () => {
        const elInfo = parser.getElInfo();
        expect(elInfo.length).toBeGreaterThan(8);
    })
});