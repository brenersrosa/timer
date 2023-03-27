import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useState } from 'react'

import { CyclesContext } from '../pages/Home'

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished } =
    useContext(CyclesContext)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <div className="font-mono text-[12rem] leading-[8rem] text-gray-100 flex gap-4">
      <span className="bg-gray-700 py-10 px-4 rounded-lg">{minutes[0]}</span>
      <span className="bg-gray-700 py-10 px-4 rounded-lg">{minutes[1]}</span>
      <span className="py-8 px-0 text-green-500 w-16 overflow-hidden flex justify-center">
        :
      </span>
      <span className="bg-gray-700 py-10 px-4 rounded-lg">{seconds[0]}</span>
      <span className="bg-gray-700 py-10 px-4 rounded-lg">{seconds[1]}</span>
    </div>
  )
}
