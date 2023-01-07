import { ButtonInfo } from '../ButtonInfo'
import type { ButtonStatusProps } from './ButtonStatus.types'
import * as S from './ButtonStatus.styles'

export function ButtonStatus({ value }: ButtonStatusProps) {
  return (
    <S.ButtonStatusContainer>
      <ButtonInfo text={'Energy: 10'} />
      <ButtonInfo text={'Pods: 2'} />
      <ButtonInfo text={'Machines: 1'} />
      <ButtonInfo text={'Agents: 0'} />
      <ButtonInfo text={'Messages: 1'} disabled />
    </S.ButtonStatusContainer>
  )
}
