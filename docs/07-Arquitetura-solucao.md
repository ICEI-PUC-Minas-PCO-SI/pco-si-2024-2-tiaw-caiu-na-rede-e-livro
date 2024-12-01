# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da solução](images/exemplo-arquitetura.png)

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.

##### Funcionalidade 1 - Cadastro 

Permite o usuário criar uma conta no site.

* **Estrutura de dados:** [Cadastro](#estrutura-de-dados---cadastro)
* **Instruções de acesso:**
  * Abra o site e clique em login;
  * No login, em "cadastre-se";
  * Informe seus dados corretamente;
  * Registre e faça o login.
* **Tela da funcionalidade**:

![Tela Cadastro CNREL](https://github.com/user-attachments/assets/f8521602-76ab-4f09-90e0-7096058fa260)
##### Funcionalidade 2 - Banner

Apresenta informações nos cards.

* **Estrutura de dados:** [Banner](#estrutura-de-dados---banner)
* **Instruções de acesso:**
  * Abra o site e na Home, o banner será apresentado.
* **Tela da funcionalidade**:

![WhatsApp Image 2024-11-30 at 1 23 35 PM](https://github.com/user-attachments/assets/08505609-e9f6-4a32-a04b-3c7eff34cd0a)
![WhatsApp Image 2024-11-30 at 1 23 35 PM (1)](https://github.com/user-attachments/assets/1fd1514f-ceb6-478f-a6b0-820218046b59)
![WhatsApp Image 2024-11-30 at 1 24 23 PM](https://github.com/user-attachments/assets/ee8614e1-ae3c-407e-8cdd-bb2a6099cd0f)
##### Funcionalidade 3 - Carrossel

Apresenta informações nos cards.

* **Estrutura de dados:** [Carrossel](#estrutura-de-dados---carrossel)
* **Instruções de acesso:**
  * Abra o site e na Home, o carrossel será apresentado;
* **Tela da funcionalidade**:

![WhatsApp Image 2024-11-30 at 2 47 53 PM](https://github.com/user-attachments/assets/e7671588-4c23-46b6-ba49-35d2605c7b3d)
![WhatsApp Image 2024-11-30 at 2 47 54 PM](https://github.com/user-attachments/assets/0e178cf4-b692-43f6-ace3-9b57f2954a60)
![WhatsApp Image 2024-11-30 at 2 47 54 PM (1)](https://github.com/user-attachments/assets/1461dc77-5a91-471f-82fc-d5ffeaffbe86)
##### Funcionalidade 4 - Filtros

Permite a pesquisa de livros.

* **Estrutura de dados:** [Filtros](#estrutura-de-dados---filtros)
* **Instruções de acesso:**
  * Abra o site;
  * Na Home, na aba pesquisar, o usuário encontra os filtros.
* **Tela da funcionalidade**:

![WhatsApp Image 2024-12-01 at 2 41 46 PM](https://github.com/user-attachments/assets/696930b3-2cd8-4221-a69b-87be56cd22fd)
##### Funcionalidade 5 - Comentários

Permite o usuário comentar sua opinião sobre o livro.

* **Estrutura de dados:** [Comentários](#estrutura-de-dados---comentários)
* **Instruções de acesso:**
  * Abra o site;
  * Clique em um livro.
* **Tela da funcionalidade**:

![Captura de Tela (142)](https://github.com/user-attachments/assets/5557acea-f704-46fa-9401-1dbf70fb5d44)
##### Funcionalidade 6 - Avaliação por Estrelas

Permite avaliar o livro.

* **Estrutura de dados:** [Estrelas](#estrutura-de-dados---estrelas)
* **Instruções de acesso:**
  * Abra o site; 
  * Clique em um livro;
* **Tela da funcionalidade**:

![Captura de Tela (140)](https://github.com/user-attachments/assets/a27b767a-9ab0-4427-837d-8ca30bedf051)

##### Funcionalidade 7 - Histórico de Leitura

Permite o usuário acompanhar os livros que leu e avaliou.

* **Estrutura de dados:** [Histórico](#estrutura-de-dados---histórico)
* **Instruções de acesso:**
  * Abra o site;
  * Acesse um livro;
  * Avalie;
  * Em seguida, volte para Home.
* **Tela da funcionalidade**:

![WhatsApp Image 2024-12-01 at 2 43 41 PM](https://github.com/user-attachments/assets/aa814967-d4d2-40a4-b635-5569ca2d1e7b)
![WhatsApp Image 2024-12-01 at 2 47 46 PM](https://github.com/user-attachments/assets/1ee39751-108c-4cd7-95dd-a9321ae3a4ab)
##### Funcionalidade 8 - Favoritos

Adiciona os livros favoritos do usuário para uma lista.

* **Estrutura de dados:** [Favoritos](#estrutura-de-dados---favoritos)
* **Instruções de acesso:**
  * Abra o site;
  * Acesse um livro;
  * Clique em "Favoritar";
  * Em seguida, volte para a Home.
* **Tela da funcionalidade**:

![WhatsApp Image 2024-11-30 at 2 47 54 PM (2)](https://github.com/user-attachments/assets/8d167c30-d00a-4976-854b-254c3659144b)
![WhatsApp Image 2024-11-30 at 2 47 54 PM (3)](https://github.com/user-attachments/assets/85f517e5-ee86-443c-988b-d8dab24d65f9)
##### Funcionalidade 9 - Visto Recentemente

Mostra ao usuário os livros que acessou recentemente.

* **Estrutura de dados:** [Recentemente](#estrutura-de-dados---recentemente)
* **Instruções de acesso:**
  * Abra o site;
  * Acesse um livro;
  * Em seguida, volte para Home.
* **Tela da funcionalidade**:

![WhatsApp Image 2024-11-30 at 1 21 45 PM](https://github.com/user-attachments/assets/7eac4f81-8674-411b-8a69-ab38a83d6772)
##### Funcionalidade 10 - Best Sellers

Mostra ao usuário os livros mais vendidos.

* **Instruções de acesso:**
  * Abra o site;
  * Na Home, apresentará os "best sellers".
* **Tela da funcionalidade**:

![WhatsApp Image 2024-12-01 at 2 33 31 PM](https://github.com/user-attachments/assets/fbdd4d43-7f0e-4d7b-84b4-5be5cdeda1e8)

### Estruturas de dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info.

##### Estrutura de dados - Cadastro

```json
  {
    "Cadastro de Usuário": [
    {
       "Nome de Usuário": "luc4s",
       "E-mail": "luc4s@gmail.com",
       "Senha": "senha123",
       "Confirmação de Senha": "senha123"
    }
    ]
  }

  
```
##### Estrutura de dados - Banner

```json
  [
    {
        "title": "Seja-Bem Vindo!",
        "description": "Descubra as melhores resenhas e recomendações em um só lugar!",
        "image": "assets/img/Imagem 01.png"
    },
    {
        "title": "Caiu na Rede, é Livro!",
        "description": "Um site de indicações de livros para promover a valorização da literatura!",
        "image": "assets/img/Imagem 02.png"
    }
  ]
  
```
##### Estrutura de dados - Carrossel

```json
  {
  "carrossel": [
    {
      "id": 1,
      "imagem": "slider1.jpg",
      "descricao": "Primeira imagem do carrossel",
    },
    {
      "id": 2,
      "imagem": "slider22.jpg",
      "descricao": "Segunda imagem do carrossel",
      "link": "livrosemalta.html"
    },
    {
      "id": 3,
      "imagem": "slidere3.jpg",
      "descricao": "Terceira imagem do carrossel",
      "link": "ultimoslancamentos.html"
    }
  ]
 }
  
```
##### Estrutura de dados - Filtros

```json
  {
  "filters": {
    "searchTerm": "",
    "genre": "",
    "author": "",
    "minPages": 0
  },
  "books": [
    {
      "title": "O Senhor dos Anéis",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasia",
      "pages": 1178,
      "coverImage": "https://covers.openlibrary.org/b/id/8231851-L.jpg",
      "status": "Não Lido"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "genre": "Distopia",
      "pages": 328,
      "coverImage": "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      "status": "Não Lido"
    },
    {
      "title": "Dom Casmurro",
      "author": "Machado de Assis",
      "genre": "Romance",
      "pages": 256,
      "coverImage": "https://covers.openlibrary.org/b/id/8105010-L.jpg",
      "status": "Não Lido"
    }
  ]
  }
  
```
##### Estrutura de dados - Comentários

```json
  {
  "livro": {
    "nome": 1,
    "descricao": "Descrição do Livro",
    "capa": "url_da_capa_do_livro.jpg"
  },
  "comentarios": [
    {
      "author": "Usuário 1",
      "text": "Ótimo livro, muito bem escrito!",
      "date": "2024-10-25"
    },
    {
      "author": "Usuário 2",
      "text": "Gostei da narrativa, recomendo!",
      "date": "2024-10-26"
    }
  ],
  "comentario": {
    "campo_texto": "",
    "botao_envio": {
      "texto": "Enviar",
      "acao": "submeter_avaliacao"
    }
  }
  }
  
```
##### Estrutura de dados - Estrelas

```json
  {
    "Avaliação por estrela": [
        {
            "Estrela": "5"
        }
    ]
  }
  
```
##### Estrutura de dados - Histórico

```json
  {
  "books": [
    {
      "id": 1,
      "title": "Título do Livro",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor tristique ultricies. Nunc venenatis metus magna, sed tempor orci lacinia ac. Integer volutpat nulla quis tortor pharetra, blandit euismod neque suscipit. Aliquam vel bibendum leo. Curabitur nec sapien ac turpis pulvinar consequat eu sed orci.",
      "cover": "https://via.placeholder.com/500x300",
      "status": "Não Lido"
    }
  ]
  }

{
  "readBooks": [
    {
      "id": 1,
      "title": "Título do Livro"
    }
  ]
}
  
```
##### Estrutura de dados - Favoritos

```json
  {
    "favoritos": [
    {
      "id": "123",
      "titulo": "O Senhor dos Anéis", "autor": "J.R.R. Tolkien", "gênero": "Fantasia"
    }, 
    {
      "id": "456",
      "titulo": "1984",
      "autor": "George Orwell", "gênero": "Distopia"
    } 
    ]
  }
  
```
##### Estrutura de dados - Recentemente

```json
  {
    "VistoRecentemente":[
     {
     "key": "OL67890M",
     "title": "É assim que acaba",
     "author": "Colleen Hoover",
     "cover": "https://covers.openlibrary.org/b/id/"
     }
     ]
    }
  
```
##### Estrutura de dados - Usuários  ⚠️ EXEMPLO ⚠️

Registro dos usuários do sistema utilizados para login e para o perfil do sistema.

```json
  {
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    email: "admin@abc.com",
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    login: "admin",
    nome: "Administrador do Sistema",
    senha: "123"
  }
```

> ⚠️ **APAGUE ESTA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente as estruturas de dados utilizadas na solução tanto para dados utilizados na essência da aplicação, quanto outras estruturas que foram criadas para algum tipo de configuração.
>
> Nomeie a estrutura, coloque uma descrição sucinta e apresente um exemplo em formato JSON.
>
> **Orientações:**
>
> * [JSON Introduction](https://www.w3schools.com/js/js_json_intro.asp)
> * [Trabalhando com JSON - Aprendendo desenvolvimento web | MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)

### Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução.

**Images**:

* Open Library - [https://openlibrary.org/](https://openlibrary.org/) 

**Fonts:**

* Google Fonts - [https://fonts.google.com/](https://fonts.google.com/) 

**Scripts:**

* Bootstrap - [https://getbootstrap.com/](https://getbootstrap.com/) 


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foram realizados.

> **Links úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando seu site no Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
