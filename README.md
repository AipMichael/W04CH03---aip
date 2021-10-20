COMPONENTES:

    INFO:
    - Renderiza {mensaje} al recibir la {condicion} (o clase?).


    DISPLAY:
    - Recibe y renderiza los [numeros recibidos].


    ACTIONS:
    - Renderiza los botones.
    - Pasa el {text} a los botones de action.
    - Pasar una {class} a action.
    ---> podría ser con el context en un futuro*
    - Le pasa una {function} a action.


        ACTION:
        - Renderizar {texto} recibido.
        - Recibe una {class}.
        - Recibe una {function}.
        - Recibe un {state}.


    KEYBOARD:
    - Pasa {text} a Key. --con el context en un futuro*
    - Muestra un {[key array]}.
    - Pasa {function} a key según condición.
    - Recibe un {state} para activar o desactivar botones.

        KEY:
        - Renderiza los {number} recibidos.
        - Recibe una {function} que se ejecuta al hacer onClick.
        - Recibe un {state} de active/inactive.


    APP:
    - [Array vacía] a la que le passas los valores de los botones seleccionados, con la condicion que acceptar un máximo 9 numeros.
    - {Pasar} esta array al display.

    - Función LLamar:
        - Bloquea teclado
        - Aparece Info
        - Se activa boton colgar
        - Se desactiva boton llamar
        - Activar cuenta atrás llamada 5 segundos.
    - Función colgar:
        - Desbloquear teclado.
        - Apagar Info
        - Se desactiva el boton colgar
        - Se activa el boton llamar
        - Borra array de numeros display.
    - Función eliminar:
        - al terminar llamada o colgar, y presionar delete.
    - Función pintar números.
