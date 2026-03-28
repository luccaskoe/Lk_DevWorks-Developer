
const mobileMenuButton = document.getElementById('mobile-menu');
  const menu = document.getElementById('menu');

  mobileMenuButton.addEventListener('click', () => {

    menu.classList.toggle('active');
    mobileMenuButton.innerHTML = menu.classList.contains('active') ? 
      '<span style="color: red; font-weight: bold;" class="material-symbols-outlined">close</span>' : 
      '<i class="bi bi-list"></i>';
  
    });

    // FORMULARIO WHATSAPP

    document.getElementById('btn-whatsapp').addEventListener('click', function() {
  const nome = document.getElementById('nome').value.trim();
  const tipo = document.getElementById('tipo').value;
  const descricao = document.getElementById('descricao').value.trim();

  if (!nome || !tipo || !descricao) {
    alert('Por favor, preencha todos os campos antes de enviar!!.');
    return;
  }

  // Monta a mensagem formatada
  const mensagem = `Olá, meu nome é *${nome}*.\n` +
                   `Estou interessado no projeto: *${tipo}*.\n` +
                   `Descrição:\n${descricao}`;

  // Codifica a mensagem para URL
  const mensagemURL = encodeURIComponent(mensagem);

  // Número do WhatsApp com código do país e DDD (sem espaços, parênteses ou traços)
  const numeroWhats = '5565996961459';

  // URL completa para abrir o WhatsApp
  const url = `https://wa.me/${numeroWhats}?text=${mensagemURL}`;

  // Abre o WhatsApp em nova aba (ou aplicativo mobile)
  window.open(url, '_blank');
});