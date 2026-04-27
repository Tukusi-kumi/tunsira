import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Play, Calendar, Users, Heart, Share2, Menu, X, Sparkles } from 'lucide-react';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  const news = [
    { id: 1, title: '小説「あの子の秘密」連載開始！', date: '2024-04-20', category: 'お知らせ' },
    { id: 2, title: '公式サイトオープン', date: '2024-04-18', category: 'サイト' },
    { id: 3, title: '次話更新のお知らせ', date: '2024-04-15', category: '更新' },
    { id: 4, title: 'イラスト公開決定！', date: '2024-04-10', category: 'コンテンツ' },
    { id: 5, title: '新キャラクター紹介', date: '2024-04-05', category: 'キャラクター' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-retro-light">
      {/* Retro Marquee Header */}
      <div className="retro-marquee">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-8">🌸 ツンしら公式サイト 🌸</span>
          <span className="mx-8">💖 百合小説 💖</span>
          <span className="mx-8">📚 学園恋愛 📚</span>
          <span className="mx-8">🌸 ツンしら公式サイト 🌸</span>
          <span className="mx-8">💖 百合小説 💖</span>
          <span className="mx-8">📚 学園恋愛 📚</span>
        </div>
      </div>
      
      {/* Header */}
      <header className="fixed top-8 w-full z-50 bg-white border-4 border-retro-primary shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="retro-title flex items-center gap-2">
              <span className="retro-blink">★</span>
              ツンしら
              <span className="retro-blink">★</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#story" className="text-retro-primary font-bold hover:text-retro-dark hover:underline">ストーリー</a>
              <a href="#characters" className="text-retro-primary font-bold hover:text-retro-dark hover:underline">登場人物</a>
              <a href="#episodes" className="text-retro-primary font-bold hover:text-retro-dark hover:underline">エピソード</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <a href="#story" onClick={() => setIsMenuOpen(false)} className="text-retro-primary font-bold hover:underline">ストーリー</a>
            <a href="#characters" onClick={() => setIsMenuOpen(false)} className="text-retro-primary font-bold hover:underline">登場人物</a>
            <a href="#episodes" onClick={() => setIsMenuOpen(false)} className="text-retro-primary font-bold hover:underline">エピソード</a>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="text-8xl mb-4 retro-blink">★</div>
            <h1 className="retro-title mb-6">
              ツンしら公式サイト
            </h1>
            <div className="retro-marquee mb-8">
              <div className="animate-marquee whitespace-nowrap">
                <span>百合小説が好きな女子高生の切ない学園恋愛</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="#episodes">
              <button className="retro-button flex items-center justify-center gap-3 text-lg">
                <Play className="w-6 h-6" />
                小説を読む
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="retro-section">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-retro-primary text-white px-6 py-2 mb-4">
              <h2 className="text-2xl font-black">ストーリー</h2>
            </div>
            <p className="text-retro-dark max-w-2xl mx-auto text-lg">
              魔法少女たちのきらきらした冒険の物語。
              友情、愛、そして夢を追いかける感動のストーリーが今始まる！
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="retro-card p-8">
              <h3 className="text-2xl font-black text-retro-primary mb-6 retro-blink">あらすじ</h3>
              <p className="text-retro-dark leading-relaxed text-lg">
                百合小説が大好きな女子高生・土筆（つくし）。
                その秘密をクラスメイトの天原さんに知られてしまい…？
                二人の関係が急接近する学園恋愛物語が始まる！
                席替えで隣になった天原さん、本屋で出会った星村さん。
                揺れる少女心を描いた切ないストーリー。
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="retro-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-retro-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  📚
                </div>
                <div>
                  <h4 className="font-black text-retro-primary text-lg">百合小説</h4>
                  <p className="text-retro-dark/70">主人公の大切な趣味</p>
                </div>
              </div>
              
              <div className="retro-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-retro-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  💖
                </div>
                <div>
                  <h4 className="font-black text-retro-primary text-lg">学園恋愛</h4>
                  <p className="text-retro-dark/70">少女たちの関係性</p>
                </div>
              </div>
              
              <div className="retro-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-retro-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  🌸
                </div>
                <div>
                  <h4 className="font-black text-retro-primary text-lg">登場人物</h4>
                  <p className="text-retro-dark/70">魅力的な女子高生たち</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="retro-section bg-retro-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-retro-primary text-white px-6 py-2 mb-4">
              <h2 className="text-2xl font-black">登場人物</h2>
            </div>
            <p className="text-retro-dark max-w-2xl mx-auto text-lg">
              物語を彩る魅力的な女子高生たちをご紹介
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {characters.map((character, index) => (
              <div key={character.id} className="retro-card p-4 text-center group cursor-pointer">
                <div className="text-4xl mb-2 text-retro-primary font-bold">{character.name.charAt(0)}</div>
                <h3 className="text-lg font-black text-retro-primary mb-1">{character.name}</h3>
                <p className="text-retro-dark font-bold mb-1 text-sm">{character.role}</p>
                <p className="text-retro-dark/70 text-xs">{character.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" className="retro-section">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-retro-primary text-white px-6 py-2 mb-4">
              <h2 className="text-2xl font-black">エピソード</h2>
            </div>
            <p className="text-retro-dark max-w-2xl mx-auto text-lg">
              各回の見どころ紹介
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {episodes.map((episode, index) => (
              <Link to={`/novel?episode=${episode.id}`} key={episode.id}>
                <div className="retro-card p-6 flex gap-6 cursor-pointer hover:translate-x-2 hover:translate-y-2 transition-transform">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-retro-primary rounded-lg flex items-center justify-center">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-5 h-5 text-retro-primary" />
                      <span className="text-retro-primary font-bold">{episode.date}</span>
                    </div>
                    <h3 className="text-xl font-black text-retro-primary mb-3">{episode.title}</h3>
                    <p className="text-retro-dark/70 text-lg">{episode.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-retro-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                <span className="retro-blink">★</span>
                ツンしら
                <span className="retro-blink">★</span>
              </h3>
              <p className="font-medium">
                「ツンしら」公式サイト
              </p>
            </div>
            
            <div>
              <h4 className="font-black mb-4 text-lg retro-blink">コンテンツ</h4>
              <ul className="space-y-2">
                <li><a href="#story" className="hover:underline">ストーリー</a></li>
                <li><a href="#characters" className="hover:underline">登場人物</a></li>
                <li><a href="#episodes" className="hover:underline">エピソード</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black mb-4 text-lg retro-blink">お問い合わせ</h4>
              <ul className="space-y-2">
                <li>サポートセンター</li>
                <li>ライセンス情報</li>
                <li>プライバシーポリシー</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-4 border-white pt-8 text-center">
            <p className="text-lg font-medium">&copy; 2026 ツンしら</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
