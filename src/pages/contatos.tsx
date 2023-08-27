// import { useState } from 'react';
import { CardContato, Contato, ContatosContainer } from "@/styles/pages/contatos";
import Link from "next/link"
import { useState } from "react";
import Head from "next/head";

export default function Contatos() { 
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailToCopy = 'tiagosvieira@gmail.com';

  const [copiedTelefone, setCopiedTelefone] = useState(false);
  const telefoneToCopy = '087992438502';


  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailToCopy);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyTelefoneToClipboard = () => {
    navigator.clipboard.writeText(telefoneToCopy);
    setCopiedTelefone(true);
    setTimeout(() => setCopiedTelefone(false), 2000);
  };
  
  return(
    <ContatosContainer>
      <Head>
        <title>Contatos | Tiago Vieira</title>
      </Head>
      <h1>Contatos</h1>
      <CardContato>
        <p><span>|</span> EMAIL</p>
        <Contato>
          <h2>tiagosvieira10@gmail.com</h2>
          <button onClick={copyEmailToClipboard}>
            {copiedEmail ? 'Email copiado!' : 'Copiar Email'}
          </button>
        </Contato>

        <p><span>|</span> TELEFONE</p>
        <Contato>
          <h2>(87) 9 9243-8502</h2>
          <button onClick={copyTelefoneToClipboard}>
            {copiedTelefone ? 'Telefone copiado!' : 'Copiar Telefone'}
          </button>
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