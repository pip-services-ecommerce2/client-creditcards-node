"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardsHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class CreditCardsHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/credit_cards');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getCreditCards(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'credit_cards.get_credit_cards');
            try {
                return yield this.callCommand('get_credit_cards', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getCreditCardById(correlationId, cardId, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'credit_cards.get_credit_card_by_id');
            try {
                return yield this.callCommand('get_credit_card_by_id', correlationId, {
                    card_id: cardId,
                    customer_id: customerId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createCreditCard(correlationId, card) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'credit_cards.create_credit_card');
            try {
                return yield this.callCommand('create_credit_card', correlationId, {
                    card: card
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateCreditCard(correlationId, card) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'credit_cards.update_credit_card');
            try {
                return yield this.callCommand('update_credit_card', correlationId, {
                    card: card
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteCreditCardById(correlationId, cardId, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'credit_cards.delete_credit_card_by_id');
            try {
                return yield this.callCommand('delete_credit_card_by_id', correlationId, {
                    card_id: cardId,
                    customer_id: customerId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.CreditCardsHttpClientV1 = CreditCardsHttpClientV1;
//# sourceMappingURL=CreditCardsHttpClientV1.js.map