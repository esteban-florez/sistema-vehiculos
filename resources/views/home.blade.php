<x-layout title="Inicio">
  <div class="hero border-8 border-white py-10 rounded-lg shadow-md">
    <div class="hero-content bg-white text-center p-8  rounded-lg shadow-md">
      <div class="max-w-2xl">
        <h1 class="text-5xl font-bold">Sistema de Inventario de Vehículos</h1>
        <p class="py-6 text-lg font-semibold">Sistema para el registro de vehículos, sus componentes y partes, y la generación de reportes en PDF a partir de los datos registrados.</p>
        <div class="flex justify-center gap-4 mt-3">
          <a href="{{ route('vehicles.create') }}" class="btn btn-primary">Registrar vehículo</a>
          <button class="btn btn-outline">Lista de vehículos</button>
        </div>
      </div>
    </div>
  </div>
</x-layout>