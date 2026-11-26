import { createFileRoute } from "@tanstack/react-router";
import { Heart, TrendingUp, Sparkles, Users, Sprout } from "lucide-react";
import { meta, PageIntro } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About — New Minds Academy", "Our story, vision, values and the team behind New Minds Academy in Gokarneshwor, Kathmandu."),
  component: About,
});

const values = [
  { icon: Heart, title: "Empathy", text: "We listen first and meet every young person where they are." },
  { icon: TrendingUp, title: "Growth Mindset", text: "Skills are built, not born — progress over perfection." },
  { icon: Sparkles, title: "Authenticity", text: "We encourage youth to grow into who they truly are." },
  { icon: Users, title: "Community Impact", text: "Stronger individuals build stronger communities." },
];

const team = [
  { name: "Aarav Shrestha", role: "Co-Founder", bio: "Mindfulness practitioner passionate about youth wellbeing." },
  { name: "Sita Karki", role: "Co-Founder", bio: "Educator focused on confidence and communication." },
  { name: "Rohan Thapa", role: "IT & Operations", bio: "Keeps programs running smoothly, online and offline." },
  { name: "Priya Gurung", role: "Program Facilitator", bio: "Leads workshops on emotional intelligence." },
];

function About() {
  return (
    <>
      <PageIntro eyebrow="About Us" title="Growing calm, confident young minds" />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="glass relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl">
          <div className="blob blob-sand h-60 w-60" />
          <div className="blob blob-sage right-0 top-0 h-48 w-48" />
          <Sprout className="relative h-20 w-20 text-primary" strokeWidth={1.25} />
        </div>
        <div>
          <span className="badge-sage">Our Story & Vision</span>
          <h2 className="mt-4 text-3xl font-bold">Why we started</h2>
          <p className="mt-4 leading-relaxed">
            New Minds Academy began in Gokarneshwor with a simple observation: young people in Nepal face growing pressure — exams,
            careers, social media, migration — yet rarely get tools to manage stress or understand themselves.
          </p>
          <p className="mt-4 leading-relaxed">
            We envision a generation that is emotionally clear, confident in its voice, and ready to lead with purpose.
            Personal development isn't a luxury; it's the foundation of every other kind of success.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24">
        <h2 className="text-center text-3xl font-bold">Core Values</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <article key={title} className="glass glass-hover rounded-3xl p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24">
        <h2 className="text-center text-3xl font-bold">Leadership & Team</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.name} className="glass glass-hover rounded-3xl p-6 text-center">
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border-4 border-glass-border bg-secondary font-display text-2xl font-bold text-primary">
                {m.name.split(" ").map((w) => w[0]).join("")}
              </div>
              <h3 className="mt-4 font-semibold">{m.name}</h3>
              <span className="badge-sand mt-2">{m.role}</span>
              <p className="mt-3 text-sm">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
