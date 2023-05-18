import { CSRF_TOKEN } from '../constants'
import { SERVER_URL } from '../constants'

export default function Form({ children }) {
  const action = `${SERVER_URL}/vehicles/create` 

  return (
    <form className="card bg-white shadow-md transition-transform" action={action} method="POST">
      <input type="hidden" name="_token" value={CSRF_TOKEN}/>
      <div className="card-body">
        {children}
      </div>
    </form>
  )
}
