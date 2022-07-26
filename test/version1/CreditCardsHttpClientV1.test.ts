import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { CreditCardsMemoryPersistence } from 'service-creditcards-node';
import { CreditCardsController } from 'service-creditcards-node';

import { CreditCardsHttpServiceV1 } from 'service-creditcards-node';
import { CreditCardsHttpClientV1 } from '../../src/version1/CreditCardsHttpClientV1';
import { CreditCardsClientFixtureV1 } from './CreditCardsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('CreditCardsRestClientV1', ()=> {
    let service: CreditCardsHttpServiceV1;
    let client: CreditCardsHttpClientV1;
    let fixture: CreditCardsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new CreditCardsMemoryPersistence();
        let controller = new CreditCardsController();

        service = new CreditCardsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-creditcards', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-creditcards', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-creditcards', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new CreditCardsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new CreditCardsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
