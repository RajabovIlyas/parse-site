import {Action, Controller, Get, Param, QueryParams, UseAfter, UseBefore, UseInterceptor,} from 'routing-controllers';
import 'reflect-metadata';
import {ParseService} from "./parse-service";
import {Service} from "typedi";

@Controller('/parse')
@Service()
export class ParseController {

    private parseService = new ParseService();

    @Get('/:id')
    getOne (@Param('id') id: number) {
        return 'This action returns user #' + id;
    }


    @Get()
    getAll(@QueryParams() query: {page: string}){
        const { page = '1'} = query;
        return this.parseService.getAll(Number.parseInt(page));
    }
}
