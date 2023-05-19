import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__hero">
          <div className="header__hero--heading">
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
    </div>
  );
}
