import { FurnitureList } from './FurnitureList';
import { ControlButtons } from './ControlButtons';


const ControlPanel = () => {
  return (
    <div className='control-panel'>
      <FurnitureList/>

      <ControlButtons/>
    </div>
  )
}


export {ControlPanel};