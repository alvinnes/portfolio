import Navbar from "../components/Fragments/Navbar";
import CardProject from "../components/Fragments/CardProject";
import projects from "../datas/projects.json";

const DetailProjectsPage = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center bg-slate-800">
      <Navbar />
      <h2 className="text-3xl font-bold text-white mt-30">All Projects</h2>
      <hr className="w-10/12 border-solid border-b-10 border-slate-300 my-8"/>
      <div className="w-10/12 py-8">
        <div className="flex w-full flex-wrap gap-8">
          {projects.map((project) => (
            <CardProject
              img={project.img}
              url={project.url}
              title={project.title}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailProjectsPage;
