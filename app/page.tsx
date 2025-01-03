//Component
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DynamicText from "@/components/DynamicText";

//UI Components
import { Button } from "@/components/ui/button"

//React Icons
import { FiDownload } from "react-icons/fi"

const home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">

            <h1 className="text-[32px] lg:text-[40px] xl:text-[48px] font-bold mb-0">
              Hello it's <span className="text-accent">Mew</span>
            </h1>

            {/* DynamicText */}
            <h1 className="text-[24px] lg:text-[32px] xl:text-[40px] font-bold mb-6 text-white">
              I'm <DynamicText texts={['Software Developer', 'UX/UI Designer']} />
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I'm proficient in various programming languages and frameworks.
            </p>

            {/* Button & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>

                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 mt-8 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats */}
      <Stats />
    </section>
  )
};

export default home;