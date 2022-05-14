import { Footer } from "../components";
import  Phone  from "../assets/iphone.svg"
import Closing from "../assets/closing.mp4"
import Aboutme2 from "../assets/about2.png"

const About = () => {

    return (
      <main className = " bg-black w-full min-h-screen ">
        <section className=" about_container flex w-full h-4/5 justify-between align-center self-center pt-12">
          <section className="about w-2/4 relative ml-12 pt-2 items-center ">
            <img className=" w-11/12 pl-5" src={Aboutme2} alt="About me reads: " />
          </section>
          <section className=" w-2/4 relative pt-28 mr-16 ">
              <img className="object-cover absolute z-10 pr-5" src={Phone} alt="iPhone svg" />
              <video className=" w-3/4 absolute z-11 ml-20 mt-8 " autoPlay muted >
                <source src = {Closing} type="video/mp4" />
              </video>
          </section>
        </section>
      <Footer />
  </main>
      )
  };
  
  export default About;