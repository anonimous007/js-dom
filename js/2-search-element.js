'use strict     '


var div = document.getElementById('parSecond');
console.log(div);

var linki = document.getElementsByTagName('a');
console.log(linki);

var linkPoKlasie = document.getElementsByClassName('link');
console.log(linkPoKlasie);

var drugiLink = linkPoKlasie[1];
console.log(drugiLink);

for (var i = 0; i < linkPoKlasie.length; i++) {
    console.log(linkPoKlasie[i] + ' to jest link ' + (i + 1));
}