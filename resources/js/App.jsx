import Form from './components/Form'
import Title from './components/Title'
import Instructions from './components/Instructions'
import { useEffect, useState } from 'react'
import fetchData from './functions/fetchData'
import { SERVER_URL } from './constants'

export default function App() {
  const [types, setTypes] = useState(null)

  useEffect(() => {
    fetchData('types')
      .then(types => {
        setTypes(types)
      })
  }, [])

  return (
    <Form>
      <Title>Datos del vehículo</Title>
      <Instructions>
        Debe ingresar el serial del vehículo y también seleccionar el modelo.
      </Instructions>
      <div className="flex gap-6 mb-4">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            Ingrese el serial del vehículo:
          </label>
          <input type="text" placeholder="Ej. 1823B" name="serial" id="serial" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            Seleccione el modelo:
          </label>
          <select name="type_id" id="typeId" className="select select-bordered">
            <option>Seleccionar...</option>
            {types && types.map(type => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="card-actions">
        <button className="btn btn-primary" type="button">
          Siguiente
        </button>
        <a className="btn btn-ghost" href={`${SERVER_URL}`}>
          Volver
        </a>
      </div>
    </Form>
  )
}
