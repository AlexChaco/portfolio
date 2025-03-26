import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { FiDownload } from "react-icons/fi";
import { data } from "@/lib/data";

export default function Home() {

  return (
    <section className="full-screen pt-20">
      <div className="container mx-auto h-full">
        <div className="flex flex-col  xl:flex-row justify-between items-center  xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{data.title}</span>
            <h1 className="h1 mb-6">
              {data.hi}<br />
              <span className="text-accent">{data.user}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {data.description}
            </p>

            {/** social media */}
            <div className="flex flex-col  xl:flex-row items-center gap-8">
              <a
                href="/assets/pdf/ALEXCHACO.pdf"
                download="CV_ALEX_CHACO.pdf"
                className="uppercase flex items-center gap-2 text-black  px-4 py-2 rounded hover:bg-primary hover:border hover:border-white bg-accent hover:text-white"
              >
                <span>Descargar</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>

  );
}
