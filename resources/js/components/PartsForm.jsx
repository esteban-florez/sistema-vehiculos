import Instructions from './Instructions'

export default function PartsForm({ open, closeModal }) {
  const modalClasses = open ? 'modal modal-open' : 'modal'
  
  return (
    <>
      <div className={modalClasses} onClick={closeModal}>
        <div className="modal-box min-w-max relative" onClick={(e) => e.stopPropagation()}>
          <h3 className="font-bold text-2xl">Registrar parte</h3>
          <button className="btn btn-sm btn-square absolute right-4 top-4">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
          <div className="grid grid-rows-4 grid-cols-2 justify-items-center gap-x-8 mt-2">
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="serial">
                Ingrese el serial del componente:
              </label>
              <input type="text" placeholder="Ej. K2D12" name="serial" id="serial" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="serial">
                Ingrese el código (opcional):
              </label>
              <input type="text" placeholder="Ej. 153.8413.1" name="serial" id="serial" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div>
              <p className="label">Seleccione el estado del componente:</p>
              <div className="flex flex-row">
                <div className="form-control flex flex-row items-center gap-1 w-full max-w-xs">
                  <input type="radio" name="status" className="radio checked:bg-green-500" id="statusTrue" />
                  <label className="label text-green-600" htmlFor="statusTrue">
                    Bueno
                  </label>
                </div>
                <div className="form-control flex flex-row items-center gap-1 w-full max-w-xs">
                  <input type="radio" name="status" className="radio checked:bg-red-500" id="statusFalse" />
                  <label className="label text-red-500" htmlFor="statusFalse">
                    Malo
                  </label>
                </div>
              </div>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="amount">
                Ingrese la cantidad del componente:
              </label>
              <input type="number" placeholder="Ej. 100" name="amount" id="amount" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="box">
                Ingrese la caja (opcional):
              </label>
              <input type="text" placeholder="Ej. 3" name="box" id="box" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="notch">
                Ingrese la muesca (opcional):
              </label>
              <input type="text" placeholder="Ej. 10" name="notch" id="notch" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="description">
                Ingrese la descripción de la parte:
              </label>
              <textarea className="textarea textarea-bordered resize-none text-base" name="description" id="description" placeholder="Ej. Guantes de lana."></textarea>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="observation">
                Ingrese las observaciones (opcional):
              </label>
              <textarea className="textarea textarea-bordered resize-none text-base" name="observation" id="observation" placeholder="Ej. Reserva N° 10."></textarea>
            </div>
          </div>
          <div className="modal-action justify-start">
            <button className="btn btn-success" type="button">
              Agregar
            </button>
            <button className="btn btn-error" type="button" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
