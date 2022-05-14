import { Footer } from "../components";
import  Phone  from "../assets/iphone.svg"
import Closing from "../assets/closing.mp4"
import Aboutme2 from "../assets/about2.png"

const About = () => {

    return (
      <main className = " bg-black w-full min-h-screen ">
        <section className=" about_container flex w-full h-4/5 justify-center align-center self-center pt-5 flex-wrap lg:flex-nowrap ">
          <section className="about flex w-full md:w-9/12 lg:w-2/4 justify-center items-center mx-2 ">
            <img className=" w-11/12" src={Aboutme2} alt="About me reads: " />
          </section>
          <section className="vidbox w-full md:w-9/12 lg:w-2/5 flex justify-center items-center mx-2 mt-5 lg:mt-0 ">
              <div className="flex justify-center items-center w-full h-2/4 relative">
                <img className="object-cover absolute z-10 " src={Phone} alt="iPhone svg" />
                <video className=" w-10/12 lg:w-10/12 align-center self-center bottom-0 z-11  " autoPlay muted >
                <source src = {Closing} type="video/mp4" />
                </video>
              </div>
          </section>
        </section>
  </main>
      )
  };
  
  export default About;