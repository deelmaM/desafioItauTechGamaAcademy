const submitButton = document.getElementById('submitButton');
const nomeInput = document.getElementById('nome');
const cpfInput = document.getElementById('CPF');
const enderecoInput = document.getElementById('endereco');
const numeroInput = document.getElementById('numero');
const telefoneCelularInput = document.getElementById('telefone-celular');

submitButton.addEventListener('click', () => {
  if (isValidFormSubmit()) {
    alert('Usuário cadastrado com sucesso!!');
  } else {
    alert('Preencha todos os campos obrigatórios!');
  }
});

function isValidFormSubmit() {
  if (
    nomeInput.value.length == 0 ||
    cpfInput.value.length == 0 ||
    enderecoInput.value.length == 0 ||
    telefoneCelularInput.value.length == 0 ||
    numeroInput.value.length == 0
  ) {
    return false;
  }
  return true;
}
