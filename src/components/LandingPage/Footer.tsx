import Link from "next/link";
import oddBitLogo from "../../../public/webp/oddbitLogo.png";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__left">
        <Image src={oddBitLogo} alt="Odd bit logo" width={40} height={40} />
        <span className="footer__text" style={{ color: "white" }}>
          Odd bit
        </span>{" "}
        <Link
          href={"/privacy-policy"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <span>Privacy Policy</span>
        </Link>
        <Link
          href={"/terms-condition"}
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

// import Link from "next/link";
// import Image from "next/image";
// import oddBitLogo from "../../../public/webp/oddbitLogo.png";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer__left">
//         <Image src={oddBitLogo} alt="Odd bit logo" width={40} height={40} />
//         <span className="footer__text">Odd bit</span>
//       </div>

//       <div className="footer__right">
//         <Link href="/privacy-policy">
//           <h1 className="footer__link">Privacy Policy</h1>
//         </Link>
//         <Link href="/terms-and-conditions">
//           <h1 className="footer__link">Terms and Conditions</h1>
//         </Link>
//         <div className="footer__copyright">
//           &copy; {new Date().getFullYear()} Your Website Name
//         </div>
//       </div>
//     </footer>
//   );
// }
