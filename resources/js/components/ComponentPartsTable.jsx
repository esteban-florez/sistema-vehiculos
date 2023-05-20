import PartsRow from './PartsRow'

export default function ComponentPartsTable() {
  return (
    <div className="overflow-x-auto border rounded-lg shadow my-4">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Serial</th>
            <th>Código</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Caja</th>
            <th>Muesca</th>
            <th>Observ.</th>
            <th>Status</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <PartsRow />
        </tbody>
      </table>
    </div>
  )
}