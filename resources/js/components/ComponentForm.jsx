import { useState } from 'react'
import ButtonsPanel from './ButtonsPanel'
import ComponentFormHeader from './ComponentFormHeader'
import ComponentFields from './ComponentFields'
import ComponentParts from './ComponentParts'

export default function ComponentForm({ components, updateComponent, goVehicle, vehicleDescription, parts, addPart, updatePart, deletePart }) {
  const [current, setCurrent] = useState(components[0].id)
  const index = components.findIndex(component => component.id === current)
  const isLast = index === components.length - 1

  const component = components[index]
  const { id, name, serial } = component

  const changeCurrent = id => setCurrent(id)

  function onBack() {
    if (index < 1) {
      goVehicle()
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setCurrent(components[index - 1].id)
  }

  function onNext() {
    // Si, es muy raro, pero a veces no me scrollea si el siguiente componente a editar no ha sido modificado, lol
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 0)
    
    setCurrent(components[index + 1].id)
  }

  return (
    <>
      <ComponentFormHeader
        name={name}
        components={components} 
        current={current}
        changeCurrent={changeCurrent}
        vehicleDescription={vehicleDescription}
      />
      <div className="divider divider-vertical"></div>
      <ComponentFields
        component={component}
        updateComponent={updateComponent}
      />
      <div className="divider divider-vertical"></div>
      <ComponentParts
        componentId={id}
        parts={parts}
        addPart={addPart}
        updatePart={updatePart}
        deletePart={deletePart}
      />
      <ButtonsPanel 
        onNext={isLast ? null : onNext}
        nextDisabled={!serial}
        onBack={onBack}
        withSubmit={isLast}
        submitDisabled={components.some(comp => !comp.serial)}
        goVehicle={goVehicle}/>
    </>
  )
}