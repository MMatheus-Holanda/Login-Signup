"use strict";
const buttonSignUp = document.getElementById('signup');
const divLeftSide = document.getElementById('left-side');
const divRigthSide = document.getElementById('right-side');
const divSignupContainer = document.getElementById('signup-container');
const pAccount = document.querySelector('.p-account');
buttonSignUp.addEventListener('click', () => {
    divLeftSide.classList.add('active');
    divRigthSide.classList.add('active');
    divSignupContainer.classList.remove('active');
});
pAccount.addEventListener('click', () => {
    window.location.href = 'index.html';
});
