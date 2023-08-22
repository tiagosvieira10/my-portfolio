import { HomeContainer, ItemSidebar, Sidebar } from "@/styles/pages/home";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";

export default function Home(){

  return(
    <HomeContainer>
      <div></div>
      <h1>Olá, eu sou Tiago <br/> Software Developer</h1>
      <span>Sou desenvolvedor de software, entusiasta em soluções através da<br/>tecnologia. Este é meu portfólio, onde você encontra um pouco<br/>mais sobre mim e meus projetos</span>
      
      <Sidebar>
        <ItemSidebar>
          <span>Sobre mim</span>
          <p>Minha história e minhas especialidades</p>
          <Link href={'/sobre'}>LER MAIS<ArrowRight size={25}/></Link>
        </ItemSidebar>
        
        <ItemSidebar>
          <span>Meus Trabalhos</span>
          <p>Aqui estão alguns dos meus projetos</p>
          <Link href={'/portfolio'}>VER MAIS<ArrowRight size={25}/></Link>
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