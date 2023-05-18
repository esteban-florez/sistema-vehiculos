import { useState, useEffect } from 'react'
import { CSRF_TOKEN, SERVER_URL } from '../constants'
import ComponentForm from './ComponentForm'
import VehicleForm from './VehicleForm'
import fetchData from '../functions/fetchData'
import getComponents from '../functions/getComponents'

const action = `${SERVER_URL}/vehicles/create`

export default function Form() {
  const [vehicleTypes, setVehicleTypes] = useState(null)
  const [step, setStep] = useState(0)
  const [vehicle, setVehicle] = useState({
    serial: '',
    typeId: null
  })

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

  const components = getComponents(vehicleTypes, vehicle.typeId)

  return (
    <form className="card bg-white shadow-md transition-transform" action={action} method="POST">
      <input type="hidden" name="_token" value={CSRF_TOKEN}/>
      <div className="card-body">
        {step === 0 ? (
          <VehicleForm 
            types={vehicleTypes}
            vehicle={vehicle}
            updateVehicle={updateVehicle}
          />
        ) : (
          <ComponentForm 
            components={components}
          />
        )}
        <div className="card-actions mt-4">
          <button className="btn btn-primary" type="button" disabled={!components} onClick={() => setStep(step + 1)}>
            Siguiente
          </button>
          <a className="btn btn-ghost" href={`${SERVER_URL}`}>
            Volver
          </a>
        </div>
      </div>
    </form>
  )
}
