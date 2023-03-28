import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Countdown } from '../components/Countdown'
import { NewCycleForm } from '../components/NewCycleForm'
import { CyclesContext } from '../contexts/CyclesContext'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa.'),
  minutesAmount: z
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch /* reset */ } = newCycleForm

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(createNewCycle)}
        action=""
        className="flex flex-col items-center gap-14"
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <button
            type="button"
            onClick={interruptCurrentCycle}
            className="w-full border-0 p-4 rounded-lg flex items-center justify-center gap-2 font-bold cursor-pointer bg-red-500 text-gray-100 hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-red-500"
          >
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitDisable}
            className="w-full border-0 p-4 rounded-lg flex items-center justify-center gap-2 font-bold cursor-pointer bg-green-500 text-gray-100 hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-green-500"
          >
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </main>
  )
}
