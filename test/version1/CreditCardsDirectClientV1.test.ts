import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { CreditCardsMemoryPersistence } from 'service-creditcards-node';
import { CreditCardsController } from 'service-creditcards-node';
import { CreditCardsDirectClientV1 } from '../../src/version1/CreditCardsDirectClientV1';
import { CreditCardsClientFixtureV1 } from './CreditCardsClientFixtureV1';

suite('CreditCardsDirectClientV1', ()=> {
    let client: CreditCardsDirectClientV1;
    let fixture: CreditCardsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new CreditCardsMemoryPersistence();
        let controller = new CreditCardsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-creditcards', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-creditcards', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new CreditCardsDirectClientV1();
        client.setReferences(references);

        fixture = new CreditCardsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
