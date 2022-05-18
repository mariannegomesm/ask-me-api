import { Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { CommentsEntity } from "src/comments/comments.entity";

@Entity()

export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column("text")
    name: string;

    @ApiProperty()
    @Column("text")
    email: string;

    @ApiProperty()
    @Column("text")
    password: string;

    @ApiProperty()
    @Column()
    isAdmin: boolean;

    @ApiProperty()
    @Column("text")
    photo: string;

    @OneToMany(() => CommentsEntity, comment => comment.user)
    comments: CommentsEntity[];
}