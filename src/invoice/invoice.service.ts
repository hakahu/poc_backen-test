import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from './invoice.interface';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel('Invoice') private readonly invoiceModel: Model<Invoice>,
  ) {}

  async createInvoice(Invoice: Invoice): Promise<Invoice> {
    const newInvoice = new this.invoiceModel(Invoice);
    return newInvoice.save();
  }

  async getAllInvoices(): Promise<Invoice[]> {
    return this.invoiceModel.find().exec();
  }

  async getInvoiceById(id: string): Promise<Invoice> {
    return this.invoiceModel.findById(id).exec();
  }
}
