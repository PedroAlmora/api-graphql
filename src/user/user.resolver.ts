import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Mutation(() => User, {
        description: `
      Create a new user.
      Example input:
      {
        "username": "johndoe123",
        "name": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "faceDescriptors": ["descriptor1", "descriptor2"]
      }
    `
    })
    async createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
        return this.userService.create(createUserInput);
    }

    @Query(() => [User], {
        description: 'Get all users.'
    })
    async users(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Query(() => User, {
        description: `
      Get a user by ID.
      Example query:
      {
        user(id: "user-uuid") {
          id,
          username,
          email
        }
      }
    `
    })
    async user(@Args('id', { description: 'ID of the user. Example: "user-uuid"' }) id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Mutation(() => User, {
        description: `
      Update an existing user.
      Example input:
      {
        "id": "user-uuid",
        "username": "newusername",
        "name": "New Name",
        "lastname": "New Lastname",
        "email": "new.email@example.com",
        "faceDescriptors": ["newDescriptor1", "newDescriptor2"]
      }
    `
    })
    async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput): Promise<User> {
        return this.userService.update(updateUserInput.id, updateUserInput);
    }

    @Mutation(() => Boolean, {
        description: `
      Delete a user by ID.
      Example input:
      {
        "id": "user-uuid"
      }
    `
    })
    async removeUser(@Args('id', { description: 'ID of the user to delete. Example: "user-uuid"' }) id: string): Promise<boolean> {
        return this.userService.remove(id);
    }
}
