import axios from 'axios';
import * as cheerio from 'cheerio';
import {IProduct} from "./interface/product.interface";

export class ParseService {

    private async getHtml(url: string){
        const body = await axios.get(url).then(({data}) => data);
        return cheerio.load(body);
    }

    async getAll(){
        const url = 'https://www.simkodent.ru/catalog/zubotekhnicheskaya-laboratoriya/'
        const $ = await this.getHtml(url);
        const array:IProduct[] = [];
        await $('.catalog_block .catalog_item').each((index, element) => {
            array.push({
                url: 'https://www.simkodent.ru' + $(element).find('.dark_link').first().attr('href'),
                name: $(element).find('.dark_link').contents().first().text(),
                img: $(element).find('img').first().attr('src'),
                price: $(element).find('.price_value').contents().first().text(),
                rate: $(element).find('.table-no-border .star-voted').length,
            });

        })
        return array;
    }
}
