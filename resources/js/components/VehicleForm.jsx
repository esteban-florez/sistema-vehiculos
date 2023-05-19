import Instructions from './Instructions'
import ButtonsPanel from './ButtonsPanel'

export default function VehicleForm({ vehicle, types, updateVehicle, goComponents }) {
  function handleSelect(e) {
    /** DRY - 1 */
    const value = Number(e.target.selectedOptions[0].value)
    const selected = value === 0 ? '' : value

    updateVehicle('typeId', selected)
  }

  return (
    <>
      <div className="flex bg-primary rounded-lg p-3 text-white justify-between items-center">
        <h2 className="text-2xl tracking-tight font-bold">Datos del vehículo</h2>
      </div>
      <Instructions>
        Debe ingresar el serial del vehículo y también seleccionar el modelo.
      </Instructions>
      <div className="flex gap-6">
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="serial">
            Ingrese el serial del vehículo:
          </label>
          <input type="text" placeholder="Ej. 1823B" name="serial" id="serial" value={vehicle.serial} className="input input-bordered w-full max-w-xs" onInput={(e) => updateVehicle('serial', e.target.value.toUpperCase())}/>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="typeId">
            Seleccione el modelo:
          </label>
          <select name="typeId" id="typeId" className="select select-bordered" value={vehicle.typeId} onChange={handleSelect}>
            <option value="">Seleccionar...</option>
            {types && types.map(type => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
        </div>
      </div>
      <ButtonsPanel 
        onNext={goComponents} 
        nextDisabled={!vehicle.serial || !vehicle.typeId}
      />
    </>
  )
}