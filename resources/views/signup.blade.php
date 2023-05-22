<x-layout.guest>
  <div class="card bg-white">
    <div class="card-body">
      <h1 class="text-center text-3xl font-semibold tracking-tight">
        Registrar usuario
      </h1>
      <form class="mt-2" action="{{ route('register.store') }}" method="POST">
        @csrf
        <div class="form-control w-full">
          <label class="label" for="name">
            Nombre completo:
          </label>
          <input type="text" placeholder="Escriba su nombre..." name="name" id="name" class="input input-bordered w-full"/>
          @error('name')
            <p class="text-error text-sm">{{ $message }}</p>
          @enderror
        </div>
        <div class="form-control w-full mt-4">
          <label class="label" for="email">
            Correo electrónico:
          </label>
          <input type="email" placeholder="Escriba su correo..." name="email" id="email" class="input input-bordered w-full"/>
          @error('email')
            <p class="text-error text-sm">{{ $message }}</p>
          @enderror
        </div>
        <div class="form-control w-full mt-4">
          <label class="label" for="password">
            Contraseña:
          </label>
          <input type="password" placeholder="Escriba la contraseña..." name="password" id="password" class="input input-bordered w-full"/>
          @error('password')
            <p class="text-error text-sm">{{ $message }}</p>
          @enderror
        </div>
        <div class="flex justify-between items-center mt-6">
          <button class="btn btn-primary" type="submit">
            Registrarse
          </button>
          <a class="link hover:text-primary" href="{{ route('login') }}">
            Iniciar sesión.
          </a>
        </div>
      </form>
    </div>
  </div>
</x-layout.guest>