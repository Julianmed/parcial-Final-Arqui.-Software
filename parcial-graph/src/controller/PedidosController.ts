import { Controller, Mutation, Query } from 'vesper';
import { EntityManager } from 'typeorm';
import { Pedidos } from '../entity/Pedidos';

@Controller()
export class PedidosController {
constructor(private entityManager: EntityManager) {
}

// serves "Pedidos: [Pedidos]" requests
@Query()
Pedidos() {
    return this.entityManager.find(Pedidos);
}
// serves "PedidosGet(id: Int): Pedidos" requests
@Query()
pedidosGet({id}) {
    return this.entityManager.findOne(Pedidos, id);
}

// serves "PedidosSave(id:Int, status:String, nombreCliente:String, direccionEntrega:String, estimacionEntrega: Date): Pedidos" requests

@Mutation()
pedidosSave(args) {
    const pedidos = this.entityManager.create(Pedidos, args);
    return this.entityManager.save(Pedidos, pedidos);
}
}