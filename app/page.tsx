const speakers = [
  {
    name: "Speaker One",
    topic: "The Courage to Begin",
    bio: "A student voice exploring how small ideas become meaningful change.",
  },
  {
    name: "Speaker Two",
    topic: "Beyond the Expected",
    bio: "A fresh perspective on creativity, pressure, and finding your path.",
  },
  {
    name: "Speaker Three",
    topic: "The Future We Build",
    bio: "A talk about technology, community, and responsibility.",
  },
];

const schedule = [
  ["5:00 PM", "Doors Open"],
  ["5:30 PM", "Opening Remarks"],
  ["5:45 PM", "Speaker Session One"],
  ["6:30 PM", "Intermission"],
  ["6:50 PM", "Speaker Session Two"],
  ["7:45 PM", "Closing"],
];

const faqs = [
  {
    question: "Who can attend?",
    answer: "Students, families, teachers, and invited guests are welcome depending on event capacity.",
  },
  {
    question: "Is this an official TED event?",
    answer: "This is an independently organized TEDx event operated under license from TED.",
  },
  {
    question: "Where is the event?",
    answer: "The event will be hosted at the school venue. Final room details will be shared before the event.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,43,30,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(180deg,#000,#090909)]" />
        <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-[#E62B1E]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#E62B1E]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#E62B1E]">
            School TEDx Event
          </p>
          <h1 className="text-6xl font-black tracking-tight md:text-8xl lg:text-9xl">
            TEDx<span className="text-[#E62B1E]">YourSchool</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-zinc-300 md:text-2xl">
            A cinematic evening of bold ideas, student voices, and conversations worth spreading.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a className="rounded-full bg-[#E62B1E] px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-red-600" href="#register">
              Register Interest
            </a>
            <a className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-[#E62B1E] hover:text-[#E62B1E]" href="#speakers">
              Meet the Speakers
            </a>
          </div>
          <div className="mt-16 grid gap-4 text-left md:grid-cols-3">
            {["Theme: Uncharted", "Date: Coming Soon", "Venue: School Auditorium"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <p className="text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E62B1E] to-transparent" />
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#E62B1E]">About</p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">Ideas start here.</h2>
          </div>
          <p className="text-lg leading-8 text-zinc-300">
            Our TEDx event brings together students, educators, and community voices to share powerful ideas in a professional conference-style experience. This site is a placeholder and should be updated with your approved event name, real theme, date, speakers, and venue.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-black uppercase tracking-tighter text-white/[0.04]">
          Ideas
        </div>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#E62B1E]">Theme</p>
          <h2 className="mt-4 text-5xl font-black md:text-7xl">Uncharted</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-zinc-300">
            A theme about stepping beyond what is familiar, questioning assumptions, and discovering what becomes possible when new voices are heard.
          </p>
        </div>
      </section>

      <section id="speakers" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#E62B1E]">Speakers</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Voices on stage.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {speakers.map((speaker) => (
              <article key={speaker.name} className="group rounded-3xl border border-white/10 bg-zinc-950 p-6 transition hover:-translate-y-2 hover:border-[#E62B1E]/70">
                <div className="mb-6 aspect-square rounded-2xl bg-gradient-to-br from-[#E62B1E]/50 to-white/10" />
                <h3 className="text-2xl font-black">{speaker.name}</h3>
                <p className="mt-2 font-semibold text-[#E62B1E]">{speaker.topic}</p>
                <p className="mt-4 leading-7 text-zinc-400">{speaker.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#E62B1E]">Schedule</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Event timeline.</h2>
          <div className="mt-12 space-y-4">
            {schedule.map(([time, title]) => (
              <div key={title} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[140px_1fr]">
                <p className="font-black text-[#E62B1E]">{time}</p>
                <p className="text-xl font-bold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#E62B1E]">Venue</p>
            <h2 className="mt-4 text-4xl font-black">School Auditorium</h2>
            <p className="mt-6 leading-8 text-zinc-300">
              Add your official venue name, address, arrival details, and parking instructions here.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#E62B1E]/30 to-white/5 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#E62B1E]">Team</p>
            <h2 className="mt-4 text-4xl font-black">Organized by students.</h2>
            <p className="mt-6 leading-8 text-zinc-300">
              Add organizers, curators, volunteers, production members, and faculty advisors here.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#E62B1E]">FAQ</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Questions.</h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-black">{faq.question}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="register" className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-black">TEDxMIS Tampines Youth</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>
          <a className="rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-[#E62B1E] hover:text-white" href="mailto:your-email@example.com">
            Contact the Team
          </a>
        </div>
      </footer>
    </main>
  );
}
