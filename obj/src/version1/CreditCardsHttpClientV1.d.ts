import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { CreditCardV1 } from './CreditCardV1';
import { ICreditCardsClientV1 } from './ICreditCardsClientV1';
export declare class CreditCardsHttpClientV1 extends CommandableHttpClient implements ICreditCardsClientV1 {
    constructor(config?: any);
    getCreditCards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<CreditCardV1>>;
    getCreditCardById(correlationId: string, cardId: string, customerId: string): Promise<CreditCardV1>;
    createCreditCard(correlationId: string, card: CreditCardV1): Promise<CreditCardV1>;
    updateCreditCard(correlationId: string, card: CreditCardV1): Promise<CreditCardV1>;
    deleteCreditCardById(correlationId: string, cardId: string, customerId: string): Promise<CreditCardV1>;
}
