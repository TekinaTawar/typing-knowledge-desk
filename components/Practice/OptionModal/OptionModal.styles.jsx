import styled from 'styled-components'
import { Modal, Input as _Input, Button } from "components/Shared";


export const OptionModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  &>.title{
    font-size: 2.2rem;
    font-weight: 600;
  }

  & .groupLabel{
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 600;
  }
`
export const Input = styled(_Input)`
  
`

export const TimeInMinutes = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr) 100px;
    column-gap: 2px;
    row-gap: 5px;

  & .groupLabel{
      grid-column: 1/-1;
  }
`

export const SetWordLimit = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2px;
    row-gap: 5px;

  & .groupLabel{
      grid-column: 1/-1;
  }
`

export const HighlightWord = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const Backspace = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`