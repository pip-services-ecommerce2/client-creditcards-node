import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';
import { CreditCardV1 } from './CreditCardV1';
import { ICreditCardsClientV1 } from './ICreditCardsClientV1';
export declare class CreditCardsLambdaClientV1 extends CommandableLambdaClient implements ICreditCardsClientV1 {
    constructor(config?: any);
    getCreditCards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<CreditCardV1>>;
    getCreditCardById(correlationId: string, cardId: string, customerId: string): Promise<CreditCardV1>;
    createCreditCard(correlationId: string, card: CreditCardV1): Promise<CreditCardV1>;
    updateCreditCard(correlationId: string, card: CreditCardV1): Promise<CreditCardV1>;
    deleteCreditCardById(correlationId: string, cardId: string, customerId: string): Promise<CreditCardV1>;
}
