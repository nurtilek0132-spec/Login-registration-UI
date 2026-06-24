const toggleButtons = document.querySelectorAll('.toggle-btn');
const formPanels = document.querySelectorAll('.form-panel');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    toggleButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const target = button.getAttribute('data-target');

    formPanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === `${target}-panel`) {
        panel.classList.add('active');
      }
    });
  });
});

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Login successful!');
});

document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  alert('Registration successful!');
});
