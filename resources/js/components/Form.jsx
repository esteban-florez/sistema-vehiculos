import { useState, useEffect } from 'react'
import { CSRF_TOKEN, FORM_ACTION, STEPS } from '../constants'
import ComponentForm from './ComponentForm'
import VehicleForm from './VehicleForm'
import fetchData from '../functions/fetchData'
import sendData from '../functions/sendData'

const mockupPart = {
  componentId: 1,
  id: 1,
  serial: '108.238.832',
  code: '7412-87923 G12.X',
  description: 'Dispositivo de vacío para aspirar la soldadura',
  amount: 20,
  box: '4',
  notch: '6',
  observation: 'Sin bomba 5.01293.23',
  status: true,
}

export default function Form() {
  // TODO -> este componente necesita createContext urgentemente
  const [parts, setParts] = useState([mockupPart])
  const [components, setComponents] = useState([])
  const [vehicleTypes, setVehicleTypes] = useState([])
  const [step, setStep] = useState(STEPS.VEHICLE)
  const [vehicle, setVehicle] = useState({
    serial: '',
    typeId: ''
  })

  const lastId = parts.at(-1)?.id
  const nextId = lastId ? lastId + 1 : 1
  
  const selectedType = vehicleTypes.find(type => type.id === vehicle.typeId)

  const vehicleDescription = `${selectedType?.name} ${vehicle.serial}`

  const goVehicle = () => setStep(STEPS.VEHICLE) 
  const goComponents = () => setStep(STEPS.COMPONENTS)

  function handleSubmit(e) {
    e.preventDefault()

    const vehicleData = {...vehicle}
    const componentsData = components.map(component => ({ ...component }))
    const partsData = parts.map(part => ({ ...part }))

    sendData({ vehicle: vehicleData, components: componentsData, parts: partsData })
  }

  function addPart(part, componentId) {
    const newPart = {
      ...part,
      id: nextId,
      componentId,
    }
    
    setParts([
      ...parts,
      newPart,
    ]) 
  }

  function updatePart(newPart, id) {
    const newParts = parts.map(part => {
      if (part.id !== id) return part

      return { ...newPart, id }
    })

    setParts(newParts)
  }

  function deletePart(id) {
    setParts(parts.filter(part => {
      console.log(part)
      part.id !== id
    }))
  }

  function updateComponent(id, key, value) {
    const newComponents = components.map(component => {
      if (component.id !== id) return component

      return {
        ...component,
        [key]: value,
      }
    })

    setComponents(newComponents)
  }

  function updateVehicle(key, value) {
    /* DRY - 2 */
    setVehicle({
      ...vehicle,
      [key]: value,
    })
  }

  useEffect(() => {
    let ignore = false

    fetchData('types')
      .then(types => {
        if (!ignore) {
          setVehicleTypes(types)
        }
      })

    return () => ignore = true
  }, [])

  useEffect(() => {
    /** TODO -> este efecto corre más veces de lo necesario, realmente quisiera que corriera solo cuando cambie vehicle.typeId */
    const componentNames = selectedType?.component_names

    const components = componentNames?.map(({ id, name }) => ({
      // DEV // serial: '',
      id, name, serial: '98DAD', description: '', status: true,
    }))

    setComponents(components ?? [])
    // DEV // []
    setParts([mockupPart])

  }, [vehicle])

  return (
    <form className="card bg-white shadow-md transition-transform" action={FORM_ACTION} method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_token" value={CSRF_TOKEN}/>
      <div className="card-body">
        {step === STEPS.VEHICLE ? (
          <VehicleForm 
            types={vehicleTypes}
            vehicle={vehicle}
            updateVehicle={updateVehicle}
            goComponents={goComponents}
          />
        ) : step === STEPS.COMPONENTS ? (
          <ComponentForm
            components={components}
            updateComponent={updateComponent}
            vehicleDescription={vehicleDescription}
            goVehicle={goVehicle}
            parts={parts}
            addPart={addPart}
            updatePart={updatePart}
            deletePart={deletePart}
          />
        ) : null}
      </div>
    </form>
  )
}
