import Image from "next/image";

const WA = "https://wa.me/5511991814685?text=Ol%C3%A1!%20Vi%20o%20site%20da%20%231%20Lavanderia%20Express%20e%20quero%20deixar%20minha%20roupa.";
const IG = "https://www.instagram.com/1lavanderiasantana/";

const agenda = [
  ["☕", "Tomar um café", "sem pressa, como manda o ritual"],
  ["🏋️", "Fazer seu treino", "a roupa lava enquanto o treino desagua"],
  ["🛒", "Ir ao mercado", "e voltar com as compras e a roupa pronta"],
  ["📺", "Assistir série", "episódio duplo, sem culpa"],
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
        <section id="inicio" className="bg-pine-deep text-white pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
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
                  Fazer o que enquanto isso?
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-[32px] overflow-hidden border-4 border-lime/30 shadow-2xl">
                <Image src="/images/post-05.jpg" alt="Toalha limpa — hora de lavar" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* A AGENDA — conteúdo real do Instagram */}
        <section id="agenda" className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-bold text-pine-deep text-3xl sm:text-5xl tracking-tight max-w-2xl leading-tight">
              5 coisas para fazer enquanto sua roupa lava.
            </h2>
            <p className="mt-3 text-pine-deep/60 max-w-xl">
              Lista de verdade, direto do Instagram da #1 — porque lavar roupa
              não pode custar o seu dia.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl">
              {agenda.map(([e, t, d], i) => (
                <div key={t} className={`rounded-3xl p-6 border-2 ${i === 0 ? "bg-pine text-pine-mist border-pine" : "bg-white border-pine/15"}`}>
                  <div className="text-3xl">{e}</div>
                  <div className={`font-bold text-xl mt-2 ${i === 0 ? "text-lime" : "text-pine-deep"}`}>{t}</div>
                  <p className={`text-sm mt-1 ${i === 0 ? "text-pine-mist/80" : "text-pine-deep/60"}`}>{d}</p>
                </div>
              ))}
              <div className="rounded-3xl p-6 bg-lime text-pine-deep flex flex-col justify-center">
                <p className="font-bold text-2xl leading-tight">A quinta coisa?</p>
                <p className="text-sm mt-1 font-medium">Buscar a roupa cheirosa no caminho de casa.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-pine text-pine-mist py-14 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-80 sm:h-[420px] rounded-[32px] overflow-hidden border-4 border-lime/30 -rotate-1">
              <Image src="/images/post-09.jpg" alt="5 cuidados para suas roupas escuras durarem" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight">
                Cuidamos da cor também.
              </h2>
              <p className="mt-4 text-pine-mist/80 leading-relaxed">
                Roupa escura durando mais é processo: separação, temperatura e
                sabão certo. A mesma obsessão que a gente tem com toalhas —
                sempre frescas, sem umidade acumulada.
              </p>
              <a href={WA} target="_blank" rel="noopener" className="mt-7 inline-flex bg-lime text-pine-deep font-bold text-lg rounded-full px-8 py-4 hover:brightness-105 active:scale-95 transition">
                Enviar minha roupa
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-bold text-pine-deep text-3xl sm:text-4xl tracking-tight">
              Santana, Zona Norte.
              <br />
              Passa, deixa, vive.
            </h2>
            <a href={WA} target="_blank" rel="noopener" className="mt-7 inline-flex bg-pine text-lime font-bold text-lg rounded-full px-9 py-4 hover:brightness-125 active:scale-95 transition">
              (11) 99181-4685
            </a>
            <p className="mt-3 text-sm text-pine-deep/50">★ 4.8 no Google · 54 avaliações</p>
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
