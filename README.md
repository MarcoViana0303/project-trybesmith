<h4 align="center">
  Projeto Trybesmith
  <br /><br />
</h4>

Neste projeto, criei uma loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma API, utilizando Typescript e Sequelize.

Desenvolvi as camadas de Service e Controllers da aplicação utilizando JWT para autenticar algumas rotas. A aplicação tem endpoints que darão suporte a operações de criação, leitura e atualização de informações.

<hr />

<details>
  <summary><strong>:rocket: Tecnologias usadas</strong></summary>
  <br />
  
-  MySQL
-  Express
-  Sequelize
-  Docker
-  ESLint
-  Git
-  VS Code
-  Typescript
-  JWT (Json Web Token)
  
  </details>

  <details>
  <summary><strong>Diagrama Entidade Relacionamento do projeto</strong></summary>
  <br />
  ![DER](./der.png)
  </details>
  
  <br />

  Para rodar a aplicação, irá precisar de: [Git](https://git-scm.com), [VS Code](https://code.visualstudio.com/), [Node.js](https://nodejs.org/) e [NPM](https://www.npmjs.com/).

<br />

Clone o projeto

```bash
  git clone git@github.com:MarcoViana0303/project-trybesmith.git
```

Entre no diretório do projeto

```bash
  cd project-trybesmith
```

<br /> 

## Instalando Dependências
### Com Docker
> Backend

* Suba o container: 
```bash
docker-compose up -d
``` 

* Em seguida abra o terminal interativo do container: 
```bash
docker exec -it trybesmith bash
``` 

* Instale as dependências dentro do container: 
```bash
npm install
```
> Para rodar a API 

* Inicie o servidor: 
```bash
npm run dev
```

### Sem Docker

* Instale as dependências [Caso existam]
```bash
npm install
``` 

## Diagrama de Entidade-Relacionamento utilizado para o projeto
![DER](./der.png)


## Feedback

Encontrou algum erro ou está com alguma dúvida? Não deixe de entrar em contato comigo!


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marco-viana2022/)
[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://marcoviana.dev@gmail.com/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://marcoviana-dev.vercel.app/)
