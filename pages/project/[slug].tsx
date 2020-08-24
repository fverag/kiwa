import React from 'react';
import sanitize from '../../utilities/sanitize';
import { getData } from '../api/projects';
import { CATEGORIES } from '../../_constants';
import { ProjectImage } from '../../_types';
import MainHead from '../../components/MainHead';
import Main from '../../components/Main';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Section from '../../components/Section';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import Button from '../../components/Button';

const mediaClasses = 'block w-full mb-6 md:mb-8';

export async function getStaticPaths() {
  let projects = await getData();
  const paths = projects.map((project) => `/project/${sanitize(project.title)}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let project = await getData(undefined, params.slug);

  return {
    props: { project },
  };
}

const getMediaExtension = (entryUrl: string): string => {
  return entryUrl.substr(entryUrl.lastIndexOf('.') + 1).toLowerCase();
};

const isImage = (entryUrl: string): boolean => {
  const imageFormats = ['png', 'jpg', 'jpeg', 'jp2', 'gif', 'webp', 'bmp'];
  const entryExtension = getMediaExtension(entryUrl);

  return imageFormats.indexOf(entryExtension) >= 0;
};

const getCategoryName = (category_id: number): string => {
  for (let cat of CATEGORIES) {
    if (category_id === cat.id) {
      return cat.name;
    }
  }

  return null;
};

const guessVideoType = (entryUrl: string): string => {
  const entryExtension = getMediaExtension(entryUrl);

  return `video/${entryExtension}`;
};

const renderComplementaryImages = (images: ProjectImage[]) => {
  //render image if it is type image, else assume video
  return images.map((entry) =>
    isImage(entry.url) ? (
      <img
        src={entry.url}
        alt={entry.title}
        title={entry.title}
        key={entry.title}
        className={mediaClasses}
      />
    ) : (
      <video key={entry.title} autoPlay muted loop className={mediaClasses} title={entry.title}>
        <source src={entry.url} type={guessVideoType(entry.url)} />
      </video>
    )
  );
};

const ProjectPage: React.FC = ({ project }: any) => {
  const metatitle = `Hola soy Vale - ${project.title}`;
  const categoryTitle = getCategoryName(project.category_id);

  return (
    <>
      <MainHead title={metatitle} />
      <Main>
        <Header id="top">
          <Nav />
        </Header>

        <Section textAlign="left">
          <article className="md:grid grid-cols-6 col-gap-8">
            <div className="col-span-6 py-2 mb-2 hidden lg:block">
              <Button
                className="flex text-grey hover:text-purple"
                variant="clear"
                type="a"
                href="/"
              >
                <img
                  className="inline-block mr-2"
                  src="https://res.cloudinary.com/hadmouse/image/upload/v1597025094/kiwa/icon-back_ri5wmi.svg"
                  alt="Volver"
                />
                <span>Volver</span>
              </Button>
            </div>
            <header className="col-span-2 md:order-2 pb-6 md:pb-1">
              <div className="md:sticky top-2">
                <h2 className="text-4xl font-medium leading-none pb-4 mb-3 is-active is-active--left">
                  {project.title}
                </h2>
                <h3 className="text-darkpurple text-2xl pt-2 mb-4">Categoría: {categoryTitle}</h3>
                <p className="text-base">{project.longDescription}</p>
              </div>
            </header>
            <div className="col-span-4">
              <img
                src={project.image.url}
                alt={project.image.title}
                title={project.image.title}
                className={mediaClasses}
              />
              {renderComplementaryImages(project.complementaryImages)}
            </div>
          </article>

          <div className="text-center">
            <BackToTop />
          </div>
        </Section>

        <Footer />
      </Main>
    </>
  );
};

export default ProjectPage;
