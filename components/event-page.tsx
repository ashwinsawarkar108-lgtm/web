"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import CursorGlow from "@/components/cursor-glow";

const speakers = [
  { name: "Ava Thompson", title: "Youth Innovator", topic: "Unlearning Bias in Intelligent Systems" },
  { name: "Daniel Brooks", title: "Climate Storyteller", topic: "Unlearning Climate Apathy" },
  { name: "Lina Chen", title: "Neuroscience Researcher", topic: "Unlearning the Myth of Multitasking" },
  { name: "Omar Rahman", title: "Social Entrepreneur", topic: "Unlearning Scarcity in Communities" },
];

const schedule = [
  { time: "9:00 AM", title: "Registration & Networking" },
  { time: "10:00 AM", title: "Opening Performance" },
  { time: "10:30 AM", title: "Talk Session I" },
  { time: "1:00 PM", title: "Interactive Workshops" },
  { time: "3:00 PM", title: "Talk Session II" },
  { time: "5:00 PM", title: "Closing Reflections" },
];

const faqs = [
  { q: "Who can attend?", a: "The event is open to students, educators, parents, and invited community guests." },
  { q: "Is this an official TED event?", a: "This is an independently organized TEDx event run by students under TEDx licensing guidelines." },
  { q: "Will talks be recorded?", a: "Selected talks may be recorded and submitted in accordance with TEDx curation policies." },
];

export default function EventPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const themeY = useTransform(scrollY, [0, 1200], [0, reduce ? 0 : -180]);
  const shapeOneY = useTransform(scrollY, [0, 1500], [0, reduce ? 0 : 200]);
  const shapeTwoY = useTransform(scrollY, [0, 1500], [0, reduce ? 0 : -240]);
  const shapeThreeY = useTransform(scrollY, [0, 1500], [0, reduce ? 0 : 140]);

  return (
    <>
      <CursorGlow />
      <main className="relative min-h-screen overflow-x-hidden bg-black text-white selection:bg-ted/40">
        <div className="pointer-events-none fixed inset-0 hidden md:block" id="cursor-glow" />

        <motion.div
          style={{ y: shapeOneY }}
          className="pointer-events-none fixed -left-20 top-24 h-72 w-72 rounded-full bg-ted/20 blur-3xl"
        />
        <motion.div
          style={{ y: shapeTwoY }}
          className="pointer-events-none fixed -right-24 top-[28rem] h-80 w-80 rounded-full bg-ted/15 blur-3xl"
        />
        <motion.div
          style={{ y: shapeThreeY }}
          className="pointer-events-none fixed left-1/2 top-[48rem] h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        />

        <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-24">
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 30 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-[0.45em] text-gray-300"
          >
            TEDxMIS Tampines Youth
          </motion.p>

          <motion.h1
            initial={reduce ? {} : { opacity: 0, y: 24 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 max-w-5xl text-5xl font-semibold leading-tight md:text-7xl"
          >
            Unlearn the Expected. <span className="text-ted">Reimagine What’s Possible.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg text-gray-300"
          >
            Theme: "Unlearn" · December 2, 2026 · yo:HA Tampines Auditorium
          </motion.p>

          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="rounded-full bg-ted px-8 py-3 font-medium transition hover:shadow-glow">Register Now</button>
            <button className="rounded-full border border-white/30 px-8 py-3 font-medium transition hover:border-ted hover:text-ted">View Schedule</button>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-5xl">About the Event</h2>
          <p className="mt-6 max-w-3xl text-gray-300">
            TEDxMIS Tampines Youth is a student-run, independently organized TEDx experience designed to challenge default assumptions and spark fresh perspectives across science, creativity, culture, and leadership.
          </p>
        </section>

        <section className="relative mx-auto max-w-6xl px-6 py-28">
          <motion.p
            style={{ y: themeY }}
            className="text-5xl font-semibold uppercase tracking-[0.22em] text-white/10 md:text-8xl"
          >
            UNLEARN
          </motion.p>
          <p className="mt-6 max-w-2xl text-gray-300">
            A cinematic theme about letting go of inherited limits, questioning familiar narratives, and creating space for deeper, more courageous learning.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-5xl">Speakers</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {speakers.map((speaker) => (
              <motion.article
                key={speaker.name}
                whileHover={reduce ? {} : { y: -10, scale: 1.02 }}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:border-ted/70"
              >
                <div className="mb-4 h-28 w-28 rounded-full bg-gradient-to-br from-ted/70 to-black" />
                <h3 className="text-xl">{speaker.name}</h3>
                <p className="mt-1 text-sm text-ted">{speaker.title}</p>
                <p className="mt-4 text-sm text-gray-300">{speaker.topic}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-5xl">Schedule</h2>
          <div className="mt-8 space-y-5 border-l border-white/20 pl-6">
            {schedule.map((item, i) => (
              <motion.div
                key={item.time}
                initial={reduce ? {} : { opacity: 0, x: -20 }}
                whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08 }}
              >
                <p className="text-ted">{item.time}</p>
                <p className="text-lg">{item.title}</p>
              </motion.div>
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
            {[
              ["Curation Lead", "Sophie Grant"],
              ["Production Lead", "Marcus Lee"],
              ["Partnerships Lead", "Nina Patel"],
            ].map(([role, name]) => (
              <div key={name} className="rounded-2xl border border-white/15 p-6">
                <p className="text-sm uppercase text-ted">{role}</p>
                <p className="mt-2 text-xl">{name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl md:text-5xl">FAQ</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((item, idx) => (
              <div key={item.q} className="rounded-xl border border-white/15">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span>{item.q}</span>
                  <span className="text-ted">{openFaq === idx ? "−" : "+"}</span>
                </button>
                {openFaq === idx && <p className="px-5 pb-5 text-gray-300">{item.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg">TEDxMIS Tampines Youth</p>
              <p className="text-sm text-gray-400">[Official approved TEDx event logo placeholder]</p>
            </div>
            <p className="max-w-md text-sm text-gray-400">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
