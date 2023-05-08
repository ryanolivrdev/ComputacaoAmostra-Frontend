import { useQuery } from "@tanstack/react-query";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import type { TProject } from "../../@types/TProject";
import { NormalizeTextToSearch } from "../../components/helpers/normalize-text-to-search";
import { Default } from "../../components/layouts/Default";
import { Header } from "../../components/sections/voting/Header";
import { VotingGallery } from "../../components/sections/voting/VotingGallery";
import { getProjects } from "../../services/get-projects";

import { env } from "../../env.mjs";

const Voting: NextPage = () => {
  const router = useRouter();
  const query = router.query as { course?: "bcc" | "ecomp" };
  const course = useMemo(() => query.course ?? "bcc", [query.course]);

  const [searchTerm, setSearchTerm] = useState("");

  const isVotingStarted =
    new Date().getTime() >
    new Date(env.NEXT_PUBLIC_VOTING_START_DATE).getTime();

  const { data: projects, isLoading: isProjectsLoading } = useQuery<TProject[]>(
    ["projects", course],
    async () => {
      const response = await getProjects({ filter: course });
      return response;
    },
    {
      refetchOnWindowFocus: false,
      enabled: isVotingStarted,
    }
  );

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (!searchTerm || "") return projects;
    return projects.filter((project) =>
      NormalizeTextToSearch(project.name).includes(
        NormalizeTextToSearch(searchTerm)
      )
    );
  }, [projects, searchTerm]);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  useEffect(() => {
    if (!isVotingStarted) {
      void router.push("/voting/countdown");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Default
      title="Votação"
      description="Quem você quer que vença a computação amostra 2023?"
      path={`/voting?course=${course}`}
    >
      <Header course={course ?? "bcc"} onChangeText={handleSearch} />
      <VotingGallery
        projects={filteredProjects}
        course={course}
        isLoading={isProjectsLoading}
      />
    </Default>
  );
};

export default Voting;