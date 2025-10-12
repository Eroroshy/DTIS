import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './login.css';

/*window.addEventListener('DOMContentLoaded', () => {
const loginBtn = document.getElementById('loginBtn');

/*
loginBtn.addEventListener('click', () => {
    console.log('Login button clicked');
    window.appNav.toHome();
});

});*/

window.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', async () => {
        // Aquí puedes manejar el evento de clic en el botón de inicio de sesión
        console.log('Botón de inicio de sesión clicado');
        const inputUsername = document.getElementById('inputUsername') as HTMLInputElement;
        const inputPassword = document.getElementById('inputPassword') as HTMLInputElement;
        const inputEmail = document.getElementById('inputEmail') as HTMLInputElement;   
        

        const res = await window.http.post('http://localhost:3001/login', {
            nombre: inputUsername.value,
            password: inputPassword.value,
            correo : inputEmail.value
        });
        if (!res.ok){
            showAlert('error en la peticion', 'danger');
            console.error('user not found');
        } else {
            showAlert('login exitoso', 'success');
            console.log(res);
            // Navegar a la pantalla de inicio
            try {
                await new Promise(resolve => setTimeout(resolve, 6000));
                await window.appNav.toHome();
            } catch (err) {
                console.error('No se pudo navegar a home', err);
            }
        }

    });

    // funcion para disparar la alerta
    const showAlert = (message: string, type: string) => {
        const alertPlaceholder = document.getElementById('alertPlaceholder');
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
 
 
        ].join('');
            alertPlaceholder.append(wrapper);
        };
    
    });

