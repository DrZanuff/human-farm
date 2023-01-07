import { BarInfo } from '../BarInfo'
import { ButtonStatus } from '../ButtonStatus'
import type { DashboardProps } from './Dashboard.types'
import * as S from './Dashboard.styles'

export function Dashboard({ value }: DashboardProps) {
  return (
    <S.DashboardContainer>
      <S.BarInfoContainer>
        <BarInfo />
        <BarInfo />
        <BarInfo />
      </S.BarInfoContainer>
      <ButtonStatus />
    </S.DashboardContainer>
  )
}
