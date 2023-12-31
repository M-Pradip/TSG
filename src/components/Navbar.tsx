import { Flame, Phone } from "lucide-react";
import Link from "next/link";
import GetInTouch from "./GetInTouch";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="">
            <div className="flex h-16 items-center">
              {/* TODO:mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/" className="flex gap-2 items-center">
                  <Flame size={36} color="#e11d48" strokeWidth={3} />
                  <h2 className="text-[#e11d48] font-semibold ">TSG Hamil</h2>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <Link href="#contact">
                  <Button>Get In Touch</Button>
                </Link>
              </div>
              <div className="text-white  px-3 py-2 rounded-md text-sm font-medium  cursor-pointer">
                <Button className="flex gap-3" variant="secondary">
                  <Phone color="#e11d48" />
                  01-123-456-789
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
export default Navbar;
