const form = document.getElementById('form');
const nama = document.getElementById('nama');
const email = document.getElementById('email');
const jam = document.getElementById('jam');
const tujuan = document.getElementById('tujuan');
const jumlah = document.getElementById('jumlah');
const small = document.getElementsByTagName('small');

Form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from the inputs
  const nameValue = nama.value.trim();
  const emailValue = email.value.trim();
  const jamValue = jam.value.trim();
  const tujuanValue = tujuan.value.trim();
  const jumlahValue = jumlah.value.trim();
  const smallValue = small.value.trim();

  if (nama == '') {
    // show error
    // add error class
    setErrorFor(name, 'name cannot be blank');
  } else {
    // add succes class
    setSuccesFor(name);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector(small);

  // add erorr message inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}

function setSucces(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error succes';
}
