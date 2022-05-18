import { UserEntity } from "src/users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class CommentsEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    message: string;

    @Column("text")
    photo: string;

    @Column("text")
    data: string;

    @ManyToOne(() => UserEntity, user => user.comments)
    @JoinColumn()
    user: UserEntity;
}