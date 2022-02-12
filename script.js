'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseMod = document.querySelector('.close-modal');
const buttonOpenMod = document.querySelectorAll('.show-modal');


const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < buttonOpenMod.length; i++)
    buttonOpenMod[i].addEventListener('click', openModal);

buttonCloseMod.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});