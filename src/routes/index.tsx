import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, MessageCircle, Compass, CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("New Minds Academy — Youth Mindfulness & Personal Growth in Nepal", "Equipping young minds in Nepal with emotional clarity, confidence, and leadership skills for life."),
  component: Home,
});

const pillars = [
  { icon: Brain, title: "Mindfulness & Mental Clarity", text: "Stress management, focus, and emotional balance." },
  { icon: MessageCircle, title: "Confidence & Communication", text: "Public speaking, self-expression, and interpersonal skills." },
  { icon: Compass, title: "Leadership & Purpose", text: "Goal setting, resilience, and youth empowerment." },
];

function Home() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pb-20 pt-24 text-center md:pt-36">
        <span className="badge-sand">Non-profit · Kathmandu, Nepal</span>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl">
          Empowering Youth Through <span className="text-primary">Mindfulness</span> & Personal Growth
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
          Equipping young minds in Nepal with emotional clarity, confidence, and leadership skills for life.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/get-involved" className="btn-primary">Join a Program <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contact" className="btn-glass">Partner With Us</Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4">
        <div className="glass rounded-3xl p-8 text-center md:p-12">
          <span className="badge-sage">Our Mission</span>
          <p className="mt-5 font-display text-xl font-medium leading-relaxed text-heading md:text-2xl">
            New Minds Academy helps young people in Nepal understand themselves, manage their minds, and lead with purpose.
            Through practical workshops in mindfulness, communication and leadership, we build the inner skills school rarely teaches.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Core Program Pillars</h2>
          <p className="mt-3">Three foundations for a confident, balanced life.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article key={title} className="glass glass-hover rounded-3xl p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24">
        <div className="glass flex flex-col gap-6 rounded-3xl p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <span className="badge-sand">Upcoming Pilot</span>
            <h2 className="mt-4 text-2xl font-bold md:text-3xl">Youth Mindfulness Workshop</h2>
            <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
              <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" />Sat, 19 December 2026 · 10 AM–3 PM</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Gokarneshwor Municipality, Kathmandu</span>
            </div>
          </div>
          <Link to="/get-involved" className="btn-primary shrink-0">Reserve Your Spot</Link>
        </div>
      </section>
    </>
  );
}
