import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType() // Marca esta clase como un tipo GraphQL
@Entity({ name: 'user' })
export class User {
    @Field(() => ID, { description: 'Unique identifier for the user' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field({ description: 'Username of the user' })
    @Column({ unique: true })
    username: string;

    @Field({ description: 'First name of the user' })
    @Column()
    name: string;

    @Field({ description: 'Last name of the user' })
    @Column()
    lastname: string;

    @Field({ description: 'Email of the user' })
    @Column({ unique: true })
    email: string;

    @Field(() => [String], { description: 'Array of face descriptors' })
    @Column('bytea', { array: true })
    faceDescriptors: Buffer[];
}
