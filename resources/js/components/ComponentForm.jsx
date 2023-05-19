import { useState } from 'react'
import ButtonsPanel from './ButtonsPanel'
import ComponentFormHeader from './ComponentFormHeader'
import Instructions from './Instructions'

export default function ComponentForm({ components, updateComponent, goBack }) {
  const [current, setCurrent] = useState(components[0].id)
  const component = components.find(component => component.id === current)
  const { id, name, serial, status, description } = component

  const changeCurrent = id => setCurrent(id)

  return (
    <>
      <ComponentFormHeader components={components} current={current} changeCurrent={changeCurrent}/>
      <div className="flex px-2">
        <div className="w-2/5">
          <h3 className="font-bold tracking-tight text-2xl mt-4 text-primary">
            {name}
          </h3>
          <Instructions>
            Ingrese el serial, estado y observaciones. 
          </Instructions>
          <div className="flex gap-6 mt-4">
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="serial">
                Ingrese el serial del componente:
              </label>
              <input type="text" placeholder="Ej. XJ12" name="serial" id="serial" className="input input-bordered w-full max-w-xs" value={serial} onInput={(e) => updateComponent(id, 'serial', e.target.value.toUpperCase())}/>
            </div>
          </div>
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
          <div className="form-control mt-3">
            <label className="label" htmlFor="description">
              Ingrese las observaciones (opcional):
            </label>
            <textarea className="textarea textarea-bordered h-24 resize-none text-base" name="description" id="description" placeholder="Ej. Recibido de el proveeder 18" value={description} onChange={(e) => updateComponent(id, 'description', e.target.value)}></textarea>
          </div>
        </div>
        <div className="divider divider-horizontal mt-4"></div>
        <div className="w-3/5 mt-4">
          <h3 className="text-center">Partes del componente</h3>
        </div>
      </div>
      <ButtonsPanel onBack={goBack}/>
    </>
  )
}