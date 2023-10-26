import Islademo from "../assets/islatranquila.png";
import Happeningdemo from "../assets/happening.png";
import Floridamandemo from "../assets/floridaman.png";
import Twinedemo from "../assets/twinedemo.png";
import Experimentsdemo from "../assets/experiments.png";
import Designthinkingdemo from "../assets/designthinking.png";
import Islainfo from "../assets/islainfo.svg";
import Happeninginfo from "../assets/happeninginfo.svg";
import Floridamaninfo from "../assets/floridamaninfo.svg";
import Twineinfo from "../assets/twineinfo.svg";
import Experimentsinfo from "../assets/experimentsinfo.svg";
import Designthinkinginfo from "../assets/designthinkinginfo.svg";

const Projects = () => {
  return (
    <main className=" bg-black w-full min-h-screen ">
      <section className=" flex flex-col md:flex-row w-full h-4/5 justify-between align-center self-center pt-12">
        <section className=" flex self-center justify-center items-center w-full md:w-2/5 z-1 ">
          <a
            href="https://www.figma.com/proto/Lamqlfm7KpX3l5LyGE9QgT/Twine?page-id=108%3A15&type=design&node-id=108-1285&viewport=-225%2C-124%2C0.18&t=9MLutFnKEheTgDMz-1&scaling=scale-down&starting-point-node-id=108%3A1285&show-proto-sidebar=1&mode=design"
            target="_blank"
            className="w-1/2"
          >
            <img src={Twinedemo} />
          </a>
        </section>
        <section className=" flex self-center  items-center w-11/12 md:w-3/5 text-black -mt-5 md:-mt-0">
          <img
            src={Twineinfo}
            alt="Twine is a digital tool that seamlessly integrates multiple HR platforms"
            className=" w-full lg:w-4/6 md:w-5/6"
          />
        </section>
      </section>

      <section className=" flex flex-col-reverse md:flex-row w-full h-4/5 justify-between align-center self-center pt-20 ">
        <section className=" flex self-center justify-center items-center w-11/12 md:w-2/4 text-black -mt-5 md:-mt-0">
          <img src={Designthinkinginfo} className="w-full lg:w-10/12" />
        </section>

        <section className=" flex self-center justify-center items-center w-full md:w-2/4 md:mr-6 ">
          <a
            href="https://www.figma.com/file/qrQnDb0WqNLN7UKXo9WpxE/Sprint%3A-Design-Thinking?type=design&node-id=2%3A6205&mode=design&t=WrEuc2ussjsUbsnZ-1"
            target="_blank"
            className="w-11/12"
          >
            <img
              src={Designthinkingdemo}
              alt="A design thinking Sprint with included wireframes and prototypes"
            />
          </a>
        </section>
      </section>

      <section className=" flex flex-col md:flex-row w-full h-4/5 justify-between align-center self-center pt-20">
        <section className=" flex self-center justify-center items-center w-full md:w-2/5 z-1 ">
          <a
            href="https://www.figma.com/file/bhFCqgYHEFzlmCdsW8YFMr/Experiments?type=design&node-id=0%3A1&mode=design&t=0TqWlqmciCF3df2b-1"
            target="_blank"
            className="w-1/2"
          >
            <img src={Experimentsdemo} />
          </a>
        </section>
        <section className=" flex self-center  items-center w-11/12 md:w-3/5 text-black -mt-5 md:-mt-0">
          <img
            src={Experimentsinfo}
            alt="Click the image to see my Figma Experiments"
            className=" className= w-full lg:w-4/6 md:w-5/6"
          />
        </section>
      </section>

      <section className=" flex flex-col-reverse md:flex-row w-full h-4/5 justify-between align-center self-center pt-20 ">
        <section className=" flex self-center justify-center items-center w-11/12 md:w-2/4 text-black -mt-5 md:-mt-0">
          <img
            src={Floridamaninfo}
            alt="A web game called a Florida Man, built in phaser.js Texts reads: "
            className="w-full lg:w-10/12"
          />
        </section>
        <section className=" flex self-center justify-center items-center w-full md:w-2/4 md:mr-6 ">
          <a
            href="https://chelseablaze.github.io/florida-game/"
            target="_blank"
            className="w-11/12"
          >
            <img src={Floridamandemo} />
          </a>
        </section>
      </section>

      <section className=" flex flex-col md:flex-row w-full h-4/5 justify-between align-center self-center pt-20">
        <section className=" flex self-center justify-center items-center w-full md:w-2/5 z-1 ">
          <a
            href="https://benciantar-happening.netlify.app/"
            target="_blank"
            className="w-1/2"
          >
            <img src={Happeningdemo} />
          </a>
        </section>
        <section className=" flex self-center  items-center w-11/12 md:w-3/5 text-black -mt-5 md:-mt-0">
          <img
            src={Happeninginfo}
            alt="An e-commerce website called Happening, that sells experiences as gifts. Texts reads: "
            className=" w-full lg:w-4/6 md:w-5/6"
          />
        </section>
      </section>

      <section className=" flex flex-col-reverse md:flex-row w-full h-4/5 justify-between align-center self-center pt-20">
        <section className=" flex self-center justify-center items-center w-11/12 md:w-2/4 text-black -mt-5 md:-mt-0 ">
          <img
            src={Islainfo}
            alt="A web site for a fictitious island called Isla Tranquila. Texts reads: "
            className="w-full lg:w-10/12"
          />
        </section>
        <section className=" flex self-center justify-center items-center w-full md:w-2/4 md:mr-6 ">
          <a
            href="https://isla-tranquila.netlify.app/"
            target="_blank"
            className="w-11/12"
          >
            <img src={Islademo} />
          </a>
        </section>
      </section>
    </main>
  );
};

export default Projects;
