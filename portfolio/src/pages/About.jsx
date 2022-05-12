import { Footer } from "../components";
import  Phone  from "../assets/iphone.svg"
import Closing from "../assets/closing.mp4"

const About = () => {

    return (
      <main className = " bg-black w-full min-h-screen ">
        <section className=" about_container flex w-full h-4/5 justify-center align-center self-center pt-24">
          <section className=" w-2/5 flex ">
            text box
          </section>
          <section className=" w-2/4 relative align-center">
              <img className="object-cover absolute z-10" src={Phone} alt="iPhone svg" />
              <video className=" w-3/4 absolute z-11 ml-24 mt-10 " autoPlay muted >
                <source src = {Closing} type="video/mp4" />
              </video>
          </section>
        </section>
      <Footer />
  </main>
      )
  };
  
  export default About;