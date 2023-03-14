export function History() {
  return (
    <main className="flex-1 p-14 flex flex-col">
      <h1 className="text-2xl text-gray-100 font-bold">Histórico</h1>

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
            <tr>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                Tarefa
              </td>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                20 minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                Há 2 meses
              </td>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                Concluído
              </td>
            </tr>
            <tr>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                Tarefa
              </td>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                20 minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                Há 2 meses
              </td>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                Concluído
              </td>
            </tr>
            <tr>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                Tarefa
              </td>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                20 minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                Há 2 meses
              </td>
              <td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-sm leading-relaxed">
                Concluído
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
