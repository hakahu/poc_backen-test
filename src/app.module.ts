import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './user-login/user-login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { SignupModule } from './user-signup/user-signup.module';
import { PaymentModule } from './payment/payment.module';
import { UserManagementModule } from './user-management/user-management.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CartModule } from './cart/cart.module';
import { CartService } from './cart/cart.service';
import { InvoiceService } from './invoice/invoice.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://backend-test:Test123@backend-test.dayvnzs.mongodb.net/',
    ),
    ItemsModule,
    PaymentModule,
    UserManagementModule,
    CartModule,
    InvoiceModule,
    LoginModule,
    SignupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
