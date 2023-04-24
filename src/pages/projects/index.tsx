import { type NextPage } from "next";
import { Default } from "../../components/layouts/Default";
import { Header } from "../../components/sections/projects/Header";
import { VotingGallery } from "../../components/sections/projects/VotingGallery";

const projects: NextPage = () => {
  return (
      <Default title="Projetos">
        <Header />
        <VotingGallery />
      </Default>
  );
};

export default projects;