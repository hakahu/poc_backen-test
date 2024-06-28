import { Body, Controller, Post, Get, Param, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemSchema } from './items.entity';

@Controller('items')
export class ItemsController {

    constructor(private itemService: ItemsService) {}

    @Post()
    async createItem(@Body() itemData: typeof ItemSchema): Promise<typeof ItemSchema> {
        return this.itemService.createItem(itemData);
    }

    @Get()
    async getAllItems(): Promise<typeof ItemSchema[]> {
        console.log("Request to get all Items.");
        return this.itemService.getAllItems();
    }

    @Get('single')
    async getItem(@Query('id') id: string): Promise<typeof ItemSchema> {
        return this.itemService.getItemById(id);
    }
}
