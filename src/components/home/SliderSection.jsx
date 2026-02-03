"use client"

import Button from "../ui/Button";

export default function SliderSection() {
  return (
    <div>
      <h1>SliderSection SECTION</h1>
       <Button
              variant="secondry"
              onClick={() => alert("Hero button clicked")}
            >
              Get Started
            </Button>
    </div>
  )
}

