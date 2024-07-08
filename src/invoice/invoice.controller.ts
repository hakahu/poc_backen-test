import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.interface';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  async create(@Body() invoice: Invoice): Promise<Invoice> {
    return this.invoiceService.createInvoice(invoice);
  }

  @Get()
  async findAll(): Promise<Invoice[]> {
    return this.invoiceService.getAllInvoices();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Invoice> {
    return this.invoiceService.getInvoiceById(id);
  }
}
