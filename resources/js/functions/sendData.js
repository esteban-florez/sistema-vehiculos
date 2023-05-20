import { FORM_ACTION } from '../constants'

export default async function sendData(data) {
  data.parts.forEach(part => {
    part.component_id = part.componentId
    delete part.componentId
  })

  data.vehicle.type_id = data.vehicle.typeId
  delete data.vehicle.typeId

  const formData = new FormData
  formData.set('content', JSON.stringify(data))

  try {
    const response = await fetch(FORM_ACTION, {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: formData,
    })
    
    if (response.status === 422) {
      const errors = await response.json()
      console.log(errors)
      // TODO -> manejar errores de validación
    }

    if (response.status === 201) {
      console.log('Enviado con éxito')
      // TODO -> mensaje de éxito y redirección
    }
  } catch (error) {
    console.log(error)
  }
}