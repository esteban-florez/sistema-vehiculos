import ButtonsPanel from './ButtonsPanel'
import ComponentFormHeader from './ComponentFormHeader'
import Instructions from './Instructions'

export default function ComponentForm({ components }) {
  return (
    <>
      <ComponentFormHeader components={components}/>
      <div className="w-2/5">
        <Instructions>
          Debe ingresar el serial y estado del componente. También puede ingresar observaciones de forma opcional. 
        </Instructions>
        <div className="flex gap-6 mt-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              Ingrese el serial del componente:
            </label>
            <input type="text" placeholder="Ej. XJ12" name="serial" id="serial" className="input input-bordered w-full max-w-xs" />
          </div>
        </div>
        <p className="label mt-4">Seleccione el estado del componente:</p>
        <div className="form-control flex flex-row items-center gap-1 w-full max-w-xs">
          <input type="radio" name="radio-10" className="radio checked:bg-green-500"/>
          <label className="label text-green-500">
            Bueno
          </label>
        </div>
        <div className="form-control flex flex-row items-center gap-1 w-full max-w-xs">
          <input type="radio" name="radio-10" className="radio checked:bg-red-500"/>
          <label className="label text-red-500">
            Malo
          </label>
        </div>
        <div className="form-control mt-3">
          <label className="label">
            Ingrese las observaciones (opcional):
          </label>
          <textarea className="textarea textarea-bordered h-24 resize-none text-base" placeholder="Ej. Recibido de el proveeder 18"></textarea>
        </div>
      </div>
      <ButtonsPanel />
    </>
  )
}