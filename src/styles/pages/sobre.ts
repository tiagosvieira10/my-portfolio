import { styled } from "..";

export const AboutContainer = styled('main',{
  display: 'flex',
  maxWidth: 1300,
  margin: '10rem auto',
  alignItems: 'flex-end',
  justifyContent: 'space-between'
})

export const HistoryContainer = styled('div',{
  maxWidth: '60%',

  div:{
    width: '10rem',
    borderTop: '0.6rem solid $corFonte',
  },

  h1: {
    color: 'white',
    fontSize: '4rem',

    paddingTop: '4rem',
    paddingBottom: '1rem',
  },

  span: {
    fontSize: '1.5rem',
    color: '$corFonte',
    lineHeight: '1.9'
  }
})

export const SkillsContainer = styled('footer',{
  display: 'flex',
  maxWidth: 1300,
  margin: 'auto',
})

export const Skills = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})




