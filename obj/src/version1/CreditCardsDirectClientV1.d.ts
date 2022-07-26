import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { ICreditCardsClientV1 } from './ICreditCardsClientV1';
import { CreditCardV1 } from './CreditCardV1';
export declare class CreditCardsDirectClientV1 extends DirectClient<any> implements ICreditCardsClientV1 {
    constructor();
    getCreditCards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<CreditCardV1>>;
    getCreditCardById(correlationId: string, cardId: string, customerId: string): Promise<CreditCardV1>;
    createCreditCard(correlationId: string, card: CreditCardV1): Promise<CreditCardV1>;
    updateCreditCard(correlationId: string, card: CreditCardV1): Promise<CreditCardV1>;
    deleteCreditCardById(correlationId: string, cardId: string, customerId: string): Promise<CreditCardV1>;
}
