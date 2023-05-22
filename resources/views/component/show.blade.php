<x-layout title="Detalles de componente">
  <div class="p-4 bg-white shadow-md">
    <div class="flex justify-between items-center p-4 bg-neutral text-white rounded-lg shadow-md">
      <div>
        <h2 class="text-3xl tracking-tight font-semibold">
          <span class="font-bold tracking-tighter">
            {{ $component_->name }}
          </span>
        </h2>  
        <p class="text-lg">
          Serial: <span class="font-semibold">{{ $component_->serial }}</span>
          ---
          Estado: <span class="font-semibold">{{ $component_->status }}</span>
        </p>
      </div>
    </div>
    @if ($parts->isNotEmpty())
      <h2 class="mt-6 py-2 px-4 rounded-lg font-bold text-xl bg-gray-100">
        Partes del componente
      </h2>
      <table class="table w-full mt-4">
        <thead>
          <tr>
            <th></th>
            <th>Serial</th>
            <th>Código</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Caja</th>
            <th>Muesca</th>
            <th>Observ.</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          @foreach ($parts as $part)
            <tr>
              <th>{{ $part->id }}</th>
              <td>{{ $part->serial }}</td>
              <td>{{ $part->code }}</td>
              <td>{{ $part->description }}</td>
              <td>{{ $part->amount }}</td>
              <td>{{ $part->box }}</td>
              <td>{{ $part->notch }}</td>
              <td>{{ $part->observation }}</td>
              <td>{{ $part->status }}</td>
            </tr>
          @endforeach
        </tbody>
      </table>
    @else
      <x-empty>Este componente no posee partes.</x-empty>       
    @endif
    <div class="divider divider-vertical my-1"></div>
    <div class="bg-gray-200 rounded-lg p-3 mt-3 flex justify-center">
      {{ $parts->links() }}
    </div>
  </div>
</x-layout>