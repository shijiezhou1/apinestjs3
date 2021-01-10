import { Controller, Get } from '@nestjs/common';
import Parser from 'rss-parser';

@Controller('medium')
export class MediumController {
    @Get()
    async getRss() {
        const parser = new Parser();
        const feed = await parser.parseURL("https://medium.com/feed/@jay315");
        return feed.items;
    }
}
