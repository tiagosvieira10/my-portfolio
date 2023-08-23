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
      <CardContato>
        <Contato>
          <p><span>|</span> Email</p>
          <h1>tiagosvieira10@gmail.com</h1>
          <button>copiar</button>
        </Contato>

        <Contato>
          <p><span>|</span> Telefone</p>
          <h1>(87) 9 9243-8502</h1>
          <button>copiar</button>
        </Contato>

        <Contato>
          <p><span>|</span> Linkedin</p>
          <h1>tiagosvieira10@gmail.com</h1>
          <button><Link href={'https://www.linkedin.com/in/tiago-svieira/'} target="blank">Ir para Linkedin</Link></button>
        </Contato>
      </CardContato>
    </ContatosContainer>
  )
}