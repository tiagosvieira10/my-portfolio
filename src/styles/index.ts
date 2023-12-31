import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      corPrincipal: '#1b1f24',
      corSecundaria: '#008BA4',
      grey: '#333',
      corFonte: '#c3cad5',
    },
  }
})