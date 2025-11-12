* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f5f5;
}

/* Login Page */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                url('https://i.pinimg.com/1200x/96/ee/55/96ee551279c55efe9f0ff247d369ec97.jpg');
    background-size: cover;
    background-position: center;
}

.login-box {
    background: rgba(255, 255, 255, 0.95);
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    width: 400px;
    text-align: center;
    backdrop-filter: blur(10px);
}

.login-logo {
    font-size: 36px;
    font-weight: bold;
    color: #2c5530;
    margin-bottom: 30px;
}

.login-form input {
    width: 100%;
    padding: 14px;
    margin: 12px 0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s;
}

.login-form input:focus {
    border-color: #2c5530;
    outline: none;
    box-shadow: 0 0 0 3px rgba(44, 85, 48, 0.1);
}

.login-btn {
    width: 100%;
    padding: 14px;
    background: #2c5530;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;
    transition: background 0.3s;
}

.login-btn:hover {
    background: #1e3a23;
    transform: translateY(-2px);
}

.login-links {
    margin-top: 20px;
}

.login-links a {
    color: #2c5530;
    text-decoration: none;
    margin: 0 10px;
    font-weight: 500;
}

/* Main App - Initially Hidden */
#recipeApp {
    display: none;
}

/* Header */
header {
    background: #2c5530;
    color: white;
    padding: 15px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.logo {
    font-size: 26px;
    font-weight: bold;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 25px;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
}

nav a.active, nav a:hover {
    background: rgba(255,255,255,0.15);
    transform: translateY(-2px);
}

/* Pages */
.page {
    display: none;
}

.page.active {
    display: block;
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('https://i.pinimg.com/736x/2e/b0/33/2eb0336898648e83cdb8182c04e9b4e2.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 80px 20px;
    margin-bottom: 40px;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 700;
}

.hero p {
    font-size: 20px;
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.search-bar {
    max-width: 600px;
    margin: 30px auto;
    display: flex;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-radius: 10px;
    overflow: hidden;
}

.search-bar input {
    flex: 1;
    padding: 16px 20px;
    border: none;
    font-size: 16px;
}

.search-bar button {
    padding: 0 25px;
    background: #2c5530;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
}

/* Main Content */
.main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 35px;
}

.sidebar {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    height: fit-content;
}

.sidebar h3 {
    margin-bottom: 20px;
    color: #2c5530;
    border-bottom: 3px solid #2c5530;
    padding-bottom: 8px;
    font-size: 20px;
}

.sidebar ul {
    list-style: none;
}

.sidebar li {
    margin: 12px 0;
}

.sidebar a {
    color: #555;
    text-decoration: none;
    padding: 10px 12px;
    display: block;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
}

.sidebar a.active, .sidebar a:hover {
    background: #f0f7f0;
    color: #2c5530;
    transform: translateX(8px);
}

/* Recipes Grid */
.recipes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.recipe-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
    cursor: pointer;
}

.recipe-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.recipe-img {
    height: 200px;
    background: #ddd;
    background-size: cover;
    background-position: center;
}

.recipe-info {
    padding: 25px;
}

.recipe-info h3 {
    margin-bottom: 12px;
    color: #2c5530;
    font-size: 20px;
}

.recipe-info p {
    color: #666;
    margin-bottom: 18px;
    line-height: 1.6;
}

.recipe-meta {
    display: flex;
    justify-content: space-between;
    color: #888;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 15px;
}

.recipe-feedback {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
}

.feedback-btn {
    background: #f8f9fa;
    border: 1px solid #e0e0e0;
    padding: 8px 15px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    color: #555;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 5px;
}

.feedback-btn:hover {
    background: #2c5530;
    color: white;
    border-color: #2c5530;
}

.feedback-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.feedback-modal.active {
    display: flex;
}

.feedback-form {
    background: white;
    padding: 30px;
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.feedback-form h3 {
    margin-bottom: 20px;
    color: #2c5530;
    text-align: center;
}

.feedback-stars {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 15px 0;
}

.feedback-star {
    font-size: 24px;
    color: #ddd;
    cursor: pointer;
    transition: color 0.2s;
}

.feedback-star.active {
    color: #ffc107;
}

.feedback-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

/* Recipe Detail Page */
.recipe-detail {
    max-width: 1000px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.recipe-header {
    position: relative;
}

.recipe-hero-img {
    height: 400px;
    background-size: cover;
    background-position: center;
}

.recipe-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 40px;
}

.recipe-title h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

.recipe-meta-info {
    display: flex;
    gap: 20px;
    font-size: 16px;
}

.recipe-content {
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.ingredients-section, .instructions-section {
    background: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
}

.ingredients-section h3, .instructions-section h3 {
    color: #2c5530;
    margin-bottom: 20px;
    font-size: 24px;
    border-bottom: 2px solid #2c5530;
    padding-bottom: 10px;
}

.ingredients-list {
    list-style: none;
}

.ingredients-list li {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
}

.ingredients-list li:before {
    content: "•";
    color: #2c5530;
    font-weight: bold;
    margin-right: 10px;
}

.instructions-list {
    list-style: none;
    counter-reset: step-counter;
}

.instructions-list li {
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    counter-increment: step-counter;
    position: relative;
    padding-left: 50px;
    line-height: 1.6;
}

.instructions-list li:before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 15px;
    background: #2c5530;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

/* Timer Section */
.timer-section {
    background: #2c5530;
    color: white;
    padding: 25px;
    text-align: center;
    margin-top: 30px;
    border-radius: 10px;
}

.timer-display {
    font-size: 48px;
    font-weight: bold;
    margin: 20px 0;
    font-family: monospace;
}

.timer-controls {
    display: flex;
    gap: 15px;
    justify-content: center;
}

.timer-btn {
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s;
}

.start-btn {
    background: #4CAF50;
    color: white;
}

.pause-btn {
    background: #FF9800;
    color: white;
}

.reset-btn {
    background: #f44336;
    color: white;
}

/* Navigation Buttons */
.recipe-nav {
    display: flex;
    justify-content: space-between;
    padding: 30px 40px;
    background: #f9f9f9;
    border-top: 1px solid #eee;
}

.nav-btn {
    padding: 12px 30px;
    background: #2c5530;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s;
}

.nav-btn:hover {
    background: #1e3a23;
    transform: translateY(-2px);
}

.nav-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
}

/* Forms */
.form-container {
    max-width: 700px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
    color: #2c5530;
    font-size: 16px;
}

.form-group input, 
.form-group textarea, 
.form-group select {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s;
}

.form-group input:focus, 
.form-group textarea:focus, 
.form-group select:focus {
    border-color: #2c5530;
    outline: none;
    box-shadow: 0 0 0 3px rgba(44, 85, 48, 0.1);
}

.form-group textarea {
    height: 140px;
    resize: vertical;
}

.submit-btn {
    background: #2c5530;
    color: white;
    padding: 14px 35px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
    font-weight: 600;
}

.submit-btn:hover {
    background: #1e3a23;
    transform: translateY(-2px);
}

/* Footer */
footer {
    background: #2c5530;
    color: white;
    text-align: center;
    padding: 30px;
    margin-top: 60px;
}

.message {
    padding: 15px;
    margin: 20px 0;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
}

.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.section-title {
    font-size: 32px;
    color: #2c5530;
    margin-bottom: 30px;
    text-align: center;
    position: relative;
    font-weight: 700;
}

.section-title:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #2c5530;
    margin: 15px auto;
    border-radius: 2px;
}

/* Empty State */
.empty-state {
    text-align: center;
    padding: 60px 20px;
    color: #666;
    background: white;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    grid-column: 1/-1;
}

.empty-state h3 {
    font-size: 24px;
    margin-bottom: 15px;
    color: #2c5530;
}

.empty-state p {
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Star Rating */
.stars {
    display: flex;
    gap: 5px;
    margin: 10px 0;
}

.star {
    font-size: 24px;
    color: #ddd;
    cursor: pointer;
    transition: color 0.2s;
}

.star.active {
    color: #ffc107;
}

/* Responsive */
@media (max-width: 768px) {
    .main-content {
        grid-template-columns: 1fr;
    }
    
    .recipe-content {
        grid-template-columns: 1fr;
    }
    
    .hero h1 {
        font-size: 36px;
    }
    
    nav ul {
        gap: 15px;
    }
    
    .recipe-feedback {
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
    }
    
    .recipe-nav {
        flex-direction: column;
        gap: 15px;
    }
    
    .nav-btn {
        width: 100%;
        text-align: center;
    }
}
