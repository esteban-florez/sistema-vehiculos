export default function ComponentFormHeader({ components }) {
  return (
    <div className="flex bg-primary rounded-lg p-3 text-white justify-between items-center">
      <h2 className="text-2xl font-bold mb-2 tracking-tight">
        Registro de los componentes
      </h2>
      <div className="bg-white text-black rounded-lg py-2 px-3">
        <label className="label inline mr-4">
          Editando el componente:
        </label>
        <select className="select select-bordered min-h-0 h-8 w-96">
          {/* TODO -> renderizar las opciones y que la opcion seleccionada sea el componente que se edita */}
        </select>
      </div>
    </div>
  )
}