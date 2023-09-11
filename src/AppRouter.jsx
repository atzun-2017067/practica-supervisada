import { Route, Routes } from 'react-router-dom'
import { ListaPokemon } from "./Pokedex/ListaPokemon"

export const AppRouter = () => {

  return (
    <>
      <Routes>
        {/* RUTAS SIN LOGUEARSE */}
        <Route path="/" element={<ListaPokemon />} />

      </Routes>
    </>
  )
}