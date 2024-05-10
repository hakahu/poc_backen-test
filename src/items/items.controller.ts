import { Body, Controller, Post, Get } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemSchema } from './items.entity';

@Controller('items')
export class ItemsController {

    constructor(private itemService: ItemsService) {}

    @Post()
    async createItemSchema(@Body() itemData: typeof ItemSchema): Promise<typeof ItemSchema> {
        return this.itemService.createItemSchema(itemData);
    }

    @Get()
    async getAllItems(): Promise<typeof ItemSchema[]> {
        return this.itemService.getAllItems();
    }

        // @Get(':id')
    // async getItem(@Param('_id') id: string): Promise<ItemsData> {
    //     return this.itemsDataService.getItem(id);
    // }
}
