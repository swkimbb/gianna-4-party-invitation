document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts animation
    function createFloatingHearts() {
        const heartsContainer = document.createElement('div');
        heartsContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
        `;
        document.body.appendChild(heartsContainer);

        function createHeart() {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 10}px;
                left: ${Math.random() * 100}%;
                top: 100%;
                animation: floatUp ${Math.random() * 3 + 2}s linear forwards;
                opacity: 0.7;
            `;
            
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }

        // Create hearts every 3 seconds
        setInterval(createHeart, 3000);
    }

    // Add CSS animation for floating hearts
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.7;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize floating hearts
    createFloatingHearts();

    // Add click interaction to plan steps
    const planSteps = document.querySelectorAll('.plan-step');
    planSteps.forEach(step => {
        step.addEventListener('click', function() {
            // Create sparkle effect
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: absolute;
                font-size: 20px;
                pointer-events: none;
                animation: sparkle 1s ease-out forwards;
                z-index: 1000;
            `;
            
            const rect = this.getBoundingClientRect();
            sparkle.style.left = (rect.left + rect.width / 2) + 'px';
            sparkle.style.top = (rect.top + rect.height / 2) + 'px';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        });
    });

    // Add sparkle animation CSS
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkle {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1.5) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: scale(0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Add birthday countdown (optional fun feature)
    function updateCountdown() {
        const partyDate = new Date('2025-08-09T15:00:00');
        const now = new Date();
        const timeDiff = partyDate - now;

        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            // Create countdown display if it doesn't exist
            let countdown = document.querySelector('.countdown');
            if (!countdown) {
                countdown = document.createElement('div');
                countdown.className = 'countdown';
                countdown.style.cssText = `
                    text-align: center;
                    margin: 20px 0;
                    padding: 15px;
                    background: rgba(255, 215, 0, 0.2);
                    border-radius: 10px;
                    border: 2px solid #ffd700;
                    font-weight: bold;
                    color: #ff6600;
                `;
                document.querySelector('.greeting').appendChild(countdown);
            }
            
            countdown.innerHTML = `🎉 파티까지 ${days}일 ${hours}시간 남았어요! 🎉`;
        }
    }

    // Update countdown every hour
    updateCountdown();
    setInterval(updateCountdown, 3600000);

    // Add hover effects to balloons
    const balloons = document.querySelectorAll('.balloons');
    balloons.forEach(balloon => {
        balloon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        balloon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add click effect to the title
    const title = document.querySelector('.title');
    title.addEventListener('click', function() {
        // Create celebration burst
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const celebration = document.createElement('div');
                celebration.innerHTML = ['🎉', '🎊', '🎈', '💕', '✨'][Math.floor(Math.random() * 5)];
                celebration.style.cssText = `
                    position: absolute;
                    font-size: 25px;
                    pointer-events: none;
                    animation: celebrationBurst 2s ease-out forwards;
                    z-index: 1000;
                `;
                
                const rect = this.getBoundingClientRect();
                celebration.style.left = (rect.left + Math.random() * rect.width) + 'px';
                celebration.style.top = (rect.top + Math.random() * rect.height) + 'px';
                
                document.body.appendChild(celebration);
                
                setTimeout(() => celebration.remove(), 2000);
            }, i * 100);
        }
    });

    // Add celebration burst animation
    const celebrationStyle = document.createElement('style');
    celebrationStyle.textContent = `
        @keyframes celebrationBurst {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1.2) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: scale(0.5) rotate(360deg) translateY(-50px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(celebrationStyle);
});