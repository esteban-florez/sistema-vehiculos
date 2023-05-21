<x-layout.guest>
  <div class="card bg-white">
    <div class="card-body">
      <h1 class="text-center text-3xl font-semibold tracking-tight">
        Iniciar Sesión
      </h1>
      <form class="mt-2" action="{{ route('auth') }}" method="POST">
        @csrf
        <div class="form-control w-full">
          <label class="label" for="email">
            Correo electrónico:
          </label>
          <input type="email" placeholder="Escriba su correo..." name="email" id="email" class="input input-bordered w-full"/>
        </div>
        <div class="form-control w-full mt-4">
          <label class="label" for="password">
            Contraseña:
          </label>
          <input type="password" placeholder="Escriba la contraseña..." name="password" id="password" class="input input-bordered w-full"/>
        </div>
        <div class="flex justify-between items-center mt-6">
          <button class="btn btn-primary" type="submit">
            Aceptar
          </button>
          <a class="link hover:text-primary" href="{{ route('register.create') }}">
            Registrarse.
          </a>
        </div>
      </form>
    </div>
  </div>
</x-layout.guest>