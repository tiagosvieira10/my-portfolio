import { AboutContainer, CardEducation, CardSkills, Education, EducationContainer, HistoryContainer, Skills, SkillsContainer } from "@/styles/pages/sobre";
import fotoPerfil from '../assets/foto.svg';
import { React, Javascript, Typescript, Html, Css, Node, AWS, GoogleCloud, SQL, Java, Php, Angular } from '../assets/logosSkills';
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Sobre(){
  return(
    <>
      <Head>
        <title>Sobre | Tiago Vieira</title>
      </Head>
      <AboutContainer>
        <HistoryContainer>
          <div className="barraSuperior"></div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Que bom ter você por aqui, eu sou Tiago Vieira</h1>
            <span>Minha trajetória na programação teve início em 2018, quando dei os primeiros passos no mundo da lógica de programação e em C++. Após uma pausa para cursar Engenharia na Universidade Federal do Vale do São Francisco, retomei meu percurso no início de 2022. Foi nesse momento que redescobri meu fascínio pelo universo do desenvolvimento e suas incríveis possibilidades. <strong>Deslizando para baixo, você encontrará minhas experiências, especialidades e formações acadêmicas.</strong></span>
          </motion.div>
        </HistoryContainer>

        <figure>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <Image src= {fotoPerfil} width={190} height={190} alt="" />
            <figcaption>Tiago Silva Vieira.<br />Pernambuco, Brasil</figcaption>
          </motion.div>  
        </figure>

      </AboutContainer>

      <SkillsContainer>
        <p> <span>/</span> MINHAS EXPERIÊNCIAS </p>

        <Education>
          <h3>Prefeitura Municipal de Ouricuri <strong> /</strong> Junho 2024 - o momento</h3>
          <h1>Desenvolvedor de Software</h1>
          <h4>
            . Desenvolvimento de soluções tecnológicas para otimizar processos internos;<br/>
            . Gerenciamento e otimização de bancos de dados, garantindo segurança e integridade;<br/>
            . Utilização de serviços AWS (EC2, S3, RDS) para implementação e gerenciamento de infraestrutura em nuvem;<br/>
            . Colaboração com equipes multidisciplinares;
            . Automação de processos. 
          </h4>
        </Education>

        <Education>
          <h3>Instituto Ação e Proteção<strong> /</strong> Novembro 2023 - Maio 2024</h3>
          <h1>Desenvolvedor Front end</h1>
          <h4>
            . Construção de aplicação completa, utilizando React;<br/>
            . Contribuição para o design e usabilidade, priorizando uma experiência do usuário (UX/UI);<br/>
            . Manutenção regular da aplicação;<br/>
            . Participação junto ao gerente do projetos em decisões de funcionalidade da aplicação. </h4>
        </Education>

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
        >
        <p className="skills"> TECNOLOGIAS <span>/</span> LINGUAGENS </p>
          <CardSkills>
            <Skills>
              <Image src={React} width={100} height={100} alt=""/>
              <h2>React</h2>
            </Skills>

            <Skills>
              <Image src={Angular} width={100} height={100} alt=""/>
              <h2>Angular</h2>
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
              <Image src={Node} width={100} height={100} alt=""/>
              <h2>Node.js</h2>
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
              <Image src={Php} width={100} height={100} alt=""/>
              <h2>PHP</h2>
            </Skills>

            <Skills>
              <Image src={Java} width={100} height={100} alt=""/>
              <h2>Java</h2>
            </Skills>

            <Skills>
              <Image src={SQL} width={100} height={100} alt=""/>
              <h2>SQL</h2>
            </Skills>

            <Skills>
              <Image src={GoogleCloud} width={100} height={100} alt=""/>
              <h2>Google Cloud</h2>
            </Skills>

            <Skills>
              <Image src={AWS} width={100} height={100} alt=""/>
              <h2>AWS</h2>
            </Skills>

          </CardSkills>
        </motion.div>
      </SkillsContainer>

      <EducationContainer>
        <p> <span>/</span> EDUCAÇÃO </p>
        <CardEducation>
          <Education>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            >
            <h3>CENTRO UNIVERSITÁRIO INTERNACIONAL<strong> /</strong> 2022 - 2026 </h3>
            <h1>Engenharia de Software</h1>
            <h4>A graduação em Engenharia de Software fornece um profundo entendimento das metodologias e práticas vitais para o desenvolvimento de sistemas de software avançados. Abrange áreas como design orientado a objetos, arquitetura de software, testes automatizados e gerenciamento de projetos.</h4>
            </motion.div>
          </Education>

          <Education>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <h3>DIGITAL HOUSE BRASIL <strong> /</strong> AGOSTO 2022 - MAIO 2023</h3>
            <h1>Desenvolvimento de Software</h1>
            <h4>Curso intensivo para desenvolver aplicações do zero até a proficiência em programação. Dominando a criação de sites robustos, desenvolvimento de aplicações modernas e adquirindo habilidades tanto no Front-end quanto no Back-end. Além das competências técnicas, desenvolvi soft skills como trabalho em equipe, resolução de problemas e metodologias ágeis.</h4>
          </motion.div>
          </Education>

          <Education>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <h3>ROCKETSEAT - IGNITE <strong> /</strong> MAIO 2023</h3>
            <h1>Bootcamp de especialização e desenvolvimento</h1>
            <h4>Bootcamp de especialização e desenvolvimento, em React, React Native e Node. Com metodologia prática, baseada nos pilares do foco, prática e grupo</h4>
          </motion.div>
          </Education>

          <Education>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <h3>UNIVERSIDADE FEDERAL DO VALE DO SÃO FRANCISCO <strong> /</strong> 2018 - 2022 </h3>
            <h1>Engenharia Mecânica</h1>
            <h4>Cursei a graduação durante quatro anos, aprimorando habilidades em áreas como lógica, cálculo e análise crítica. Durante o período de 2022 a 2023, redescobri minha paixão pela programação, levando-me a fazer a transição para a Engenharia de Software. Essa mudança me permitiu aproveitar conhecimentos prévios e experiências valiosas, agora aplicados em um campo que me inspira profundamente.</h4>
          </motion.div>
          </Education>
        </CardEducation>
      </EducationContainer>

    </>
  )
}