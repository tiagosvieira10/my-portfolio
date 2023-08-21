
import { styled } from "..";

export const HomeContainer = styled('div', {
  maxWidth: 1300,
  margin: '10rem auto',

  div: {
    width: '10rem',
    borderTop: '0.6rem solid $corSecundaria',
  },
  
  h1: {
    color: 'white',
    fontSize: '4.75rem',
    paddingTop: '4rem',
    paddingBottom: '1rem',
  },

  span: {
    fontSize: '1.4rem',
    color: '$corFonte',
  }

})