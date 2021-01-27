const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe ("polybiusModule", () => {
    it("should return '4432423352125413' if input is 'thinkful'", () => {
        const actual = polybiusModule("thinkful");
        expect(actual).to.equal("4432423352125413");
    });
    it("should return 'th(i/j)nkful' if input is '4432423352125413'", () => {
        const actual = polybiusModule("4432423352125413", false);
        expect(actual).to.equal("th(i/j)nkful");
    });
    it("should return false if input exculding spaces is odd", () => {
        const actual = polybiusModule("123 34", false);
        expect(actual).to.be.false;
    });
    it("should return '3251131343 2543241341' if input is 'hello world'", () => {
        const actual = polybiusModule("hello world");
        expect(actual).to.equal("3251131343 2543241341");
    });
    it("should return 'hello world' if input is '3251131343 2543241341', false", () => {
        const actual = polybiusModule("3251131343 2543241341",false);
        expect(actual).to.equal("hello world");
    });
});