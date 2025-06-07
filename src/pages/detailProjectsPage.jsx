import CardProject from "../components/Fragments/CardProject";
import projects from "../datas/projects.json";
import SubNavbar from "../components/Fragments/SubNavbar";

const DetailProjectsPage = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center bg-slate-800">
      <SubNavbar />
      <h2 className="mt-30 text-3xl font-bold text-white">All Projects</h2>
      <hr className="my-8 w-10/12 border-b-10 border-solid border-slate-300" />
      <div className="w-10/12 py-8">
        <div className="flex w-full flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <CardProject
              img={project.img}
              url={project.url}
              title={project.title}
              delay={project.delay}
              key={project.id}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailProjectsPage;
