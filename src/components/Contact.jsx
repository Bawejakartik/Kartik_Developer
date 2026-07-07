import { useState } from "react";
import Reveal from "./Reveal";
import { PROFILE,SOCIALS } from "../data/resumeData";
import emailjs from "@emailjs/browser";
import { MailIcon, PhoneIcon, MapPinIcon, DownloadIcon, ArrowRightIcon ,LinkedinIcon , GithubIcon} from "./Icons";

const initialErrors = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [errors, setErrors] = useState(initialErrors);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const subject = (data.get("subject") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  const nextErrors = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  let valid = true;

  if (!name) {
    nextErrors.name = "Please enter your name.";
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    nextErrors.email = "Please enter a valid email.";
    valid = false;
  }

  if (!subject) {
    nextErrors.subject = "Please add a subject.";
    valid = false;
  }

  if (message.length < 10) {
    nextErrors.message = "Message should be at least 10 characters.";
    valid = false;
  }

  setErrors(nextErrors);

  if (!valid) return;

  try {
    setSending(true);

    await emailjs.send(
      "service_152nddf",
      "template_uqrjzx7",
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        reply_to: email,
      },
      {
        publicKey: "6STjnWnZN6pHeldpV",
      }
    );

    setSent(true);
    form.reset();

    setTimeout(() => {
      setSent(false);
    }, 5000);

  } catch (error) {
    console.error("EmailJS Error:", error);

    setErrors({
      ...nextErrors,
      message: "Failed to send message. Please try again.",
    });

  } finally {
    setSending(false);
  }
};

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's build something together.</h2>
          <p className="section-sub">Have a role, project or idea in mind? My inbox is open.</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-info glass">
            <a href={`mailto:${PROFILE.email}`} className="contact-row">
              <span className="contact-icon"><MailIcon /></span>
              <span>
                <span className="contact-label">Email</span>
                <span className="contact-value">{PROFILE.email}</span>
              </span>
            </a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="contact-row">
              <span className="contact-icon"><PhoneIcon /></span>
              <span>
                <span className="contact-label">Phone</span>
                <span className="contact-value">{PROFILE.phoneDisplay}</span>
              </span>
            </a>
            <div className="contact-row">
              <span className="contact-icon"><MapPinIcon /></span>
              <span>
                <span className="contact-label">Location</span>
                <span className="contact-value">{PROFILE.location}</span>
              </span>
            </div>

            <a href={PROFILE.resumeFile} download className="btn btn-primary btn-block">
              <DownloadIcon />
              Download Resume
            </a>

            <div className="hero-socials" style={{ marginTop: "20px" }}>
  <a
    href={SOCIALS.github}
    target="_blank"
    rel="noreferrer"
    className="social-btn"
    title="GitHub"
    aria-label="GitHub"
  >
    <GithubIcon />
  </a>

  <a
    href={SOCIALS.linkedin}
    target="_blank"
    rel="noreferrer"
    className="social-btn"
    title="LinkedIn"
    aria-label="LinkedIn"
  >
    <LinkedinIcon />
  </a>
</div>
          </Reveal>

          <Reveal delay={0.1} className="contact-form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <Field label="Name" name="name" error={errors.name} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <Field label="Subject" name="subject" error={errors.subject} full />
                <Field label="Message" name="message" multiline error={errors.message} full />
              </div>

              <button type="submit" className="btn btn-primary" disabled={sending}>
                <span>{sending ? "Opening email..." : "Send Message"}</span>
                <ArrowRightIcon />
              </button>

              <p className="form-note">
               Fill out the form and I'll get back to you as soon as possible.
              </p>

              <div className={`form-success ${sent ? "show" : ""}`}>
                <span className="success-check">✓</span>
                Message sent successfully! I'll get back to you soon.
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", multiline, error, full }) {
  return (
    <label className={`field ${full ? "field-full" : ""}`}>
      {multiline ? (
        <textarea name={name} placeholder=" " rows={5} maxLength={1000} required />
      ) : (
        <input type={type} name={name} placeholder=" " maxLength={type === "email" ? 255 : 120} required />
      )}
      <span className="field-label">{label}</span>
      <span className="field-error">{error}</span>
    </label>
  );
}
