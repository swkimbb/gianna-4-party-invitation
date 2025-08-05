document.addEventListener('DOMContentLoaded', function() {
    // Create floating rabbit elements animation (enhanced)
    function createFloatingRabbits() {
        const rabbitsContainer = document.createElement('div');
        rabbitsContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
        `;
        document.body.appendChild(rabbitsContainer);

        function createRabbitElement() {
            const rabbitElement = document.createElement('div');
            const elements = ['🐰', '🥕', '🦋', '🌸', '💖'];
            const element = elements[Math.floor(Math.random() * elements.length)];
            rabbitElement.innerHTML = element;
            
            const size = Math.random() * 20 + 15;
            const startX = Math.random() * 100;
            const drift = (Math.random() - 0.5) * 30;
            const duration = Math.random() * 4 + 3;
            
            rabbitElement.style.cssText = `
                position: absolute;
                font-size: ${size}px;
                left: ${startX}%;
                top: 100%;
                animation: floatUpEnhanced ${duration}s ease-out forwards;
                opacity: 0.8;
                filter: drop-shadow(0 2px 4px rgba(232, 165, 199, 0.3));
            `;
            
            // Add custom drift animation
            rabbitElement.style.setProperty('--drift', `${drift}px`);
            
            rabbitsContainer.appendChild(rabbitElement);
            
            setTimeout(() => {
                rabbitElement.remove();
            }, duration * 1000 + 500);
        }

        // Create rabbit elements every 3-6 seconds (variable timing)
        function scheduleNextRabbit() {
            setTimeout(() => {
                createRabbitElement();
                scheduleNextRabbit();
            }, Math.random() * 3000 + 3000);
        }
        scheduleNextRabbit();
    }

    // Add enhanced CSS animations
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

        @keyframes floatUpEnhanced {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg) scale(0.8);
                opacity: 0;
            }
            10% {
                opacity: 0.8;
                transform: translateY(-10vh) translateX(calc(var(--drift) * 0.1)) rotate(18deg) scale(1);
            }
            50% {
                opacity: 0.9;
                transform: translateY(-50vh) translateX(calc(var(--drift) * 0.5)) rotate(180deg) scale(1.1);
            }
            100% {
                transform: translateY(-110vh) translateX(var(--drift)) rotate(360deg) scale(0.7);
                opacity: 0;
            }
        }

        @keyframes magicalGlow {
            0%, 100% { 
                filter: drop-shadow(0 0 5px rgba(255, 182, 217, 0.5)) drop-shadow(0 0 10px rgba(255, 182, 217, 0.3));
            }
            50% { 
                filter: drop-shadow(0 0 15px rgba(255, 182, 217, 0.8)) drop-shadow(0 0 25px rgba(255, 182, 217, 0.5));
            }
        }

        .magical-glow {
            animation: magicalGlow 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);

    // Initialize floating rabbits
    createFloatingRabbits();

    // Add enhanced click interaction to plan items
    const planItems = document.querySelectorAll('.plan-item');
    planItems.forEach((item, index) => {
        // Add magical glow effect on hover
        item.addEventListener('mouseenter', function() {
            this.classList.add('magical-glow');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('magical-glow');
        });
        
        item.addEventListener('click', function() {
            // Create multiple sparkle effects based on plan number
            const sparkleElements = ['🌟', '✨', '💫', '🌸', '💖'];
            const numSparkles = Math.min(index + 3, 8);
            
            for (let i = 0; i < numSparkles; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.innerHTML = sparkleElements[Math.floor(Math.random() * sparkleElements.length)];
                    sparkle.style.cssText = `
                        position: absolute;
                        font-size: ${15 + Math.random() * 10}px;
                        pointer-events: none;
                        animation: enhancedSparkle ${1 + Math.random() * 0.5}s ease-out forwards;
                        z-index: 1000;
                        filter: drop-shadow(0 0 3px rgba(255, 182, 217, 0.6));
                    `;
                    
                    const rect = this.getBoundingClientRect();
                    const offsetX = (Math.random() - 0.5) * rect.width;
                    const offsetY = (Math.random() - 0.5) * rect.height;
                    sparkle.style.left = (rect.left + rect.width / 2 + offsetX) + 'px';
                    sparkle.style.top = (rect.top + rect.height / 2 + offsetY) + 'px';
                    
                    document.body.appendChild(sparkle);
                    
                    setTimeout(() => sparkle.remove(), 1500);
                }, i * 100);
            }
            
            // Add bounce effect to the clicked item
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add enhanced sparkle animation CSS
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

        @keyframes enhancedSparkle {
            0% {
                transform: scale(0) rotate(0deg) translateY(0);
                opacity: 0;
            }
            20% {
                opacity: 1;
                transform: scale(1.2) rotate(72deg) translateY(-5px);
            }
            60% {
                opacity: 1;
                transform: scale(1.4) rotate(216deg) translateY(-15px);
            }
            100% {
                transform: scale(0.3) rotate(360deg) translateY(-40px);
                opacity: 0;
            }
        }

        .plan-item {
            transition: all 0.3s ease;
        }

        .plan-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(232, 165, 199, 0.3);
        }

        @keyframes countdownPulse {
            0%, 100% {
                transform: scale(1);
                box-shadow: 0 4px 12px rgba(232, 165, 199, 0.2);
            }
            50% {
                transform: scale(1.02);
                box-shadow: 0 6px 16px rgba(232, 165, 199, 0.4);
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
                    background: rgba(255, 230, 245, 0.4);
                    border-radius: 12px;
                    border: 2px solid #e8a5c7;
                    font-weight: bold;
                    color: #d63384;
                    animation: countdownPulse 2s ease-in-out infinite;
                    box-shadow: 0 4px 12px rgba(232, 165, 199, 0.2);
                `;
                document.querySelector('.greeting').appendChild(countdown);
            }
            
            countdown.innerHTML = `🐰 파티까지 ${days}일 ${hours}시간 남았어요! 🥕`;
        }
    }

    // Update countdown every hour
    updateCountdown();
    setInterval(updateCountdown, 3600000);

    // Add hover effects to rabbit decorations (enhanced for mobile)
    const rabbitDecorations = document.querySelectorAll('.rabbit-ears, .carrot');
    rabbitDecorations.forEach(decoration => {
        // Mouse events for desktop
        decoration.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(15deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        decoration.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Touch events for mobile
        decoration.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(1.3) rotate(15deg)';
            this.style.transition = 'transform 0.3s ease';
            
            // Create touch sparkle
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: absolute;
                font-size: 16px;
                pointer-events: none;
                animation: touchSparkle 1s ease-out forwards;
                z-index: 1000;
            `;
            
            const rect = this.getBoundingClientRect();
            sparkle.style.left = (rect.left + rect.width / 2) + 'px';
            sparkle.style.top = (rect.top + rect.height / 2) + 'px';
            
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        });
        
        decoration.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });
    });
    
    // Add touch sparkle animation
    const touchSparkleStyle = document.createElement('style');
    touchSparkleStyle.textContent = `
        @keyframes touchSparkle {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
            100% { transform: scale(0.5) rotate(360deg) translateY(-20px); opacity: 0; }
        }
    `;
    document.head.appendChild(touchSparkleStyle);

    // Add click effect to the title
    const title = document.querySelector('.title');
    title.addEventListener('click', function() {
        // Create celebration burst
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const celebration = document.createElement('div');
                celebration.innerHTML = ['🐰', '🥕', '🐰', '🥕', '🌱'][Math.floor(Math.random() * 5)];
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

        .pulse-effect {
            animation: pulseGlow 0.6s ease-out;
        }

        @keyframes pulseGlow {
            0% { transform: scale(1); box-shadow: 0 0 5px rgba(232, 165, 199, 0.3); }
            50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(232, 165, 199, 0.6); }
            100% { transform: scale(1); box-shadow: 0 0 5px rgba(232, 165, 199, 0.3); }
        }

        .shake-animation {
            animation: shake 0.8s ease-in-out;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
            20%, 40%, 60%, 80% { transform: translateX(3px); }
        }
    `;
    document.head.appendChild(celebrationStyle);

    // Mobile-specific touch interactions
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let longPressTimer = null;

    // Add touch event listeners for swipe and tap gestures
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
        
        // Start long press timer for plan items
        if (e.target.closest('.plan-item')) {
            longPressTimer = setTimeout(() => {
                handleLongPress(e.target.closest('.plan-item'));
            }, 500);
        }
    });

    document.addEventListener('touchmove', function(e) {
        // Cancel long press if user moves finger
        if (longPressTimer) {
            clearTimeout(longPressTimer);
            longPressTimer = null;
        }
    });

    document.addEventListener('touchend', function(e) {
        // Clear long press timer
        if (longPressTimer) {
            clearTimeout(longPressTimer);
            longPressTimer = null;
        }
        
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const touchEndTime = Date.now();
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const deltaTime = touchEndTime - touchStartTime;
        
        // Detect swipe gestures
        if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 100 && deltaTime < 300) {
            if (deltaX > 0) {
                handleSwipeRight();
            } else {
                handleSwipeLeft();
            }
        }
        
        // Quick tap on invitation container
        if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && deltaTime < 200) {
            const target = e.target.closest('.invitation-container');
            if (target && !e.target.closest('.plan-item, .title, .rabbit-ears, .carrot')) {
                createRandomFloatingElements();
            }
        }
    });

    // Long press handler for plan items
    function handleLongPress(planItem) {
        planItem.classList.add('pulse-effect');
        
        // Create special long press effect
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = ['💖', '🌸', '💕', '🦋'][Math.floor(Math.random() * 4)];
                heart.style.cssText = `
                    position: absolute;
                    font-size: 20px;
                    pointer-events: none;
                    animation: heartFloat 2s ease-out forwards;
                    z-index: 1000;
                `;
                
                const rect = planItem.getBoundingClientRect();
                heart.style.left = (rect.left + Math.random() * rect.width) + 'px';
                heart.style.top = (rect.top - 10) + 'px';
                
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 2000);
            }, i * 200);
        }
        
        setTimeout(() => planItem.classList.remove('pulse-effect'), 600);
    }

    // Swipe gesture handlers
    function handleSwipeRight() {
        // Create butterfly trail from left to right
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const butterfly = document.createElement('div');
                butterfly.innerHTML = '🦋';
                butterfly.style.cssText = `
                    position: fixed;
                    font-size: 25px;
                    left: -30px;
                    top: ${30 + Math.random() * (window.innerHeight - 100)}px;
                    pointer-events: none;
                    animation: butterflyFlyRight 3s ease-out forwards;
                    z-index: 1000;
                `;
                document.body.appendChild(butterfly);
                setTimeout(() => butterfly.remove(), 3000);
            }, i * 300);
        }
    }

    function handleSwipeLeft() {
        // Create flower petals falling
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const petal = document.createElement('div');
                petal.innerHTML = '🌸';
                petal.style.cssText = `
                    position: fixed;
                    font-size: 20px;
                    left: ${Math.random() * window.innerWidth}px;
                    top: -30px;
                    pointer-events: none;
                    animation: petalFall 4s ease-out forwards;
                    z-index: 1000;
                `;
                document.body.appendChild(petal);
                setTimeout(() => petal.remove(), 4000);
            }, i * 200);
        }
    }

    // Random floating elements for taps
    function createRandomFloatingElements() {
        const elements = ['💖', '🌸', '💕', '🦋', '✨'];
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const element = document.createElement('div');
                element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
                element.style.cssText = `
                    position: fixed;
                    font-size: 18px;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${Math.random() * window.innerHeight}px;
                    pointer-events: none;
                    animation: gentleFloat 2s ease-out forwards;
                    z-index: 1000;
                `;
                document.body.appendChild(element);
                setTimeout(() => element.remove(), 2000);
            }, i * 150);
        }
    }

    // Add mobile-specific animations
    const mobileAnimationsStyle = document.createElement('style');
    mobileAnimationsStyle.textContent = `
        @keyframes heartFloat {
            0% { transform: scale(0) translateY(0); opacity: 1; }
            50% { transform: scale(1.2) translateY(-20px); opacity: 1; }
            100% { transform: scale(0.8) translateY(-60px); opacity: 0; }
        }

        @keyframes butterflyFlyRight {
            0% { transform: translateX(0) rotate(0deg); opacity: 0.8; }
            50% { transform: translateX(${window.innerWidth/2}px) rotate(10deg); opacity: 1; }
            100% { transform: translateX(${window.innerWidth + 50}px) rotate(-5deg); opacity: 0; }
        }

        @keyframes petalFall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(${window.innerHeight + 50}px) rotate(360deg); opacity: 0; }
        }

        @keyframes gentleFloat {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.1) rotate(180deg); opacity: 0.8; }
            100% { transform: scale(0.7) rotate(360deg) translateY(-30px); opacity: 0; }
        }
    `;
    document.head.appendChild(mobileAnimationsStyle);

    // Device motion for shake-to-celebrate (if supported)
    if (window.DeviceMotionEvent) {
        let lastShake = 0;
        window.addEventListener('devicemotion', function(e) {
            const acceleration = e.accelerationIncludingGravity;
            const threshold = 15;
            const now = Date.now();
            
            if (acceleration && now - lastShake > 1000) {
                const totalAcceleration = Math.abs(acceleration.x) + Math.abs(acceleration.y) + Math.abs(acceleration.z);
                if (totalAcceleration > threshold) {
                    lastShake = now;
                    handleShakeCelebration();
                }
            }
        });
    }

    // Shake celebration handler
    function handleShakeCelebration() {
        document.querySelector('.invitation-container').classList.add('shake-animation');
        
        // Create celebration explosion
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const celebration = document.createElement('div');
                celebration.innerHTML = ['🎉', '✨', '💖', '🦋', '🌸'][Math.floor(Math.random() * 5)];
                celebration.style.cssText = `
                    position: fixed;
                    font-size: 30px;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${Math.random() * window.innerHeight}px;
                    pointer-events: none;
                    animation: explosionCelebration 2s ease-out forwards;
                    z-index: 1000;
                `;
                document.body.appendChild(celebration);
                setTimeout(() => celebration.remove(), 2000);
            }, i * 100);
        }
        
        setTimeout(() => {
            document.querySelector('.invitation-container').classList.remove('shake-animation');
        }, 800);
    }

    // Add explosion animation
    const explosionStyle = document.createElement('style');
    explosionStyle.textContent = `
        @keyframes explosionCelebration {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
            100% { transform: scale(0.5) rotate(360deg) translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px); opacity: 0; }
        }
    `;
    document.head.appendChild(explosionStyle);
});