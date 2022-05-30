const today = new Date()            //menampilkan waktu sekarang
console.log(today);
console.log(today.getFullYear());   //menampilkan tahun sekarang
console.log(today.getMonth());      //menampilkan bulan sekarang dari index ke-0. 0 = januari
console.log(today.getDate());       //menampilkan tanggal sekarang 
console.log(today.getDay());        //menampilkan sekarang hari keberapa?
console.log(today.getHours());      //menampilkan jam sekarang
console.log(today.getMinutes());    //menampilkan menit sekarang
console.log(today.getSeconds());    //menampilkan detik sekarang

const now = new Date('1998-03-08')  //mengatur tanggal sendiri
console.log(now);

const now2 = new Date(1998,2,8)    //mengatur tanggal sendiri
console.log(now2);

const format = new Intl.DateTimeFormat('id-ID').format(today)   //format Indonesia
console.log(format);

console.log(today.toString());          //to String
console.log(today.toTimeString());      //menampilkan waktu
console.log(today.toUTCString());       //waktu dikurang 7 jam
console.log(today.toDateString());      //menampilkan tanggal
console.log(today.toISOString());       //menampilkan format ISO
console.log(today.toLocaleString());    //menampilkan local yg di laptop
console.log(today.toLocaleTimeString());//menampilkan waktu yg di laptop