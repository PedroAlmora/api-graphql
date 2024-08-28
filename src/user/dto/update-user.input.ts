import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
    @Field({ description: 'ID of the user to update' })
    id: string;
}
