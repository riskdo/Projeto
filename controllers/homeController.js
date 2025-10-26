module.exports = {
  index: (req, res) => {
    const dados = {
      titulo: 'Loja Secreta',
      descricao: 'Exemplo de loja com Handlebars, Controllers e Routes.',
      showBanner: true,
      usuario: {
        nome: 'Ricardo',
        nivel: 5
      },
      produtos: [
        { nome: 'Mouse Gamer RGB', preco: 'R$ 149,90', ativo: true },
        { nome: 'Teclado Mecânico Azul', preco: 'R$ 279,90', ativo: false },
        { nome: 'Headset Surround 7.1', preco: 'R$ 329,90', ativo: true }
      ],
      isHome: true // <-- Adicionado: sinaliza que estamos na página inicial
    
    };

    res.render('home', dados);
  },
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
};
