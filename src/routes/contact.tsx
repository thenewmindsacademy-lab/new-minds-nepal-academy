import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import { meta, PageIntro, EMAIL, INSTAGRAM, TIKTOK, TikTokIcon } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact — New Minds Academy", "Reach New Minds Academy in Gokarneshwor, Kathmandu by email, WhatsApp, Instagram or TikTok."),
  component: Contact,
});

const WHATSAPP = "9779800000000";

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nI am a: ${f.get("role")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's talk">Questions, partnerships or just curious? We'd love to hear from you.</PageIntro>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="glass space-y-5 rounded-3xl p-8">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary"><Mail className="h-5 w-5" /></span><span><span className="block text-xs">Email</span><span className="font-medium text-heading">{EMAIL}</span></span></a>
            <div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary"><MapPin className="h-5 w-5" /></span><span><span className="block text-xs">Location</span><span className="font-medium text-heading">Gokarneshwor Municipality, Kathmandu</span></span></div>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="btn-primary w-full"><Phone className="h-4 w-4" />Chat on WhatsApp</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="glass glass-hover rounded-3xl p-6"><Instagram className="h-7 w-7 text-primary" /><h2 className="mt-4 font-semibold">Instagram</h2><p className="text-sm">@newmindsacademy</p></a>
            <a href={TIKTOK} target="_blank" rel="noreferrer" className="glass glass-hover rounded-3xl p-6"><TikTokIcon className="h-7 w-7 text-primary" /><h2 className="mt-4 font-semibold">TikTok</h2><p className="text-sm">@newmindsacademy</p></a>
          </div>
        </div>
        <div className="space-y-6">
          <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <label className="block text-sm font-medium text-heading">Name<input name="name" required className="field mt-1.5" /></label>
            <label className="block text-sm font-medium text-heading">Email<input name="email" type="email" required className="field mt-1.5" /></label>
            <label className="block text-sm font-medium text-heading">I am a
              <select name="role" className="field mt-1.5"><option>Student</option><option>School</option><option>Partner</option></select>
            </label>
            <label className="block text-sm font-medium text-heading">Message<textarea name="message" rows={4} required className="field mt-1.5" /></label>
            <button className="btn-primary w-full"><Send className="h-4 w-4" />Send Message</button>
            {sent && <p className="text-center text-sm text-primary">Your email app should open with the message ready to send.</p>}
          </form>
          <div className="glass grid aspect-video place-items-center rounded-3xl border-2 border-dashed border-input p-6 text-center">
            <div><MapPin className="mx-auto h-8 w-8 text-sand" /><p className="mt-3 font-semibold text-heading">Google Maps / Business Profile</p><p className="text-sm">Gokarneshwor, Kathmandu</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
