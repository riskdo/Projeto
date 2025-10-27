module.exports = {
    sobre: (req, res) => {
    // Dados que a página "Sobre" vai usar
    const info = {
      titulo: 'Sobre o Projeto',
      texto: 'Este projeto foi desenvolvido por Ricardo como exercício prático de Node.js, Express e Handlebars. Tem o objetivo de demonstrar rotas, controllers, views e uso de CSS/JS.',
      tecnologias: ['Node.js', 'Express', 'express-handlebars', 'HTML', 'CSS', 'JavaScript'],
      contato: {
        nome: 'Ricardo Lopes',
        email: 'loukocf@gmail.com' // troque pelo seu se quiser
      },
      isSobre: true // <-- Adicionado: sinaliza que estamos na página "Sobre"
    };

    res.render('sobre', info);
  }
}