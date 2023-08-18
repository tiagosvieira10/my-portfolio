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
          <Link href={'/'}><Image src={logoImg} alt="" width={200} height={200}/></Link>
        </LogoContainer>
        
        <Link href = {'/'}> <h1>Home</h1> </Link>
        <Link href = {'/sobre'}> <h1>Sobre mim</h1> </Link>
        <Link href = {'/portfolio'}> <h1>Portfólio</h1> </Link>
      </Header>

      <Component {...pageProps}/>

    </Container>


  )
}