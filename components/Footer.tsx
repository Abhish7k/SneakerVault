import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <div className="mx-auto max-w-2xl mt-20 px-4 py-10 lg:max-w-7xl lg:px-8 border-t flex justify-between items-center">
      <div>
        Built by{" "}
        <Link
          href="https://github.com/Abhish7k"
          target="_blank"
          className="font-medium hover:underline"
        >
          Abhish7k
        </Link>
      </div>

      <div className="flex gap-4">
        {socials.map((social) => {
          return (
            <Link
              key={social.label}
              href={social.link}
              aria-label={social.label}
              className=""
              target="_blank"
            >
              <social.icon className="w-5 h-5 hover:scale-110 transition-all" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const socials = [
  {
    label: "GitHub",
    icon: SiGithub,
    link: "https://github.com/Abhish7k",
  },

  {
    label: "Twitter",
    icon: SiX,
    link: "https://twitter.com/abhizh7k",
  },
  {
    label: "LinkedIn",
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/abhish7k",
  },
];
