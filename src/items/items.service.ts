import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemSchema } from './items.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectModel('Item')
        private readonly itemsModel: Model<typeof ItemSchema>,
    ) {}

    async createItemSchema(itemData: typeof ItemSchema): Promise<typeof ItemSchema> {
        const newItem = new this.itemsModel(itemData);
        return newItem.save();
    }

    async getItem(id: string): Promise<typeof ItemSchema | null> {
        return this.itemsModel.findById(id).exec();
    }

    async getAllItems(): Promise<typeof ItemSchema[]> {
        return this.itemsModel.find().exec();
    }
}
