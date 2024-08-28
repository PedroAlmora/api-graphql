import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async create(createUserInput: CreateUserInput): Promise<User> {
        const user = this.userRepository.create(createUserInput);
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: string): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
        await this.userRepository.update(id, updateUserInput);
        return this.userRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<boolean> {
        const result = await this.userRepository.delete(id);
        return result.affected > 0;
    }
}
