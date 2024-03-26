# descargar-comprobantes-sri
Descargar PDFs de comprobantes recibidos de manera automática utilizando un script de Javascript.

## Requisitos

1. Acceso a credenciales de usuario (Persona Natural o Persona Jurídica) al sistema de SRI En Línea: [https://srienlinea.sri.gob.ec/](https://srienlinea.sri.gob.ec/)
2. Editor de código (VS Code recomendado): [https://code.visualstudio.com/](https://code.visualstudio.com/)
3. Node JS instalado en el computador: [https://nodejs.org/en](https://nodejs.org/en)
4. Acceso a una terminal: Windows Terminal, Powershell, cmd, Ubuntu Terminal, etc

## Instrucciones

1. Iniciar sesion en el sistema de SRI en línea
2. Ir a Facturación Electrónica -> Comprobantes electrónicos recibidos
3. Filtrar por fechas que deseamos descargar
4. Cargar tabla de comprobantes
5. Contar cuantos comprobantes existen y configurar en el script el número de comprobantes
6. Abrir el Inspector del navegador e ir a la pestaña de Network
7. Borrar todo lo que está en Network
8. Dar click al botón de descargar PDF del primer comprobante
9. Copiar fetch (Node.js) del primer elemento que sale en Network luego de dar click al botón
10. Colocar los valores de headers copiados de Network en el script
11. Colocar el valor de body copiado de Network en el script, manteniendo los `${String(i)}`s al final del código
12. Correr el código script


## Dudas

Si requieres soporte adicional puedes contactarnos en [https://www.instagram.com/innowork_ec/](https://www.instagram.com/innowork_ec/)
