// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
  
    // Fonction pour générer une couleur hexadécimale aléatoire
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Ajouter un écouteur d'événements sur le bouton pour changer la couleur
    changeColorBtn.addEventListener('click', () => {
      // Changer la couleur de fond de la boîte
      const newColor = getRandomColor();
      colorBox.style.backgroundColor = newColor;
    });
  });
  