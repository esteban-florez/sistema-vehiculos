<x-layout title="Lista de vehículos">
  <div class="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
    <div class="bg-neutral text-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h3 class="text-2xl font-bold">
          Total de vehículos: {{ $vehicles->count() }} unidades
        </h3>
        <p class="font-semibold text-lg">Unidades activas: {{ $activeCount }} unidades</p>
      </div>
      <a href="{{ route('vehicles.create') }}" class="btn bg-white text-neutral hover:bg-gray-100 active:bg-gray-300 flex items-center">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
        </svg>
        <span class="ml-1">
          Agregar
        </span>
      </a>
    </div>
    @if ($vehicles)
      <table class="table w-full mt-4">
        <thead>
          <tr>
            <th></th>
            <th>Modelo</th>
            <th>Serial</th>
            <th>Nro. componentes</th>
            <th>Status</th>
            <th class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          @foreach ($vehicles as $vehicle)
            <tr>
              <th>{{ $vehicle->id }}</th>
              <td>{{ $vehicle->type->name }}</td>
              <td>{{ $vehicle->serial }}</td>
              <td>{{ $vehicle->type->componentNames->count() }} componentes</td>
              <td>{{ $vehicle->status }}</td>
              <td class="text-center">
                <button class="btn btn-sm btn-warning">
                  Editar
                </button>
                <button class="btn btn-sm btn-error">
                  Eliminar
                </button>
                <button class="btn btn-sm btn-neutral">
                  Ver componentes
                </button>
              </td>
            </tr>
          @endforeach
        </tbody>
      </table>
    @else
      <x-empty>No se han registrado vehículos.</x-empty>       
    @endif
    <div class="divider divider-vertical"></div>
    <div class="bg-gray-200 rounded-lg p-3 mt-3 flex justify-center">
      {{ $vehicles->links() }}
    </div>
  </div>
</x-layout>