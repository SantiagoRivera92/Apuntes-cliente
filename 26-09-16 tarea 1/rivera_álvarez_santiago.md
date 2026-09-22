# Tarea 1 - Santiago Rivera
## Atajos de teclado de VSCode

| Atajo | Uso |
| --- | --- |
| Alt + Shift + F | Formatear / Tabular código |
| Ctrl + S | Guardar el contenido del archivo actual |
| Ctrl + P | Abrir la búsqueda rápida de archivos |
| Ctrl + Shift + P | Abrir la paleta de comandos |
| Ctrl + F | Buscar en el archivo actual |
| Ctrl + Shift + F | Buscar en el proyecto actual |
| Ctrl + G | Saltar a una línea específica |
| Ctrl + Shift + K | Eliminar la línea actual |
| Ctrl + / | Comentar o descomentar la línea actual |
| Alt + Flecha arriba | Mueve la línea actual una línea hacia arriba|
| Alt + Flecha abajo | Mueve la línea actual una línea hacia abajo |
| Ctrl + D | Selecciona la palabra actual |
| Ctrl + Shift + L | Selecciona todas las instancias de la palabra señalada |
| Ctrl + Alt + Flecha arriba / abajo | Añadir un cursor a la línea de encima / debajo a la actual |
| Alt + Shift + Flecha arriba / abajo | Copiar la línea actual en la línea de encima / debajo a la actual |
| Ctrl + Z | Deshacer |
| Alt + Shift + O | Quitar imports no utilizados |
| F5 | Comenzar la depuración en el menú de debug |
| F11 | Pasar a la siguiente línea durante la depuración |
| F12 | Saltar a definición |

---

## Funcionamiento del menú de debug de VS Code

- Pulsamos a la izquierda de una línea para añadir un breakpoint.
- Pulsamos `F5` para comenzar a depurar. El depurador continuará ejecutando hasta encontrarse con un breakpoint. Podemos inspeccionar el valor de todas las variables definidas hasta ese punto en el menú `VARIABLES`
![]({AF7BF9E7-8833-4514-B0C6-CFA90699DF7A}.png)
- Pulsamos `F11` para continuar en la siguiente línea. Se puede ver que ahora el valor de `result` es 7 porque la suma se ha realizado.
![]({D8981080-3422-4D53-BD04-B51B73A5C064}.png)

---

## Funcionamiento de las DevTools de Chrome

### Depurador

- Pulsamos a la izquierda de una línea para añadir un breakpoint.
- Cuando esa línea sea ejecutada, la ejecución se detendrá hasta que continuemos.
![]({05FFB60F-9BF1-477F-940D-521A90DBD74C}.png)
- F8 continúa la ejecución hasta el siguiente breakpoint. F11 continúa la ejecución en la siguiente línea.

### Snippets

Los snippets son pequeños archivos de código JavaScript que puedes ejcutar en cualquier página web, guardados localmente y **sincronizados con tu cuenta de Google**.

![]({42A6F24D-C3C9-4F57-8914-1720EC4E30AF}.png)
Para crear un snippet, pulsa en `New snippet`.
![]({D2ECAA18-D0CA-409E-991A-0CFC933DFCAD}.png)
Una vez creado el snippet, simplemente edita el código JavaScript que quieras utilizar, haz click derecho en el snippet y pulsa `Run`.
![]({E6D1B987-5AE9-40F9-BB87-1B7AEA1BD20B}.png)
El snippet se ejecutará y podrás ver el resultado en la consola.
![]({801E4B16-1B5C-4DEA-82B8-092996FA280F}.png)