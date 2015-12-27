'use strict';

var randint = require('random-integer');

/*
 * Selects r unique items from an array. Based on Robert Floyd's algorithm as
 * described at http://www.nowherenearithaca.com/2013/05/robert-floyds-tiny-and-beautiful.html
 */
module.exports = function (C, r) {
    var n = C.length;
    
    if(r==n) return C;
    if(r>n) return C; // might be the wrong call. Error instead?
    var selectionIndices = [];
    
    for(var j=n-r; j<n; ++j) {
        var t = randint(0, j);
        if(selectionIndices.some(function(i){return i==t})) { // if t in selectionIndices
            selectionIndices.push(t);
        } else {
            selectionIndices.push(j);
        }
    }
    
    
    return selectionIndices.map(function(i){return C[i];});
}