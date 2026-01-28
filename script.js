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

// Button click animations
const buttons = document.querySelectorAll('.gift-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.add('clicked');
        const url = this.getAttribute('data-url');
        
        setTimeout(() => {
            window.open(url, '_blank');
        }, 500);
    });
});
