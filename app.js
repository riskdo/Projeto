const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar o Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware para arquivos estáticos (CSS/JS)
app.use(express.static(path.join(__dirname, 'public')));

// Importa e usa as rotas
const routes = require('./routes/routes');
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
