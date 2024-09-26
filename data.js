const nama = "dealexa fatika";
let usia = 18;

let biodata = document.getElementById('biodata')
console.log(biodata)

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia <= 18) {
      generasi = "remaja"  
    }
    else if (usia > 18 && usia < 30) {
     generasi = "dewasa"   
    }
    else if (usia > 30) {
        generasi = "orang tua"
    }
    else {
      generasi = "anak anak"   
    }

 return 
}

console.log(nama);
console.log(usia);

generateBiodata();