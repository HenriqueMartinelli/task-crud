import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    title: string = '';

    @Column()
    description: string = '';

    @Column({ default: 'pending' })
    status: 'pending' | 'in progress' | 'done' = 'pending';

    @Column({ type: 'text' })
    createdAt: string;

    constructor() {
        this.createdAt = new Date().toISOString();  // Inicializa a data de criação no construtor
    }

    @BeforeInsert()
    setCreatedAt() {
        this.createdAt = new Date().toISOString();  
    }
}
