import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TestModule, NinjasModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
