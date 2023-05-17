<x-layout>
  <h1 class="text-center text-4xl font-bold">Inventario de Vehículos</h1>
  <div class="flex justify-center gap-10 w-2/3 p-4 mx-auto mt-8">
    <a class="w-40 text-center py-3 shadow font-semibold text-lg text-white bg-blue-500 rounded-xl break-none hover:bg-blue-600 active:bg-blue-800 transition-colors" href="{{ route('vehicles.create') }}">
      Vehículos
    </a>
    <a class="w-40 text-center py-3 shadow font-semibold text-lg text-white bg-blue-500 rounded-xl break-none hover:bg-blue-600 active:bg-blue-800 transition-colors">
      Modelos
    </a>
    <a class="w-40 text-center py-3 shadow font-semibold text-lg text-white bg-blue-500 rounded-xl break-none hover:bg-blue-600 active:bg-blue-800 transition-colors">
      Componentes
    </a>
  </div>
</x-layout>