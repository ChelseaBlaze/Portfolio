      import { Footer } from "../components";
      import Projectex from "../assets/project.png"
      import Islademo from "../assets/islatranquila.svg"

      
      const Projects = () => {
      
          return (
            <main className = " bg-black w-full min-h-screen ">
              <section className=" flex w-full h-4/5 justify-between align-center self-center pt-12">
                <section className=" w-2/4 relative ml-16 text-black items-center ">
                  <img src= {Projectex} alt="A web site for a fictitious island called Isla Tranquila. Texts reads: " className="w-11/12" />
                </section>
                <section className=" w-2/4 relative pt-20 mr-6 ">
                    <img src={Islademo} className="w-11/12" />
                </section>
              </section>
            <Footer />
        </main>
            )
        };
        
        export default Projects;