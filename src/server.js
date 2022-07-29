require('dotenv').config();
const app = require('./api');

const { authController } = require('./controllers/loginController');
const { createUser, getUsers } = require('./controllers/userController');
const middlewares = require('./middlewares');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint

app.get('/', (_request, response) => {
  response.send();
});
app.post('/login', authController);
app.get('/user', middlewares.authMiddleware, getUsers);
app.post('/user', middlewares.validateName, createUser);

app.use(middlewares.error);

app.listen(port, () => console.log('ouvindo porta', port));
