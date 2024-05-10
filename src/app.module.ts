import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [LoginModule, MongooseModule.forRoot('mongodb+srv://backend-test:Test123@backend-test.dayvnzs.mongodb.net/'), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}