import { atom } from 'recoil'
import {
  CurrentModalSceneTypeAtom,
  CloseModalSceneInterfaceAtom,
  OpenModalSceneInterfaceAtom
} from './globalAtoms.types'

export const currentModalSceneAtom = atom<CurrentModalSceneTypeAtom>({
  key: 'currentModalSceneAtom',
  default: null
})

export const openModalSceneAtom = atom<OpenModalSceneInterfaceAtom>({
  key: 'openModalSceneAtom',
  default: {
    openModal: () => {}
  }
})

export const closeModalSceneAtom = atom<CloseModalSceneInterfaceAtom>({
  key: 'closeModalSceneAtom',
  default: {
    closeModal: () => {}
  }
})
