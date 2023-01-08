import { closeModalSceneAtom } from '../../globalAtoms'
import { useRecoilValue } from 'recoil'
import { ModalComponent } from '../_modal/ModalComponent'
import * as S from './MessageScreen.styles'

function MessageScreen() {
  return (
    <S.MessageScreenContainer>
      <h1>MessageScreen</h1>
    </S.MessageScreenContainer>
  )
}

export function MessageScreenModal() {
  const { closeModal } = useRecoilValue(closeModalSceneAtom)

  return <ModalComponent handleCloseModalComponent={closeModal} component={<MessageScreen />} />
}
