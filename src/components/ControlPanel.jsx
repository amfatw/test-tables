import { FurnitureList } from './FurnitureList';
import { ControlButtons } from './ControlButtons';


const ControlPanel = () => {
  return (
    <div className='furniture-block'>
      <FurnitureList/>

      <ControlButtons/>
    </div>
  )
}


export {ControlPanel};