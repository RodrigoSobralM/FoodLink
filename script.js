document.getElementById("formContato").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const mensagem = this.mensagem.value.trim();
    const resultado = document.getElementById("mensagemResultado");
  
    if (nome && /\S+@\S+\.\S+/.test(email) && mensagem.length >= 10) {
      resultado.style.color = "green";
      resultado.textContent = "Mensagem enviada com sucesso!";
    } else {
      resultado.style.color = "red";
      resultado.textContent = "Por favor, preencha todos os campos corretamente.";
    }
  });