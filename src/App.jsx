import { Board } from "./components/Board"

export default function App() {
  return (
    <div className="app flex flex-col justify-center items-center h-screen bg-black gap-6">
      <h1 className="text-3xl font-bold text-white">Tic Tac Toe</h1>
      <Board />
    </div>
  )
}
