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
exports.CreditCardsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class CreditCardsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor("service-creditcards", "controller", "*", "*", "*"));
    }
    getCreditCards(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'credit_cards.get_credit_cards');
            try {
                return yield this._controller.getCreditCards(correlationId, filter, paging);
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
                return yield this._controller.getCreditCardById(correlationId, cardId, customerId);
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
                return yield this._controller.createCreditCard(correlationId, card);
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
                return yield this._controller.updateCreditCard(correlationId, card);
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
                return yield this._controller.deleteCreditCardById(correlationId, cardId, customerId);
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
exports.CreditCardsDirectClientV1 = CreditCardsDirectClientV1;
//# sourceMappingURL=CreditCardsDirectClientV1.js.map