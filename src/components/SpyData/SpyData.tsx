import { closeModalSceneAtom } from '../../globalAtoms'
import { useRecoilValue } from 'recoil'
import { ModalComponent } from '../_modal/ModalComponent'
import * as S from './SpyData.styles'

function SpyData() {
  return (
    <S.SpyDataContainer>
      <h1>SpyData</h1>
    </S.SpyDataContainer>
  )
}

export function SpyDataModal() {
  const { closeModal } = useRecoilValue(closeModalSceneAtom)

  return <ModalComponent handleCloseModalComponent={closeModal} component={<SpyData />} />
}
