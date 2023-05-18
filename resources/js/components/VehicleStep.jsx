import { SERVER_URL } from '../constants'
import Instructions from './Instructions'
import Title from './Title'

export default function VehicleStep({ handleInput, types }) {
  return (
    <>
      <Title>Datos del vehículo</Title>
      <Instructions>
        Debe ingresar el serial del vehículo y también seleccionar el modelo.
      </Instructions>
      <div className="flex gap-6 mb-4">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            Ingrese el serial del vehículo:
          </label>
          <input type="text" placeholder="Ej. 1823B" name="serial" id="serial" onInput={handleInput} className="input input-bordered w-full max-w-xs" />
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
    </>
  )
}