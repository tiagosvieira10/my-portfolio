import { HomeContainer, IconsContainer, ItemSidebar, Sidebar } from "@/styles/pages/home";
import Link from "next/link";
import { ArrowRight, GithubLogo, LinkedinLogo, Scroll } from "phosphor-react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home(){

  return(
    <HomeContainer>
      <Head>
        <title>Início | Tiago Vieira</title>
      </Head>
      <div className="barraSuperior"></div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
      <h1>Olá, eu sou Tiago <br/> Software Developer</h1>
      <span>Desenvolvedor de software, entusiasta em soluções através da<br/>tecnologia. Este é meu portfólio, onde você encontra um pouco<br/>mais sobre mim e meus projetos</span>
      </motion.div>
      <IconsContainer>
        <Link href= {'https://www.linkedin.com/in/tiago-svieira/'} target="blank" ><LinkedinLogo size={40} color="#008BA4" weight="duotone"/></Link>
        <Link href= {'https://github.com/tiagosvieira10'} target="blank"><GithubLogo size={40} color="#008BA4" weight="duotone"/></Link>
      </IconsContainer>

      <Sidebar>
        <ItemSidebar>
          <span>Sobre mim</span>
          <p>Minha história e minhas especialidades</p>
          <Link href={'/sobre'}>LER MAIS<ArrowRight size={25}/></Link>
        </ItemSidebar>
        
        <ItemSidebar>
          <span>Meus Trabalhos</span>
          <p>Aqui estão alguns dos meus projetos</p>
          <Link href={'/projetos'}>VER MAIS<ArrowRight size={25}/></Link>
        </ItemSidebar>
        
        <ItemSidebar>
          <span>Contato</span>
          <p>Meios para entrar em contato</p>
          <Link href={'/contatos'}>ENTRE EM CONTATO<ArrowRight size={25}/></Link>
        </ItemSidebar>
      </Sidebar>


    </HomeContainer>
  )
}