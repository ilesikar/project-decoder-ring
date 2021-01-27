const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe ("caesarModule", () => {
    it("should return false if input undefined", () => {
        const actual = caesarModule();
        expect(actual).to.be.false;
    });
    it("should return false if shift = 0", () => {
        const actual = caesarModule("test", 0);
        expect(actual).to.be.false;
    });
    it("should return false if shift < -25", () => {
        const actual = caesarModule("test", -26);
        expect(actual).to.be.false;
    });
    it("should return false if shift > 25", () => {
        const actual = caesarModule("test", 26);
        expect(actual).to.be.false;
    });
    it("should return b if a is input with shift of 1", () => {
        const actual = caesarModule("a", 1);
        expect(actual).to.equal('b');
    });
    it("should return uijt jt b uftu if input this is a test and shift of 1", () => {
        const expected = "uijt jt b uftu";
        const actual = caesarModule("this is a test", 1);
        expect(actual).to.equal(expected);
    });
    it("should return sghr hr  sdrs if input this is a test and shift of -1", () => {
        const expected = "sghr hr z sdrs";
        const actual = caesarModule("this is a test", -1);
        expect(actual).to.equal(expected);
    });
    it("should return sghr hr  sdrs if input this is a test and shift of 25", () => {
        const expected = "sghr hr z sdrs";
        const actual = caesarModule("this is a test", 25);
        expect(actual).to.equal(expected);
    });
    it("should return uijt jt b uftu if input this is a test and shift of -25", () => {
        const expected = "uijt jt b uftu";
        const actual = caesarModule("this is a test", -25);
        expect(actual).to.equal(expected);
    });
    it("should return this is a test if input uijt jt b uftu and shift of -10 while decoding", () => {
        const expected = "sghr hr z sdrs";
        const actual = caesarModule("this is a test", -25, false);
        expect(actual).to.equal(expected);
    });
});