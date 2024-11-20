import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
  */
  @Get()
  findAll(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin') {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id };
  }
}
