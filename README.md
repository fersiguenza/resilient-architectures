# 🏗️ Architecture Game

An interactive fullscreen game designed to teach software architecture principles and resilient system design through hands-on gameplay.

## 🎯 Game Concept

Players start with a basic monolithic application and must implement new features while maintaining a resilient architecture. Each decision impacts different architectural metrics, forcing players to balance trade-offs and make strategic choices.

## 🎮 How to Play

### Starting State
- Begin with a monolith containing 3 basic features
- $5000 budget
- All metrics in safe ranges

### Core Mechanics

**For each new feature, choose:**

1. **Add to Monolith** ($200)
   - ✅ Quick and affordable
   - ❌ Increases maintenance burden
   - ❌ Increases deployment risk

2. **Create New Service** ($800)
   - ✅ Isolates functionality
   - ❌ Increases system complexity
   - ❌ Harder to trace/monitor

### 📊 Key Metrics

- **Monolith Load**: Maintenance burden (critical at 95%)
- **Service Complexity**: Microservice coordination overhead (critical at 90%)
- **Deploy Risk**: Chance of breaking changes
- **Monitor Difficulty**: How hard it is to debug issues

### 🛠️ Resilience Tools

- **Cache Layer** ($300): Reduces system load
- **Monitor** ($500): Improves observability
- **Refactor** ($1000): Reduces maintenance burden

## 🏆 Victory Conditions

- Implement 10+ features
- Keep all metrics below 80%
- Maintain positive budget
- Build a truly resilient system!

## 🎓 Learning Objectives

### Architecture Patterns
- **Monolith vs Microservices**: When to split, when to keep together
- **Service Boundaries**: Proper decomposition strategies
- **System Complexity**: Managing distributed system overhead

### Resilience Principles
- **Bulkhead Pattern**: Isolating failures
- **Observability**: Monitoring and tracing
- **Graceful Degradation**: Handling partial failures

### Trade-off Analysis
- **Development Speed vs Maintenance**
- **Simplicity vs Scalability** 
- **Coupling vs Coordination Overhead**

## 🚀 Running the Game

1. Open `index.html` in any modern web browser
2. No installation required - pure HTML5/CSS/JavaScript
3. Works offline once loaded

## 🎨 Visual Features

- **Modern Montserrat Typography**: Clean, professional fonts
- **Fullscreen Layout**: Perfect for presentations
- **Real-time Architecture Visualization**: See your system grow
- **Color-coded Health Indicators**: Green/Yellow/Red status
- **Clean Metrics Dashboard**: Track all system health
- **Responsive Design**: Adapts to screen size

## 📚 Educational Use

Perfect for:
- Architecture workshops and talks
- Technical training sessions
- University software engineering courses
- Team building exercises
- Conference demos

## 🔧 Technical Implementation

- **Frontend**: HTML5 Canvas, CSS3, Vanilla JavaScript
- **No Dependencies**: Runs in any modern browser
- **Responsive Design**: Works on desktop and large screens
- **Professional Styling**: Clean, presentation-ready interface

## 🎯 Advanced Features (Future)

- **Chaos Engineering**: Random failure events
- **Team Management**: Coordination costs with team size
- **Performance Scenarios**: Load testing challenges
- **Security Layers**: Authentication, authorization patterns
- **Data Consistency**: CAP theorem scenarios
- **Cost Analysis**: Cloud infrastructure costs

## 🤝 Contributing

Ideas for improvements:
- Additional resilience patterns
- More sophisticated failure scenarios
- Multiplayer collaboration mode
- Historical architecture case studies
- Performance optimization challenges

## 📖 Architecture Principles Taught

1. **Single Responsibility**: Services should have one reason to change
2. **Loose Coupling**: Minimize dependencies between components
3. **High Cohesion**: Related functionality should be grouped together
4. **Fail Fast**: Early detection and handling of problems
5. **Circuit Breaker**: Prevent cascading failures
6. **Bulkhead**: Isolate critical resources
7. **Timeout**: Don't wait forever for responses
8. **Retry**: Handle transient failures gracefully
9. **Monitoring**: You can't fix what you can't see
10. **Graceful Degradation**: Partial functionality is better than total failure

---

**Have fun building resilient architectures! 🏗️✨**
