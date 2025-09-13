class ResilienceGame {
    constructor() {
        // Don't start the game immediately, wait for start button
        this.showWelcomeScreen();
    }

    showWelcomeScreen() {
        const startButton = document.getElementById('start-game-btn');
        startButton.addEventListener('click', () => {
            document.getElementById('welcome-screen').style.display = 'none';
            this.initGame();
        });
    }

    initGame() {
        // Remove canvas references
        this.monolithDisplay = document.getElementById('monolith-display');
        this.servicesContainer = document.getElementById('services-container');
        
        // Game state - Initialize FIRST
        this.gameState = {
            monolithLoad: 20,
            serviceComplexity: 10,
            deploymentRisk: 15,
            observabilityDifficulty: 30,
            budget: 2000,
            score: 0,
            featuresImplemented: 0,
            services: [],
            monolithFeatures: 3,
            currentFeatureIndex: 0,
            level: 1,
            levelFeaturesRequired: 3,
            levelFeaturesCompleted: 0,
            cacheEfficiency: 0,
            observabilityScore: 0,
            gameOver: false,
            circuitBreakers: 0,
            messageQueues: 0,
            retryLogic: 0
        };

        // Feature queue
        this.features = [
            'User Authentication',
            'Payment Processing',
            'Email Notifications',
            'File Upload Service',
            'Real-time Chat',
            'Analytics Dashboard',
            'Search Functionality',
            'Mobile API',
            'Admin Panel',
            'Backup System',
            'Rate Limiting',
            'Data Export',
            'Multi-language Support',
            'Social Integration',
            'Advanced Reporting',
            'AI Recommendations',
            'Video Streaming',
            'Real-time Collaboration',
            'Blockchain Integration',
            'IoT Device Management'
        ];

        // Level configuration
        this.levels = [
            { features: 3, budget: 3000, name: "Startup MVP" },
            { features: 4, budget: 3500, name: "Growing Product" },
            { features: 5, budget: 4000, name: "Market Expansion" },
            { features: 6, budget: 4500, name: "Enterprise Features" },
            { features: 7, budget: 5000, name: "Global Scale" },
            { features: 8, budget: 5500, name: "Advanced Platform" },
            { features: 9, budget: 6000, name: "Industry Leader" },
            { features: 10, budget: 6500, name: "Innovation Hub" },
            { features: 12, budget: 7000, name: "Tech Giant" },
            { features: 15, budget: 8000, name: "Ultimate Architecture" }
        ];
        
        this.services = [];
        
        this.init();
    }

    updateMonolithDisplay() {
        if (!this.monolithDisplay) return;
        
        // Update monolith features and load
        const featuresSpan = document.getElementById('monolith-features');
        const loadSpan = document.getElementById('monolith-load');
        
        if (featuresSpan) featuresSpan.textContent = this.gameState.monolithFeatures;
        if (loadSpan) loadSpan.textContent = Math.round(this.gameState.monolithLoad);
        
        // Change color based on load
        if (this.gameState.monolithLoad >= 80) {
            this.monolithDisplay.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            this.monolithDisplay.style.boxShadow = '0 10px 30px rgba(231, 76, 60, 0.3)';
        } else if (this.gameState.monolithLoad >= 50) {
            this.monolithDisplay.style.background = 'linear-gradient(135deg, #f39c12, #e67e22)';
            this.monolithDisplay.style.boxShadow = '0 10px 30px rgba(243, 156, 18, 0.3)';
        } else {
            this.monolithDisplay.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
            this.monolithDisplay.style.boxShadow = '0 10px 30px rgba(46, 204, 113, 0.3)';
        }
    }

    init() {
        this.setupEventListeners();
        this.setupModalEventListeners();
        this.updateCurrentFeature();
        this.updateMetrics();
        this.updateMonolithDisplay();
        this.updateLevelDisplay();
        this.updateResilienceFeatures();
        
        // Mark game as started
        this.gameStarted = true;
    }

    setupModalEventListeners() {
        document.getElementById('modal-button').addEventListener('click', () => {
            this.closeModal();
        });
        
        document.getElementById('modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'modal-overlay') {
                this.closeModal();
            }
        });
    }

    closeModal() {
        document.getElementById('modal-overlay').style.display = 'none';
        
        if (this.gameState.gameOver) {
            this.restartGame();
        }
    }

    restartGame() {
        // Reset game state
        this.gameState = {
            monolithLoad: 20,
            serviceComplexity: 10,
            deploymentRisk: 15,
            observabilityDifficulty: 30,
            budget: 3000,
            score: 0,
            featuresImplemented: 0,
            services: [],
            monolithFeatures: 3,
            currentFeatureIndex: 0,
            level: 1,
            levelFeaturesRequired: 3,
            levelFeaturesCompleted: 0,
            cacheEfficiency: 0,
            observabilityScore: 0,
            gameOver: false,
            circuitBreakers: 0,
            messageQueues: 0,
            retryLogic: 0
        };
        
        this.services = [];
        this.updateCurrentFeature();
        this.updateMetrics();
        this.updateMonolithDisplay();
        this.updateLevelDisplay();
        this.updateResilienceFeatures();
        this.updateServicesDisplay();
    }

    updateCurrentFeature() {
        const currentFeature = this.getCurrentFeature();
        const featureElement = document.getElementById('current-feature');
        if (featureElement && currentFeature) {
            featureElement.textContent = currentFeature;
        }
    }

    setupEventListeners() {
        document.getElementById('add-to-monolith').addEventListener('click', () => {
            this.addToMonolith();
        });
        
        document.getElementById('create-service').addEventListener('click', () => {
            this.createNewService();
        });
        
        document.getElementById('add-cache').addEventListener('click', () => {
            this.addCache();
        });
        
        document.getElementById('add-monitoring').addEventListener('click', () => {
            this.addMonitoring();
        });
        
        document.getElementById('add-circuit-breaker').addEventListener('click', () => {
            this.addCircuitBreaker();
        });
        
        document.getElementById('add-queue').addEventListener('click', () => {
            this.addMessageQueue();
        });
        
        document.getElementById('add-retry-logic').addEventListener('click', () => {
            this.addRetryLogic();
        });
        
        document.getElementById('refactor').addEventListener('click', () => {
            this.refactorCode();
        });
    }

    addToMonolith() {
        if (this.gameState.budget < 100 || this.gameState.gameOver) {
            return;
        }

        const feature = this.getCurrentFeature();
        this.gameState.monolithFeatures++;
        this.gameState.monolithLoad += 15;
        this.gameState.deploymentRisk += 10;
        this.gameState.budget -= 100;
        this.gameState.score += 50;
        this.gameState.featuresImplemented++;
        this.gameState.levelFeaturesCompleted++;

        this.nextFeature();
        this.updateMetrics();
        this.updateMonolithDisplay();
        this.checkLevelCompletion();
        this.checkGameOver();
    }

    createNewService() {
        if (this.gameState.budget < 400 || this.gameState.gameOver) {
            return;
        }

        const feature = this.getCurrentFeature();
        if (!feature) {
            console.error('No feature available');
            return;
        }
        
        this.services.push({
            name: feature.split(' ')[0],
            feature: feature,
            complexity: 10,
            features: 1,
            load: 15
        });

        this.gameState.serviceComplexity += 12;
        this.gameState.observabilityDifficulty += 8;
        this.gameState.budget -= 400;
        this.gameState.score += 75;
        this.gameState.featuresImplemented++;
        this.gameState.levelFeaturesCompleted++;

        this.nextFeature();
        this.updateMetrics();
        this.updateServicesDisplay();
        this.checkLevelCompletion();
        this.checkGameOver();
    }

    updateServicesDisplay() {
        const servicesContainer = document.getElementById('services-container');
        if (!servicesContainer) return;

        // Clear existing services
        servicesContainer.innerHTML = '';

        // Get monolith position (center of screen)
        const monolithCenterX = window.innerWidth / 2;
        const monolithCenterY = window.innerHeight / 2;

        // Display each service
        this.services.forEach((service, index) => {
            // Calculate service position in a circle around monolith
            const angle = (index * (360 / Math.max(this.services.length, 6))) * (Math.PI / 180);
            const radius = 200;
            const serviceX = monolithCenterX + Math.cos(angle) * radius;
            const serviceY = monolithCenterY + Math.sin(angle) * radius;

            // Create connection line
            const line = document.createElement('div');
            line.className = 'connection-line';
            const length = Math.sqrt(Math.pow(serviceX - monolithCenterX, 2) + Math.pow(serviceY - monolithCenterY, 2));
            const angleRad = Math.atan2(serviceY - monolithCenterY, serviceX - monolithCenterX);
            
            line.style.cssText = `
                position: absolute;
                width: ${length}px;
                height: 2px;
                background: linear-gradient(90deg, #3498db, #2980b9);
                left: ${monolithCenterX}px;
                top: ${monolithCenterY}px;
                transform-origin: 0 50%;
                transform: rotate(${angleRad}rad);
                z-index: 1;
                opacity: 0.6;
            `;
            servicesContainer.appendChild(line);

            // Create service block
            const serviceElement = document.createElement('div');
            serviceElement.className = 'service-block';
            
            // Color based on service complexity
            let serviceColor = '#3498db'; // blue default
            let serviceSecondary = '#2980b9';
            if (service.complexity >= 80) {
                serviceColor = '#e74c3c'; // red - becoming monolith
                serviceSecondary = '#c0392b';
            } else if (service.complexity >= 50) {
                serviceColor = '#f39c12'; // yellow - complex
                serviceSecondary = '#e67e22';
            }
            
            serviceElement.style.cssText = `
                position: absolute;
                background: linear-gradient(135deg, ${serviceColor}, ${serviceSecondary});
                color: white;
                padding: 15px;
                border-radius: 8px;
                text-align: center;
                box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
                border: 2px solid #2c3e50;
                min-width: 100px;
                min-height: 70px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-weight: 600;
                font-size: 11px;
                left: ${serviceX - 50}px;
                top: ${serviceY - 35}px;
                z-index: 2;
                transition: all 0.3s ease;
                cursor: pointer;
            `;
            
            serviceElement.innerHTML = `
                <div style="font-weight: 800; margin-bottom: 3px; font-size: 12px;">${service.name}</div>
                <div style="font-size: 9px; opacity: 0.8;">${service.features} features</div>
                <div style="font-size: 9px; opacity: 0.8;">${service.complexity}% complex</div>
                <div style="font-size: 8px; opacity: 0.6; margin-top: 2px;">🖱️ Click to add feature</div>
            `;
            
            // Add click handler to add features to service
            serviceElement.style.pointerEvents = 'auto';
            serviceElement.addEventListener('click', () => {
                this.addFeatureToService(index);
            });
            
            // Add hover effects
            serviceElement.addEventListener('mouseenter', () => {
                serviceElement.style.transform = 'translateY(-3px) scale(1.05)';
                serviceElement.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.5)';
            });
            
            serviceElement.addEventListener('mouseleave', () => {
                serviceElement.style.transform = 'translateY(0) scale(1)';
                serviceElement.style.boxShadow = '0 5px 15px rgba(52, 152, 219, 0.3)';
            });
            
            servicesContainer.appendChild(serviceElement);
        });
    }

    addCache() {
        if (this.gameState.budget < 200) {
            return;
        }

        this.gameState.cacheEfficiency += 15;
        this.gameState.monolithLoad = Math.max(0, this.gameState.monolithLoad - 12);
        this.gameState.serviceComplexity = Math.max(0, this.gameState.serviceComplexity - 8);
        this.gameState.budget -= 200;
        this.gameState.score += 50;

        this.updateMetrics();
        this.updateMonolithDisplay();
        this.updateResilienceFeatures();
        this.checkLevelCompletion();
        this.checkGameOver();
    }

    addMonitoring() {
        if (this.gameState.budget < 150) {
            return;
        }

        this.gameState.observabilityScore += 20;
        this.gameState.observabilityDifficulty = Math.max(0, this.gameState.observabilityDifficulty - 15);
        this.gameState.budget -= 150;
        this.gameState.score += 40;

        this.updateMetrics();
        this.updateMonolithDisplay();
        this.updateResilienceFeatures();
        this.checkLevelCompletion();
        this.checkGameOver();
    }

    addCircuitBreaker() {
        if (this.gameState.budget < 100) {
            return;
        }

        this.gameState.circuitBreakers++;
        this.gameState.deploymentRisk = Math.max(0, this.gameState.deploymentRisk - 10);
        this.gameState.serviceComplexity = Math.max(0, this.gameState.serviceComplexity - 5);
        this.gameState.budget -= 100;
        this.gameState.score += 35;

        this.updateMetrics();
        this.updateMonolithDisplay();
        this.updateResilienceFeatures();
        this.checkLevelCompletion();
        this.checkGameOver();
    }

    addMessageQueue() {
        if (this.gameState.budget < 250) {
            return;
        }

        this.gameState.messageQueues++;
        this.gameState.monolithLoad = Math.max(0, this.gameState.monolithLoad - 15);
        this.gameState.serviceComplexity = Math.max(0, this.gameState.serviceComplexity - 10);
        this.gameState.deploymentRisk = Math.max(0, this.gameState.deploymentRisk - 8);
        this.gameState.budget -= 250;
        this.gameState.score += 65;

        this.updateMetrics();
        this.updateMonolithDisplay();
        this.updateResilienceFeatures();
        this.checkLevelCompletion();
        this.checkGameOver();
    }

    addRetryLogic() {
        if (this.gameState.budget < 80) {
            return;
        }

        this.gameState.retryLogic++;
        this.gameState.deploymentRisk = Math.max(0, this.gameState.deploymentRisk - 8);
        this.gameState.observabilityDifficulty = Math.max(0, this.gameState.observabilityDifficulty - 5);
        this.gameState.budget -= 80;
        this.gameState.score += 30;

        this.updateMetrics();
        this.updateMonolithDisplay();
        this.updateResilienceFeatures();
        this.checkLevelCompletion();
        this.checkGameOver();
    }

    addFeatureToService(serviceIndex) {
        if (this.gameState.budget < 150 || this.gameState.gameOver) {
            return;
        }

        const service = this.services[serviceIndex];
        if (!service) return;

        // Add feature to the specific service
        service.features++;
        service.complexity += 15;
        service.load += 10;

        this.gameState.budget -= 150;
        this.gameState.score += 40;
        this.gameState.featuresImplemented++;
        this.gameState.levelFeaturesCompleted++;

        // If service becomes too complex, it becomes a mini-monolith
        if (service.complexity >= 80) {
            service.name += "-Monolith";
            this.gameState.serviceComplexity += 20;
        }

        this.nextFeature();
        this.updateMetrics();
        this.updateServicesDisplay();
        this.checkLevelCompletion();
        this.checkGameOver();
    }

    refactorCode() {
        if (this.gameState.budget < 300) {
            return;
        }

        this.gameState.serviceComplexity = Math.max(0, this.gameState.serviceComplexity - 20);
        this.gameState.monolithLoad = Math.max(0, this.gameState.monolithLoad - 10);
        this.gameState.deploymentRisk = Math.max(0, this.gameState.deploymentRisk - 15);
        
        // Also refactor services to reduce their complexity
        this.services.forEach(service => {
            service.complexity = Math.max(10, service.complexity - 20);
        });
        
        this.gameState.budget -= 300;
        this.gameState.score += 60;

        this.updateMetrics();
        this.updateMonolithDisplay();
        this.updateServicesDisplay();
    }

    getCurrentFeature() {
        return this.features[this.currentFeatureIndex];
    }

    nextFeature() {
        this.currentFeatureIndex++;
        this.updateCurrentFeature();
    }

    updateCurrentFeature() {
        const featureElement = document.getElementById('current-feature');
        if (this.currentFeatureIndex < this.features.length) {
            featureElement.textContent = this.getCurrentFeature();
        } else {
            featureElement.textContent = 'All features completed!';
        }
    }

    updateMetrics() {
        this.updateMetricBar('monolith-fill', 'monolith-value', this.gameState.monolithLoad);
        this.updateMetricBar('complexity-fill', 'complexity-value', this.gameState.serviceComplexity);
        this.updateMetricBar('deployment-fill', 'deployment-value', this.gameState.deploymentRisk);
        this.updateMetricBar('observability-fill', 'observability-value', this.gameState.observabilityDifficulty);

        document.getElementById('budget').textContent = this.gameState.budget;
        document.getElementById('score').textContent = this.gameState.score;
        document.getElementById('feature-count').textContent = this.gameState.featuresImplemented;

        // Check for critical states
        this.checkCriticalStates();
    }

    updateMetricBar(elementId, valueId, value) {
        const element = document.getElementById(elementId);
        const valueElement = document.getElementById(valueId);
        const percentage = Math.min(100, Math.max(0, value));
        
        element.style.width = percentage + '%';
        valueElement.textContent = Math.round(percentage) + '%';
        
        // Update color based on value
        element.className = 'metric-fill';
        if (percentage < 50) {
            element.classList.add('safe');
        } else if (percentage < 80) {
            element.classList.add('warning');
        } else {
            element.classList.add('critical');
        }
    }

    checkCriticalStates() {
        // Silent checks - no need for alerts in this clean interface
    }

    checkLevelCompletion() {
        const currentLevel = this.levels[this.gameState.level - 1];
        this.updateLevelDisplay(); // Update progress display
        if (this.gameState.levelFeaturesCompleted >= currentLevel.features) {
            this.advanceLevel();
        }
    }

    checkGameOver() {
        // Check if player can afford any action
        const canAffordMonolith = this.gameState.budget >= 100;
        const canAffordService = this.gameState.budget >= 400;
        const canAffordCache = this.gameState.budget >= 200;
        const canAffordMonitoring = this.gameState.budget >= 150;
        const canAffordRefactor = this.gameState.budget >= 300;

        const currentLevel = this.levels[this.gameState.level - 1];
        const featuresRemaining = currentLevel.features - this.gameState.levelFeaturesCompleted;

        if (!canAffordMonolith && !canAffordService && featuresRemaining > 0) {
            this.gameState.gameOver = true;
            setTimeout(() => {
                this.showGameOverModal();
            }, 100);
        }
    }

    showGameOverModal() {
        const modal = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');
        const modalTitle = document.getElementById('modal-title');
        const modalScoreValue = document.getElementById('modal-score-value');
        const modalButton = document.getElementById('modal-button');
        const badgesContainer = document.getElementById('badges-container');
        const currentLevel = this.levels[this.gameState.level - 1];

        // Set up game over styling
        modalContent.className = 'modal-content lose';
        modalTitle.className = 'modal-title lose';
        modalTitle.textContent = `💀 Game Over! Level ${this.gameState.level}`;
        modalScoreValue.textContent = this.gameState.score;
        modalButton.textContent = 'Try Again';
        modalButton.className = 'modal-button restart';

        // Add failure badges
        badgesContainer.innerHTML = `
            <div class="badge">
                <img src="fire.png" alt="Fire Badge">
                <div class="badge-name">System Burned</div>
            </div>
            <div class="badge">
                <img src="angry-ceo.png" alt="Angry CEO">
                <div class="badge-name">CEO Disappointed</div>
            </div>
            <div class="badge">
                <img src="spend.png" alt="Budget Blown">
                <div class="badge-name">Budget Blown</div>
            </div>
        `;

        modal.style.display = 'flex';
    }

    advanceLevel() {
        if (this.gameState.level < this.levels.length) {
            this.gameState.level++;
            this.gameState.levelFeaturesCompleted = 0;
            
            const newLevel = this.levels[this.gameState.level - 1];
            this.gameState.budget += 1000; // Increased bonus budget for completing level
            
            setTimeout(() => {
                this.showLevelCompleteModal();
            }, 500);
            
            this.updateMetrics();
            this.updateLevelDisplay();
        } else {
            setTimeout(() => {
                this.showVictoryModal();
            }, 500);
        }
    }

    showLevelCompleteModal() {
        const modal = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');
        const modalTitle = document.getElementById('modal-title');
        const modalScoreValue = document.getElementById('modal-score-value');
        const modalButton = document.getElementById('modal-button');
        const badgesContainer = document.getElementById('badges-container');
        const newLevel = this.levels[this.gameState.level - 1];

        // Set up level complete styling
        modalContent.className = 'modal-content win';
        modalTitle.className = 'modal-title win';
        modalTitle.textContent = `🎊 Level ${this.gameState.level - 1} Complete!`;
        modalScoreValue.textContent = this.gameState.score;
        modalButton.textContent = `Continue to ${newLevel.name}`;
        modalButton.className = 'modal-button';

        // Add success badges
        badgesContainer.innerHTML = `
            <div class="badge">
                <img src="dev.png" alt="Developer Badge">
                <div class="badge-name">Great Developer</div>
            </div>
            <div class="badge">
                <img src="ceo-happy.png" alt="Happy CEO">
                <div class="badge-name">CEO Pleased</div>
            </div>
            <div class="badge">
                <img src="budget.png" alt="Budget Master">
                <div class="badge-name">Budget Smart</div>
            </div>
        `;

        modal.style.display = 'flex';
    }

    showVictoryModal() {
        const modal = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');
        const modalTitle = document.getElementById('modal-title');
        const modalScoreValue = document.getElementById('modal-score-value');
        const modalButton = document.getElementById('modal-button');
        const badgesContainer = document.getElementById('badges-container');

        // Set up victory styling
        modalContent.className = 'modal-content win';
        modalTitle.className = 'modal-title win';
        modalTitle.textContent = '🏆 ULTIMATE VICTORY!';
        modalScoreValue.textContent = this.gameState.score;
        modalButton.textContent = 'Play Again';
        modalButton.className = 'modal-button';

        // Add all victory badges
        badgesContainer.innerHTML = `
            <div class="badge">
                <img src="dev.png" alt="Master Developer">
                <div class="badge-name">Master Developer</div>
            </div>
            <div class="badge">
                <img src="ceo-happy.png" alt="CEO Champion">
                <div class="badge-name">CEO Champion</div>
            </div>
            <div class="badge">
                <img src="budget.png" alt="Budget Legend">
                <div class="badge-name">Budget Legend</div>
            </div>
        `;

        this.gameState.gameOver = true; // Allow restart
        modal.style.display = 'flex';
    }

    updateCurrentFeature(feature) {
        if (feature) {
            // If a specific feature is provided, update the display
            document.getElementById('current-feature').textContent = feature;
        } else {
            // Otherwise, get the current feature from the queue
            const currentFeature = this.getCurrentFeature();
            const featureElement = document.getElementById('current-feature');
            if (featureElement && currentFeature) {
                featureElement.textContent = currentFeature;
            }
        }
    }

    nextFeature() {
        this.gameState.currentFeatureIndex = (this.gameState.currentFeatureIndex + 1) % this.features.length;
        const newFeature = this.features[this.gameState.currentFeatureIndex];
        this.updateCurrentFeature(newFeature);
    }

    getCurrentFeature() {
        if (!this.features || this.features.length === 0) {
            return 'No features available';
        }
        return this.features[this.gameState.currentFeatureIndex];
    }

    updateLevelDisplay() {
        const currentLevel = this.levels[this.gameState.level - 1];
        document.getElementById('level-name').textContent = `Level ${this.gameState.level}: ${currentLevel.name}`;
        document.getElementById('level-progress').textContent = `${this.gameState.levelFeaturesCompleted}/${currentLevel.features}`;
    }

    updateResilienceFeatures() {
        const resilienceContainer = document.getElementById('resilience-features');
        if (!resilienceContainer) {
            console.log('Resilience container not found');
            return;
        }

        const features = [
            { name: '⚡ Cache Systems', count: Math.floor(this.gameState.cacheEfficiency / 15), icon: '⚡' },
            { name: '👀 Monitoring', count: Math.floor(this.gameState.observabilityScore / 20), icon: '👀' },
            { name: '🔌 Circuit Breakers', count: this.gameState.circuitBreakers, icon: '🔌' },
            { name: '📋 Message Queues', count: this.gameState.messageQueues, icon: '📋' },
            { name: '🔄 Retry Logic', count: this.gameState.retryLogic, icon: '🔄' }
        ];

        console.log('Updating resilience features:', features);
        console.log('Cache efficiency:', this.gameState.cacheEfficiency);
        console.log('Observability score:', this.gameState.observabilityScore);

        resilienceContainer.innerHTML = features.map(feature => `
            <div class="resilience-feature ${feature.count > 0 ? 'active' : ''}">
                <span class="resilience-feature-label">${feature.name}</span>
                <span class="resilience-feature-count">${feature.count}</span>
            </div>
        `).join('');
    }
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Wait for layout to settle
    setTimeout(() => {
        new ResilienceGame();
    }, 100);
});
