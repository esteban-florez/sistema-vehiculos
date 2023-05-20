export default function PartsForm({ open, closeModal, part, editing, updateFormPart, resetForm, updatePart, addPart, resetEditing }) {
  const { serial, code, status, amount, box, notch, description, observation } = part

  function handleAccept() {
    if (editing) {
      updatePart()
      resetEditing()
    } else {
      addPart()
    }

    resetForm()
    closeModal()
  }

  function handleCancel() {
    if (editing) {
      resetEditing()
    }
    
    resetForm()
    closeModal()
  }
  
  function handleAmountInput(e) {
    let value = parseInt(e.target.value)

    if (value < 1 || isNaN(value)) {
      value = ''
    }

    updateFormPart('amount', value)
  }
  
  return (
    <>
      <div className={open ? 'modal modal-open' : 'modal'} onClick={closeModal}>
        <div className="modal-box min-w-max relative" onClick={(e) => e.stopPropagation()}>
          <h3 className="font-bold text-2xl">{editing ? 'Editar' : 'Registrar'} parte</h3>
          <button className="btn btn-sm btn-square absolute right-4 top-4" type="button" onClick={closeModal}>
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
          <div className="grid grid-rows-4 grid-cols-2 justify-items-center gap-x-8 mt-2">
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="partSerial">
                Ingrese el serial:
              </label>
              <input type="text" placeholder="Ej. K2D12" name="part_serial" id="partSerial" className="input input-bordered w-full max-w-xs" value={serial} onInput={(e) => updateFormPart('serial', e.target.value.toUpperCase())}/>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="partCode">
                Ingrese el código (opcional):
              </label>
              <input type="text" placeholder="Ej. 153.8413.1" name="part_code" id="partCode" className="input input-bordered w-full max-w-xs" value={code} onInput={(e) => updateFormPart('code', e.target.value.toUpperCase())}/>
            </div>
            <div className="w-full">
              <p className="label">Seleccione el estado:</p>
              <div className="flex flex-row">
                <div className="form-control flex flex-row items-center gap-1 w-full max-w-xs">
                  <input type="radio" name="part_status" className="radio checked:bg-green-500" id="partStatusTrue" checked={status} onChange={() => updateFormPart('status', true)}/>
                  <label className="label text-green-600" htmlFor="partStatusTrue">
                    Bueno
                  </label>
                </div>
                <div className="form-control flex flex-row items-center gap-1 w-full max-w-xs">
                  <input type="radio" name="part_status" className="radio checked:bg-red-500" id="partStatusFalse" checked={!status} onChange={() => updateFormPart('status', false)}/>
                  <label className="label text-red-500" htmlFor="partStatusFalse">
                    Malo
                  </label>
                </div>
              </div>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="partAmount">
                Ingrese la cantidad:
              </label>
              <input type="number" placeholder="Ej. 100" name="part_amount" id="partAmount" className="input input-bordered w-full max-w-xs" value={amount} onInput={handleAmountInput}/>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="partBox">
                Ingrese la caja (opcional):
              </label>
              <input type="text" placeholder="Ej. 3" name="part_box" id="partBox" className="input input-bordered w-full max-w-xs" value={box} onInput={(e) => updateFormPart('box', e.target.value)}/>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="partNotch">
                Ingrese la muesca (opcional):
              </label>
              <input type="text" placeholder="Ej. 10" name="part_notch" id="partNotch" className="input input-bordered w-full max-w-xs" value={notch} onInput={(e) => updateFormPart('notch', e.target.value)}/>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="partDescription">
                Ingrese la descripción de la parte:
              </label>
              <textarea className="textarea textarea-bordered resize-none text-base" name="part_description" id="partDescription" placeholder="Ej. Guantes de lana." value={description} onChange={(e) => updateFormPart('description', e.target.value)}></textarea>
            </div>
            <div className="form-control w-full max-w-xs bg-white">
              <label className="label" htmlFor="partObservation">
                Ingrese las observaciones (opcional):
              </label>
              <textarea className="textarea textarea-bordered resize-none text-base" name="part_observation" id="partObservation" placeholder="Ej. Reserva N° 10." value={observation} onChange={(e) => updateFormPart('observation', e.target.value)}></textarea>
            </div>
          </div>
          <div className="modal-action justify-start">
            <button className="btn btn-success" type="button" onClick={handleAccept} disabled={!serial || !amount || !description}>
              Aceptar
            </button>
            <button className="btn btn-error" type="button" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
