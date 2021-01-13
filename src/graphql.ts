
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateCardInput {
    name?: string;
    provider?: string;
    type?: string;
}

export interface Card {
    id?: number;
    name?: string;
    provider?: string;
    type?: string;
}

export interface IQuery {
    getCard(id?: number): Card | Promise<Card>;
    getCards(): Card[] | Promise<Card[]>;
}

export interface IMutation {
    createCard(createCardInput?: CreateCardInput): Card | Promise<Card>;
}
