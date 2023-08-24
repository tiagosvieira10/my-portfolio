import { AboutContainer, CardEducation, CardSkills, Education, EducationContainer, HistoryContainer, Skills, SkillsContainer } from "@/styles/pages/sobre";
import fotoPerfil from '../assets/foto.svg';
import { React, Next, Vite, Javascript, Typescript, Html, Css, Node  } from '../assets/logosSkills';
import Image from "next/image";

export default function Sobre(){
  return(
    <>
      <AboutContainer>
        <HistoryContainer>
          <div></div>
          <h1>Que bom ter você por aqui, eu sou Tiago Vieira</h1>
          <span>Minha trajetória na programação teve início em 2018, quando dei os primeiros passos no mundo da lógica de programação e em C++. Após uma pausa para cursar Engenharia na Universidade Federal do Vale do São Francisco, retomei meu percurso no início de 2022. Foi nesse momento que redescobri meu fascínio pelo universo do JavaScript e suas incríveis possibilidades</span>
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
            <Image src={Typescript} width={100} height={100} alt=""/>
            <h2>TypeScript</h2>
          </Skills>

          <Skills>
            <Image src={Javascript} width={100} height={100} alt=""/>
            <h2>JavaScript</h2>
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

      <EducationContainer>
        <p> <span>/</span> EDUCAÇÃO </p>
        <CardEducation>
          <Education>
            <h3>DIGITAL HOUSE BRASIL <strong> /</strong> AGOSTO 2022 - MAIO 2023</h3>
            <h1>Desenvolvimento de Software</h1>
            <h4>Curso intensivo para desenvolver aplicações do zero até se tornar um profissional programador. Dominando a criação de sites robustos, desenvolvimento de aplicações modernas e adquirindo habilidades tanto no Front-end quanto no Back-end. Além das competências técnicas, desenvolvi soft skills como trabalho em equipe, resolução de problemas e metodologias ágeis.</h4>
          </Education>

          <Education>
            <h3>ROCKETSEAT - IGNITE <strong> /</strong> MAIO 2023</h3>
            <h1>Especialização em Desenvolvimento</h1>
            <h4>Bootcamp de especialização e desenvolvimento, em React, React Native e Node. Com metodologia prática, baseada nos pilares do foco, prática e grupo</h4>
          </Education>

          <Education>
            <h3>CENTRO UNIVERSITÁRIO INTERNACIONAL<strong> /</strong> 2023 - 2027 </h3>
            <h1>Engenharia de Software</h1>
            <h4>A graduação em Engenharia de Software fornece um profundo entendimento das metodologias e práticas vitais para o desenvolvimento de sistemas de software avançados. Abrange áreas como design orientado a objetos, arquitetura de software, testes automatizados e gerenciamento de projetos.</h4>
          </Education>

          <Education>
            <h3>UNIVERSIDADE FEDERAL DO VALE DO SÃO FRANCISCO <strong> /</strong> 2018 - 2023 </h3>
            <h1>Engenharia Mecânica</h1>
            <h4>Cursei a graduação durante quatro anos, aprimorando habilidades em áreas como lógica, cálculo e análise crítica. Durante o período de 2022 a 2023, redescobri minha paixão pela programação, levando-me a fazer a transição para a Engenharia de Software. Essa mudança me permitiu aproveitar conhecimentos prévios e experiências valiosas, agora aplicados em um campo que me inspira profundamente.</h4>
          </Education>
        </CardEducation>
      </EducationContainer>

    </>
  )
}