var expect = require("chai").expect;
var BitUtils = require("../lib/BitUtils.js");
var bitUtils;
describe('BitUtils Test', function() {
    before(function () {
        bitUtils = new BitUtils();
    });

    it('should getBit and return true or false', function() {
        expect(bitUtils.getBit(5,2)).to.equal(true);
        expect(bitUtils.getBit(5,1)).to.equal(false);
    });
    it('should setBit to the digit and return the new value', function() {
        expect(bitUtils.setBit(5,1)).to.equal(7);
        expect(bitUtils.setBit(8,0)).to.equal(9);
    });
    it('should setBit to the digit and return the new value', function() {
        expect(bitUtils.setBit(5,1)).to.equal(7);
        expect(bitUtils.setBit(8,0)).to.equal(9);
    });
    it('should clear to the digit and return the new value', function() {
        expect(bitUtils.clearBit(7,1)).to.equal(5);
        expect(bitUtils.clearBit(9,0)).to.equal(8);
        expect(bitUtils.clearBit(9,1)).to.equal(9);
    });
    it('should clear all the most significant bit through the digit and return the new value', function() {
        expect(bitUtils.clearBitsMSBthroughI(8,1)).to.equal(0); // 1000 & 001 = 0
        expect(bitUtils.clearBitsMSBthroughI(8,4)).to.equal(8); // 1000 & 1111 = 1000
        expect(bitUtils.clearBitsMSBthroughI(7,2)).to.equal(3); // 111 & 011 = 11
    });
    it('should clear all bits from the digit through 0 and return the new value', function() {
        expect(bitUtils.clearBitsIthrough0(8,1)).to.equal(8); // 1000 & 1100 = 1000
        expect(bitUtils.clearBitsIthrough0(8,4)).to.equal(0); // 1000 & 10000 = 0
        expect(bitUtils.clearBitsIthrough0(7,1)).to.equal(4); // 111 & 1100 = 100
        expect(bitUtils.clearBitsIthrough0(7,0)).to.equal(6); // 111 & 1110 = 110
    });
    it('should update the bit for the digit and return the new value', function() {
        expect(bitUtils.updateBit(8,1,true)).to.equal(10);
        expect(bitUtils.updateBit(8,3,false)).to.equal(0);
        expect(bitUtils.updateBit(7,1,false)).to.equal(5);
        expect(bitUtils.updateBit(6,0,true)).to.equal(7);
    });
    
});