export function animationCircle () {
    document.querySelector('.interactive-photo').addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width/2) / 15;
    const y = (e.clientY - rect.top - rect.height/2) / 15;
    
    this.querySelector('.color-background').style.transform = 
        `translate(${x}px, ${y}px) rotate(${x}deg)`;
    
    this.querySelector('.color-background').style.borderRadius = 
        `${40+x}% ${60-y}% ${30+y}% ${70-x}% / ${60+y}% ${30+x}% ${70-y}% ${40-x}%`;
    });

    document.querySelector('.interactive-photo').addEventListener('mouseleave', function() {
    const bg = this.querySelector('.color-background');
    bg.style.transform = 'translate(0, 0) rotate(0)';
    bg.style.borderRadius = '40% 60% 30% 70% / 60% 30% 70% 40%';
});
}