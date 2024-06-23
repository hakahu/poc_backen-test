import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './user-login/user-login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { SignupModule } from './user-signup/user-signup.module';

@Module({
  imports: [LoginModule, SignupModule, MongooseModule.forRoot('mongodb+srv://backend-test:Test123@backend-test.dayvnzs.mongodb.net/'), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}