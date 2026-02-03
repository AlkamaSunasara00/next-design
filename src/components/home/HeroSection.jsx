"use client"

import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <div>
      <h1>HERO SECTION</h1>

      <Button
        variant="primary"
        onClick={() => alert("Hero button clicked")}
      >
        Get Started
      </Button>
    </div>
  );
}
