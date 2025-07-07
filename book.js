document.getElementById('bookButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  var confirmationMessage = document.getElementById('confirmationMessage');
  confirmationMessage.textContent = 'Your booking is confirmed!';
  confirmationMessage.style.display = 'block';
});