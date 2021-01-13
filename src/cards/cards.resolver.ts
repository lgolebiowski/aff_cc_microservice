import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { CreateCardInput, Card } from 'src/graphql';
import { CardsService } from './cards.service';

@Resolver('Card')
export class CardsResolver {
  constructor(private cardsService: CardsService) {}

  @Query()
  async getCards() {
    return this.cardsService.findAll();
  }

  @Query('getCard')
  async findOneById(
    @Args('id')
    id: number,
  ): Promise<Card> {
    return this.cardsService.findOneById(id);
  }

  @Mutation('createCard')
  async create(@Args('createCardInput') args: CreateCardInput): Promise<Card> {
    const createdCard = await this.cardsService.create(args);
    return createdCard;
  }
}
