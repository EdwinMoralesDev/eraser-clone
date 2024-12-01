'use client';

export function Hero() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white px-2.5 py-2 text-xs font-semibold text-white mb-6">
              See What&apos;s | <span className="text-sky-400">AI Diagram</span>
            </span>
          </div>

          <h1 className="text-3xl font-extrabold sm:text-5xl text-sky-400">
            AI co-pilot
            <strong className="font-extrabold text-white sm:block"> ‍for technical design </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">
            Deliver accurate, consistent designs faster
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-gray-100 focus:outline-none focus:ring active:bg-gray-200 sm:w-auto"
              href="#"
            >
              Try Eraser
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-white border border-white shadow hover:bg-white/10 focus:outline-none focus:ring sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}