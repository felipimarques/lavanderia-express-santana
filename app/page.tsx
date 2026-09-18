import Image from "next/image";

const WA = "https://wa.me/5511991814685?text=Ol%C3%A1!%20Vi%20o%20site%20da%20%231%20Lavanderia%20Express%20e%20quero%20deixar%20minha%20roupa.";
const IG = "https://www.instagram.com/1lavanderiasantana/";

const agenda = [
  ["Tomar um café", "sem pressa, como manda o ritual"],
  ["Fazer seu treino", "a roupa lava enquanto o treino desagua"],
  ["Ir ao mercado", "e voltar com as compras e a roupa pronta"],
  ["Assistir série", "episódio duplo, sem culpa"],
];

export default function Page() {
  return (
    <>
      <div className="bg-pine-deep text-pine-mist text-[11px] sm:text-[13px] font-bold text-center py-2 px-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
          Santana · Zona Norte •
        </span>
        <span className="text-lime">★★★★★ 4.8 no Google</span>
        <span className="text-pine-mist/70 font-semibold">(54 avaliações)</span>
      </div>

      <header className="sticky top-0 z-50 bg-pine-deep/95 backdrop-blur border-b border-lime/25">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between gap-2">
          <a href="#inicio" className="flex items-center gap-2.5 min-w-0">
            <Image src="/images/logo.jpg" alt="#1 Lavanderia" width={40} height={40} className="rounded-xl shrink-0" />
            <span className="font-bold text-white text-lg truncate">#1 Lavanderia <span className="text-lime">Express</span></span>
          </a>
          <a href={WA} target="_blank" rel="noopener" className="shrink-0 bg-lime text-pine-deep font-bold text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 sm:py-2.5 hover:brightness-105 active:scale-95 transition whitespace-nowrap">
            Deixar minha roupa
          </a>
        </div>
      </header>

      <main>
        {/* HERO — o relógio para, a vida não */}
        <section id="inicio" className="bg-pine-deep text-white pt-12 pb-20 lg:pt-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute -right-10 top-10 font-bold text-[220px] sm:text-[320px] leading-none text-lime/10 select-none pointer-events-none">5</div>
          <div className="max-w-6xl mx-auto px-4 relative grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h1 className="font-bold text-[38px] sm:text-5xl lg:text-[62px] leading-[1.05] tracking-tight">
                Sua roupa lava.
                <br />
                <span className="text-lime">Sua vida continua.</span>
              </h1>
              <p className="mt-5 text-lg text-pine-mist/80 max-w-md leading-relaxed">
                Lavanderia express em Santana. Você entrega, vai viver, e volta
                para pegar tudo limpo — como deve ser.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
                <a href={WA} target="_blank" rel="noopener" className="flex-1 text-center bg-lime text-pine-deep font-bold text-lg rounded-2xl px-6 py-4 hover:brightness-105 active:scale-95 transition">
                  Chamar no WhatsApp
                </a>
                <a href="#agenda" className="flex-1 text-center border-2 border-lime/50 text-lime font-bold text-lg rounded-2xl px-6 py-4 hover:bg-lime/10 transition">
                  Ver a agenda
                </a>
              </div>
            </div>
            {/* CADERNO — a lista real do Instagram */}
            <div className="lg:col-span-6">
              <div className="relative bg-[#FFFEF7] text-pine-deep rounded-2xl shadow-2xl max-w-md mx-auto rotate-1 overflow-hidden">
                <div className="flex gap-2 justify-center pt-3">
                  {[...Array(8)].map((_, i) => (
                    <span key={i} className="w-2.5 h-2.5 rounded-full bg-pine/25 ring-2 ring-pine/40" />
                  ))}
                </div>
                <div className="px-6 pb-6 pt-2">
                  <p className="font-script font-bold text-2xl text-pine rotate-[-1deg]">enquanto sua roupa lava ↓</p>
                  <ul className="mt-3 space-y-3">
                    {agenda.map(([t, d]) => (
                      <li key={t} className="flex items-start gap-3 border-b-2 border-dashed border-pine/20 pb-3">
                        <span className="w-6 h-6 rounded-md border-2 border-pine/40 flex items-center justify-center font-script font-bold text-xl text-pine-deep shrink-0 mt-0.5">✓</span>
                        <div>
                          <div className="font-bold">{t}</div>
                          <div className="text-sm text-pine-deep/60">{d}</div>
                        </div>
                      </li>
                    ))}
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-pine flex items-center justify-center text-lime font-bold text-sm shrink-0 mt-0.5">+</span>
                      <div>
                        <div className="font-bold">Buscar a roupa cheirosa</div>
                        <div className="text-sm text-pine-deep/60">no caminho de casa</div>
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-pine-deep/50 font-semibold">lista de verdade, do nosso Instagram @1lavanderiasantana</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOALHAS — foto real */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-80 sm:h-[420px] rounded-[32px] overflow-hidden border-4 border-white shadow-xl -rotate-1">
              <Image src="/images/post-05.jpg" alt="Toalhas sempre frescas" fill className="object-cover" />
              <span className="absolute bottom-4 left-4 bg-pine-deep/90 text-lime text-xs font-bold rounded-full px-4 py-2">Fique de olho no uso e na umidade</span>
            </div>
            <div>
              <h2 className="font-bold text-pine-deep text-3xl sm:text-4xl leading-tight tracking-tight">
                Toalha tem hora de lavar.
                <br />
                <span className="font-script font-bold text-4xl sm:text-5xl text-pine">A gente sabe qual.</span>
              </h2>
              <p className="mt-4 text-pine-deep/60 leading-relaxed">
                Uso diário, umidade acumulada, cheiro de guardado: a rotina de
                toalhas pede processo, não improviso. Roupa escura também dura
                mais com separação e temperatura certas.
              </p>
              <a href={WA} target="_blank" rel="noopener" className="mt-7 inline-flex bg-pine text-lime font-bold text-lg rounded-full px-8 py-4 hover:brightness-125 active:scale-95 transition">
                Enviar minha roupa
              </a>
            </div>
          </div>
        </section>

        <section className="bg-pine text-pine-mist py-14 lg:py-20 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-bold text-3xl sm:text-4xl tracking-tight">Santana, Zona Norte. Passa, deixa, vive.</h2>
            <a href={WA} target="_blank" rel="noopener" className="mt-7 inline-flex bg-lime text-pine-deep font-bold text-lg rounded-full px-9 py-4 hover:brightness-105 active:scale-95 transition">
              (11) 99181-4685
            </a>
            <p className="mt-3 text-sm text-pine-mist/60">★ 4.8 no Google · 54 avaliações</p>
          </div>
        </section>
      </main>

      <footer className="bg-pine-deep text-pine-mist/50 py-8 text-sm text-center">
        #1 Lavanderia Express · Santana · Zona Norte
      </footer>

      <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-6 left-5 md:left-auto md:right-5 md:bottom-24 z-[60] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-105 transition">✆</a>
    </>
  );
}
