import { useState, useEffect } from 'react'
import { CSRF_TOKEN, SERVER_URL, STEPS } from '../constants'
import ComponentForm from './ComponentForm'
import VehicleForm from './VehicleForm'
import fetchData from '../functions/fetchData'

const action = `${SERVER_URL}/vehicles/create`

export default function Form() {
  const [components, setComponents] = useState([])
  const [vehicleTypes, setVehicleTypes] = useState([])
  const [step, setStep] = useState(STEPS.VEHICLE)
  const [vehicle, setVehicle] = useState({
    serial: '',
    typeId: ''
  })

  const selectedType = vehicleTypes.find(type => type.id === vehicle.typeId)

  const vehicleDescription = `${selectedType?.name} ${vehicle.serial}`

  const goVehicle = () => setStep(STEPS.VEHICLE) 
  const goComponents = () => setStep(STEPS.COMPONENTS) 

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
    /** TODO -> aqui también se van a resetear las partes en caso de cambios en "vehicle" */
    const componentNames = selectedType?.component_names

    const components = componentNames?.map(({ id, name }) => ({
      id, name, serial: '', description: '', status: true,
    }))

    setComponents(components ?? [])

  }, [vehicle])

  return (
    <form className="card bg-white shadow-md transition-transform" action={action} method="POST">
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
          />
        ) : null}
      </div>
    </form>
  )
}
