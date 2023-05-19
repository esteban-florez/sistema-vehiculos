import Instructions from './Instructions'

export default function ComponentFields({ component, updateComponent }) {
  const { id, name, serial, status, description } = component

  return (
    <>
      <div className="flex items-center justify-between bg-neutral text-white rounded-lg p-4 px-3">
        <h3 className="text-2xl font-bold tracking-tight">
          Datos del componente
        </h3>
      </div>
      <Instructions>
        Ingrese el serial, el estado y las observaciones del componente. 
      </Instructions>
      <div className="grid grid-cols-3 justify-items-center pb-4 mt-4">
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label" htmlFor="serial">
            Ingrese el serial del componente:
          </label>
          <input type="text" placeholder="Ej. XJ12" name="serial" id="serial" className="input input-bordered w-full max-w-xs" value={serial} onInput={(e) => updateComponent(id, 'serial', e.target.value.toUpperCase())}/>
        </div>
        <div>
          <p className="label mt-4">Seleccione el estado del componente:</p>
          <div className="form-control flex flex-row items-center gap-1 w-full max-w-xs">
            <input type="radio" name="status" className="radio checked:bg-green-500" id="statusTrue" checked={status} onChange={() => updateComponent(id, 'status', true)}/>
            <label className="label text-green-500" htmlFor="statusTrue">
              Bueno
            </label>
          </div>
          <div className="form-control flex flex-row items-center gap-1 w-full max-w-xs">
            <input type="radio" name="status" className="radio checked:bg-red-500" id="statusFalse" checked={!status} onChange={() => updateComponent(id, 'status', false)}/>
            <label className="label text-red-500" htmlFor="statusFalse">
              Malo
            </label>
          </div>
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label" htmlFor="description">
            Ingrese las observaciones (opcional):
          </label>
          <textarea className="textarea textarea-bordered h-24 resize-none text-base" name="description" id="description" placeholder="Ej. Recibido de el proveedor 18." value={description} onChange={(e) => updateComponent(id, 'description', e.target.value)}></textarea>
        </div>
      </div>
    </>
  )
}