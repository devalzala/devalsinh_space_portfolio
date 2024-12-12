import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  tech: Array<string>;
  link: string;
}

const ProjectCard = ({ src, title, description, tech, link }: Props) => {
  return (
    <Link href={link} passHref>
      <div
        className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
        style={{ cursor: "pointer" }}
      >
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
        <div className="relative p-4">
          {tech.map((item, index) => (
            <p
              key={index}
              className="mt-2 text-gray-300"
              style={{
                border: "1px solid #fff",
                padding: "0.2rem",
                width: "auto",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;