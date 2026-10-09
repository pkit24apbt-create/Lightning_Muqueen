import { useState } from 'react';
import { contactFacts, serviceOptions } from '../data.js';

const emptyForm = { name: '', company: '', email: '', service: serviceOptions[0], message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', text: 'Please fill in your name, email and project details.' });
      return;
    }
    if (!emailPattern.test(form.email.trim())) {
      setStatus({ type: 'error', text: 'Please enter a valid email address, like name@company.com.' });
      return;
    }

    setStatus({ type: 'sending', text: 'Sending your enquiry…' });
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'The server could not save your enquiry. Please try again.');
      }
      setStatus({
        type: 'success',
        text: `Thanks, ${form.name.trim()}. We've received your enquiry and will reply soon.`,
      });
      setForm(emptyForm);
    } catch (err) {
      const text =
        err instanceof TypeError
          ? 'Could not reach the server. Check that the backend is running and try again.'
          : err.message;
      setStatus({ type: 'error', text });
    }
  }

  const sending = status.type === 'sending';

  return (
    <section className="contact-sec" id="contact">
      <div className="wrap contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 style={{ marginTop: 12 }}>
            Let&apos;s build <em>together</em>
          </h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Tell us about your project. We&apos;ll reply with questions, a plan and a timeline.
          </p>
          <div className="facts">
            {contactFacts.map((f) => (
              <div key={f.label}>
                <span>{f.label}</span>
                <span>{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">
              Your name
              <input id="name" name="name" value={form.name} onChange={update} autoComplete="name" required />
            </label>
            <label htmlFor="company">
              Company
              <input id="company" name="company" value={form.company} onChange={update} autoComplete="organization" />
            </label>
          </div>
          <label htmlFor="email">
            Email
            <input id="email" name="email" type="email" value={form.email} onChange={update} autoComplete="email" required />
          </label>
          <label htmlFor="service">
            Service needed
            <select id="service" name="service" value={form.service} onChange={update}>
              {serviceOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </label>
          <label htmlFor="message">
            About your project
            <textarea id="message" name="message" value={form.message} onChange={update} required />
          </label>
          <button className="btn btn-dark" type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send enquiry'}
          </button>
          {status.type !== 'idle' && (
            <p className={status.type === 'error' ? 'ok err' : 'ok'} role="status">
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}