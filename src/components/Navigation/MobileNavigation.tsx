import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: "easeInOut",
};
const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: "easeInOut",
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: "easeInOut",
};

const closedTansition = {
  duration: 1,
  ease: "easeInOut",
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
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
              📸 IN
            </Link>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <Link
            href="mailto:adeolaonigegeara@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </Link>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <Link
            target="_blank"
            rel="noopener"
            href="https://alexxandria.vercel.app/"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/alexxandria-nav.webp" alt="alexxandria" />
            <h2>
              Alexxandria
              <br />
              Forque
            </h2>
          </Link>
          <Link
            href="https://safarika-adeola.netlify.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/safarika-nav.webp" alt="safarika" />
            <h2>Safarika</h2>
          </Link>
          <Link
            href="https://adeolaadeoti.netlify.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/adeola-1.webp" alt="adeola" />
            <h2>
              AdeolaAdeoti
              <br />
              Version 1
            </h2>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
