import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Pedidos {
    //Adds a comment to an Issue or Pull Request.
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    status: string;

    @Column()
    nombreCliente: string;

    @Column()
    direccionEntrega: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    estimacionEntrega: Date;

}
