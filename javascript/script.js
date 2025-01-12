

// Função para atualizar o ano atual no HTML
  const currentYear = new Date().getFullYear(); // Obtem o ano atual
  console.log('currentYear', currentYear);
  const yearElement = document.getElementById('current-year'); // Seleciona o elemento HTML

  yearElement.textContent = currentYear; // Atualiza o conteúdo do elemento HTML



  const images = [
    './images/hero_serum.jpg',
    './images/herobg.png',
    './images/header-image.jpg'
  ];
  
  let currentIndex = 0;
  const heroSection = document.getElementById('hero');
  
  // Função para atualizar a imagem de fundo
  function updateBackground() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
  }
  
  // Função para avançar para a próxima imagem
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Avança e reinicia ao atingir o final
    updateBackground();
  }
  
  // Função para voltar para a imagem anterior
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Volta e reinicia no início
    updateBackground();
  }
  
  // Alteração automática de imagens a cada 3 segundos
  setInterval(nextImage, 3000);
  