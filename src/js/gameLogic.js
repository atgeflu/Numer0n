"use strict";

/**
  * @desc shuffles an array using the Fisher-Yates shuffle algorithm
  * @param {array} array - The array to be shuffled
  * @return {array} array - Returns the shuffled array, even though this is not necessary, since it's shuffled in place
*/
function shuffle(array) {
	var l = array.length;
    var temp;
    var i;

    // While there remain elements to be shuffled
    while(l) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * l--);
        // And swap it with the current element.
        temp = array[l];
        array[l] = array[i];
        array[i] = temp;
    }

    return array;
}


/*
 * ITEMS
 */

/**
  * @desc given a number (between 0 and 9) returns whether the number is HIGH or LOW, where HIGH denotes numbers 5-9 and LOW denotes numbers 0-4
  * @param {number} intInput - The input number (should be between 0 and 9)
  * @return {string} strOutput - Returns an string of type HIGH, LOW
*/ 

function highLow(number) {
    if(Number.isInteger(number)) {
        if(number >= 0 && number <= 4) {
            return "LOW";
        } else if (number >= 5 && number <= 9) {
            return "HIGH";
        } else {
            throw new Error("integer not in range 0-9");
        }
    } else {
        throw new Error("not an integer");
    }
}

/**
  * @desc given an array of numbers between 0 and 9 return an array of entries of type HIGH, LOW where HIGH denotes numbers 5-9 and LOW denotes numbers 0-4
  * @param {array} arrInput - The input array containing numbers selected from the range 0-9
  * @return {array} arrOutput - Returns an array of same length as input array with entries of the type HIGH, LOW
*/

function highLowArray(arrInput) {
    if(Array.isArray(arrInput)) {
        return arrInput.map(highLow);
    } else {
        throw new Error("not an array");
    }
}
