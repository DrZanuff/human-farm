import { Dashboard } from '../Dashboard'
import { PodContainer } from '../PodContainer'
import { Header } from '../Header'
import type { MainScreenProps } from './MainScreen.types'
import * as S from './MainScreen.styles'

export function MainScreen({ value }: MainScreenProps) {
  return (
    <S.MainScreenContainer>
      <Header />
      <Dashboard />
      <PodContainer />
    </S.MainScreenContainer>
  )
}
