

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