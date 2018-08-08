var angka = [8,-7,5,-2,3,-4,-8]
var positif = [];
var negatif = [];
var totalPositif = 0;
var totalNegatif = 0;
var x = 0;
var y = 0;


for (var i = 0; i < angka.length; i++) {
    if (angka[i] > 0) {
        positif[x] = angka[i]
        x++;
    }
}

for (var i = 0; i < positif.length; i++) {
    totalPositif = totalPositif + positif[i]
}

for (var i = 0; i < angka.length; i++) {
    if (angka[i] < 0) {
        negatif[y] = angka[i]
        y++;
    }
}

for (var i = 0; i < negatif.length; i++) {
    totalNegatif = totalNegatif - negatif[i]
}

if (totalPositif > totalNegatif) {
    console.log('Positif Win.');
} else if (totalPositif < totalNegatif) {
    console.log('Negatif Win.');
} else {
    console.log('Draw');
}