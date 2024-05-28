var app = require('./config/server'); // configuração de rota do servidor

var rotaHome = require('./app/routes/home')(app);//rota para a página inicial

var rotaNoticias = require('./app/routes/noticias')(app); // rota para notícias

var rotaesportes = require('./app/routes/esportes')(app); // Rota para as notícias de esportes

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticias')(app);// Rota para formulário de inclusão

var rotacursos = require('./app/routes/cursos')(app); //

var rotapesquisa = require('./app/routes/pesquisa')(app);

//deve ser a última rota
var rota404 = require('./app/routes/404')(app);

app.listen(3000, function () {
    console.log('Servidor ON');
});