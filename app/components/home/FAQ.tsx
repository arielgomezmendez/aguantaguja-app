import { questions } from "./FAQData";

const FAQ = () => {
  return (
    <section id="faq" className="bg-[#050505] px-6 py-16 text-[#F5F5F5]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <h2 className="font-special text-5xl tracking-wide md:text-7xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#A1A1AA] md:text-xl">
            Resolvemos las dudas más comunes antes de tu cita para que llegues
            con calma y una idea clara del proceso.
          </p>
        </div>

        <ul className="space-y-3">
          {questions.map((item) => (
            <li key={item.question}>
              <details className="group border border-white/10 bg-[#111111] p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span
                    className="shrink-0 text-2xl leading-none text-[#FF9800] transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-[#A1A1AA]">
                  {item.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
