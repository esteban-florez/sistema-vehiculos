import { SERVER_URL } from "../constants"

export default function ButtonsPanel({ onNext, onBack }) {
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
        <button className="btn btn-primary" type="button" onClick={onNext}>
          Siguiente
        </button>
        {backButton}
      </div>
      <a href={`${SERVER_URL}`} className="btn btn-error">
        Cancelar
      </a>
    </div>
  )
}