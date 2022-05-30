function maxWordLength(params) {
    const kata = params.split(" "); //untuk memecah string panjang menjadi per kata " "
    let angka = 0;
    let kalimat = "";
    for (let i = 0; i < kata.length; i++) {
        if (kata[i].length >= angka) {
            angka = kata[i].length;
            kalimat = kata[i];
        }
    }
    return kalimat
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp