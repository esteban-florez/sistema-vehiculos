import { SERVER_URL } from "../constants"

export default function ButtonsPanel({ onNext, onBack, nextDisabled, goVehicle, withSubmit, submitDisabled }) {
  const backButton = onBack ? (
    <button className="btn btn-ghost" type="button" onClick={onBack}>
      Volver
    </button>
  ) : (
    <a href={`${SERVER_URL}`} className="btn btn-ghost">
      Volver
    </a>
  )

  return (
    <div className="card-actions justify-between mt-4">
      <div className="space-x-2">
        {onNext && (
          <button className="btn btn-primary" type="button" onClick={onNext} disabled={nextDisabled}>
            Siguiente
          </button>
        )}
        {withSubmit && (
          <button className="btn btn-success" type="submit" disabled={submitDisabled}>
            Registrar vehículo
          </button>
        )}
        {backButton}
      </div>
      <div className="space-x-2">
        {goVehicle && (
          <button className="btn btn-neutral" type="button" onClick={goVehicle}>
            Cambiar datos del vehículo
          </button>
        )}
        <a href={`${SERVER_URL}`} className="btn btn-error">
          Cancelar
        </a>
      </div>
    </div>
  )
}