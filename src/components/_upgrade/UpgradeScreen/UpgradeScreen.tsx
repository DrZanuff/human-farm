import { closeModalSceneAtom } from '../../../globalAtoms'
import { useRecoilValue } from 'recoil'
import { ModalComponent } from '../../_modal/ModalComponent'
import * as S from './UpgradeScreen.styles'

const UpgradeScreen = () => {
  return (
    <S.UpgradeScreenContainer>
      <h1>UpgradeScreen</h1>
    </S.UpgradeScreenContainer>
  )
}

export function UpgradeScreenModal() {
  const { closeModal } = useRecoilValue(closeModalSceneAtom)

  return <ModalComponent handleCloseModalComponent={closeModal} component={<UpgradeScreen />} />
}
