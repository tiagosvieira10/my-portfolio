import { MenuContainer } from "@/styles/pages/menu";
import Link from "next/link";


export default function Menu(){
  return (
    <MenuContainer>
      <Link href = {'/'}>Início</Link>
      <Link href = {'/sobre'}>Sobre mim</Link>
      <Link href = {'/projetos'}>Projetos</Link>
      <Link href = {'/contatos'}>Contatos</Link>
    </MenuContainer>
  )
}