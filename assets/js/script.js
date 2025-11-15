// Fungsi untuk gambar
function gambar(){
    $('#teks-gambar').text("Tombol ditekan. Ini unja");
    alert("Itu gambar unja")
}

// Fungsi untuk video
function video(){
    $('#teks-video').text("Tombol ditekan. ini video")
    alert('Ini video')
}

// Fungsi untuk suara/audio
function sound(){
    $('#teks-sound').text("Tombol ditekan. ini audio")
    alert("ini suara/audio")
}

// Fungsi untuk kalkulator
function hitung(){
    let angka1 = parseFloat($('#angka1').val());
    let angka2 = parseFloat($('#angka2').val());
    let operator = $('#operator').val();
    let hasil;

    if (isNaN(angka1) || isNaN(angka2)) {
        alert("masukkan angka");
        return;
    }

    if(operator == '+'){
        hasil = angka1 + angka2;
    } else if(operator == '-'){
        hasil = angka1 - angka2;
    } else if(operator == '*'){    
        hasil = angka1 * angka2;
    } else if(operator == '/'){
        hasil = angka1 / angka2;
    }

    $('#hasil').text("Hasil: " + hasil);
}