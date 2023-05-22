<x-layout.guest>
  <div class="card bg-white">
    <div class="card-body">
      <h1 class="text-center text-3xl font-semibold tracking-tight">
        Iniciar Sesión
      </h1>
      @error('login')
        <div class="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Las credenciales no son válidas.</span>
          </div>
        </div>
      @enderror
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