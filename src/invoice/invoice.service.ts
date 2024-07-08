import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from './invoice.interface';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel('Invoice') private readonly invoiceModel: Model<Invoice>,
  ) {}

  async createInvoice(invoice: Invoice): Promise<Invoice> {
    const newInvoice = new this.invoiceModel(invoice);
    return newInvoice.save();
  }

  async getAllInvoices(): Promise<Invoice[]> {
    return this.invoiceModel.find().exec();
  }

  async getInvoiceById(id: string): Promise<Invoice> {
    return this.invoiceModel.findById(id).exec();
  }

  async deleteInvoice(id: string): Promise<Invoice> {
    return this.invoiceModel.findByIdAndDelete(id).exec();
  }

  async updateInvoice(
    id: string,
    updateData: Partial<Invoice>,
  ): Promise<Invoice> {
    return this.invoiceModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }
}
