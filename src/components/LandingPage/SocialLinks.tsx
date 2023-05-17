import React from "react";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <section className="section-socials">
      <h1 className="heading-1">
        <span>Contact Us</span> <small>👋</small>
      </h1>
      <p className="paragraph">Quick Contact with us online</p>
      <div className="section-socials--links">
        <Link href="mailto:xyz@gmail.com" rel="noopener" target="_blank">
          &nbsp;📧 email
        </Link>
        <Link href="/" rel="noopener" target="_blank">
          👾 GitHub
        </Link>
        <Link href="/" rel="noopener" target="_blank">
          🐦 Twitter
        </Link>
        <Link href="/" rel="noopener" target="_blank">
          💼 LinkedIn
        </Link>
      </div>
    </section>
  );
}
