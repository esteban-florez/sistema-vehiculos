export default function ComponentParts() {
  return (
    <div className="flex items-center justify-between bg-gray-200 text-white rounded-lg py-2 px-3 -mt-1">
      <h3 className="text-2xl text-neutral font-bold tracking-tight">
        Partes del componente
      </h3>
      <button className="btn" type="button">
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
        </svg>
        <span className="ml-1">
          Agregar
        </span>
      </button>
    </div>
  )
}