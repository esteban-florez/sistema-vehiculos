import { SERVER_URL } from '../constants'
import Instructions from './Instructions'

export default function VehicleForm({ vehicle, types, updateVehicle }) {
  function handleSelect(e) {
    const selected = Number(e.target.selectedOptions[0].value)

    updateVehicle('typeId', selected)
  }

  return (
    <>
      <h2 className="card-title text-2xl mb-2">Datos del vehículo</h2>
      <Instructions>
        Debe ingresar el serial del vehículo y también seleccionar el modelo.
      </Instructions>
      <div className="flex gap-6 mb-4">
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="serial">
            Ingrese el serial del vehículo:
          </label>
          <input type="text" placeholder="Ej. 1823B" name="serial" id="serial" value={vehicle.serial} className="input input-bordered w-full max-w-xs" onInput={(e) => updateVehicle('serial', e.target.value)}/>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="typeId">
            Seleccione el modelo:
          </label>
          <select name="typeId" id="typeId" className="select select-bordered" selected={vehicle.typeId} onChange={handleSelect}>
            <option>Seleccionar...</option>
            {types && types.map(type => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}