document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Empêcher l'envoi du formulaire pour traitement
  
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const tableau = document.getElementById("tableau").value;
  const cardNumber = document.getElementById("cardNumber").value;
  const expiryDate = document.getElementById("expiryDate").value;
  const cvv = document.getElementById("cvv").value;

  // Afficher un message de confirmation (remplacer ceci par un envoi réel)
  console.log("Commande reçue : ", firstName, lastName, email, tableau, cardNumber, expiryDate, cvv);

  // Simuler une confirmation de commande
  document.getElementById("orderForm").reset();  // Réinitialiser le formulaire
  document.getElementById("confirmation").classList.remove("hidden");  // Afficher confirmation
});