require('dotenv').config();
const app = require('./api');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const categoriesController = require('./controllers/categoriesController');
const loginError = require('./middlewares/erros');
const Token = require('./middlewares/validateToken');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', loginError.emptyError, loginController.login);
app.post('/user', loginError.validateData, userController.createUser);
app.get('/user', Token.validateToken, userController.getAllUsers);
app.get('/user/:id', Token.validateToken, userController.getUserId);
app.post('/categories', Token.validateToken, loginError.validateName,
categoriesController.createCategory);

app.listen(port, () => console.log('ouvindo porta', port));
