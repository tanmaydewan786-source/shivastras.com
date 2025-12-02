// Minimal vanilla JS for site interactions
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  let email = document.getElementById('email').value;
  document.querySelector('.signup-feedback').textContent =
    "Thank you! We'll keep you updated, " + email;
  document.getElementById('email').value = '';
});
