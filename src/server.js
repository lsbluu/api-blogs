require('dotenv').config();
const app = require('./api');
const { 
  getBlogPost, 
  getByIdBlogPost, 
  updateByIdBlogPost, 
  deleteBlogPost, 
  getSearchBlog,
} = require('./controllers/blogPostController');
const { createCategory, getCategory } = require('./controllers/categoryController');

const { authController } = require('./controllers/loginController');
const { createUser, getUsers, getUserById, deleteMe } = require('./controllers/userController');
const middlewares = require('./middlewares');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint

app.get('/', (_request, response) => {
  response.send();
});
app.post('/login', authController);
app.get('/user', middlewares.authMiddleware, getUsers);
app.get('/user/:id', middlewares.authMiddleware, getUserById);
app.post('/user', middlewares.validate, createUser);
app.delete('/user/me', middlewares.authMiddleware, deleteMe);
app.post('/categories', middlewares.authMiddleware, middlewares.validateName, createCategory);
app.get('/categories', middlewares.authMiddleware, getCategory);
app.get('/post', middlewares.authMiddleware, getBlogPost);
app.get('/post/search', middlewares.authMiddleware, getSearchBlog);
app.get('/post/:id', middlewares.authMiddleware, getByIdBlogPost);
app.put('/post/:id', middlewares.authMiddleware, updateByIdBlogPost);
app.delete('/post/:id', middlewares.authMiddleware, deleteBlogPost);

app.use(middlewares.error);

app.listen(port, () => console.log('ouvindo porta', port));
