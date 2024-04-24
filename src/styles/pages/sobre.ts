import { styled } from "..";

export const AboutContainer = styled('main',{
  display: 'flex',
  maxWidth: 1250,
  margin: '3rem auto',
  alignItems: 'flex-end',
  justifyContent: 'space-between',

  figcaption: {
    fontSize: '0.8rem',
    fontStyle: 'italic',
    color: '$corFonte',
    textAlign: 'center',
  },

  '@media screen and (max-width: 768px)': {
    padding: '1.3rem',
    margin: '2rem auto',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }  
})

export const HistoryContainer = styled('div',{
  maxWidth: '60%',

  'div.barraSuperior':{
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
    lineHeight: '1.9',

    strong: {
      color: 'rgb(255, 255, 255)'
    }
  },

  //Responsividade
  '@media screen and (max-width: 768px)': {
    maxWidth: '100vh',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '2rem auto',
    

    h1: {
      fontSize: '2.3rem',
      paddingTop: '2rem',
      paddingBottom: '0.5rem',
    },

    'div.barraSuperior': {
      width: '8rem',
      borderTop: '0.4rem solid $corFonte',
    },

    span: {
      fontSize: '1rem',
    },
  }

})

export const SkillsContainer = styled('footer',{
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1250,
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
  },

  '@media screen and (max-width: 768px)': {
    padding: '1.3rem',
    margin: '0 auto',
  }  
})

export const Skills = styled('section', {
  display: 'block',
  alignItems: 'center',
  justifyContent: 'center',

  margin: 'auto',

  height: '11rem',
  width: '17rem',
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
  
  gap: '1rem',

  marginBottom: '1rem',
  

})

export const EducationContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1250,
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
    color: 'white'
  },

  '@media screen and (max-width: 768px)': {
    padding: '1.3rem',
    margin: '2rem auto',
  }
})

export const CardEducation = styled('section', {
  borderLeft: '1px solid $corFonte',
  padding: '0 1rem',
  
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
  },

  '@media screen and (max-width: 768px)': {
    
    h3: {
      fontSize: '1rem',
      lineHeight: '2rem',
      marginBottom: '1rem'
    },
    h1: {
      fontSize: '2rem',
      lineHeight: '2rem',
      marginBottom: '1rem'
    },
    h4: {
      fontSize: '0.9rem',
      lineHeight: '2rem',
    }
  }
})





