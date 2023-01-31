const express = require('express');
const { userRoute, loginRoute, categoryRoute, postRoute } = require('./routes');

// ...iniciando projeto

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', userRoute);

app.use('/categories', categoryRoute);

app.use('/post', postRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
