import { zodResolver } from '@hookform/resolvers/zod'
import { differenceInSeconds } from 'date-fns'
import { Play } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa.'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
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

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        action=""
        className="flex flex-col items-center gap-14"
      >
        <div className="w-full flex items-center justify-center gap-2 text-gray-100 text-lg font-bold flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
            list="task-suggestion"
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
            {...register('minutesAmount', { valueAsNumber: true })}
            className="bg-transparent h-10 w-16 border-0 border-b-2 border-b-solid border-gray-500 font-bold text-lg py-0 px-2 text-gray-100 placeholder:text-gray-500 focus:shadow-none focus:border-green-500"
          />

          <span>minutos.</span>
        </div>

        <div className="font-mono text-[12rem] leading-[8rem] text-gray-100 flex gap-4">
          <span className="bg-gray-700 py-10 px-4 rounded-lg">
            {minutes[0]}
          </span>
          <span className="bg-gray-700 py-10 px-4 rounded-lg">
            {minutes[1]}
          </span>
          <span className="py-8 px-0 text-green-500 w-16 overflow-hidden flex justify-center">
            :
          </span>
          <span className="bg-gray-700 py-10 px-4 rounded-lg">
            {seconds[0]}
          </span>
          <span className="bg-gray-700 py-10 px-4 rounded-lg">
            {seconds[1]}
          </span>
        </div>

        <button
          type="submit"
          disabled={isSubmitDisable}
          className="w-full border-0 p-4 rounded-lg flex items-center justify-center gap-2 font-bold cursor-pointer bg-green-500 text-gray-100 hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-green-500"
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  )
}
