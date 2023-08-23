// import { useState } from 'react';
import { CardContato, Contato, ContatosContainer } from "@/styles/pages/contatos";
import Link from "next/link"

export default function Contatos() { 
  // const [copied, setCopied] = useState(false);
  // const textToCopy = 'tiagosvieira@gmail.com';

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(textToCopy);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };
  
  // return(
  //   <ContatosContainer>
  //     <p>{textToCopy}</p>
  //     <button onClick={copyToClipboard}>
  //       {copied ? 'Email copiado!' : 'Copiar'}
  //     </button>
  //   </ContatosContainer>
  // )
  return(
    <ContatosContainer>
      <h1>Contatos</h1>
      <CardContato>
        <p><span>|</span> EMAIL</p>
        <Contato>
          <h2>tiagosvieira10@gmail.com</h2>
          <button>Copiar Email</button>
        </Contato>

        <p><span>|</span> TELEFONE</p>
        <Contato>
          <h2>(87) 9 9243-8502</h2>
          <button>Copiar Telefone</button>
        </Contato>

        <p><span>|</span> LINKEDIN</p>
        <Contato>
          <h2>tiago-svieira/</h2>
          <button><Link href={'https://www.linkedin.com/in/tiago-svieira/'} target="blank">Ir para Linkedin</Link></button>
        </Contato>
      </CardContato>
    </ContatosContainer>
  )
}