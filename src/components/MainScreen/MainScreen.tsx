import { Dashboard } from '../Dashboard'
import { PodContainer } from '../PodContainer'
import { Header } from '../Header'
import { Modal } from '../_modal/Modal'
import type { MainScreenProps } from './MainScreen.types'
import * as S from './MainScreen.styles'

export function MainScreen({ value }: MainScreenProps) {
  return (
    <S.MainScreenContainer>
      <Header />
      <Dashboard />
      <PodContainer />
      <Modal />
    </S.MainScreenContainer>
  )
}
