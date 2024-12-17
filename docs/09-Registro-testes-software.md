# Registro de testes de software

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>, <a href="08-Plano-testes-software.md"> Plano de testes de software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

Para cada caso de teste definido no <a href="08-Plano-testes-software.md"> Plano de testes de software</a>, realize o registro das evidências dos testes feitos na aplicação pela equipe, que comprovem que o critério de êxito foi alcançado (ou não!). Para isso, utilize uma ferramenta de captura de tela que mostre cada um dos casos de teste definidos. Observação: cada caso de teste deverá possuir um vídeo do tipo _screencast_ para caracterizar uma evidência do referido caso.

| **Caso de teste** | **CT-001 – Cadastro de usuários** |
|:---: |:---: |
| Requisito associado | RF-001 - A aplicação permite com que o usuário se cadastre para entrar no site. |
| Registro de evidência | [ct-001](https://drive.google.com/file/d/1dom6QBkVjvSbmyJJEarCY7PyDKYBS-bp/view?usp=sharing) |

| **Caso de teste** | **CT-002 – Visualizados Recentemente** |
|:---: |:---: |
| Requisito associado | RF-002 - A aplicação deve listar os últimos livros acessados pelo usuário na sessão atual. Exibir informações básicas do livro: título, autor e capa. Redirecionar para a página do livro ao clicar no item. Atualizar em tempo real à medida que o usuário acessa novos livros. |
| Registro de evidência | [ct-002](https://drive.google.com/drive/folders/1CesyTeB1U9F7vYyzulmitD8RfLerklas?usp=drive_link) |

| **Caso de teste** | **CT-003 – Favoritos** |
|:---: |:---: |
| Requisito associado | RF-003 - A aplicação deve permitir que o usuário salve o livro em uma lista de favoritos, bem como remover. |
| Registro de evidência | [ct-003](https://www.loom.com/share/2175f9a5c90c451ea7ebc2d963017ce3?sid=82d1a4d7-c1fb-4565-a3ac-e80df8b8375c) |

| **Caso de teste** | **CT-004 – Aba de Comentários** |
|:---: |:---: |
| Requisito associado | RF-004 - A aplicação deve permitir com que o usuário escreva e envie um comentário. |
| Registro de evidência |https://www.loom.com/share/34dedb7822734bcfba6f71684b593ab5?sid=e56305e0-06bc-4d8d-bfee-aa142464aaac|

| **Caso de teste** | **CT-005 – Best-Sellers** |
|:---: |:---: |
| Requisito associado | RF-005 - A aplicação deve retornar os best-sellers do ano vigente de acordo com a Open Library API (https://openlibrary.org/subjects/bestsellers). O sistema deve retornar os livros em cards, que devem possuir o título do livro e o autor deste. |
| Registro de evidência |([https://www.loom.com/share/943c613a30a64cd0b559f909eccf369f?sid=be801fc3-514d-453d-b5a5-fd47e4027688](https://www.loom.com/share/943c613a30a64cd0b559f909eccf369f?sid=be801fc3-514d-453d-b5a5-fd47e4027688)) |

| **Caso de teste** | **CT-006 – API para filtragem e exibição de livros** |
|:---: |:---: |
| Requisito associado | RF-006 - A aplicação permite com que o usuário filtre os livros disponibilizados na API: https://openlibrary.org, com os critérios: pesquisa por nome, autor, gênero, e número mínimo de páginas. |
| Registro de evidência | https://www.loom.com/share/ca6ae29317414c459d18ed42ab2b2898?sid=48728d1e-a6ad-43c1-b7b9-e715b1b5c615 |

| **Caso de teste** | **CT-007 – Banner** |
|:---: |:---: |
| Requisito associado | RNF-001 - A aplicação deve possuir link para redirecionar para página de saiba mais e alterar dinamicamente os conteúdos. |
| Registro de evidência | [ct-007](https://drive.google.com/drive/folders/1E6STFhpE3L9kMlMLtPuaFNTV1iv4jE-Z?usp=sharing) |

| **Caso de teste** | **CT-008 – Carrossel** |
|:---: |:---: |
| Requisito associado | RNF-002 - A aplicação permite com que o usuário clique em uma das imagens e seja direcionado para as páginas: livros em alta e últimos lançamentos e alterar dinamicamente os conteúdos. |
| Registro de evidência | [ct-008](https://drive.google.com/drive/folders/1jat7FHXwFo2rztRFUJyAgjFFJmAy9M_g?usp=drive_link) |

| **Caso de teste** | **CT-009 – Avaliação com estrela** |
|:---: |:---: |
| Requisito associado | RNF-003 - A aplicação permite com que o usuário avalie o livro de 1 a 5 estrelas. |
| Registro de evidência | [ct-009](https://drive.google.com/file/d/1a_ZES-OUuWttM0zOH5WJkLV5PrXpjAIz/view?usp=drive_link) |

> **Links úteis**:
> - [Screencast: entenda o que é e como gravar vídeos com ele](https://rockcontent.com/br/blog/screencast/)

## Avaliação

Os resultados dos testes de funcionamento do sistema mostraram que a solução apresenta um bom desempenho geral, com a maioria das funcionalidades implementadas funcionando corretamente. No entanto, alguns problemas foram identificados durante os testes.  

Um dos principais problemas detectados é que os comentários, embora sejam salvos corretamente no JSON Server, não são apresentados ao usuário. Outro ponto observado foi na tela de login, que apresentou inconsistências ao processar credenciais. Em alguns casos, o usuário enfrenta dificuldades para efetuar o acesso, em alguns momentos não é possível logar por motivos não identificados, o que indica a necessidade de revisar a lógica de autenticação e o fluxo de validação de entrada.  

Esses resultados destacam aspectos que necessitam de ajustes para garantir o funcionamento completo da solução e atender às expectativas de uso.

> **Links úteis**:
> - [Ferramentas de Teste para JavaScript](https://geekflare.com/javascript-unit-testing/)

