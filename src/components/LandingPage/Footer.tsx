import Link from "next/link";
import oddBitLogo from "../../../public/webp/oddbitLogo.png";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__left">
        <Image src={oddBitLogo} alt="Odd bit logo" width={40} height={40} />
        <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
          <span className="footer__text" style={{ color: "white" }}>
            Odd bit
          </span>{" "}
        </Link>
        <Link
          href={"/privacy-policy"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <span>Privacy Policy</span>
        </Link>
        <Link
          href={"/terms-and-condition"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <span>Terms and conditions</span>
        </Link>
      </div>
      <div className="footer__right" style={{ color: "white" }}>
        <p>&copy; {currentYear} Oddbit. All rights reserved.</p>
      </div>
    </footer>
  );
}
