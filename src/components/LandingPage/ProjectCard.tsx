import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  techStack: string;
  imageSrc1: StaticImageData;
  imageSrc2: StaticImageData;
  websiteUrl: string;
  description: string;
};
export default function ProjectCard({
  title,
  techStack,
  imageSrc1,
  imageSrc2,
  websiteUrl,
  description,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card__left">
        <h4 className="heading-4">{techStack}</h4>
      </div>
      <div
        className="project-card__middle"
        data-displacement="webp/myDistorsionImage.webp"
      >
        <Image src={imageSrc1} alt="alexxandria model" />
        <Image src={imageSrc2} alt="alexxandria logo" />
      </div>
      <div className="project-card__right">
        <h2
          data-scroll
          data-scroll-offset="35%"
          data-scroll-repeat={true}
          data-scroll-class="heatrow-anim"
          className="heading-2"
        >
          {title}
        </h2>
        <Link
          rel="noopener"
          target="_blank"
          href={websiteUrl}
          className="project-card__link"
        >
          VISIT THE WEBSITE
        </Link>
        <div className="project-card__socials">{description}</div>
      </div>
    </div>
  );
}
