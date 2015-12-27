'use strict';

var randint = require('random-integer');

/*
 * Selects r unique items from an array
 */
module.exports = function (C, r) {
    var n = C.length;
    
    if(r==n) return C;
    if(r>n) return C; // might be the wrong call. Error instead?
    
    var selection = [];
    var selectionIndices = [];
    
    for(var i=0; i<r; ++i) {
        var ind = randint(0, n-i-1);
        // any equal or smaller index we've already used requires the addition of 1 to adjust this index
        ind += selectionIndices
               .map(function(i){return i<=ind;})
               .reduce(function(m,o){return m+o;},0);
        selectionIndices.push(ind);
        selection.push(C[ind]);
    }
    
    return selection;
}