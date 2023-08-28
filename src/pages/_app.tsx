import { globalStyles } from "@/styles/global"
import { Container, Header, LogoContainer } from "@/styles/pages/app"
import logoImg from '../assets/logo.svg'

import Image from "next/image"
import Link from "next/link"
import { AppProps } from "next/app"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (  
    <Container>  
      <Header>
        <LogoContainer>
          <Link href={'/'}><Image src={logoImg} alt="" width={50} height={50}/>TIAGO VIEIRA</Link>
        </LogoContainer>
        
        <div className={`menu-items ${'showMenu' ? 'show' : ''}`}>
          <Link href = {'/'}>Início</Link>
          <Link href = {'/sobre'}>Sobre mim</Link>
          <Link href = {'/projetos'}>Projetos</Link>
          <Link href = {'/contatos'}>Contatos</Link>
        </div>
      </Header>

      <Component {...pageProps}/>

    </Container>


  )
}