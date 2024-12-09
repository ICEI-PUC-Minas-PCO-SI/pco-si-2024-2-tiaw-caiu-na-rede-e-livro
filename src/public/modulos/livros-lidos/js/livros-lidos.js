// JSON com os detalhes do livro
const livro = {
    titulo: "O Senhor dos Anéis",
    sinopse:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor tristique ultricies. Nunc venenatis metus magna, sed tempor orci lacinia ac. Integer volutpat nulla quis tortor pharetra, blandit euismod neque suscipit. Aliquam vel bibendum leo. Curabitur nec sapien ac turpis pulvinar consequat eu sed orci.",
    capa: "https://via.placeholder.com/500x300",
    lido: false, // Indica se o livro foi lido ou não
  };
  
  // Função para carregar os detalhes do livro
  function carregarDetalhes() {
    document.getElementById("tituloLivro").textContent = livro.titulo;
    document.getElementById("sinopseLivro").textContent = livro.sinopse;
    document.getElementById("capaLivro").src = livro.capa;
  
    // Seleciona o botão de leitura
    const botao = document.getElementById("botaoLeitura");
  
    // Define o estado inicial do botão
    atualizarBotao(botao, livro.lido);
  
    // Adiciona o evento de clique ao botão
    botao.addEventListener("click", () => {
      livro.lido = !livro.lido; // Alterna o estado
      atualizarBotao(botao, livro.lido); // Atualiza o botão
    });
  }
  
  // Função para atualizar o botão com base no estado do livro
  function atualizarBotao(botao, lido) {
    if (lido) {
      botao.textContent = "Lido";
      botao.classList.add("lido");
    } else {
      botao.textContent = "Não Lido";
      botao.classList.remove("lido");
    }
  }
  
  // Inicializar a página com os detalhes
  carregarDetalhes();
  