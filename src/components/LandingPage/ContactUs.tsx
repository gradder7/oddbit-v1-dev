import React from "react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="section-contact">
      <h1 className="heading-1">
        <span>Sold Yet? </span> <small>🤙</small>
      </h1>
      <h2 className="section-contact__h2">
        Thanks for stopping by, I’m currently looking to join a new team of
        creative designers and developers. If you think we might be a good fit
        for one another, give me a<Link href="/"> call 🇳🇬 &nbsp;</Link>
        or send me an
        <Link href="mailto:xyz@gmail.com" rel="noopener" target="_blank">
          &nbsp; email 📧
        </Link>
        .
      </h2>
    </section>
  );
}
