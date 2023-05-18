import { useState, useEffect } from 'react'
import { CSRF_TOKEN } from '../constants'
import { SERVER_URL } from '../constants'
import VehicleStep from './VehicleStep'
import fetchData from '../functions/fetchData.js'

const action = `${SERVER_URL}/vehicles/create`

export default function Form() {
  const [form, setForm] = useState({})
  const [vehicleTypes, setVehicleTypes] = useState(null)

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

  function handleInput(e) {
    const value = e.target.value
    const newForm = {...form, [e.target.name]: value}
    setForm(newForm)
  }

  return (
    <form className="card bg-white shadow-md transition-transform" action={action} method="POST">
      <input type="hidden" name="_token" value={CSRF_TOKEN}/>
      <div className="card-body">
        <VehicleStep types={vehicleTypes} handleInput={handleInput}/>
      </div>
    </form>
  )
}
