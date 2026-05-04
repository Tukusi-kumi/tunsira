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
];

// Render Characters
function renderCharacters() {
  const grid = document.getElementById('charactersGrid');
  grid.innerHTML = characters.map((character, index) => `
    <div class="modern-card p-4 text-center group cursor-pointer character-card animate-on-scroll" style="animation-delay: ${index * 0.1}s">
      <div class="text-4xl mb-2 text-primary font-bold">${character.image}</div>
      <h3 class="text-lg font-bold text-primary mb-1">${character.name}</h3>
      <p class="text-dark font-semibold mb-1 text-sm">${character.role}</p>
      <p class="text-gray text-xs">${character.description}</p>
    </div>
  `).join('');
}

// Render Episodes
function renderEpisodes() {
  const grid = document.getElementById('episodesGrid');
  grid.innerHTML = episodes.map((episode, index) => `
    <a href="novel.html?episode=${episode.id}" class="block">
      <div class="modern-card p-6 flex gap-6 cursor-pointer episode-card animate-on-scroll flex-col sm:flex-row" style="animation-delay: ${index * 0.15}s">
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
}

// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle('hidden', !isMenuOpen);
});

// Close mobile menu when clicking links
document.querySelectorAll('.mobile-menu-link').forEach(link => {
  link.addEventListener('click', () => {
    isMenuOpen = false;
    mobileMenu.classList.add('hidden');
  });
});

// Smooth scroll for anchor links
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderCharacters();
  renderEpisodes();

  // Scroll Animation Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, observerOptions);

  // Observe all animate-on-scroll elements
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
