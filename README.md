# Ejercicio Asignatura
Para levantar esta dapp, es necesario seguir los siguientes pasos:

## Instalar truffle
```
$ npm i -g truffle
```

## Descargar el repositorio 

```
$ git clone
```

## Compilar los contratos inteligentes

Dentro de la carpeta del proyecto, ejecutar:
```
$ truffle compile
```

## Crear blockchain privada
Crear workspace en Ganache mediante el archivo truffle-config.js

## Desplegar  los contratos inteligentes
Una vez creado el entorno de ganache, desplegamos lo contratos inteligentes en la Blockchain privada de Ganache:

```
$ truffle migrate
```

## Cargar con datos iniciales el contrato inteligente
Automatizacion de interaccion con los contratos inteligentes:

```
$ truffle exec scripts/rellenar.js
```

## Levantar servidor front-end
Finalmente lanzamos el servidor web  con la interfaz web:

```
$ cd dapp/src 
$ npm i
$ npm start
```



