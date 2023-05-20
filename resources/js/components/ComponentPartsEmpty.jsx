export default function ComponentPartsEmpty() {
  return (
    <div className="h-60 bg-gray-100 mt-4 mx-4 rounded-lg grid place-items-center shadow-md border">
      <div className="flex flex-col items-center gap-4">
        <img className="w-28" src="/img/no-data.svg"/>
        <h4 className="text-2xl font-bold text-slate-500">No se han registrado partes.</h4>
      </div>
    </div>
  )
}