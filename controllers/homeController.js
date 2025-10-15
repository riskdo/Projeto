module.exports = {
  index: (req, res) => {
    const dados = {
      titulo: 'Página Inicial',
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
      ]
    };

    res.render('home', dados);
  }
};