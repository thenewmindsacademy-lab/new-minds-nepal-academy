import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Building2, HandHeart, ArrowRight } from "lucide-react";
import { meta, PageIntro } from "@/components/site";

export const Route = createFileRoute("/get-involved")({
  head: () => meta("Get Involved — New Minds Academy", "Join a workshop, request a session for your school, or volunteer as a mentor with New Minds Academy."),
  component: GetInvolved,
});

// Replace with your real Google Form embed URL (Send → <> → copy src).
const FORM_URL = "";

const paths = [
  { icon: GraduationCap, title: "For Youth & Students", text: "Sign up for upcoming workshops and bootcamps.", cta: "Sign Up" },
  { icon: Building2, title: "For Schools & Colleges", text: "Request a workshop at your institution.", cta: "Request a Workshop" },
  { icon: HandHeart, title: "For Volunteers & Mentors", text: "Join the movement as a facilitator or organizer.", cta: "Volunteer" },
];

function GetInvolved() {
  return (
    <>
      <PageIntro eyebrow="Get Involved" title="Find your place in the movement">Whether you want to learn, host or help — there's a path for you.</PageIntro>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {paths.map(({ icon: Icon, title, text, cta }) => (
          <article key={title} className="glass glass-hover flex flex-col rounded-3xl p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary"><Icon className="h-6 w-6" /></span>
            <h2 className="mt-6 text-xl font-semibold">{title}</h2>
            <p className="mt-2 flex-1 leading-relaxed">{text}</p>
            <a href="#register" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-primary">{cta}<ArrowRight className="h-4 w-4" /></a>
          </article>
        ))}
      </section>

      <section id="register" className="mx-auto max-w-4xl scroll-mt-28 px-4 pt-24">
        <div className="glass rounded-3xl p-4 md:p-8">
          <div className="px-2 pb-6 pt-2 text-center">
            <h2 className="text-3xl font-bold">Registration</h2>
            <p className="mt-2">One simple form for students, schools and volunteers.</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-card" style={{ minHeight: 640 }}>
            {FORM_URL ? (
              <iframe src={FORM_URL} title="New Minds Academy registration form" className="absolute inset-0 h-full w-full border-0" loading="lazy" />
            ) : (
              <div className="absolute inset-0 grid place-items-center border-2 border-dashed border-input p-8 text-center">
                <div>
                  <p className="font-display text-lg font-semibold text-heading">Google Form goes here</p>
                  <p className="mt-2 text-sm">The registration form will appear in this space once it's connected.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
