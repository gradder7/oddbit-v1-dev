import { motion } from "framer-motion";
import logo from "../../../public/webp/oddbitLogo.png";
import Image from "next/image";

export default function PreLoader() {
  const transition = {
    duration: 1.4,
    ease: "easeInOut",
  };
  return (
    <div>
      <motion.div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#menu-target"
        animate={{
          top: "-100vh",
          transition: { duration: 1, ease: "easeInOut", delay: 2 },
        }}
        className="preloader"
      >
        <div className="preloader__wrapper">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { ...transition } }}
            className="preloader__left"
          >
            <Image src={logo} alt="logoImage" width={100} height={100} />
          </motion.div>
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { ...transition } }}
            className="preloader__right"
          >
            <p className="preloader__text">Welcome to ODDBIT</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
