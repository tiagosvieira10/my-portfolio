import { AboutContainer, CardSkills, HistoryContainer, Skills, SkillsContainer } from "@/styles/pages/sobre";
import fotoPerfil from '../assets/foto.svg';
import { React, Next, Vite, Javascript, Typescript, Html, Css, Node  } from '../assets/logosSkills';

import { Atom } from "phosphor-react";
import Image from "next/image";

export default function Sobre(){
  return(
    <>
      <AboutContainer>
        <HistoryContainer>
          <div></div>
          <h1>Que bom ter você por aqui, eu sou Tiago Vieira</h1>
          <span>Minha trajetória na programação teve início em 2018, quando dei os primeiros passos no mundo da lógica de programação e em C++. Após uma pausa para cursar Engenharia Mecânica na Universidade Federal do Vale do São Francisco, retomei meu percurso no início de 2022. Foi nesse momento que redescobri meu fascínio pelo universo do JavaScript e suas incríveis possibilidades</span>
        </HistoryContainer>

        <Image src= {fotoPerfil} width={190} height={190} alt="" />


      </AboutContainer>

      <SkillsContainer>
        <p> <span>/</span> MINHAS ESPECIALIDADES </p>

      <CardSkills>
        <Skills>
          <Image src={React} width={100} height={100} alt=""/>
          <h2>React</h2>
        </Skills>

        <Skills>
          <Image src={Next} width={100} height={100} alt=""/>
          <h2>Next.js</h2>
        </Skills>

        <Skills>
          <Image src={Vite} width={100} height={100} alt=""/>
          <h2>Vite</h2>
        </Skills>

        <Skills>
          <Image src={Javascript} width={100} height={100} alt=""/>
          <h2>JavaScript</h2>
        </Skills>

        <Skills>
          <Image src={Typescript} width={100} height={100} alt=""/>
          <h2>TypeScript</h2>
        </Skills>

        <Skills>
          <Image src={Html} width={100} height={100} alt=""/>
          <h2>HTML</h2>
        </Skills>

        <Skills>
          <Image src={Css} width={100} height={100} alt=""/>
          <h2>CSS</h2>
        </Skills>

        <Skills>
          <Image src={Node} width={100} height={100} alt=""/>
          <h2>Node</h2>
        </Skills>

      </CardSkills>
      </SkillsContainer>

    </>
  )
}