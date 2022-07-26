import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { ICreditCardsClientV1 } from './ICreditCardsClientV1';
import { CreditCardV1 } from './CreditCardV1';

export class CreditCardsDirectClientV1 extends DirectClient<any> implements ICreditCardsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-creditcards", "controller", "*", "*", "*"))
    }

    public async getCreditCards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<CreditCardV1>> {
        let timing = this.instrument(correlationId, 'credit_cards.get_credit_cards');
        
        try {
            return await this._controller.getCreditCards(correlationId, filter, paging);
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
            return await this._controller.getCreditCardById(correlationId, cardId, customerId);
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
            return await this._controller.createCreditCard(correlationId, card);
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
            return await this._controller.updateCreditCard(correlationId, card);
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
            return await this._controller.deleteCreditCardById(correlationId, cardId, customerId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}