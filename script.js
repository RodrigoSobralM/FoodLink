document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const mensagem = this.mensagem.value.trim();
  const resultado = document.getElementById("mensagemResultado");

  const nomeValido = nome.split(" ").length >= 2;
  const emailValido = /\S+@\S+\.\S+/.test(email);
  const mensagemValida = mensagem.length >= 30 && mensagem.length <= 500;

  if (!nome || !email || !mensagem) {
    resultado.style.color = "red";
    resultado.textContent = "Todos os campos são obrigatórios.";
  } else if (!nomeValido) {
    resultado.style.color = "red";
    resultado.textContent = "Digite seu nome completo (nome + sobrenome).";
  } else if (!emailValido) {
    resultado.style.color = "red";
    resultado.textContent = "Digite um e-mail válido.";
  } else if (!mensagemValida) {
    resultado.style.color = "red";
    resultado.textContent = "A mensagem deve ter entre 30 e 500 caracteres.";
  } else {
    resultado.style.color = "green";
    resultado.textContent = "Mensagem enviada com sucesso!";
    this.reset();
  }
});