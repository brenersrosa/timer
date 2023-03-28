import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="w-full flex items-center justify-center gap-2 text-gray-100 text-lg font-bold flex-wrap">
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
        list="task-suggestion"
        disabled={!!activeCycle}
        className="bg-transparent h-10 border-0 border-b-2 border-b-solid border-gray-500 font-bold text-lg py-0 px-2 text-gray-100 flex-1 placeholder:text-gray-500 focus:shadow-none focus:border-green-500"
      />

      <datalist id="task-suggestion">
        <option value="Project 1" />
        <option value="Project 2" />
        <option value="Project 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <input
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
        className="bg-transparent h-10 w-16 border-0 border-b-2 border-b-solid border-gray-500 font-bold text-lg py-0 px-2 text-gray-100 placeholder:text-gray-500 focus:shadow-none focus:border-green-500"
      />

      <span>minutos.</span>
    </div>
  )
}
