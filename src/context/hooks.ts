import {
   useDispatch,
   useSelector,
   type TypedUseSelectorHook,
} from 'react-redux'
import { AppDispatch, RootState } from './store'

type DiapatchFunction = () => AppDispatch

export const useUserDispatch: DiapatchFunction = useDispatch
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector
