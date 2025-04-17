import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
      <a href="https://www.shecodes.io" target="_blank" rel="noreferrer">
        SheCodes
      </a>{" "}
      and is
      <a
        href="https://github.com/anatol-coder/react-homework-4"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and {""}
      <a
        href="https://whimsical-seahorse-743817.netlify.app/"
        target="blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </div>
  );
}
