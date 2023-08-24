import { P1, P2, P3, P4, P5, P6, P7, P8, Portfolio } from "@/assets/projetosLive";
import { CardProjetos, Projeto, ProjetosContainer } from "@/styles/pages/projetos";
import Image from "next/image";

export default function Portifolio(){
  return (
    <ProjetosContainer>
    <p> <span>/</span> MEUS PROJETOS </p>

    <CardProjetos>
      <Projeto>
        <Image src={Portfolio} width={800} height={800} alt=""/>
        <h2>Meu Portfólio</h2>
        <h4>Projeto Criado Next.JS, React e TypeScript para apresentação pessoal dos meus trabalhos e minhas habilidades</h4>
      </Projeto>

      <Projeto>
        <Image src={P1} width={800} height={800} alt=""/>
        <h2>Next.js</h2>
        <h4>projeto</h4>
      </Projeto>

      <Projeto>
        <Image src={P2} width={800} height={800} alt=""/>
        <h2>Vite</h2>
        <h4>projeto</h4>
      </Projeto>

      <Projeto>
        <Image src={P3} width={800} height={800} alt=""/>
        <h2>TypeScript</h2>
        <h4>projeto</h4>
      </Projeto>

      <Projeto>
        <Image src={P4} width={800} height={800} alt=""/>
        <h2>JavaScript</h2>
        <h4>projeto</h4>
      </Projeto>

      <Projeto>
        <Image src={P5} width={800} height={800} alt=""/>
        <h2>HTML</h2>
        <h4>projeto</h4>
      </Projeto>

      <Projeto>
        <Image src={P6} width={800} height={800} alt=""/>
        <h2>CSS</h2>
        <h4>projeto</h4>
      </Projeto>

      <Projeto>
        <Image src={P7} width={800} height={800} alt=""/>
        <h2>Node</h2>
        <h4>projeto</h4>
      </Projeto>

      <Projeto>
        <Image src={P8} width={800} height={800} alt=""/>
        <h2>Node</h2>
        <h4>projeto</h4>
      </Projeto>

    </CardProjetos>
  </ProjetosContainer>
  )}
