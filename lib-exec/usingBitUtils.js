module.exports = function usingBitUtils() {
    var BitUtils = require('./lib/BitUtils');
    var bitUtils = new BitUtils();
    console.log('5 get bit 1 is ' + bitUtils.getBit(5,1));

    console.log('5 set bit 1 is ' + bitUtils.setBit(5,1));

}()