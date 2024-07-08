import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.interface';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  async createInvoice(@Body() invoice: Invoice): Promise<Invoice> {
    console.log('Create new Invoice...');
    return this.invoiceService.createInvoice(invoice);
  }

  @Get()
  async getAllInvoices(): Promise<Invoice[]> {
    console.log('Try to get Invoices...');
    return this.invoiceService.getAllInvoices();
  }

  @Get('single')
  async getInvoiceById(@Query('id') id: string): Promise<Invoice> {
    console.log('Try to get Invoice by id:', id);
    return this.invoiceService.getInvoiceById(id);
  }

  @Delete()
  async deleteInvoice(@Query('id') id: string): Promise<Invoice> {
    console.log('Try to delete Invoice by id:', id);
    return this.invoiceService.deleteInvoice(id);
  }

  @Patch()
  async updateInvoice(
    @Query('id') id: string,
    @Body() updateData: Partial<Invoice>,
  ): Promise<Invoice> {
    console.log('Try to update Invoice by id:', id, 'with data:', updateData);
    return this.invoiceService.updateInvoice(id, updateData);
  }
}
