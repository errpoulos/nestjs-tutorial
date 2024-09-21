import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getOneNinja() {
    return {};
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: CreateNinjaDto.name;
    };
  }
}
