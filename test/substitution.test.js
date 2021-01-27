const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe ("substitutionModule", () => {
    it("should return 'jrufscpw' if input is 'thinkful', 'xoyqmcgrukswaflnthdjpzibev'", () => {
        const actual = substitutionModule('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.equal('jrufscpw');
    });
    it("should return 'elp xhm xf mbymwwmfj dne' if input is 'You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev'", () => {
        const actual = substitutionModule('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.equal('elp xhm xf mbymwwmfj dne');
    });
    it("should return 'thinkful' if input is 'jrufscpw', 'xoyqmcgrukswaflnthdjpzibev' false", () => {
        const actual = substitutionModule('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false);
        expect(actual).to.equal('thinkful');
    });
    it("should return 'y&ii$r&' if input is 'message', '$wae&zrdxtfcygvuhbijnokmpl'", () => {
        const actual = substitutionModule('message', '$wae&zrdxtfcygvuhbijnokmpl');
        expect(actual).to.equal('y&ii$r&');
    });
    it("should return 'message' if input is 'y&ii$r&', '$wae&zrdxtfcygvuhbijnokmpl' false", () => {
        const actual = substitutionModule('y&ii$r&', '$wae&zrdxtfcygvuhbijnokmpl', false);
        expect(actual).to.equal('message');
    });
    it("should return false if input is 'thinkful', 'short'", () => {
        const actual = substitutionModule('thinkful', 'short');
        expect(actual).to.be.false;
    });
    it("should return false if input is 'thinkful', 'abcabcabcabcabcabcabcabcyz'", () => {
        const actual = substitutionModule('thinkful', 'abcabcabcabcabcabcabcabcyz');
        expect(actual).to.be.false;
    });
    it("should return false if input is 'no alphabet'", () => {
        const actual = substitutionModule('no alphabet');
        expect(actual).to.be.false;
    });
});