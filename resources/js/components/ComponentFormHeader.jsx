export default function ComponentFormHeader({ components, current, changeCurrent }) {
  function handleSelect(e) {
    /** DRY - 1 */
    const value = Number(e.target.selectedOptions[0].value)
    const selected = isNaN(value) ? null : value

    changeCurrent(selected)
  }

  return (
    <div className="flex bg-primary rounded-lg p-3 text-white justify-between items-center">
      <h2 className="text-2xl font-bold mb-2 tracking-tight">
        Registro de los componentes
      </h2>
      <div className="bg-white text-black rounded-lg py-2 px-3">
        <label className="label inline mr-4" htmlFor="current">
          Editando el componente:
        </label>
        <select className="select select-bordered min-h-0 h-8 w-96" value={current} onChange={handleSelect} name="current" id="current">
          {components.map(({ id, name }) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}