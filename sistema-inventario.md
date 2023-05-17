# Sistema de inventario

Modelos
  - Nombre del modelo.
  - Componentes (cantidad, nombre).

Vehículos
  - Serial

Componentes
  - Código del vehiculo (rel)
  - Código
  - Observaciones
  - Status (bueno o malo/completo o incompleto)

Partes
  - Código del componente (rel)
  - Serial
  - Código
  - Descripción
  - Cantidad
  - Muescas
  - Caja
  - Observaciones
  - Status (bueno o malo)

Registrar vehículos (camiones porta-misiles)
Se trabajaran con vehículos de transporte, específicamente el URAL 9259B.

Se van a registrar los componentes que los vehículos de transporte tienen en la cava (parte trasera). Puede llevar 31 componentes (este tranporte en específico). Cada componente tiene piezas o partes. Ej. Caja de herramientas, tiene serial (#0003 ejemplo).

Se registra el camión de transporte, y al mismo tiempo se registran los 31 componentes. En cada componente se tienen que registrar las piezas. De cada uno componente se debe manejar un status (si está todo completo, si está bien o no).

Cuando yo haga el registro total del camión completo, cuando se busque el reporte del camión, tengo que recorrer el status de los 31 componentes, si los 31 están bien, entonces el camión está completo/activo (eso es lo que se quiere saber).

Registro el vehículo mas 31 componentes. Puede hacerse como "pestañas" para el formulario de registro de cada componente, o si no puede hacerse un solo formulario largo y que scrolleen. 

Se necesita reporte de todos los camiones activos. El listado de camiones.

El inventario debería funcionar para más tipos de vehículos. Ellos solo quieren el URAL ese.

Cada componente tiene partes, y cada parte tiene un código. Los componentes también tienen código. El status del camión depende de que sus componentes estén en status: bueno/completo, y que las partes de los componentes estén en estado: bueno. Se registra en un formulario por pestañas, cada pestaña un componente.