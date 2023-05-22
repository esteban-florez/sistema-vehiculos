<x-layout title="Detalles de vehículo">
  <div class="p-4 bg-white shadow-md">
    <div class="flex justify-between items-center p-4 bg-neutral text-white rounded-lg shadow-md">
      <div>
        <h2 class="text-2xl tracking-tight font-semibold">
          Modelo:
          <span class="font-bold tracking-tighter">
            {{ $vehicle->type->name }}
          </span>
        </h2>  
        <p class="text-lg">
          Estado: <span class="font-semibold">{{ $vehicle->status }}</span>
          ---
          Serial: <span class="font-semibold">{{ $vehicle->serial }}</span>
        </p>
      </div>
      {{-- TODO -> editar --}}
      {{-- <a href="{{ route('vehicles.edit', $vehicle) }}" class="btn bg-white text-neutral hover:bg-gray-100 active:bg-gray-300 flex items-center">
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
        </svg>
        <span class="ml-1">
          Editar
        </span>
      </a> --}}
    </div>
    @if ($components)
      <table class="table w-full mt-4">
        <thead>
          <tr>
            <th></th>
            <th>Serial</th>
            <th>Nombre</th>
            <th>N° de partes</th>
            <th>Observaciones</th>
            <th>Estado</th>
            <th class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          @foreach ($components as $component)
            <tr>
              <th>{{ $component->id }}</th>
              <td>{{ $component->serial }}</td>
              <td>{{ $component->name }}</td>
              <td>{{ $component->parts->count() }}</td>
              <td>{{ $component->description }}</td>
              <td>{{ $component->status }}</td>
              <td class="text-center">
                <a href="{{ route('home', $vehicle) }}" class="btn btn-sm btn-info">
                  Detalles
                </a>
              </td>
            </tr>
          @endforeach
        </tbody>
      </table>
    @else
      <x-empty>Este vehículo no posee componentes.</x-empty>       
    @endif
    <div class="divider divider-vertical my-1"></div>
    <div class="bg-gray-200 rounded-lg p-3 mt-3 flex justify-center">
      {{ $components->links() }}
    </div>
  </div>
</x-layout>