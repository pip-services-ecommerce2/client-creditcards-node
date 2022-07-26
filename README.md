# <img src="https://github.com/pip-services/pip-services/raw/master/design/Logo.png" alt="Pip.Services Logo" style="max-width:30%"> <br/> Credit Cards Microservice Client SDK for Node.js

This is a Node.js client SDK for [service-creditcards](https://github.com/ip-services-ecommerce2/service-creditcards) microservice.
It provides an easy to use abstraction over communication protocols:

* Direct client
* HTTP client
* Seneca client (see http://www.senecajs.org)
* AWS Lambda client (see https://aws.amazon.com/lambda)

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-creditcards-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-creditcards-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.CreditCardsHttpClientV1(config);

// Connect to the microservice
await client.open(null);

// Work with the microservice
    ...
```

Now the client is ready to perform operations
```javascript
// Create a new credit_card
let credit_card = {
    customer_id: '1',
    type: 'visa',
    number: '1111111111111111',
    expire_month: 1,
    expire_year: 2021,
    first_name: 'Bill',
    last_name: 'Gates',
    billing_address: {
        line1: '2345 Swan Rd',
        city: 'Tucson',
        zip: '85710',
        country_code: 'US'
    },
    cvc: '213',
    name: 'Test Card 1',
    saved: true,
    default: true,
    state: 'ok'
};

credit_card = await client.createCreditCard(
    null,
    credit_card
);
```

```javascript
// Get the list of credit_cards on 'time management' topic
let page = await client.getCreditCards(
    null,
    {
        customer_id: '1',
        state: 'ok'
    },
    {
        total: true,
        skip: 0,
        take: 10
    }   
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

