
// Nav dan Back to Top

window.onscroll = function () {
    const header = document.querySelector('header');
    const toTop = document.querySelector('#toTop');

    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik Di luar hamburger

window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Darkmode Toggle

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const dark = document.querySelector('#dark');
const light = document.querySelector('#light');
const toggle = document.querySelector('#toggle')

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        dark.classList.add('text-white');
        dark.classList.remove('text-slate-500');
        light.classList.remove('text-primary');
        light.classList.add('text-slate-500');
        toggle.classList.remove('bg-primary');
        toggle.classList.add('bg-slate-500');
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        light.classList.add('text-primary');
        light.classList.remove('text-slate-500');
        dark.classList.remove('text-white');
        dark.classList.add('text-slate-500');
        toggle.classList.add('bg-primary');
        toggle.classList.remove('bg-slate-500');
    };
});

// Pindahkan Toggle Sesuai Mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
    dark.classList.add('text-white');
    dark.classList.remove('text-slate-500');
    light.classList.add('text-slate-500');
    toggle.classList.remove('bg-primary');
    toggle.classList.add('bg-slate-500');
} else {
    darkToggle.checked = false;
    light.classList.add('text-primary');
    light.classList.remove('text-slate-500');
    dark.classList.add('text-slate-500');
    toggle.classList.add('bg-primary');
    toggle.classList.remove('bg-slate-500');
}