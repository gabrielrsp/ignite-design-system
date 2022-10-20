import { MultiStepContainer, Label, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      {/* todos os elementos do stitches recebem essa propriedade css permitindo passar novas estilizações */}
      {/* aqui estou definindo uma variavel css e atribuindo o valor de size */}
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

/* 
 sobre o Array.from

 estou criando um array com 'size' posições, e na segunda propriedade estou passando
 uma função que será percorrida por todo o array e ela vai trazer o conteúdo 
 do Array, (o underline) e na segunda posição o índice

 como eu criei um array zerado, não vai ter conteúdo, mas existirão os índices

 então será retornado i + 1  -> [1,2,3,4]  //se size for 4

*/
