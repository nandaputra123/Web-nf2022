let nama = document.getElementById('nama');
let email = document.getElementById('email');
let jam = document.getElementById('jam');
let tujuan = document.getElementById('tujuan');
let jumlah = document.getElementById('jumlah');
let small = document.getElementsByTagName('small');

function proses() {
  if (nama.value == 'Nanda putra') {
    span[0].style.visibility = 'visible';
  }
  if (email.value == 'nandawibowo356@gmail.com') {
    span[1].style.visibility = 'visible';
  }
  if (jam.value == '11.11') {
    span[2].style.visibility = 'visible';
  }
  if (tujuan.value == 'Makasar') {
    span[3].style.visibility = 'visible';
  }
  if (jumlah.value == '2') {
    span[4].style.visibility = 'visible';
    location.replace('sukses.html');
    alert('login Berhasil');
  } else {
    alert('Login Gagal');
  }
}
