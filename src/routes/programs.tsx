import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { School, Flame, Mic, CheckCircle2, CalendarDays, MapPin } from "lucide-react";
import { meta, PageIntro } from "@/components/site";

export const Route = createFileRoute("/programs")({
  head: () => meta("Programs — New Minds Academy", "School workshops, youth mindfulness bootcamps and personality uplifting seminars in Kathmandu."),
  component: Programs,
});

const tracks = [
  { icon: School, title: "School & College Workshops", tag: "1-day", text: "Interactive sessions on focus, stress and confidence, delivered at your institution.", points: ["Breathing & focus techniques", "Exam stress toolkit", "Confidence activities"] },
  { icon: Flame, title: "Youth Mindfulness Bootcamps", tag: "Multi-week", text: "Small cohorts going through a guided personal transformation journey together.", points: ["Weekly mindfulness practice", "Journaling & reflection", "Peer accountability circles"] },
  { icon: Mic, title: "Personality Uplifting Seminars", tag: "Seminar", text: "Communication, emotional intelligence and career readiness for older youth.", points: ["Public speaking practice", "Emotional intelligence", "Interview & career prep"] },
];

const outcomes = ["Manage stress and anxiety", "Sustain focus while studying", "Speak confidently in public", "Express emotions healthily", "Set and pursue clear goals", "Bounce back from setbacks", "Work well in teams", "Lead peer initiatives"];

const events = [
  { title: "Youth Mindfulness Workshop", date: "19 Dec 2026", place: "Gokarneshwor Municipality", status: "Open for Registration" },
  { title: "Focus & Confidence Day", date: "8 Jan 2027", place: "Partner school, Jorpati", status: "School Partnership" },
  { title: "Winter Mindfulness Bootcamp", date: "15 Jan 2027", place: "Gokarneshwor, Kathmandu", status: "Open for Registration" },
  { title: "Career Readiness Seminar", date: "5 Feb 2027", place: "Partner college, Kathmandu", status: "School Partnership" },
];

function Programs() {
  const [active, setActive] = useState(0);
  const t = tracks[active]!;
  const Icon = t.icon;
  return (
    <>
      <PageIntro eyebrow="Programs" title="Programs that grow with you">Practical, experiential learning designed for Nepali students and young adults.</PageIntro>
      <section className="mx-auto max-w-5xl px-4">
        <div role="tablist" className="glass mx-auto flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-3xl p-1.5 md:rounded-full">
          {tracks.map((tr, i) => (
            <button key={tr.title} role="tab" aria-selected={i === active} onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${i === active ? "bg-primary text-primary-foreground" : "hover:text-heading"}`}>
              {tr.title}
            </button>
          ))}
        </div>
        <article key={t.title} className="glass mt-8 grid gap-8 rounded-3xl p-8 animate-in fade-in md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary"><Icon className="h-6 w-6" /></span>
            <span className="badge-sand mt-5">{t.tag}</span>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">{t.title}</h2>
            <p className="mt-3 max-w-lg leading-relaxed">{t.text}</p>
            <Link to="/get-involved" className="btn-primary mt-6">Register Interest</Link>
          </div>
          <ul className="space-y-3 self-center">
            {t.points.map((p) => <li key={p} className="flex items-center gap-2 text-heading"><CheckCircle2 className="h-5 w-5 text-primary" />{p}</li>)}
          </ul>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24">
        <h2 className="text-center text-3xl font-bold">Key Learning Outcomes</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o) => (
            <li key={o} className="glass glass-hover flex items-center gap-3 rounded-2xl p-5 text-heading">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{o}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-24">
        <h2 className="text-center text-3xl font-bold">Upcoming Sessions</h2>
        <ul className="glass mt-10 divide-y divide-border rounded-3xl">
          {events.map((e) => (
            <li key={e.title} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold">{e.title}</h3>
                <div className="mt-1 flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{e.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{e.place}</span>
                </div>
              </div>
              <span className={e.status === "Open for Registration" ? "badge-sage" : "badge-sand"}>{e.status}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
