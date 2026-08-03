// Data
const characters = [
  { id: 1, name: '土筆久美（つくし　くみ）', role: '主人公', description: '百合小説が好きな中学一年生。おとなしくて読書が好き。', image: '土' },
  { id: 2, name: '天原愛（あまはら　めぐみ）', role: 'クラスメイト', description: '明るくて少し強引な性格。土筆の秘密を知ってから関係が急接近。', image: '天' },
  { id: 3, name: '星村さん', role: 'クラスメイト', description: '無言で校庭を眺めることが多い。薄笑いを浮かべるミステリアスな存在。', image: '星' },
  { id: 4, name: '土筆の妹', role: '家族', description: 'おねえちゃんの買った本に興味津々。元気な性格。', image: '妹' },
  { id: 5, name: '竹井さん', role: 'クラスメイト', description: '真面目に机に向かう優等生。昼休みは教室に残ることが多い。', image: '竹' },
];

const episodes = [
  { id: 1, title: '第一話　あの子の秘密', date: '2025-12-31', description: '土筆の秘密と天原さんとの出会い' },
  { id: 2, title: '第二話　命令！？', date: '2025-12-31', description: '天原さんからの突然の命令' },
  { id: 3, title: '第三話　初デート！？', date: '2026-01-18', description: '二人きりの初めての外出' },
  { id: 4, title: '第四話　席替え', date: '2026-02-23', description: '運命の席替えと隣になった天原さん' },
  { id: 5, title: '第五話　休日の本屋', date: '2026-03-16', description: '本屋での星村さんとの遭遇' },
  { id: 6, title: '第六話　放課後の教室', date: '2026-04-20', description: '星村さんとの放課後の対面' },
  { id: 7, title: '第七話　タイムリミット', date: '2026-08-04', description: '妹によるお姉ちゃんの秘密調査' },
];

let newsItems = [];

// Load news from JSON file
async function loadNews() {
  try {
    const response = await fetch('news.json');
    newsItems = await response.json();
  } catch (error) {
    console.error('Failed to load news:', error);
    // Fallback data
    newsItems = [
      {
        id: 1,
        title: '第六話「放課後の教室」公開',
        date: '2026-04-20',
        content: '第六話「放課後の教室」を公開しました。'
      },
      {
        id: 2,
        title: 'サイトリニューアル',
        date: '2026-04-15',
        content: 'サイトをモダンなデザインにリニューアルしました。'
      }
    ];
  }
}

// Render Characters
function renderCharacters() {
  const grid = document.getElementById('charactersGrid');
  grid.innerHTML = characters.map((character, index) => `
    <div class="modern-card p-4 text-center group cursor-pointer character-card grid-item" style="transition-delay: ${index * 100}ms">
      <div class="text-4xl mb-2 text-primary font-bold">${character.image}</div>
      <h3 class="text-lg font-bold text-primary mb-1">${character.name}</h3>
      <p class="text-dark font-semibold mb-1 text-sm">${character.role}</p>
      <p class="text-gray text-xs">${character.description}</p>
    </div>
  `).join('');
  
  // Add stagger animation
  setTimeout(() => {
    document.querySelectorAll('.character-card').forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 100);
    });
  }, 100);
}

// Render Episodes
function renderEpisodes() {
  const grid = document.getElementById('episodesGrid');
  grid.innerHTML = episodes.map((episode, index) => `
    <a href="novel.html?episode=${episode.id}" class="block">
      <div class="modern-card p-6 flex gap-6 cursor-pointer episode-card flex-col sm:flex-row grid-item" style="transition-delay: ${index * 100}ms">
        <div class="flex-shrink-0 flex justify-center sm:justify-start">
          <div class="w-20 h-20 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-2xl">
            ${episode.id}
          </div>
        </div>
        <div class="flex-1 text-center sm:text-left">
          <h3 class="text-xl font-bold text-primary mb-2">${episode.title}</h3>
          <p class="text-gray mb-2">${episode.description}</p>
          <div class="flex items-center gap-2 text-sm text-gray justify-center sm:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${episode.date}
          </div>
        </div>
      </div>
    </a>
  `).join('');
  
  // Add stagger animation
  setTimeout(() => {
    document.querySelectorAll('.episode-card').forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 100);
    });
  }, 100);
}

// Render News Preview (top 2 items)
function renderNewsPreview() {
  const newsPreview = document.getElementById('newsPreview');
  if (!newsPreview) return;
  
  const latestNews = newsItems.slice(0, 2);
  newsPreview.innerHTML = latestNews.map(item => `
    <div class="modern-card p-4 hover:scale-105 transition-transform duration-300">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 text-sm text-gray whitespace-nowrap">
          ${item.date}
        </div>
        <div class="flex-1">
          <h3 class="font-bold text-primary mb-1">${item.title}</h3>
          <p class="text-gray text-sm">${item.content}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Mobile Menu
let menuBtn, mobileMenu, isMenuOpen = false;

function initMobileMenu() {
  menuBtn = document.getElementById('menuBtn');
  mobileMenu = document.getElementById('mobileMenu');
  
  if (!menuBtn || !mobileMenu) return;
  
  menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('hidden', !isMenuOpen);
    if (isMenuOpen) {
      mobileMenu.style.animation = 'fadeInUp 0.3s ease-out';
    }
  });
  
  // Close mobile menu when clicking links
  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      mobileMenu.classList.add('hidden');
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Header scroll effect
const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScrollY = currentScrollY;
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

// Observe all animate-on-scroll elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Typing Effect for Hero Section
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Loading Screen
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  const loadingBar = document.getElementById('loadingBar');
  
  if (!loadingScreen || !loadingBar) return;
  
  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      // Hide loading screen after a short delay
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }, 300);
    }
    loadingBar.style.width = progress + '%';
  }, 200);
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize loading screen
  initLoadingScreen();
  
  // Load news from JSON file
  await loadNews();
  
  renderCharacters();
  renderEpisodes();
  renderNewsPreview();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Add scroll-triggered animations for sections
  const sections = document.querySelectorAll('section');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});
