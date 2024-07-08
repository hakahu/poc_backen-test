import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemSchema } from './items.entity';
import { Item } from './items.interface';

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Post()
  async createItem(@Body() itemData: Item): Promise<Item> {
    return this.itemService.createItem(itemData);
  }

  @Get()
  async getAllItems(): Promise<Item[]> {
    console.log('Request to get all Items...');
    return this.itemService.getAllItems();
  }

  @Get('single')
  async getItem(@Query('id') id: string): Promise<Item> {
    console.log('Request to get Item by Id...');
    return this.itemService.getItemById(id);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string): Promise<Item> {
    console.log('Request to delete Item by id: ', id, ' ...');
    return this.itemService.deleteItem(id);
  }

  @Patch(':id')
  async updateItem(
    @Param('id') id: string,
    @Body() updateData: Partial<Item>,
  ): Promise<Item> {
    console.log('Request to update Item by id: ', id, ' ...');
    return this.itemService.updateItem(id, updateData);
  }
}
