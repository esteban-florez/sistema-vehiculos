import { useState } from 'react'
import ButtonsPanel from './ButtonsPanel'
import ComponentFormHeader from './ComponentFormHeader'
import ComponentFields from './ComponentFields'
import ComponentParts from './ComponentParts'

export default function ComponentForm({ components, updateComponent, goVehicle, vehicleDescription }) {
  const [current, setCurrent] = useState(components[0].id)
  const index = components.findIndex(component => component.id === current)
  const isLast = index === components.length - 1

  const component = components[index]
  const { name, serial, description } = component

  const changeCurrent = id => setCurrent(id)

  const nextDisabled = !serial || !description

  function onBack() {
    if (index < 1) {
      goVehicle()
      return
    }

    setCurrent(components[index - 1].id)
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
      <ComponentParts />
      {/* TODO -> hacer la cosa del submit disabled */}
      <ButtonsPanel 
        onNext={isLast ? null : () => setCurrent(components[index + 1].id)}
        nextDisabled={nextDisabled}
        onBack={onBack}
        withSubmit={isLast}
        submitDisabled={true}
        goVehicle={goVehicle}/>
    </>
  )
}