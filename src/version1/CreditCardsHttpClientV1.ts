import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { CreditCardV1 } from './CreditCardV1';
import { ICreditCardsClientV1 } from './ICreditCardsClientV1';

export class CreditCardsHttpClientV1 extends CommandableHttpClient implements ICreditCardsClientV1 {       
    
    constructor(config?: any) {
        super('v1/credit_cards');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getCreditCards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<CreditCardV1>> {
        let timing = this.instrument(correlationId, 'credit_cards.get_credit_cards');

        try {
            return await this.callCommand(
                'get_credit_cards',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getCreditCardById(correlationId: string, cardId: string, customerId: string): Promise<CreditCardV1> {
        let timing = this.instrument(correlationId, 'credit_cards.get_credit_card_by_id');

        try {
            return await this.callCommand(
                'get_credit_card_by_id',
                correlationId,
                {
                    card_id: cardId,
                    customer_id: customerId
                }
            );   
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }     
    }

    public async createCreditCard(correlationId: string, card: CreditCardV1): Promise<CreditCardV1> {
        let timing = this.instrument(correlationId, 'credit_cards.create_credit_card');

        try {
            return await this.callCommand(
                'create_credit_card',
                correlationId,
                {
                    card: card
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateCreditCard(correlationId: string, card: CreditCardV1): Promise<CreditCardV1> {
        let timing = this.instrument(correlationId, 'credit_cards.update_credit_card');

        try {
            return await this.callCommand(
                'update_credit_card',
                correlationId,
                {
                    card: card
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteCreditCardById(correlationId: string, cardId: string, customerId: string): Promise<CreditCardV1> {
        let timing = this.instrument(correlationId, 'credit_cards.delete_credit_card_by_id');

        try {
            return await this.callCommand(
                'delete_credit_card_by_id',
                correlationId,
                {
                    card_id: cardId,
                    customer_id: customerId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
