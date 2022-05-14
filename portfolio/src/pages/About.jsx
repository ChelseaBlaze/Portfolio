import { Footer } from "../components";
import  Phone  from "../assets/iphone.svg"
import Closing from "../assets/closing.mp4"
import Aboutme2 from "../assets/about2.png"

const About = () => {

    return (
      <main className = " bg-black w-full min-h-screen ">
        <section className=" about_container flex w-full h-4/5 justify-between align-center self-center pt-12">
          <section className="about flex w-2/4 justify-center items-center ">
            <img className=" w-11/12 pl-5" src={Aboutme2} alt="About me reads: " />
          </section>
          <section className="vidbox w-2/4 flex justify-center items-center ">
              <div className="flex justify-center items-center w-full h-2/4 relative">
                <img className="object-cover absolute z-10 pr-5" src={Phone} alt="iPhone svg" />
                <video className=" w-10/12 align-center self-center bottom-0 z-11  " autoPlay muted >
                <source src = {Closing} type="video/mp4" />
                </video>
              </div>
          </section>
        </section>
      <Footer />
  </main>
      )
  };
  
  export default About;