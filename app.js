var app = require('./config/server'); // configuração de rota do servidor

app.use(function (req, res) { //redirecionando 404
    res.status(404).render('secao/404');
});

app.listen(3000, function () {
    console.log('Servidor ON');
});