import { useState, useEffect } from 'react'
import { CSRF_TOKEN, SERVER_URL } from '../constants'
import ComponentForm from './ComponentForm'
import VehicleForm from './VehicleForm'
import fetchData from '../functions/fetchData'
import getComponentNames from '../functions/getComponentNames'

const action = `${SERVER_URL}/vehicles/create`

export default function Form() {
  const [components, setComponents] = useState([])
  const [vehicleTypes, setVehicleTypes] = useState(null)
  const [step, setStep] = useState(0)
  const [vehicle, setVehicle] = useState({
    serial: '',
    typeId: ''
  })

  const goNext = () => setStep(step + 1)
  const goBack = () => setStep(step - 1)

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
    const componentNames = getComponentNames(vehicleTypes, vehicle.typeId)

    const components = componentNames?.map(({ id, name }) => ({
      id, name, serial: '', description: '', status: true,
    }))

    setComponents(components ?? [])

  }, [vehicle])

  return (
    <form className="card bg-white shadow-md transition-transform" action={action} method="POST">
      <input type="hidden" name="_token" value={CSRF_TOKEN}/>
      <div className="card-body">
        {step === 0 ? (
          <VehicleForm 
            types={vehicleTypes}
            vehicle={vehicle}
            updateVehicle={updateVehicle}
            goNext={goNext}
          />
        ) : (
          <ComponentForm
            components={components}
            updateComponent={updateComponent}
            goBack={goBack}
          />
        )}
      </div>
    </form>
  )
}
