// HeroSection.jsx
import React from "react";

const HeroSection = () => (
  <section className="hero-section" style={{ display: "flex", alignItems: "center", padding: "2rem", gap: "2rem" }}>
    {/* Kiri: Teks */}
    <div className="hero-content px-100" style={{ flex: 1 }}>
      <h1 style={{ fontSize: "3rem", lineHeight: "1.2" }}>
        You Start, Raise And Grow <br />
        Faster With <span style={{ color: "#f76c6c" }}>Skywave</span>
      </h1>
      <p style={{ marginTop: "1rem", fontSize: "1.125rem", color: "#555" }}>
        Determine what you want to achieve with your digital products. Are you looking to increase revenue, improve customer experience, streamline processes, or expand your market reach?
      </p>
      <div className="hero-buttons" style={{ marginTop: "2rem" }}>
        <button style={{ padding: "0.75rem 1.5rem", marginRight: "1rem", backgroundColor: "#f76c6c", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Get Free Trial
        </button>
        <button style={{ padding: "0.75rem 1.5rem", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Started Account
        </button>
      </div>
    </div>
    {/* Kanan: Gambar */}
    <div className="hero-image" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
      <img src="/img/bg-img-3.png" alt="Hero" style={{ width: "100%", maxWidth: 400, height: "auto", borderRadius: "10px" }} />
    </div>
  </section>
);

export default HeroSection;
