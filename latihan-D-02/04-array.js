const food = ['sup', 'pizza', 'pasta']  //menampilkan array
console.log(food);

if (Array.isArray(food)) {              //mengecek array / bukan?
    console.log('food is array');
}
console.log(food[1]);                   //mencetak index ke-1. dimulai dari index ke-0

for (let index = 0; index < food.length; index++) {
    console.log(food[index]);
}

food.push('bakso')                      //menambhakan array di belakang
console.log(food);
food.unshift('seblak')                  //menambahkan array di depan
console.log(food);
food.pop()                              //menghapus index terakhir
console.log(food);
food.shift()                            //menghapus index pertama
console.log(food);   
food.sort()                             //mengurutkan dari yg terkecil
console.log(food);           
food.reverse()                          //membalikkan / memutar array
console.log(food);
console.log(food.slice(0, 2));          //menampilkan (index kebrp, nampilin brp)

const food2= ['snack', 'ciki']
const concat = food.concat(food2)       //penggabungan array
console.log(concat);

