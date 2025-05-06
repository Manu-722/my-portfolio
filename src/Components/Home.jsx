import React from "react";
import Gallery from "./Gallery"; // Optional: If you have Gallery component

export default function Home() {
  return (
    <main>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>This is the homepage where you can view my gallery and learn more about me.</p>
      </header>
      <Gallery /> {/* Optional gallery */}
    </main>
  );
}
