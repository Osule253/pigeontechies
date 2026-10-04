import { useState } from "react";
import { useState } from "react";
export default function Training() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  }; {
  return (
    <main className="training-page">
        <a href="/" className="training-back">
  ← Back to Home
</a>
      <section className="training-hero">
        <span className="training-eyebrow">PIGEON TECHIES TRAINING</span>
        <h1>Learn. Build. Secure.</h1>
        <p>
          Practical training in Web Development and Cybersecurity,
          designed to help you build real-world skills.
        </p>
      </section>

      <section className="training-courses">
        <article className="training-course-card">
          <div className="training-course-icon">
            💻
          </div>
          <h2>Web Development</h2>
          <ul className="training-course-list">
  <li>HTML & CSS</li>
  <li>JavaScript & React</li>
  <li>Building real websites</li>
</ul>
          <p>
            Learn how to build modern websites and web applications
            from the ground up.
          </p>
        </article>

        <article className="training-course-card">
          <div className="training-course-icon">
            🛡️
          </div>
          <h2>Cybersecurity</h2>
          <ul className="training-course-list">
  <li>Cybersecurity fundamentals</li>
  <li>Online safety</li>
  <li>Security best practices</li>
</ul>
          <p>
            Learn the foundations of cybersecurity and how to protect
            digital systems.
          </p>
        </article>
      </section>

      <section className="training-register">
        <h2>Register for Training</h2>
        <p>Choose your course and we'll get you started.</p>

        <form className="training-form" onSubmit={handleSubmit}>
          <div className="training-form-row">
            <label className="training-field">
              Full Name
              <input type="text" required />
            </label>

            <label className="training-field">
              Email
              <input type="email" required />
            </label>
          </div>

          <div className="training-form-row">
            <label className="training-field">
              Phone
              <input type="tel" required />
            </label>

            <label className="training-field">
              Course
              <select defaultValue="Web Development">
                <option>Web Development</option>
                <option>Cybersecurity</option>
              </select>
            </label>
          </div>

          <label className="training-field">
            Why do you want to join?
            <textarea rows={5} />
          </label>
            {submitted && (
  <div className="training-success">
    Registration received successfully!
  </div>
)}
          <button type="submit" className="training-submit">
  Register Now
</button>
        </form>
      </section>
    </main>
  );
  }