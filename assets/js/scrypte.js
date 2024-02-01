const cops = document.querySelector('.cops');
const registrelink = document.querySelector('.registre-link');
const loginlink= document.querySelector('.login-link');

registrelink.onclick = () => {
    cops.classList.add('active');
}
loginlink.onclick = () => {
    cops.classList.remove('active');
}