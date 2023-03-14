import { Play } from 'phosphor-react'

export function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <form action="" className="flex flex-col items-center gap-14">
        <div className="w-full flex items-center justify-center gap-2 text-gray-100 text-lg font-bold flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
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
            className="bg-transparent h-10 w-16 border-0 border-b-2 border-b-solid border-gray-500 font-bold text-lg py-0 px-2 text-gray-100 placeholder:text-gray-500 focus:shadow-none focus:border-green-500"
          />

          <span>minutos.</span>
        </div>

        <div className="font-mono text-[12rem] leading-[8rem] text-gray-100 flex gap-4">
          <span className="bg-gray-700 py-10 px-4 rounded-lg">0</span>
          <span className="bg-gray-700 py-10 px-4 rounded-lg">0</span>
          <span className="py-8 px-0 text-green-500 w-16 overflow-hidden flex justify-center">
            :
          </span>
          <span className="bg-gray-700 py-10 px-4 rounded-lg">0</span>
          <span className="bg-gray-700 py-10 px-4 rounded-lg">0</span>
        </div>

        <button
          type="submit"
          className="w-full border-0 p-4 rounded-lg flex items-center justify-center gap-2 font-bold cursor-pointer bg-green-500 text-gray-100 hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-green-500"
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  )
}
