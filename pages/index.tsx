import React from "react";
import MainHead from "../components/MainHead";
import Main from "../components/Main";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Feed from "../components/Feed";
import Section from "../components/Section";

const index = () => (
  <>
    <MainHead />
    <Main>
      <Header className="text-white bg-gradient-r-purple-pink pb-32" uselines>
        <Nav />
        <h2 className="text-center md:text-left text-4xl md:text-5xl font-medium max-w-sm md:max-w-2xl leading-none mx-auto md:mx-0 mb-8 md:mb-4 mt-6">
          ¡Hola! Me dicen Vale y soy diseñadora gráfica
        </h2>
        <h3 className="text-center md:text-left text-2xl md:text-3xl font-normal mb-4 mx-2 sm:mx-0">
          Te invito a ver los trabajos que más me gustan
        </h3>
        <Button href="#works" className="block sm:inline-block mt-10 mx-2 sm:mx-0">
          ver trabajos realizados
        </Button>
      </Header>

      <Feed />

      <Section className="bg-lightgrey">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quasi?</p>
      </Section>
    </Main>
  </>
);

export default index;
