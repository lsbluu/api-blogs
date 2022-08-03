<details>
  <summary><strong>👨‍💻 O que foi desenvolvido? </strong></summary>

  Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog! 

  Desenvolvido uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Desenvolvido endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;

  2. Antes de realizar um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`; 

  3. A utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.

<br />
</details>


<br />

</details>
 <summary><strong>.ENV</strong></summary>
  > 👉 `.env.example`
  ```env
  #### SERVER VARS
  NODE_ENV=development
  API_PORT=3000

  #### DATABASE VARS
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_DB_NAME=blogs-api
  MYSQL_USER=root
  MYSQL_PASSWORD=password

  #### SECRECT VARS
  JWT_SECRET=suaSenhaSecreta
  ```

  #### Variável `JWT_SECRET`:
  
  Esta variável de ambiente deverá ser utilizada tanto para criar o token quanto para verificá-lo. Os teste locais e o avaliador vão utilizar a variável de ambiente `JWT_SECRET` para testar os requisitos

  **:warning:️ Variáveis de ambiente além das especificadas acima não são suportadas, pois não são esperadas pelo avaliador do projeto.**

<br />
