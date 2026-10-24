import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, ArrowUp, Leaf, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { categories, filterDishes, formatPrice, type Category, type Dish } from '@/lib/menu';
import heroImage from '@/assets/lume-table.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Lume — Sabores que acolhem' },
    { name: 'description', content: 'Conheça o cardápio do Lume. Entradas, pratos principais e sobremesas em uma experiência feita para saborear com calma. Projeto fictício de portfólio.' },
    { property: 'og:title', content: 'Lume — Sabores que acolhem' },
    { property: 'og:description', content: 'Boa comida, ingredientes frescos e o prazer de estar à mesa. Explore o cardápio do Lume.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Index() {
  const [category, setCategory] = useState<Category>('Todos');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const visibleDishes = filterDishes(category);
  return (
    <>
      <header className="site-header page-width" id="inicio">
        <a href="#inicio" className="wordmark" aria-label="Lume, início">lume<span className="text-primary">.</span></a>
        <nav className="header-nav" aria-label="Navegação principal">
          <a className="nav-link" href="#cardapio">Nosso cardápio</a>
          <a className="nav-link" href="#essencia">A essência</a>
        </nav>
        <span className="portfolio-label micro-label"><span className="portfolio-dot" /> Gastronomia & afeto</span>
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={heroImage} alt="Risoto de cogumelos à mesa, acompanhado de vinho e bruschetta" width={1536} height={1024} fetchPriority="high" />
          <div className="hero-inner page-width">
            <span className="hero-eyebrow">O prazer de estar à mesa</span>
            <h1 className="hero-title" id="hero-title">Lume<span className="text-accent">.</span></h1>
            <p className="hero-tagline">Sabores que acolhem.<br /><em>Momentos que ficam.</em></p>
            <p className="hero-copy">Ingredientes frescos, receitas com alma e o tempo certo para saborear cada encontro.</p>
            <Button variant="hero" asChild><a href="#cardapio">Explore o cardápio <ArrowDown /></a></Button>
          </div>
          <div className="hero-bottom page-width z-10">
            <span className="hero-bottom-note">Feito com cuidado. Servido com afeto.</span>
            <div className="hero-dish">À mesa hoje<span>Risoto de Cogumelos</span></div>
          </div>
        </section>
        <div className="intro-strip">
          <div className="intro-strip-inner page-width">
            <p>A boa comida aproxima.</p>
            <span className="strip-detail"><Leaf size={15} strokeWidth={1.3} /> Ingredientes frescos, sempre.</span>
          </div>
        </div>
        <section id="cardapio" className="menu-section page-width" aria-labelledby="menu-title">
          <div className="menu-heading">
            <div><p className="section-kicker micro-label">Nosso cardápio</p><h2 className="section-title" id="menu-title">À mesa, <em>com calma.</em></h2></div>
            <p className="menu-heading-copy">Do primeiro sabor à última colherada.<br />Encontre o seu próximo favorito.</p>
          </div>
          <div className="menu-tabs" role="tablist" aria-label="Categorias do cardápio">
            {categories.map(item => <Button key={item} variant="menuTab" role="tab" aria-selected={category === item} onClick={() => setCategory(item)}>{item}</Button>)}
            <span className="menu-count">{visibleDishes.length.toString().padStart(2, '0')} pratos à sua escolha</span>
          </div>
          <div className="dish-grid" role="tabpanel" aria-label={category}>
            {visibleDishes.map(dish => (
              <article className="dish-card" key={dish.id}>
                <div className="dish-photo">
                  <img src={dish.image} alt={dish.name} loading="lazy" width={600} height={420} />
                  <Button variant="dishDetail" size="icon" aria-label={`Ver ${dish.name}`} title={`Ver ${dish.name}`} onClick={() => setSelectedDish(dish)}><Plus size={18} strokeWidth={1.4} /></Button>
                </div>
                <p className="dish-category">{dish.category}</p>
                <div className="dish-name-row"><h3 className="dish-name">{dish.name}</h3><span className="dish-price">{formatPrice(dish.price)}</span></div>
                <p className="dish-description">{dish.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="about-section" id="essencia" aria-labelledby="about-title">
          <div className="page-width about-inner">
            <div className="about-wordmark">lume.</div>
            <h2 className="about-quote" id="about-title">Mais do que uma refeição.<br /><em>Um momento para estar.</em></h2>
            <p className="about-copy">Acreditamos na beleza do simples: uma mesa posta, uma boa conversa e sabores preparados com cuidado.</p>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <span className="footer-credit">© 2026 Lume <span>·</span> Projeto fictício de portfólio</span>
        <Button variant="link" asChild size="sm"><a href="#inicio">Voltar ao topo <ArrowUp size={14} /></a></Button>
      </footer>
      <Dialog open={selectedDish !== null} onOpenChange={open => { if (!open) setSelectedDish(null); }}>
        {selectedDish && <DialogContent className="max-w-lg">
          <img className="dish-dialog-image" src={selectedDish.image} alt={selectedDish.name} width={600} height={400} />
          <p className="dish-category mb-0">{selectedDish.category}</p>
          <DialogTitle className="font-display text-3xl font-medium">{selectedDish.name}</DialogTitle>
          <DialogDescription className="leading-relaxed">{selectedDish.description}</DialogDescription>
          <div className="flex items-center justify-between border-t pt-4"><span className="text-lg font-medium">{formatPrice(selectedDish.price)}</span><Button variant="link" onClick={() => setSelectedDish(null)}>Voltar ao cardápio <ArrowUpRight /></Button></div>
        </DialogContent>}
      </Dialog>
    </>
  );
}
