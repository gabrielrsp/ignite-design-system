import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

// No Storybook somente conseguimos estilizar componentes que são gerados a partir da função styled do stitches.

// INTEGRAÇÃO DE TOKENS PARA CSS IN JS
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap, // define o padrão de medidas para propriedades css
    height: 'space', // para a propriedade height, use o token de space
    width: 'space', // pro width também
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})

/*
THEME
  - variaveis que serão utilizadas dentro da aplicação
  - informa variaveis dos tipos que tenho na web
  - no nosso arquivo de tokens, os nomes estão iguais 
  - logo é so colar aqui, 
  - então é ATRIBUÍDO ao stitches os nossos tokens!!!
*/

/*
THEMEMAP
  - Mapeia propriedades do css pra algum tipo de token

*/
