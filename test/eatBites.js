
var assert = chai.assert;


describe('eatBites() - given two arrays guess and choice, returns an array [eats,bites]', function() {

    it('correct number of eats', function() {
        
        assert.deepEqual(eatBites([1,2,3],[1,2,3]), [3,0]);
        assert.deepEqual(eatBites([1,2,3],[1,2,4]), [2,0]);
        assert.deepEqual(eatBites([1,2,3],[1,4,3]), [2,0]);
        assert.deepEqual(eatBites([1,2,3],[4,2,3]), [2,0]);
        assert.deepEqual(eatBites([1,2,3],[1,4,6]), [1,0]);
        assert.deepEqual(eatBites([1,2,3],[4,5,6]), [0,0]);
    });

    it('correct number of bites', function() {
        
        assert.deepEqual(eatBites([1,2,3],[3,1,2]), [0,3]);
        assert.deepEqual(eatBites([1,2,3],[2,1,4]), [0,2]);
        assert.deepEqual(eatBites([1,2,3],[4,3,1]), [0,2]);
        assert.deepEqual(eatBites([1,2,3],[2,3,5]), [0,2]);
        assert.deepEqual(eatBites([1,2,3],[2,5,6]), [0,1]);
        assert.deepEqual(eatBites([1,2,3],[4,5,6]), [0,0]);
    });

    it('correct number of eat/bites', function() {
        
        assert.deepEqual(eatBites([1,2,3],[2,1,3]), [1,2]);
        assert.deepEqual(eatBites([1,4,6],[2,1,4]), [0,2]);
        assert.deepEqual(eatBites([4,9,8],[4,8,1]), [1,1]);
        assert.deepEqual(eatBites([2,4,9],[2,3,5]), [1,0]);
        assert.deepEqual(eatBites([9,8,7],[8,9,7]), [1,2]);
        assert.deepEqual(eatBites([2,9,3],[9,8,3]), [1,1]);
    });

    it('throws error if input not two arrays', function() {

        assert.throws(eatBites, 'input needs to be two arrays');
    });

    
    });