export default function getComponentNames(types, id) {
  const type = types?.find(t => t.id === id)

  if (!type) {
    return null
  }
     
  return type.component_names
}