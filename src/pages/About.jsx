import Phone from "../assets/iphone.svg";
import Closing from "../assets/closing.mp4";
import Hello from "../assets/hello.png";

const About = () => {
  return (
    <main className=" bg-black w-full min-h-screen ">
      <section className=" about_container flex w-full h-4/5 justify-center align-center self-center flex-wrap lg:flex-nowrap pt-4 lg:pt-8 ">
        <section className="about flex flex-col w-full  lg:w-2/4 justify-start items-center  text-black text-xl bg-white rounded-3xl mx-3 ">
          <h1 className="text-4xl pt-6 text-center font-semibold">About Me</h1>

          <div className="md:flex-col py-6 w-full font-body md:px-10">
            <div className=" items-center  w-full rounded-3xl px-6 md:p-6 space-y-10 md:space-y-6 ">
              <img src={Hello} className="w-ful md:hidden"></img>
              <p>
                Hi! My name is Chelsea. I am a UX designer and Frontend
                Developer who has a hard time picking sides.
              </p>

              <p>
                A recent graduate of Hyper Island's frontend developer program,
                I also worked on projects with a focus in UX and UI Design and I
                am happiest when I get the chance to combine those areas with
                coding.
              </p>

              <p>
                Research-ninja, eternal-optimist, and team-moderator are
                particular labels that I have earned over the years through my
                experiences working within education and the sciences. Design
                and understanding people have always been at the core of what I
                do, regardless of my profession.
              </p>

              <p>
                I am a social, positive, and curious person who tends to go the
                extra mile for the people in my life and for the work that I do.
                I thrive on new experiences and rarely say no when interesting
                opportunities come my way.{" "}
              </p>
              <p>
                The film on this page was one of them. I guarantee that I am
                much friendlier IRL 😊{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="vidbox w-full md:w-9/12 lg:w-2/5 flex justify-center items-center mx-2 mt-5 lg:mt-0 ">
          <div className="flex justify-center items-center w-full h-2/4 relative">
            <img
              className="object-cover absolute z-10 "
              src={Phone}
              alt="iPhone svg"
            />
            <video
              className=" w-10/12 lg:w-10/12 align-center self-center bottom-0 z-11  "
              autoPlay
              muted
            >
              <source src={Closing} type="video/mp4" />
            </video>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
