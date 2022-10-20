import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '@stitches/react'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '1.5rem',
  height: '1.5rem',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0, // faz com que o botão não tenha um tamanho base
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    border: '2px solid $ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },

  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },

  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
}) // exibe ou nao um conteúdo se estiver selecionado
