import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsService } from './cards/cards.service';
import { CardsModule } from './cards/cards.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    CardsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: { path: join(process.cwd(), 'src/graphql.ts') },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CardsService],
})
export class AppModule {}
