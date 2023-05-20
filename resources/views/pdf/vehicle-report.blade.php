<!DOCTYPE html>
<html>
<head>
  <style>
    /* Box sizing rules */
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }
  
    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
    margin: 0;
    }
  
    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul,
    ol {
    list-style: none;
    }
  
    /* Set core root defaults */
    html:focus-within {
    scroll-behavior: smooth;
    }
  
    /* Set core body defaults */
    body {
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    line-height: 1.5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    }
  
    /* A elements that don't have a class get default styles */
    a:not([class]) {
    text-decoration-skip-ink: auto;
    }
  
    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
    font: inherit;
    }

  </style>
  <style>
     body {
      padding: 2rem;
    }
    
    h1 {
      margin-top: 1rem;
    }
    
    ul {
      display: flex;
      justify-content: space-between;
      padding: 0 12rem;
    }
    
    table {
      margin: 2rem auto 2rem;
      text-align: center;
      width: 100%;
      border-collapse: collapse;
    }
    
    td, th {
      border: 1px solid black;
    }
    
    b {
      font-weight: bold;
    }

    .style-none {
      list-style: none;
    }
  </style>
</head>
<body>
  {{-- TODO -> hacer archivo css aparte --}}
  <h1 style="margin-bottom: 1rem;">Reporte de Vehículo</h1>
  <p>
    <span>Modelo:</span>
    <b style="margin-right: 100px;">{{ $vehicle->type->name }}</b>
    <span>Serial del vehículo:</span>
    <b>{{ $vehicle->serial }}</b>
  </p>
  <p style="margin-bottom: 1rem;">
    <span>Estado:</span>
    <b style="margin-right: 100px;">{{ $vehicle->status }}</span>
    <span>Nro. componentes:</span>
    <b>{{ $vehicle->components->count() }} componentes</b>
  </p>

  @foreach ($vehicle->components as $component)
    <div style="margin-top: 2rem;">
      <table style="margin: 0">
        <tbody>
          <tr>
            <td><b>{{ $component->name }}</b></td>
            <td>Serial: <b>{{ $component->serial }}</b></td>
            <td>Estado: <b>{{ $component->status }}</b></td>
            <td>
              Observaciones: <b>{{ $component->description }}</b>
            </td>
          </tr>
        </tbody>
      </table>
      @if ($component->parts->isEmpty())
        <p style="font-style: italic; text-align: left;">Este componente no posee partes</p>
      @else
        @foreach ($component->parts as $part)
          <table style="margin-top: 2px;">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Código</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Caja</th>
                <th>Muesca</th>
                <th>Observ.</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{{ $part->serial }}</td>
                  <td>{{ $part->code }}</td>
                  <td>{{ $part->description }}</td>
                  <td>{{ $part->amount }}</td>
                  <td>{{ $part->box }}</td>
                  <td>{{ $part->notch }}</td>
                  <td>{{ $part->observation }}</td>
                  <td>{{ $part->status }}</td>
                </tr>
            </tbody>
          </table>
        @endforeach
      @endif
    </div>
  @endforeach
</body>
</html>
