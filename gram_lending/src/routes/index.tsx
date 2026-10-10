import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Apple, Smartphone, Globe, Mic, NotebookPen, FlaskConical, Plus, Download } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gram — новый подход изучения языков" },
      { name: "description", content: "Скачайте Gram для iOS, Android и Web. Бизнес-язык с AI-фидбеком." },
      { property: "og:title", content: "Gram — изучение языков для бизнеса" },
      { property: "og:description", content: "Переговоры, питчи и деловая переписка без языкового барьера." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo({ size = 36, animate = false }: { size?: number; animate?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Gram">
      <rect width="64" height="64" rx="16" className="fill-card" />
      <path
        d="M44 22a15 15 0 1 0 2 15H33"
        pathLength={100}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        className={`stroke-primary ${animate ? "animate-draw" : ""}`}
        style={animate ? { strokeDasharray: 100, strokeDashoffset: 100 } : undefined}
      />
      <circle cx="46" cy="47" r="4" className="fill-primary" />
    </svg>
  );
}

const features = [
  { icon: Mic, t: "Speaking Labs", d: "Тренажёры устной речи на реальных кейсах: питчи, совещания, договоры." },
  { icon: NotebookPen, t: "Smart Notes", d: "Конспекты по темам,достаточно читать 15 минут в день для запоминания" },
  { icon: FlaskConical, t: "Тестирование", d: "Динамические тесты на контекст, идиомы и корпоративную терминологию." },
];

const platforms = [
  { icon: Apple, t: "iOS", s: "App Store · iOS 15+" },
  { icon: Smartphone, t: "Android", s: "Google Play · APK" },
  { icon: Globe, t: "Web", s: "Открыть в браузере" },
];

const faq = [
  { q: "Gram бесплатный?", a: "Да!Проект является open-source и введение оплаты для нас не соответствует нашей политике" },
  
  { q: "На каких устройствах работает?", a: "iOS и Android (Expo / React Native). Прогресс синхронизируется между устройствами." },
  { q: "Для какого уровня подходит?", a: "Для тех,кто готов учиться!Мы ориентируемся на разный уровень языков,для этого нужно пройти тест.Но главное - это желание изучать язык!" },
  { q: "Можно ли участвовать в разработке?", a: "Да! Мы приветствуем Pull Requests: новые языковые модули, промпты для AI, улучшения UI/UX." },
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] bg-glow" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-3">
          <Logo />
          <span className="font-display text-xl font-bold">Gram</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Возможности</a>
          <a href="#install" className="transition-colors hover:text-foreground">Установка</a>
          <a href="#faq" className="transition-colors hover:text-foreground">Вопросы</a>
        </nav>
        <a href="#install" className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105">
          Скачать
        </a>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 text-center">
        <div className="mx-auto mb-10 w-fit animate-float rise">
          <Logo size={112} animate />
        </div>
        <h1 className="rise mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-7xl" style={{ animationDelay: ".2s" }}>
          Язык бизнеса — <span className="text-gradient">без барьеров</span>
        </h1>
        <p className="rise mx-auto mt-6 max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: ".35s" }}>
          Переговоры, презентации, интервью и деловая переписка. AI-тьютор, который проверяет каждое ваше слово.
        </p>
        <div className="rise mt-10 flex flex-wrap justify-center gap-4" style={{ animationDelay: ".5s" }}>
          <a href="#install" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-[0_0_40px_-5px_var(--color-primary)] transition-transform hover:scale-105">
            <Download size={18} /> Установить Gram
          </a>
          <a href="#features" className="rounded-full glass px-8 py-4 font-medium transition-colors hover:bg-secondary">
            Узнать больше
          </a>
        </div>
      </section>

      <div className="relative z-10 border-y border-border py-5">
        <div className="flex w-max animate-marquee gap-12 font-display text-2xl text-muted-foreground">
          {[...Array(2)].flatMap((_, k) =>
            ["Negotiations", "Pitch", "Cold Email", "Interview", "Meetings", "Contracts", "Tone of Voice", "Small Talk"].map((w) => (
              <span key={k + w} className="flex items-center gap-12">{w}<span className="text-primary">●</span></span>
            )),
          )}
        </div>
      </div>

      <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <h2 className="reveal mb-14 text-3xl font-bold md:text-5xl">Всё для <span className="text-gradient">карьерного</span> языка</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.t}
              className="reveal group rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <f.icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-bold">{f.t}</h3>
              <p className="text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="install" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="reveal rounded-[2.5rem] glass bg-glow p-10 md:p-16">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Установите Gram</h2>
          <p className="mb-12 max-w-xl text-muted-foreground">Одна учётная запись — прогресс на всех устройствах.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {platforms.map((p) => (
              <a key={p.t} href="#" className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon size={26} />
                </div>
                <div>
                  <div className="font-display font-bold">{p.t}</div>
                  <div className="text-sm text-muted-foreground">{p.s}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
            {["Скачайте приложение", "Пройдите тест уровня", "Начните первый Speaking Lab"].map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary font-display text-primary">{i + 1}</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto max-w-3xl px-6 py-28">
        <h2 className="reveal mb-12 text-center text-3xl font-bold md:text-5xl">Вопросы</h2>
        <div className="space-y-3">
          {faq.map((f, i) => (
            <div key={f.q} className="reveal rounded-2xl glass" style={{ transitionDelay: `${i * 60}ms` }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left font-bold">
                {f.q}
                <Plus className={`shrink-0 text-primary transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
              </button>
              <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="overflow-hidden px-6 text-muted-foreground"><span className="block pb-6">{f.a}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3"><Logo size={28} /> Gram - расширяй мышление © 2026</div>
          
        </div>
      </footer>
    </div>
  );
}
