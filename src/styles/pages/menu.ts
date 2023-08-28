import { styled } from "..";

export const MenuContainer = styled('main',{
  maxWidth: 1250,
  margin: '10rem auto',

  a: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente

    textDecoration: 'none',
    color: '$corSecundaria',

    padding: '1rem',
    fontSize: '2rem',
    fontWeight: 'bolder',
    
    '&:hover':{
      color: '$corFonte',
    },
  },

})