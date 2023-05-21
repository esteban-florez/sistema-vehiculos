import { SERVER_URL, RESULTS } from '../constants'

export default function ResultModal({ result, retry }) {
  const titleClass = {
    [RESULTS.SUCESS]: 'text-success',
    [RESULTS.FAILURE]: 'text-error',
  }

  const titles = {
    [RESULTS.SUCESS]: '¡Se ha registrado el vehículo exitosamente!',
    [RESULTS.FAILURE]: 'Ha ocurrido un error al registrar el vehículo...' 
  }

  const messages = {
    [RESULTS.SUCESS]: 'Ahora puede ir al listado de vehículos para descargar el reporte del vehículo registrado.',
    [RESULTS.FAILURE]: 'Ocurrió un error, por favor intente de nuevo.'
  }

  const actions = {
    [RESULTS.SUCESS]: (
      <a href={`${SERVER_URL}/vehicles`} className="btn btn-success">
        Ir al listado
      </a>
      ),
    [RESULTS.FAILURE]: (
      <button className="btn btn-error" onClick={retry}>
        Intentar de nuevo
      </button>
    )
  }

  return (
    <div className={result ? 'modal  modal-open' : 'modal'}>
      <div className="modal-box min-w-min">
        {result !== RESULTS.LOADING ? (
          <>
            <h3 className={'font-bold text-2xl text-center text-success ' + titleClass[result]}>
              {titles[result]}
            </h3>
            <p className="font-semibold text-lg py-6">
              {messages[result]}
            </p>
            <div className="modal-action justify-start">
              {actions[result]}
              <a href={`${SERVER_URL}/home`} className="btn btn-ghost">
                Ir al inicio
              </a>
            </div>
          </>
        ) : (
          <div className="w-full py-10 grid place-items-center">
            <div className="radial-progress animate-spin" style={{"--value":70}}></div>
          </div>
        )}
      </div>
    </div>
  )
}