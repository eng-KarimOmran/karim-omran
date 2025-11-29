import { FaRegFileAlt } from "react-icons/fa";
import Image from "next/image";
import Icon from "@/components/common/Icon";
import data from "@/data.json";

export default function Hero() {
  const heroSection = data.heroSection;
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 py-10 overflow-x-hidden">
      <div className="flex flex-col items-center md:items-start gap-6 sm:gap-6 md:gap-8">
        <h3 className="scroll-m-20 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
          {heroSection.title}
        </h3>
        <span className="scroll-m-20 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance text-center md:text-left">
          {heroSection.greeting}
        </span>
        <h2 className="scroll-m-20 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance text-(--main) text-center md:text-left">
          {heroSection.name}
        </h2>
        <p className="max-w-md text-center md:text-left text-sm md:text-base">
          {heroSection.description}
        </p>
        <ul className="flex flex-wrap justify-between items-center gap-4 ">
          <li className="w-full lg:w-auto">
            <a
              href={heroSection.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center border-2 border-(--main) px-6 py-2 text-sm md:text-base rounded-2xl hover:bg-(--main)/50 transition-all duration-300"
            >
              <FaRegFileAlt className="mr-2" />
              View CV
            </a>
          </li>
          {heroSection.socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center size-8 md:size-10 rounded-full border-2 border-(--main) hover:bg-(--main)/50 transition-all duration-300"
              >
                <Icon name={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative aspect-[3/4] w-10/12 sm:w-9/12 md:w-6/12 lg:w-3/12">
        <div className="absolute inset-0 rounded-2xl border-2 border-primary overflow-hidden">
          <Image
            src={heroSection.image}
            alt="karim"
            className="object-cover"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
}
