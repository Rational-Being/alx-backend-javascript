const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('calculateNumber', () => {
    it('test sum of two rounded numbers', () => {
        assert.equal(calculateNumber('SUM', 17.3, 7.3), 24);
    });
    
    it('sum two integers', () => {
        assert.equal(calculateNumber('SUM', 2, 3), 5);
    });
    
    it('test subtraction of two rounded numbers', () => {
        assert.equal(calculateNumber('SUBTRACT', 7.3, 4.3), 3);
    });
    
    it('SUBTRACT TWO INTEGERS', () => {
        assert.equal(calculateNumber('SUBTRACT', 90, 9), 81);
    });
    
    it('TEST DIVISION OF Two rounded numbers', () => {
        assert.equal(calculateNumber('DIVIDE', 99.3, 9), 11);
    });
    
    it('divide two integers', () => {
        assert.equal(calculateNumber('DIVIDE', 9, 3), 3);
    });
    
    it('dividing with zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 74, 0), 'Error');
    });
    
    it('dividing with zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 74), 0);
    });  
})