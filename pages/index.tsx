import React from 'react';
import { getData } from './api/projects';
import MainHead, { analytics } from '../components/MainHead';
import Main from '../components/Main';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Button from '../components/Button';
import Feed from '../components/Feed';
import Section from '../components/Section';
import Skills from '../components/Skills';
import SkillsScores from '../components/SkillsScores';
import Footer from '../components/Footer';
import { SKILLS, SKILLS_SCORES } from './../_constants';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FeedProps } from '../_types';

export async function getStaticProps() {
  const projects = await getData();

  return {
    props: {
      projects,
    },
  };
}

const index = ({ projects }: FeedProps) => {
  return (
    <>
      <MainHead />
      <Main id="top">
        <Header className="pb-24" uselines>
          <Nav />
          <h2 className="text-center md:text-left text-3xl md:text-5xl font-medium max-w-sm md:max-w-2xl leading-none mx-auto md:mx-0 mb-8 md:mb-4 mt-6">
            ¡Hola! Me dicen Vale y soy diseñadora gráfica
          </h2>
          <h3 className="text-center md:text-left text-xl md:text-3xl font-normal mb-4 mx-2 sm:mx-0">
            Te invito a ver mis trabajos favoritos
          </h3>
          <Button className="block sm:inline-block mt-6 mx-2 sm:mx-0 sm:mt-10" type="div">
            <AnchorLink href="#works">ver trabajos realizados</AnchorLink>
          </Button>
        </Header>

        <Feed id="works" projects={projects} />

        <Section className="bg-lightgrey mt-8" id="skills">
          <h3 className="text-3xl font-medium mb-4">
            <span className="pb-1 is-active">Skills</span>
          </h3>
          <p className="mx-auto mb-4 max-w-xs text-lg sm:max-w-md">
            Un resumen de habilidades y software que manejo:
          </p>

          <Skills skills={SKILLS} />

          <ul className="flex mt-4 sm:mt-8 mb-4">
            <li className="flex-auto hidden md:block w-1/5 xl:w-1/3">
              <hr className="mt-10 border-mediumgrey" />
            </li>
            <li className="flex-auto md:w-3/5 xl:w-1/3">
              <Button
                href="/CV-Valentina-Morales_.pdf"
                onClick={() => {
                  analytics.track('user click', {
                    label: 'cvDownload',
                    category: 'UX',
                  });
                }}
                className="bg-darkpurple text-white"
                target="_blank"
              >
                Ver Experiencia Laboral
              </Button>
            </li>
            <li className="flex-auto hidden md:block w-1/5 xl:w-1/3">
              <hr className="mt-10 border-mediumgrey" />
            </li>
          </ul>

          <SkillsScores skills={SKILLS_SCORES} />
          <Button className="mx-auto mt-6" type="div" variant="clear">
            <AnchorLink href="#top">
              <img
                src="https://res.cloudinary.com/hadmouse/image/upload/v1596344314/kiwa/Icon-arrow-up_buo1qx.svg"
                alt="Volver arriba"
              />
            </AnchorLink>
          </Button>
        </Section>

        <Footer />
      </Main>
    </>
  );
};

export default index;
