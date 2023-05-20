<x-layout title="Lista de vehículos">
  <div class="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
    <div class="bg-neutral text-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h3 class="text-2xl font-bold">
          Total de vehículos: 31 unidades
        </h3>
        <p class="font-semibold text-lg">Unidades activas: 11</p>
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
    <table class="table w-full mt-4">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        <!-- row 2 -->
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
  </div>
</x-layout>