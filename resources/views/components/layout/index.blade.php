@props(['title', 'react' => false])

@php
  $resources = [
    'resources/css/app.css'
  ];

  if ($react) {
    $resources[] = 'resources/js/main.jsx';
  }

  $links = [
    'home' => 'Inicio',
    'vehicles.create' => 'Registro de vehículos',
    'vehicles.index' => 'Lista de vehículos',
  ];
@endphp

<!DOCTYPE html>
<html class="h-full bg-gray-100" lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  @if ($react)
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="server-url" content="{{ url('/') }}">
    <meta name="previous-url" content="{{ url()->previous() }}">
  @endif
  <title>Inventario de Vehículos</title>
  @if ($react)
    @viteReactRefresh
  @endif
  @vite($resources)
</head>
<body class="h-full">
  <div class="min-h-full">
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <a class="flex items-center gap-1" href="{{ route('home') }}">
                <svg class="w-8 h-8 stroke-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                <span class="text-white text-2xl font-bold tracking-tighter">SIV</span>
              </a>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                @foreach ($links as $link => $text)
                  @php
                    $current = Route::currentRouteName();
                    $classes = 'rounded-md px-3 py-2 font-medium';

                    if ($link === $current) {
                      $classes = "bg-gray-900 text-white {$classes}";
                    } else {
                      $classes = "text-gray-300 hover:bg-gray-700 hover:text-white {$classes}";
                    }
                  @endphp
                  <a href="{{ route($link) }}" class="{{ $classes }}">
                    {{ $text }}
                  </a>    
                @endforeach
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">{{ $title }}</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" id="root">
        {{ $slot }}
      </div>
    </main>
  </div>
</body>
</html>