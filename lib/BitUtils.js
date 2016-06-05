module.exports = function BitUtils() {
    this.repeatdArithmeticShift = function (x, count) {
        for (var i = 0; i < count; i++) {
            x >>= 1;
        }
        return x;
    };

    this.repeatdLogicalShift = function (x, count) {
        for (var i = 0; i < count; i++) {
            x >>>= 1;
        }
        return x;
    }

    this.getBit = function (num, i) {
        return ((num & (1 << i)) != 0);
    };

    this.setBit = function (num, i) {
        return num | (1 << i);
    };

    this.clearBit = function (num, i) {
        var mask = ~(1 << i);
        return num & mask;
    };

    this.clearBitsMSBthroughI = function (num, i) {
        var mask = (1 << i) - 1;
        return num & mask;
    };

    this.clearBitsIthrough0 = function (num, i) {
        var mask = (-1 << (i + 1));
        return num & mask;
    };

    this.updateBit = function (num, i, bitIs1) {
        var value = bitIs1 ? 1 : 0;
        var mask = ~(1 << i);
        return (num & mask) | (value << i);
    };

}