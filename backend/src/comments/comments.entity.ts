import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class CommentsEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    message: string;

    @Column("text")
    author: string;
}