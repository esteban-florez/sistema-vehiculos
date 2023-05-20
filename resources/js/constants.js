export const SERVER_URL = document.querySelector('meta[name="server-url"]').content

export const CSRF_TOKEN = document.querySelector('meta[name="csrf-token"]').content

export const PREVIOUS_URL = document.querySelector('meta[name="previous-url"]').content

export const FORM_ACTION = `${SERVER_URL}/api/vehicles`

export const STEPS = {
  VEHICLE: Symbol('vehicle'),
  COMPONENTS: Symbol('components')
}
