import Head from "next/head";
import ProjectPreview, { ProjectPreviewEntry } from "../components/ProjectPreview";
import Header from "../components/Header";
import Nav from "../components/Nav";
//import { useRouter } from "next/router";
import useSWR from "swr";
import fetcherFunction from '../utilities/fetcher';

const renderProjects = () => {
  //const { query } = useRouter();
  const route = "/api/projects";
  const { data, error } = useSWR(route, fetcherFunction);

  if (error) {
    return <div>{error.messsage}</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  const projects = data.data;
  console.log(projects);

  const output = projects.map((entry: ProjectPreviewEntry) => {
    return (
      <li key={entry.id}>
        <ProjectPreview entry={entry} />
      </li>
    );
  });

  return <ul className='flex'>{output}</ul>;
};

const index = () => {
  return (
    <>
      <Head>
        <title>Hola Soy Vale</title>
      </Head>
      <main className='container mx-auto'>
        <Header>
          <Nav />
        </Header>
        {renderProjects()}
      </main>
    </>
  );
};

export default index;
