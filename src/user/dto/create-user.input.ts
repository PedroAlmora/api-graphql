import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
    @Field({ description: 'Username of the new user' })
    username: string;

    @Field({ description: 'First name of the new user' })
    name: string;

    @Field({ description: 'Last name of the new user' })
    lastname: string;

    @Field({ description: 'Email of the new user' })
    email: string;

    @Field(() => [String], { description: 'Array of face descriptors for the new user' })
    faceDescriptors: Buffer[];
}
