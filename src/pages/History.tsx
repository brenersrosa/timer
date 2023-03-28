import clsx from 'clsx'
import { useContext } from 'react'
import { CyclesContext } from '../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <main className="flex-1 p-14 flex flex-col">
      <h1 className="text-2xl text-gray-100 font-bold">Histórico</h1>

      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[620px]">
          <thead>
            <tr>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-relaxed">
                Tarefa
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-relaxed">
                Duração
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-relaxed">
                Início
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-relaxed">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                  {cycle.task}
                </td>
                <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                  {cycle.minutesAmount} minutos
                </td>
                <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                  {cycle.startDate.toISOString()}
                </td>
                <td
                  className={clsx(
                    'bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed flex items-center gap-2 before:w-2 before:h-2 before:rounded-full',
                    {
                      'before:bg-green-500': cycle.finishedDate,
                      'before:bg-red-500': cycle.interruptedDate,
                      'before:bg-yellow-500':
                        !cycle.finishedDate && !cycle.interruptedDate,
                    },
                  )}
                >
                  {cycle.finishedDate && <span>Concluído</span>}
                  {cycle.interruptedDate && <span>Interrompido</span>}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <span>Em andamento</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
