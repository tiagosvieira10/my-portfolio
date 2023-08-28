import gitHub from  '@/assets/github.svg'
import { P1, P2, P3, P4, P5, P6, P7, P8, Portfolio } from "@/assets/projetosLive";
import { CardProjetos, Projeto, ProjetosContainer } from "@/styles/pages/projetos";
import Image from "next/image";
import Link from 'next/link';
import Head from "next/head";

export default function Portifolio(){
  return (

    <ProjetosContainer>
      <Head>
        <title>Portfólio | Tiago Vieira</title>
      </Head>
    <p> <span>/</span> MEUS PROJETOS </p>

    <CardProjetos>
      
      <Projeto>
        <Image src={Portfolio} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/my-portfolio'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h1>Meu Portfólio</h1>
        <h3>Projeto Criado Next.JS, React e TypeScript para apresentação pessoal dos meus trabalhos e minhas habilidades</h3>
      </Projeto>

      <Projeto>
        <Image src={P1} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/dtMoney'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h1>Gerenciador de transações financeiras</h1>
        <h3>Projeto elaborado com Vite, TypeScript e API para servidor de dados; com intuito de controlar as entradas, saídas e resumo financeiro</h3>
      </Projeto>

      <Projeto>
        <Image src={P2} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/04-shop'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h1>Nalibeads e-commerce</h1>
        <h3>E-commerce para loja de produtos artesanais criada com Next.JS e API do stripe</h3>
      </Projeto>

      <Projeto>
        <Image src={P3} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/ignitefeed'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h1>Rede social</h1>
        <h3>Projeto de rede social criada com Vite, React e TypeScript</h3>
      </Projeto>

      <Projeto>
        <Image src={P4} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/pricingTable'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h1>Página de Planos</h1>
        <h3>Landing Page para escolha de planos criado com HTML e CSS</h3>
      </Projeto>

      <Projeto>
        <Image src={P5} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/twitter-ui'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h1>Clone do Twitter</h1>
        <h3>Clone do Twitter criado com React e TypeScript</h3>
      </Projeto>

      <Projeto>
        <Image src={P6} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/geradorDeSenha'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h1>Gerador de senhas</h1>
        <h3>Site para gerar senhas aleatórias, de acordo com a quantidade de caracteres escolhido pelo usuário. Criado com JavaScript, HTML e CSS</h3>
      </Projeto>

      <Projeto>
        <Image src={P7} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/projetoKaban'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h1>Projeto Kaban</h1>
        <h3>Página para Site de método Kaban, esse metodo se trata de um quadro de sinalização que controla os fluxos de produção ou transportes em uma indústria. Criado com JavaScript, HTML e CSS</h3>
      </Projeto>

      <Projeto>
        <Image src={P8} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/conversorDeMoeda'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h1>Conversor de moeda</h1>
        <h3>Projeto para conversão de moeda, sinalizando taxa de câmbio através de API. Criado com JavaScript, HTML e CSS</h3>
      </Projeto>

    </CardProjetos>
  </ProjetosContainer>
  )}
