import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.model';

/**
 * Import and provide user configuration related classes.
 *
 * @module
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: User }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
