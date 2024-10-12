document.getElementById('whatsApp-icon').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche l'action par défaut du lien
    var phoneNumber = document.getElementById('whatsApp-number');
    phoneNumber.style.display = (phoneNumber.style.display === 'none') ? 'block' : 'none'; // Affiche/Masque le numéro
  });