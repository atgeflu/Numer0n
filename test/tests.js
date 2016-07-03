    //var chai = require('chai');   //only needed if running via node.js in which case other things would have to be changed as well
var assert = chai.assert;


describe('shuffle() (Fisher-Yates algorithm)', function() {

    it('the length of array shouldn\'t change after sorting', function() {
        var arr = [1,2,3];
        var l = arr.length;
        shuffle(arr);

        assert.equal(arr.length, l);
    });

    it('the returned array should be equal to the sorted original array', function() {
        var arr = [1,2,3];
        var l = arr.length;
        var newArr = shuffle(arr);

        assert.equal(arr, newArr);
    });

    var arr;      //defined further below
    var factorialOfLength = 24; //4!
    var keyArr;
    var checker = {} ;  //checker object to write down sorted combinations and how often they appear
    var numberTrials = 25000*factorialOfLength;
    var maxNumber = -1;
    var minNumber = numberTrials;
    var numberOfElements = 0;

    for (var i = 0; i < numberTrials; i++) {
        arr = [1,2,3,4]; 
        shuffle(arr);
        var keyArr = arr.join(''); 

        if (checker[keyArr] == undefined) { 
            checker[keyArr] = 1; 
        } else {  
            checker[keyArr]++;
        }
    }

    for (let item in checker) {

        numberOfElements++;

        if (checker[item] > maxNumber) {
            maxNumber = checker[item];
        }

        if (checker[item] < minNumber) {
            minNumber = checker[item];
        } 
    }

    var percentMinNumber = (minNumber*factorialOfLength*100/numberTrials);
    var percentMaxNumber = (maxNumber*factorialOfLength*100/numberTrials);

/*    
    console.log("minNumber: " + minNumber + " maxNumber: " + maxNumber + " numberOfElements: " + numberOfElements);
    console.log("% minNumber: " + percentMinNumber + " % maxNumber: " + percentMaxNumber + " numberOfElements: " + numberOfElements);

    console.log(checker);
*/

    it('check that sorting is not biased: all combinations happen', function() {
      
        assert.equal(numberOfElements, factorialOfLength);

    });

    it('check that sorting is not biased: distribution makes sense (less than 3% difference)', function() { //not more than 3% difference for combination that happens the most or the least
      
        assert.isBelow(Math.max(Math.abs(100-percentMinNumber),Math.abs(100-percentMaxNumber)),3,"not more than 3% difference");

    });


    });