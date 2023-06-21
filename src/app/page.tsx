'use client'

import {useAppDispatch,useAppSelector} from '../redux/hooks'
import {increment,decrement,reset} from '@/redux/features/counterSlice'

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>
        value : {count}
        </h1>
      <button
      onClick={() => {
        dispatch(increment())
      }}>Increment</button>
      <br />
      <button
      onClick={() =>
      {
        dispatch(decrement())
      }}>Decrement</button>
      <br />
      <button
      onClick={() =>
      {
        dispatch(reset())
      }}>Reset</button>
    </div>
  )
}
