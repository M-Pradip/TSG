import Gallery from "@/components/Gallery";
import GetInTouch from "@/components/GetInTouch";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Testomonial from "@/components/Testomonial";

import Image from "next/image";

import Link from "next/link";
const imagePath = require("../assets/hero.jpeg").default;
export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
          TSG <span className="text-[#e11d48]">Hamil</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground ">
          Tobacco Shop in Sydney <br /> Open 24 hours
        </p>
        <div className="flex items-center my-5">
          <div className=" text-white bg-[#e11d48] px-7 py-3 rounded-md text-sm font-medium">
            <Link href="#contact">GET QUOTE</Link>
          </div>
        </div>
        <Image
          src={imagePath}
          width={700}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <section
        id="testmonial"
        className="flex flex-col mx-auto mb-20 justify-center"
      >
        <h1 className="text-center text-2xl font-semibold pb-10">Testmonial</h1>
        <Testomonial />
      </section>
      <section
        id="gallery"
        className="flex flex-col mx-auto mb-20 justify-center"
      >
        <h1 className="text-center text-2xl font-semibold pb-10">Gallery</h1>
        <Gallery />
      </section>
      <section
        id="contact"
        className="flex flex-col mx-auto mb-20 items-center"
      >
        <h1 className="text-center  text-2xl font-semibold pb-10">
          Contact Us
        </h1>
        <GetInTouch />
      </section>
    </MaxWidthWrapper>
  );
}
