document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnClique');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('Você clicou no botão! Este evento veio do arquivo JS.');
    });
  }
});

window.addEventListener("load", () => {
  const msg = document.getElementById("mensagemSegredo");
  if (msg) {
    msg.style.opacity = "1"; // aparece
    setTimeout(() => {
      msg.style.opacity = "0"; // desaparece
    }, 5000); // 5 segundos
  }
});