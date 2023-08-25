import gitHub from  '@/assets/github.svg'
import { P1, P2, P3, P4, P5, P6, P7, P8, Portfolio } from "@/assets/projetosLive";
import { CardProjetos, Projeto, ProjetosContainer } from "@/styles/pages/projetos";
import Image from "next/image";
import Link from 'next/link';

export default function Portifolio(){
  return (
    <ProjetosContainer>
    <p> <span>/</span> MEUS PROJETOS </p>

    <CardProjetos>
      
      <Projeto>
        <Image src={Portfolio} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/my-portfolio'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h2>Meu Portfólio</h2>
        <h4>Projeto Criado Next.JS, React e TypeScript para apresentação pessoal dos meus trabalhos e minhas habilidades</h4>
      </Projeto>

      <Projeto>
        <Image src={P1} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/dtMoney'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h2>Gerenciador de transações financeiras</h2>
        <h4>Projeto elaborado com Vite, TypeScript e API para servidor de dados; com intuito de controlar as entradas, saídas e resumo financeiro</h4>
      </Projeto>

      <Projeto>
        <Image src={P2} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/04-shop'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h2>Nalibeads e-commerce</h2>
        <h4>E-commerce para loja de produtos artesanais criada com Next.JS e API do stripe</h4>
      </Projeto>

      <Projeto>
        <Image src={P3} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/ignitefeed'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h2>Rede social</h2>
        <h4>Projeto de rede social criada com Vite, React e TypeScript</h4>
      </Projeto>

      <Projeto>
        <Image src={P4} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/pricingTable'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h2>Página de Planos</h2>
        <h4>Landing Page para escolha de planos criado com HTML e CSS</h4>
      </Projeto>

      <Projeto>
        <Image src={P5} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/twitter-ui'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h2>Clone do Twitter</h2>
        <h4>Clone do Twitter criado com React e TypeScript</h4>
      </Projeto>

      <Projeto>
        <Image src={P6} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/geradorDeSenha'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h2>Gerador de senhas</h2>
        <h4>Site para gerar senhas aleatórias, de acordo com a quantidade de caracteres escolhido pelo usuário. Criado com JavaScript, HTML e CSS</h4>
      </Projeto>

      <Projeto>
        <Image src={P7} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/projetoKaban'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h2>Projeto Kaban</h2>
        <h4>Página para Site de método Kaban, esse metodo se trata de um quadro de sinalização que controla os fluxos de produção ou transportes em uma indústria. Criado com JavaScript, HTML e CSS</h4>
      </Projeto>

      <Projeto>
        <Image src={P8} width={800} height={800} alt=""/>
        <Link href={'https://github.com/tiagosvieira10/conversorDeMoeda'} target="blank">
          <Image src={gitHub} width={70} height={70} alt="" /> 
        </Link>
        <h2>Conversor de moeda</h2>
        <h4>Projeto para conversão de moeda, sinalizando taxa de câmbio através de API. Criado com JavaScript, HTML e CSS</h4>
      </Projeto>

    </CardProjetos>
  </ProjetosContainer>
  )}
