import React, { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  //   const [speakerState, setSpeakerState] = useState("muted");
  //   const handleSpeaker = () => {
  //     const audio = document.querySelector("#audioPlayer") as HTMLVideoElement;

  //     if (speakerState === "muted") {
  //       setSpeakerState("unmuted");
  //       audio.pause();
  //     } else {
  //       setSpeakerState("muted");
  //       audio.play();
  //     }
  //   };

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__hero">
          <div className="header__hero--heading">
            {/* From idea to reality: Creating captivating products. */}
            <span>From idea to</span> <br />
            <span>reality: Creating </span>
            <br />
            <span className="header__hero--heading-gradient">
              captivating products.{" "}
            </span>
          </div>
          <h1 style={{ paddingTop: "30px", color: "white", fontSize: "17px" }}>
            Where imagination meets reality, we turn ideas into captivating
            products.
          </h1>
          <Link
            href="#sectionProjects"
            data-scroll-to
            className="header__hero--cta"
          >
            VIEW PROJECTS
          </Link>
        </div>
      </header>
      <div className="header__footer">
        {/* <div className="header__footer--left">
          <div className="speaker">
            <div
              onClick={handleSpeaker}
              className={`${"speaker__toggle"} ${
                speakerState === "unmuted" ? `${"speaker__toggle--anim"}` : ``
              }`}
            >
              &nbsp;
            </div>
            <div className="speaker__muted">
              <img src="svg/muted.svg" alt="muted icon" />
            </div>
            <div className="speaker__unmuted">
              <svg
                width="14"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.599976"
                  y="1.06665"
                  width="1.4"
                  height="10"
                  fill="#F2F2F2"
                  className="rect1-anim"
                />
                <rect
                  x="9"
                  y="1.06665"
                  width="1.4"
                  height="10"
                  fill="#F2F2F2"
                  className="rect2-anim"
                />
                <rect
                  x="4.79999"
                  y="1.06665"
                  width="1.4"
                  height="10"
                  fill="#F2F2F2"
                  className="rect3-anim"
                />
              </svg>
            </div>
          </div>
        </div> */}
        {/* <div className="header__footer--right">
          <Link
            href="https://github.com/adeolaadeoti"
            rel="noopener"
            target="_blank"
          >
            👾 GH
          </Link>
          <Link
            href="https://twitter.com/adeolajs"
            rel="noopener"
            target="_blank"
          >
            🐦 TW
          </Link>
          <Link
            href="https://www.linkedin.com/in/adeoladev"
            rel="noopener"
            target="_blank"
          >
            💼 LD
          </Link>
          <Link
            href="https://www.instagram.com/adeolaadeoti_"
            rel="noopener"
            target="_blank"
          >
            {" "}
            📸 IN
          </Link>
        </div> */}
      </div>
    </div>
  );
}
