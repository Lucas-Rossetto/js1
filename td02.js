/* td02 - Tous les chemins...

Le but de ce TD est de terminer l'implémentation
de la fonction roman(). Celle-ci prend un nombre 
décimal en paramètre et retourne une chaîne de
caractères contenant la représentation de ce nombre
en chiffres romains.

*/

/* TD Part */

function roman(decimal) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var str = '';

    for (var i of Object.keys(roman)) {
        var q = Math.floor(decimal / roman[i]);
        decimal -= q * roman[i];
        str += i.repeat(q);
    }

    return str;




}

/* Testing Part */
if (roman(64) == 'LXIV' && roman(128) == 'CXXVIII' && roman(512) == 'DXII') {
    console.log('TD02:: OK');
} else {
    console.log('TD02:: KO');
}