export default function getComponents(types, id) {
  const type = types?.find(t => t.id === id)

  if (!type) {
    return null
  }
   
  return JSON.parse(type.components)
}