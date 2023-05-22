import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees') // http://localhost:3000/coffees
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  // @Get('flavors') // http://localhost:3000/coffees/flavors
  // findAll() {
  //   return 'This action returns all coffees';
  // }

  @Get() // http://localhost:3000/coffees?limit=20&offset=10
  query(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
    return this.coffeesService.findAll();
  }

  @Get(':id') // http://localhost:3000/coffees/123
  findOne(@Param('id') id: number) {
    // return `This action returns #${id} coffee`;
    console.log(typeof id);
    return this.coffeesService.findOne('' + id);
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    // return body;
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // return `This action updates #${id} coffee`;
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action remove #${id} coffee`;
    return this.coffeesService.remove(id);
  }
}
