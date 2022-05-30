function name(n1, n2, n3, n4) {
    return n1+""+n2+""+n3+""+n4;
}
console.log(name(1,2,3,4));

function name2(...number) {             //menampung banyak parameter
    return number+" "
    // return number[2]+" "                //mengambil index ke 2 => 3
}
console.log(name2(1,2,3,4,5,6,7,8,9));