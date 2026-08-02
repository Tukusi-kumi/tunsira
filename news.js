// News Data
const newsItems = [
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
  },
  {
    id: 3,
    title: '第五話「休日の本屋」公開',
    date: '2026-03-16',
    content: '第五話「休日の本屋」を公開しました。'
  },
  {
    id: 4,
    title: '第四話「席替え」公開',
    date: '2026-02-23',
    content: '第四話「席替え」を公開しました。'
  },
  {
    id: 5,
    title: '第三話「初デート！？」公開',
    date: '2026-01-18',
    content: '第三話「初デート！？」を公開しました。'
  },
  {
    id: 6,
    title: '第二話「命令！？」公開',
    date: '2025-12-31',
    content: '第二話「命令！？」を公開しました。'
  },
  {
    id: 7,
    title: '第一話「あの子の秘密」公開',
    date: '2025-12-31',
    content: '第一話「あの子の秘密」を公開しました。'
  },
  {
    id: 8,
    title: 'サイトオープン',
    date: '2025-12-25',
    content: '「ツンしら」公式サイトをオープンしました。'
  }
];

// Render news items
function renderNews() {
  const newsList = document.getElementById('newsList');
  newsList.innerHTML = newsItems.map(item => `
    <div class="modern-card p-4">
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderNews();
});
