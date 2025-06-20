let totalClicks = 0;

function updateCounter() {
    totalClicks++;
    document.getElementById('count').textContent = totalClicks;
}

// Solo un event listener por botón
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', updateCounter);
});

// Cambio de tema Batman/Bruce Wayne
const themeSwitch = document.querySelector('.theme-switch__checkbox');
const identityImg = document.getElementById('identity-img');
const identityName = document.getElementById('identity-name');
const hpLabel = document.getElementById('hp-label');

themeSwitch.addEventListener('change', function() {
    const isDark = this.checked;
    document.body.classList.toggle('dark-mode', isDark);
    
    if(isDark) {
        identityImg.src = '1000772783.jpg';
        identityName.textContent = 'BATMAN';
        hpLabel.textContent = 'BATMAN';
    } else {
        identityImg.src = '1000772782.jpg';
        identityName.textContent = 'BRUCE WAYNE';
        hpLabel.textContent = 'Bruce Wayne';
    }
    
    // Guardar preferencia y actualizar contador
    localStorage.setItem('batman-theme', isDark ? 'dark' : 'light');
    updateCounter();
});

// Cargar tema guardado
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('batman-theme');
    if(savedTheme === 'dark') {
        themeSwitch.checked = true;
        document.body.classList.add('dark-mode');
        identityImg.src = '1000772783.jpg';
        identityName.textContent = 'BATMAN';
        hpLabel.textContent = 'BATMAN';
    }
});

// Información confidencial
document.getElementById('info-button').addEventListener('click', function() {
    document.getElementById('additional-info').classList.add('visible');
    updateCounter();
});

document.getElementById('close-info').addEventListener('click', function() {
    document.getElementById('additional-info').classList.remove('visible');
});

// Batiseñal (efecto especial)
document.getElementById('interact-button').addEventListener('click', function() {
    this.classList.toggle('bat-signal-active');
    updateCounter();
    
    // Efecto visual extra para modo Batman
    if(document.body.classList.contains('dark-mode')) {
        const batSignal = document.createElement('div');
        batSignal.className = 'bat-signal-overlay';
        document.body.appendChild(batSignal);
        setTimeout(() => batSignal.remove(), 2000);
    }
});

// Bat-Config (efecto tecnológico)
document.getElementById('settings-button').addEventListener('click', function() {
    const techElements = document.querySelectorAll('.bat-card, .button-container');
    techElements.forEach(el => {
        el.classList.toggle('bat-tech-active');
    });
    //Tema de Batman al apretar el boton
    const techSound = new Audio('Batman_V2.mp3');
    techSound.play();
    updateCounter();
});

// Contador para todos los elementos clickeables
document.querySelectorAll('button, .theme-switch__checkbox').forEach(el => {
    el.addEventListener('click', updateCounter);
});

// Barra de vida interactiva
const healthBar = document.getElementById('health-level');
const traits = document.querySelectorAll('.trait');

traits.forEach(trait => {
    trait.addEventListener('mouseenter', function() {
        const power = this.textContent === 'Inteligencia' ? 95 : 90;
        healthBar.style.width = `${power}%`;
    });
    
    trait.addEventListener('mouseleave', function() {
        healthBar.style.width = '100%';
    });
});

