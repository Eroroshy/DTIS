// Validación simple del formulario de login
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const remember = document.getElementById('remember');

  // Autorrellenar si guardó antes
  try{
    const saved = localStorage.getItem('campuslink_remember');
    if(saved){
      const obj = JSON.parse(saved);
      if(obj.email){ email.value = obj.email; remember.checked = true; }
    }
  }catch(e){/* ignore */}

  form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const em = email.value.trim();
    const pw = password.value;
    // validaciones básicas
    if(!em || !em.includes('@')){
      alert('Introduce un correo válido.');
      email.focus();
      return;
    }
    if(!pw || pw.length < 6){
      alert('La contraseña debe tener al menos 6 caracteres.');
      password.focus();
      return;
    }

    if(remember.checked){
      localStorage.setItem('campuslink_remember', JSON.stringify({email:em}));
    } else {
      localStorage.removeItem('campuslink_remember');
    }

    // Simular inicio de sesión exitoso
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Iniciando...';
    btn.disabled = true;
    setTimeout(()=>{
      // en una app real aquí haríamos fetch a la API
      alert('Login simulado: Bienvenido ' + em.split('@')[0]);
      btn.textContent = 'Iniciar sesión';
      btn.disabled = false;
      // Redirigir a la página principal
      window.location.href = '../integradora.html';
    },900);
  });
});
