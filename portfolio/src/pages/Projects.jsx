      import { Footer } from "../components";
      import Projectex from "../assets/project.png"
      import Islademo from "../assets/islatranquila.svg"

      
      const Projects = () => {
      
          return (
            <main className = " bg-black w-full min-h-screen ">

              <section className=" flex flex-col-reverse md:flex-row w-full h-4/5 justify-between align-center self-center pt-12">
                <section className=" flex self-center justify-center items-center w-11/12 md:w-2/4 text-black -mt-5 md:-mt-0">
                  <img src= {Projectex} alt="A web site for a fictitious island called Isla Tranquila. Texts reads: " className="w-11/12" />
                </section>
                <section className=" flex self-center justify-center items-center w-full md:w-2/4 md:mr-6 ">
                    <img src={Islademo} className="w-11/12" />
                </section>
              </section>

            <Footer />
        </main>
            )
        };
        
        export default Projects;