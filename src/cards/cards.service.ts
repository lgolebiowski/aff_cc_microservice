import { Injectable } from '@nestjs/common';
import { Card } from 'src/graphql';

@Injectable()
export class CardsService {
  private cards: Card[] = [
    { id: 1, name: 'DBS Test', provider: 'DBS', type: 'Credit Card' },
  ];

  create(card: Card): Card {
    card.id = this.cards.length + 1;
    this.cards.push(card);
    return card;
  }

  findAll(): Card[] {
    return this.cards;
  }

  findOneById(id: number): Card {
    return this.cards.find((card) => card.id === id);
  }
}
