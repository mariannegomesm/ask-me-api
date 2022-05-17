import { UserEntity } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class CommentsEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    message: string;

    @ManyToOne(() => UserEntity, user => user.comments)
    user: UserEntity;
}