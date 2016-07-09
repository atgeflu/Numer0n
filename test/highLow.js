
var assert = chai.assert;


describe('highLow() - returns LOW for integers 0-4 and HIGH for integers 5-9', function() {

    it('LOW for integers 0-4', function() {
        
        assert.equal(highLow(0), 'LOW');
        assert.equal(highLow(1), 'LOW');
        assert.equal(highLow(2), 'LOW');
        assert.equal(highLow(3), 'LOW');
        assert.equal(highLow(4), 'LOW');
    });

    it('HIGH for integers 5-9', function() {
        
        assert.equal(highLow(5), 'HIGH');
        assert.equal(highLow(6), 'HIGH');
        assert.equal(highLow(7), 'HIGH');
        assert.equal(highLow(8), 'HIGH');
        assert.equal(highLow(9), 'HIGH');
    });

    it('throws error if not integer', function() {

        assert.throws(highLow, 'not an integer');
    });


    it('highLowArray tests', function() {

        assert.deepEqual(highLowArray([0,1,2,3,4]), ['LOW','LOW','LOW','LOW','LOW']);
        assert.deepEqual(highLowArray([5,6,7,8,9]), ['HIGH','HIGH','HIGH','HIGH','HIGH']);
        assert.deepEqual(highLowArray([0,2,1,8,9]), ['LOW','LOW','LOW','HIGH','HIGH']);
    });

    
    });