const pagarme = require('pagarme')

const card = {
    card_number: '4111111111111111',
    card_holder_name: 'Morpheus Fishburne',
    card_expiration_date: '0922',
    card_cvv: '123',
  }

  
  // Gerar o hash
 /*
 pagarme.client.connect({ encryption_key: 'sua-api-key' })
 .then(client => client.security.encrypt(card))
 .then(card_hash => console.log(card_hash))
 */
 
 
 // Pagamento

 pagarme.client.connect({ api_key: 'sua-api-key' })
 .then(client => client.transactions.create({
   "amount": 21000,
   "card_number": "4111111111111111",
   "card_cvv": "123",
   "card_expiration_date": "0922",
   "card_holder_name": "Morpheus Fishburne",
   "customer": {
     "external_id": "#3311",
     "name": "Morpheus Fishburne",
     "type": "individual",
     "country": "br",
     "email": "mopheus@nabucodonozor.com",
     "documents": [
       {
         "type": "cpf",
         "number": "30621143049"
       }
     ],
     "phone_numbers": ["+5511999998888", "+5511888889999"],
     "birthday": "1965-01-01"
   },
   "billing": {
     "name": "Trinity Moss",
     "address": {
       "country": "br",
       "state": "sp",
       "city": "Cotia",
       "neighborhood": "Rio Cotia",
       "street": "Rua Matrix",
       "street_number": "9999",
       "zipcode": "06714360"
     }
   },
   "shipping": {
     "name": "Neo Reeves",
     "fee": 1000,
     "delivery_date": "2000-12-21",
     "expedited": true,
     "address": {
       "country": "br",
       "state": "sp",
       "city": "Cotia",
       "neighborhood": "Rio Cotia",
       "street": "Rua Matrix",
       "street_number": "9999",
       "zipcode": "06714360"
     }
   },
   "items": [
     {
       "id": "r123",
       "title": "Vodka das virgens",
       "unit_price": 1000.00,
       "quantity": 1,
       "tangible": true
     },
   ]
 }))
 .then(transaction => console.log(transaction))
 

 
