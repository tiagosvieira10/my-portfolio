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
  flexDirection: 'column',
  maxWidth: 1300,
  margin: 'auto',
  borderTop: '1.2px solid $grey',

  gap: '1rem',

  p:{
    marginTop: '5rem',
    marginBottom: '2rem',

    span: {
      color: '$corSecundaria',
      marginRight: '5px',
    },
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  }
})

export const Skills = styled('section', {
  display: 'block',
  alignItems: 'center',
  justifyContent: 'center',

  margin: 'auto',

  height: '11rem',
  width: '19rem',
  borderRadius: '28px',

  backgroundColor: '#2d343f',
  color: 'white',
  fontSize: '1rem',

  h2: {
    margin: '0 2rem',
  }
})

export const CardSkills = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  
  gap: '1.5rem',

  marginBottom: '5rem'

})

export const EducationContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1300,
  margin: 'auto',

  gap: '1rem',

  p:{
    marginTop: '5rem',
    marginBottom: '2rem',

    span: {
      color: '$corSecundaria',
      marginRight: '5px',
    },
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  }
})

export const CardEducation = styled('section', {
  borderLeft: '1px solid $corFonte',
  padding: '0 2rem',
  
})

export const Education = styled('section', {
  marginBottom: '2rem',
  padding: '1.5rem',
  lineHeight: '4rem',
  
  maxWidth: '80%',
  
  h3:{
    fontSize: '1.4rem',
    color: '$corFonte',
    strong:{
      color: '$corSecundaria'
    }
  },

  h1:{
    fontSize: '2.4rem',
    color: 'white'
  },

  h4: {
    fontSize: '1.1rem',
    color: '$corFonte',
    lineHeight: '2rem'
  }
})





