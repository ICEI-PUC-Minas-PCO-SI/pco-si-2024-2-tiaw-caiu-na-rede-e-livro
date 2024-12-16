# Plano de testes de software

<span style="color:red">Pré-requisitos: <a href="03-Product-design.md"> Especificação do projeto</a></span>, <a href="05-Projeto-interface.md"> Projeto de interface</a>



| **Caso de teste**  | **CT-001 – Cadastro de usuários**  |
|:---: |:---: |
| Requisito associado | RF-001 - A aplicação Permite com que o usuário se cadastre para entrar no site. |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site [https://adota-pet.herokuapp.com/src/index.html](https://pco-si-2024-2-tiaw-caiu-na-rede-e-livro.vercel.app/modulos/login/login.html) <br> - Clicar em "Registrar" <br> - Preencher os campos obrigatórios (usuário, nome completo, e-mail, senha e confirmação de senha) <br> - Inserir os dados de login anteriormente registrados <br> - Clicar em "Login" <br> - Ser direcionado para a tela principal do site. |
| Critério de êxito | Registro de usuário sendo salvo e realizando login corretamente. |
| Responsável pela elaboração do caso de teste | Lucas Sérgio |

<br>

| **Caso de teste**  | **CT-002 – Visualizados Recentemente**  |
|:---: |:---: |
| Requisito associado | RF-002 - A aplicação deve listar os últimos livros acessados pelo usuário na sessão atual. Exibir informações básicas do livro: título, autor e сара. Redirecionar para a página do livro ao clicar no item. Atualizar em tempo real à medida que o usuário acessa novos livros. |
| Objetivo do teste | Verificar se os últimos livros acessados estão sendo salvos na seção de vistos recentemente. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site [https://adota-pet.herokuapp.com/src/index.html](https://pco-si-2024-2-tiaw-caiu-na-rede-e-livro.vercel.app/modulos/login/login.html) <br> - Clicar em "Registrar" <br> - Preencher os campos obrigatórios (usuário, nome completo, e-mail, senha e confirmação de senha) <br> - Inserir os dados de login anteriormente registrados <br> - Clicar em "Login" <br> - Pesquisar algum livro ou utilizar os filtros para retornar os livros disponíveis <br> - Clicar na página do livro <br> - Voltar para a página inicial clicando na logo localizada no cabeçalho <br> - Verificar se o livro foi salvo em "Visualizados Recentemente".|
| Critério de êxito | - Livro salvo em "Visualizados Recentemente". |
| Responsável pela elaboração do caso de teste | Beatriz Freitas |

<br>

| **Caso de teste**  | **CT-003 – Favoritos**  |
|:---: |:---: |
| Requisito associado | RF-003 - A aplicação deve permitir que usuário salve o livro em uma lista de favoritos, bem como remover. |
| Objetivo do teste | Verificar se o usuário consegue salvar e remover livros em uma lista de favoritos. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site [https://adota-pet.herokuapp.com/src/index.html](https://pco-si-2024-2-tiaw-caiu-na-rede-e-livro.vercel.app/modulos/login/login.html) <br> - Clicar em "Registrar" <br> - Preencher os campos obrigatórios (usuário, nome completo, e-mail, senha e confirmação de senha) <br> - Inserir os dados de login anteriormente registrados <br> - Clicar em "Login" <br> - Pesquisar algum livro ou utilizar os filtros para retornar os livros disponíveis <br> - Clicar no botão "Adicionar aos Favoritos" <br> - Ir a página "Meus favoritos" localizada no cabeçalho do site <br> - Verificar se o livro favoritado foi salvo <br> - Clicar no botão "Remover dos Favoritos" <br> - Verificar se o livro foi removido.  |
| Critério de êxito | - Livros salvos na seção de Favoritos, com a opção de exclusão diretamente nesta página. |
| Responsável pela elaboração do caso de teste | Anna Carolina Vasconcelos |

<br>

| **Caso de teste**  | **CT-004 – Aba de Comentários**  |
|:---: |:---: |
| Requisito associado | RF-004 - A aplicação deve permitir com que o usuário escreva e envie um comentário. |
| Objetivo do teste | Verificar se o usuário consegue avaliar o livro utilizando estrelas. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site [https://adota-pet.herokuapp.com/src/index.html](https://pco-si-2024-2-tiaw-caiu-na-rede-e-livro.vercel.app/modulos/login/login.html) <br> - Clicar em "Registrar" <br> - Preencher os campos obrigatórios (usuário, nome completo, e-mail, senha e confirmação de senha) <br> - Inserir os dados de login anteriormente registrados <br> - Clicar em "Login" <br> - Pesquisar algum livro ou utilizar os filtros para retornar os livros disponíveis <br> - Clicar na página do livro <br> - Escrever e enviar um comentário na seção "Faça um comentário" <br> - Verificar se o comentário foi salvo na tela. |
| Critério de êxito | Comentários salvos na página de detalhes do livro. |
| Responsável pela elaboração do caso de teste | Renzzo Rocha |

<br>

| **Caso de teste**  | **CT-005 – Best-Sellers**  |
|:---: |:---: |
| Requisito associado | RF-005 - A aplicação deve retornar os best-sellers do ano vigente de acordo com a Open Library API (https://openlibrary.org/subjects/bestsellers). O sistema deve retornar os livros em cards, que devem possuir o título do livro e o autor deste. |
| Objetivo do teste | Verificar se a API está retornnado os Best-Sellers corretamente. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site [https://adota-pet.herokuapp.com/src/index.html](https://pco-si-2024-2-tiaw-caiu-na-rede-e-livro.vercel.app/modulos/login/login.html) <br> - Clicar em "Registrar" <br> - Preencher os campos obrigatórios (usuário, nome completo, e-mail, senha e confirmação de senha) <br> - Inserir os dados de login anteriormente registrados <br> - Clicar em "Login" <br> - Ir a página "Best Sellers" localizada no cabeçalho do site <br> - Verificar o retorno dos livros da API exibidos na tela. |
| Critério de êxito | Retorno de livros da API com os Best-Sellers. |
| Responsável pela elaboração do caso de teste | Renzzo Rocha |

<br>

| **Caso de teste**  | **CT-006 – API para filtragem e exibição de livros**  |
|:---: |:---: |
| Requisito associado | RF-006 - A aplicação permite com que o usuário filtre os livros disponibilizados na api: https://openlibrary.org , com os critérios: pesquisa por nome, autor, gênero, e número mínimo de páginas. |
| Objetivo do teste | Verificar se os filtros estão funcionais retornando os livros da API ao utiliza-los. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site [https://adota-pet.herokuapp.com/src/index.html](https://pco-si-2024-2-tiaw-caiu-na-rede-e-livro.vercel.app/modulos/login/login.html) <br> - Clicar em "Registrar" <br> - Preencher os campos obrigatórios (usuário, nome completo, e-mail, senha e confirmação de senha) <br> - Inserir os dados de login anteriormente registrados <br> - Clicar em "Login" <br> - Pesquisar algum livro por nome, autor, gênero ou número mínimo de páginas <br> - Clicar no botão "Filtrar" <br> - Verificar o retorno dos livros sendo exibidos na tela. |
| Critério de êxito | Filtros funcionais retornando os livros da API ao utiliza-los.|
| Responsável pela elaboração do caso de teste | João Barbosa |

<br>

| **Caso de teste**  | **CT-007 – Banner**  |
|:---: |:---: |
| Requisito associado | RNF-001 - A aplicação deve possuir link para redirecionar para página de saiba mais e alterar dinamicamente os conteúdos.|
| Objetivo do teste | Verificar se as imagens do banner estão passando dinamicamente, contendo link para saiba mais. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site [https://adota-pet.herokuapp.com/src/index.html](https://pco-si-2024-2-tiaw-caiu-na-rede-e-livro.vercel.app/modulos/login/login.html) <br> - Clicar em "Registrar" <br> - Preencher os campos obrigatórios (usuário, nome completo, e-mail, senha e confirmação de senha) <br> - Inserir os dados de login anteriormente registrados <br> - Clicar em "Login" <br> - Observar a passagem de imagens dinamicamente no banner <br> - Clicar no botão "Saiba mais" da segunda imagem <br> - Ser direcionado para a tela de saiba mais com as informações do site. |
| Critério de êxito | - Banner com passagem dinâmica de imagens, contendo link para saiba mais. |
| Responsável pela elaboração do caso de teste | Beatriz Freitas |

<br>

| **Caso de teste**  | **CT-008 – Carrossel**  |
|:---: |:---: |
| Requisito associado | RNF-002 - A aplicação permite com que o usuário clique em uma das imagens e seja direcionado para as páginas: livros em alta e últimos lançamentos e alterar dinamicamente os conteúdos.|
| Objetivo do teste | Verificar se as imagens do carrossel estão passando dinamicamente, contendo link para as páginas: livros em alta e últimos lançamentos.  |
| Passos | - Acessar o navegador <br> - Informar o endereço do site [https://adota-pet.herokuapp.com/src/index.html](https://pco-si-2024-2-tiaw-caiu-na-rede-e-livro.vercel.app/modulos/login/login.html) <br> - Clicar em "Registrar" <br> - Preencher os campos obrigatórios (usuário, nome completo, e-mail, senha e confirmação de senha) <br> - Inserir os dados de login anteriormente registrados <br> - Clicar em "Login" <br> - Observar a passagem de imagens dinamicamente no carrossel <br> - Clicar no botão "Confira" da segunda imagem <br> - Visualizar a seção de "Últimos Lançamentos" na mesma página <br> - Voltar ao carrosel <br> - Clicar no botão "Confira" da terceira imagem <br> - Visualizar a página de "Resenhas em Alta". |
| Critério de êxito | - Carrossel com passagem dinâmica de imagens, contendo link para as páginas: livros em alta e últimos lançamentos. |
| Responsável pela elaboração do caso de teste | Anna Carolina Vasconcelos |

<br>

| **Caso de teste**  | **CT-009 – Avaliação com estrela**  |
|:---: |:---: |
| Requisito associado | RNF-003 - A aplicação permite com que o usuário avalie o livro de 1 a 5 estrelas.|
| Objetivo do teste | Verificar se o usuário consegue avaliar os livros de 1 a 5 utilizando estrelas. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site [https://adota-pet.herokuapp.com/src/index.html](https://pco-si-2024-2-tiaw-caiu-na-rede-e-livro.vercel.app/modulos/login/login.html) <br> - Clicar em "Registrar" <br> - Preencher os campos obrigatórios (usuário, nome completo, e-mail, senha e confirmação de senha) <br> - Inserir os dados de login anteriormente registrados <br> - Clicar em "Login" <br> - Clicar na página do livro <br> - Clicar nas estrelas, escolhendo de 1 a 5 <br> - Recarregar a página <br> - Verificar se a avaliação foi salva.|
| Critério de êxito | Avaliação por estrelas sendo salva corretamente na página do livro. |
| Responsável pela elaboração do caso de teste | Lucas Sérgio |

<br>
