import clsx from 'clsx'
import { useContext } from 'react'
import { CyclesContext } from '../contexts/CyclesContext'

const tasks = [
  {
    name: 'Task 1',
    duration: '20 minutes',
    start: 'Há 2 meses',
    status: 'Completed',
  },
  {
    name: 'Task 2',
    duration: '20 minutes',
    start: 'Há 2 meses',
    status: 'In progress',
  },
  {
    name: 'Task 3',
    duration: '20 minutes',
    start: 'Há 2 meses',
    status: 'Interrupted',
  },
]

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <main className="flex-1 p-14 flex flex-col">
      <h1 className="text-2xl text-gray-100 font-bold">Histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[600px]">
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
            {tasks.map((task) => (
              <tr key={task.name}>
                <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                  {task.name}
                </td>
                <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                  {task.duration}
                </td>
                <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                  {task.start}
                </td>
                <td
                  className={clsx(
                    'bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed flex items-center gap-2 before:w-2 before:h-2 before:rounded-full',
                    {
                      'before:bg-green-500': task.status === 'Completed',
                      'before:bg-yellow-500': task.status === 'In progress',
                      'before:bg-red-500': task.status === 'Interrupted',
                    },
                  )}
                >
                  {task.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
