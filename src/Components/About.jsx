import React from "react";

export default function About() {
  return (
    <main>
      <header>
        <h1>About Me</h1>
        <p>
          Included in this list are some things you will know about me.
          This portfolio shows I understand basic HTML and CSS concepts.
        </p>
      </header>
      <section className="about-me">
        <h2>My Name</h2>
        <p>
          My name is <strong>Emmanuel</strong>. I study at <strong>Zindua School</strong>,
          I'm originally from the <strong>United States</strong> and currently live in <strong>London</strong>.
        </p>

        <h2>My Hobbies</h2>
        <p>Reading, watching movies, playing games, traveling, and exploring.</p>

        <h2>My Goals</h2>
        <p>To become a web developer and travel the world meeting new people.</p>
      </section>
    </main>
  );
}
