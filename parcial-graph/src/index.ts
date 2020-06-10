import { bootstrap } from 'vesper';
import { PedidosController } from './controller/PedidosController';
import { Pedidos } from './entity/Pedidos';
bootstrap({
port: 4000,
controllers: [
    PedidosController
],
entities: [
Pedidos,
],
schemas: [
__dirname + '/schema/**/*.graphql'
],
cors: true
}).then(() => {
console.log('Your app is up and running on http://localhost:4000. ' +

'You can use playground in development mode on http://localhost:4000/playground');
}).catch(error => {
console.error(error.stack ? error.stack : error);
});
