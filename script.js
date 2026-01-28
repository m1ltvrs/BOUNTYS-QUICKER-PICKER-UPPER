// Matrix rain effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binary = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    
    drops.forEach((y, i) => {
        const text = binary[Math.floor(Math.random() * binary.length)];
        const x = i * fontSize;
        
        ctx.fillText(text, x, y * fontSize);
        
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Button click animations with explosion effect
const buttons = document.querySelectorAll('.gift-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        const imgSrc = this.querySelector('img').src;
        const rect = this.getBoundingClientRect();
        
        // Create 20 tiny logo particles
        for (let i = 0; i < 20; i++) {
            createParticle(imgSrc, rect);
        }
        
        setTimeout(() => {
            window.open(url, '_blank');
        }, 800);
    });
});

function createParticle(imgSrc, buttonRect) {
    const particle = document.createElement('img');
    particle.src = imgSrc;
    particle.className = 'particle';
    
    // Start from center of button
    particle.style.left = (buttonRect.left + buttonRect.width / 2) + 'px';
    particle.style.top = (buttonRect.top + buttonRect.height / 2) + 'px';
    
    // Random direction
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 100;
    const endX = Math.cos(angle) * distance;
    const endY = Math.sin(angle) * distance;
    
    particle.style.setProperty('--endX', endX + 'px');
    particle.style.setProperty('--endY', endY + 'px');
    
    document.body.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
        particle.remove();
    }, 1000);
}
