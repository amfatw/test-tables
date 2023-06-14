import { ControlPanel } from './components/ControlPanel';
import { Scheme } from './components/Scheme';


const App = () => {
  return (
    <main>
      <h2 className='visually-hidden'>Схема расстановки столов</h2>

      <ControlPanel/>

      <Scheme/>
    </main>
  )
}


export {App};