const speakers = [
  { name: "Ava Thompson", title: "Youth Innovator", topic: "Unlearning Bias in Intelligent Systems" },
  { name: "Daniel Brooks", title: "Climate Storyteller", topic: "Unlearning Climate Apathy" },
  { name: "Lina Chen", title: "Neuroscience Researcher", topic: "Unlearning the Myth of Multitasking" },
  { name: "Omar Rahman", title: "Social Entrepreneur", topic: "Unlearning Scarcity in Communities" },
];

const schedule = [
  ["9:00 AM", "Registration & Networking"],
  ["10:00 AM", "Opening Performance"],
  ["10:30 AM", "Talk Session I"],
  ["1:00 PM", "Interactive Workshops"],
  ["3:00 PM", "Talk Session II"],
  ["5:00 PM", "Closing Reflections"],
];

const faqs = [
  ["Who can attend?", "The event is open to students, educators, parents, and invited community guests."],
  ["Is this an official TED event?", "This is a student-run, independently organized TEDx event under TEDx licensing guidelines."],
  ["Will talks be recorded?", "Selected talks may be recorded and submitted according to TEDx curation policies."],
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="parallax-layer parallax-one" />
      <div className="parallax-layer parallax-two" />
      <div className="parallax-layer parallax-three" />

      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-24 fade-in-up">
        <p className="text-sm uppercase tracking-[0.45em] text-gray-300">TEDxMIS Tampines Youth</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
          Unlearn the Expected. <span className="text-[#E62B1E]">Reimagine What&apos;s Possible.</span>
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-gray-300">Theme: “Unlearn” · December 2, 2026 · yo:HA Tampines Auditorium</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-full bg-[#E62B1E] px-8 py-3 font-medium transition hover:shadow-[0_0_24px_rgba(230,43,30,.5)]">Register Now</button>
          <button className="rounded-full border border-white/30 px-8 py-3 font-medium transition hover:border-[#E62B1E] hover:text-[#E62B1E]">View Schedule</button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-5xl">About the Event</h2>
        <p className="mt-6 max-w-3xl text-gray-300">TEDxMIS Tampines Youth is a student-run TEDx experience where young voices challenge default assumptions and share ideas that shape a more thoughtful future.</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="parallax-word text-6xl font-semibold uppercase tracking-[0.2em] text-white/10 md:text-8xl">UNLEARN</p>
        <p className="mt-6 max-w-2xl text-gray-300">A theme centered on questioning inherited beliefs and creating space for courage, clarity, and original thinking.</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-5xl">Speakers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="group rounded-2xl border border-white/15 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#E62B1E]/70">
              <div className="mb-4 h-28 w-28 rounded-full bg-gradient-to-br from-[#E62B1E]/70 to-black" />
              <h3 className="text-xl">{speaker.name}</h3>
              <p className="mt-1 text-sm text-[#E62B1E]">{speaker.title}</p>
              <p className="mt-4 text-sm text-gray-300">{speaker.topic}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-5xl">Schedule</h2>
        <div className="mt-8 space-y-5 border-l border-white/20 pl-6">
          {schedule.map(([time, title]) => (
            <div key={time} className="rounded-xl bg-white/[0.03] p-3">
              <p className="text-[#E62B1E]">{time}</p>
              <p className="text-lg">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-5xl">Venue</h2>
        <div className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-8">
          <p className="text-xl">yo:HA Tampines Auditorium</p>
          <p className="mt-2 text-gray-300">Singapore</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-5xl">Organizing Team</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[["Curation Lead", "Sophie Grant"], ["Production Lead", "Marcus Lee"], ["Partnerships Lead", "Nina Patel"]].map(([role, name]) => (
            <div key={name} className="rounded-2xl border border-white/15 p-6">
              <p className="text-sm uppercase text-[#E62B1E]">{role}</p>
              <p className="mt-2 text-xl">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl md:text-5xl">FAQ</h2>
        <div className="mt-8 space-y-4">
          {faqs.map(([q, a]) => (
            <details key={q} className="rounded-xl border border-white/15 bg-white/[0.02] p-5">
              <summary className="cursor-pointer list-none text-white marker:content-none">{q}</summary>
              <p className="mt-3 text-gray-300">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg">TEDxMIS Tampines Youth</p>
            <p className="text-sm text-gray-400">[Official approved TEDx event logo placeholder]</p>
          </div>
          <p className="max-w-md text-sm text-gray-400">This independent TEDx event is operated under license from TED.</p>
        </div>
      </footer>
    </main>
  );
}
