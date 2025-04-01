import Navbar from "../components/Fragments/Navbar";
import SectionHome from "../components/Fragments/SectionHome";
import SectionAbout from "../components/Fragments/SectionAbout";
import SectionSkills from "../components/Fragments/SectionSkills";
import SectionProjects from "../components/Fragments/SectionProjects";
import SectionContact from "../components/Fragments/SectionContact";
import Footer from "../components/Fragments/Footer";
import Sidebar from "../components/Fragments/Sidebar";
import SectionCertificate from "../components/Fragments/SectionSerticate";

const HomePage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <SectionHome />
      <SectionAbout />
      <SectionSkills />
      <SectionCertificate />
      <SectionProjects />
      <SectionContact />
      <Footer />
    </main>
  );
};

export default HomePage;
