<x-layout title="Registrar vehículo">
  <form class="card bg-white shadow-md transition-transform" action="{{ route('vehicles.store') }}" method="POST">
    @csrf
    <div class="card-body">
      <h2 class="card-title text-2xl mb-2">Datos del vehículo</h2>
      <div class="alert shadow mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-black flex-shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="font-semibold">
          Debe ingresar el serial del vehículo y también seleccionar el modelo.
        </p>
      </div>
      <div class="flex gap-6 mb-4">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            Ingrese el serial del vehículo:
          </label>
          <input type="text" placeholder="Ej. 1823B" name="serial" id="serial" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            Seleccione el modelo:
          </label>
          <select name="type_id" id="typeId" class="select select-bordered">
            <option disabled selected>Seleccionar...</option>
              @foreach ($types as $type)
                <option value="{{ $type->id }}">{{ $type->name }}</option>
              @endforeach
          </select>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary" type="button">
          Siguiente
        </button>
        <a class="btn btn-ghost" href="{{ route('home') }}">
          Volver
        </a>
      </div>
    </div>
  </form>
</x-layout>