// Theme Management
const ThemeManager = {
  currentTheme: 'modern', // Default to modern theme
  audioContext: null,
  
  init() {
    // Load saved theme from localStorage (only if explicitly saved)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'retro') {
      this.currentTheme = 'retro';
    } else {
      // Default to modern theme
      this.currentTheme = 'modern';
      localStorage.removeItem('theme'); // Clear any invalid theme
    }
    
    // Apply the theme
    this.applyTheme(this.currentTheme);
    
    // Add theme toggle button to all pages
    this.addThemeToggleButton();
    
    // Initialize button click sounds
    this.initButtonClickSounds();
  },
  
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'modern' ? 'retro' : 'modern';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
    
    // Play retro sound when switching to retro theme
    if (this.currentTheme === 'retro') {
      this.playRetroSound();
    }
  },
  
  applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === 'retro') {
      html.setAttribute('data-theme', 'retro');
      this.applyRetroInlineStyles();
    } else {
      html.removeAttribute('data-theme');
      this.applyModernInlineStyles();
    }
    
    // Update button text
    this.updateThemeButton();
  },
  
  applyRetroInlineStyles() {
    // Update loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.style.border = '4px double #00FF00';
      loadingScreen.querySelector('h1').style.color = '#00FF00';
      loadingScreen.querySelector('.text-6xl').style.color = '#00FF00';
      loadingScreen.querySelector('p').style.color = '#00FF00';
      loadingScreen.querySelector('#loadingBar').style.background = '#00FF00';
      loadingScreen.querySelector('#loadingBar').parentElement.style.border = '2px solid #00FF00';
    }
    
    // Update header
    const header = document.getElementById('header');
    if (header) {
      header.style.background = '#000000';
      header.style.borderBottom = '3px solid #00FF00';
      header.style.boxShadow = 'none';
    }
    
    // Update header stars
    const headerStars = header?.querySelectorAll('span');
    if (headerStars) {
      headerStars.forEach(star => star.style.color = '#00FF00');
    }
    
    // Update navigation links
    const navLinks = header?.querySelectorAll('a');
    if (navLinks) {
      navLinks.forEach(link => {
        link.style.color = '#00FF00';
      });
    }
    
    // Update mobile menu button
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
      menuBtn.style.background = '#000000';
      menuBtn.style.border = '2px solid #00FF00';
      menuBtn.style.color = '#00FF00';
    }
    
    // Update mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.style.background = '#000000';
      mobileMenu.style.border = '4px double #00FF00';
    }
    
    // Update mobile menu links
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    if (mobileLinks) {
      mobileLinks.forEach(link => {
        link.style.color = '#00FF00';
      });
    }
    
    // Update hero section
    const heroSection = document.querySelector('section');
    if (heroSection) {
      heroSection.style.background = '#000000';
      heroSection.style.border = '4px double #00FF00';
    }
    
    // Update hero star
    const heroStar = heroSection?.querySelector('.text-4xl, .text-5xl');
    if (heroStar) {
      heroStar.style.color = '#00FF00';
    }
    
    // Update page titles
    const pageTitles = document.querySelectorAll('h1');
    pageTitles.forEach(title => {
      title.style.color = '#00FF00';
    });
    
    // Update episode title (for novel.html)
    const episodeTitle = document.getElementById('episodeTitle');
    if (episodeTitle) {
      episodeTitle.style.color = '#00FF00';
      episodeTitle.parentElement.style.background = '#000000';
      episodeTitle.parentElement.style.border = '3px double #00FF00';
      episodeTitle.parentElement.classList.remove('bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-white');
    }
    
    // Update main content background
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.style.background = '#000000';
    }
    
    // Update footer
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.background = '#000000';
      footer.style.borderTop = '4px double #00FF00';
      footer.style.color = '#00FF00';
      footer.classList.remove('bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-white');
    }
  },
  
  applyModernInlineStyles() {
    // Update loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.style.border = 'none';
      loadingScreen.style.background = 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)';
      loadingScreen.querySelector('h1').style.color = '#FF1493';
      loadingScreen.querySelector('.text-6xl').style.color = '#FF1493';
      loadingScreen.querySelector('p').style.color = '#666666';
      loadingScreen.querySelector('#loadingBar').style.background = '#000000';
      loadingScreen.querySelector('#loadingBar').parentElement.style.border = 'none';
      loadingScreen.querySelector('#loadingBar').parentElement.style.background = '#e5e7eb';
    }
    
    // Update header
    const header = document.getElementById('header');
    if (header) {
      header.style.background = 'rgba(255, 255, 255, 0.7)';
      header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
      header.style.backdropFilter = 'blur(10px)';
    }
    
    // Update header stars
    const headerStars = header?.querySelectorAll('span');
    if (headerStars) {
      headerStars.forEach(star => {
        star.style.color = '';
        star.classList.add('text-primary', 'animate-spin-slow');
      });
    }
    
    // Update navigation links
    const navLinks = header?.querySelectorAll('a');
    if (navLinks) {
      navLinks.forEach(link => {
        link.style.color = '';
        link.classList.add('text-dark');
      });
    }
    
    // Update mobile menu button
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
      menuBtn.style.background = '';
      menuBtn.style.border = '';
      menuBtn.style.color = '';
    }
    
    // Update mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.style.background = 'rgba(255, 255, 255, 0.95)';
      mobileMenu.style.backdropFilter = 'blur(10px)';
      mobileMenu.style.border = '';
    }
    
    // Update mobile menu links
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    if (mobileLinks) {
      mobileLinks.forEach(link => {
        link.style.color = '';
        link.classList.add('text-dark');
      });
    }
    
    // Update hero section
    const heroSection = document.querySelector('section');
    if (heroSection) {
      heroSection.style.background = '';
      heroSection.style.border = '';
    }
    
    // Update hero star
    const heroStar = heroSection?.querySelector('.text-4xl, .text-5xl');
    if (heroStar) {
      heroStar.style.color = '';
    }
    
    // Update page titles
    const pageTitles = document.querySelectorAll('h1');
    pageTitles.forEach(title => {
      title.style.color = '';
      title.classList.add('text-primary');
    });
    
    // Update episode title (for novel.html)
    const episodeTitle = document.getElementById('episodeTitle');
    if (episodeTitle) {
      episodeTitle.style.color = '';
      episodeTitle.parentElement.style.background = '';
      episodeTitle.parentElement.style.border = '';
      episodeTitle.parentElement.classList.add('bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-white');
    }
    
    // Update main content background
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.style.background = '';
    }
    
    // Update footer
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.background = '';
      footer.style.borderTop = '';
      footer.style.color = '';
      footer.classList.add('bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-white');
    }
  },
  
  addThemeToggleButton() {
    // Only add button on index.html (top page)
    if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
      return;
    }
    
    // Create theme toggle button
    const themeBtn = document.createElement('button');
    themeBtn.id = 'themeToggle';
    themeBtn.className = 'modern-button';
    themeBtn.style.padding = '0.75rem 1.5rem';
    themeBtn.style.fontSize = '14px';
    themeBtn.style.marginTop = '1rem';
    themeBtn.innerHTML = '🎨 レトロモード';
    themeBtn.addEventListener('click', () => this.toggleTheme());
    
    // Add to footer
    const footer = document.querySelector('footer');
    if (footer) {
      const footerContent = footer.querySelector('.container');
      if (footerContent) {
        const themeBtnContainer = document.createElement('div');
        themeBtnContainer.style.marginTop = '1rem';
        themeBtnContainer.appendChild(themeBtn);
        footerContent.appendChild(themeBtnContainer);
      }
    }
    
    this.updateThemeButton();
  },
  
  updateThemeButton() {
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.innerHTML = this.currentTheme === 'modern' ? '🎨 レトロに切替' : '🎨 モダンに切替';
    }
  },
  
  playRetroSound() {
    try {
      // Create audio context if not exists
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      // Create oscillator for retro beep sound
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      // Set retro-style parameters
      oscillator.type = 'square'; // Square wave for retro sound
      oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime); // A4 note
      oscillator.frequency.exponentialRampToValueAtTime(880, this.audioContext.currentTime + 0.1); // Slide up to A5
      
      // Set volume envelope
      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
      
      // Play sound
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.2);
      
      // Play second beep for retro effect
      setTimeout(() => {
        const oscillator2 = this.audioContext.createOscillator();
        const gainNode2 = this.audioContext.createGain();
        
        oscillator2.connect(gainNode2);
        gainNode2.connect(this.audioContext.destination);
        
        oscillator2.type = 'square';
        oscillator2.frequency.setValueAtTime(880, this.audioContext.currentTime);
        oscillator2.frequency.exponentialRampToValueAtTime(1760, this.audioContext.currentTime + 0.1);
        
        gainNode2.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode2.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        
        oscillator2.start(this.audioContext.currentTime);
        oscillator2.stop(this.audioContext.currentTime + 0.2);
      }, 150);
      
    } catch (error) {
      console.error('Error playing retro sound:', error);
    }
  },
  
  playButtonClickSound() {
    // Only play sound in retro theme
    if (this.currentTheme !== 'retro') {
      return;
    }
    
    try {
      // Create audio context if not exists
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      // Create oscillator for button click sound
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      // Set retro-style parameters for button click
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(880, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(440, this.audioContext.currentTime + 0.05);
      
      // Set volume envelope
      gainNode.gain.setValueAtTime(0.08, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
      
      // Play sound
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.1);
      
    } catch (error) {
      console.error('Error playing button click sound:', error);
    }
  },
  
  initButtonClickSounds() {
    // Add click event listener to all buttons
    document.addEventListener('click', (e) => {
      // Check if clicked element is a button or contains a button
      const button = e.target.closest('button');
      if (button && !button.id.includes('themeToggle')) {
        this.playButtonClickSound();
      }
    });
  }
};

// Initialize theme manager when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
} else {
  ThemeManager.init();
}
