export default function ComponentFormHeader({ name, components, current, changeCurrent, vehicleDescription }) {
  function handleSelect(e) {
    /** DRY - 1 */
    const value = Number(e.target.selectedOptions[0].value)
    const selected = value === 0 ? '' : value

    changeCurrent(selected)
  }

  return (
    <div className="flex bg-primary rounded-lg p-3 text-white justify-between items-center shadow-md">
      <div>
        <h2 className="text-3xl font-bold mb-2 tracking-tight">
          {name}
        </h2>
        <p className="text-lg -mt-2 font-semibold">
          <span>Vehículo:</span>
          <span className="font-bold tracking-tight ml-1">
            {vehicleDescription}   
          </span>
         </p>
      </div>
      <div className="bg-white text-black rounded-lg py-2 px-3 shadow-md">
        <label className="label inline mr-4" htmlFor="current">
          Seleccionar componente:
        </label>
        <select className="select select-bordered min-h-0 h-8 w-60" value={current} onChange={handleSelect} name="current" id="current">
          {components.map(({ id, name }) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}