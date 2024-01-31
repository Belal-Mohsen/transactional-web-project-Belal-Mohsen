UnBox Holidays API Documentation

Endpoint: /api/box/allboxes

Overview

UnBox Holidays introduces the /api/box/allboxes endpoint, designed to provide basic information about our holiday box products while ensuring customer data confidentiality.

Endpoint Details

Purpose: Retrieves names and prices of all boxes in our catalog.

Data Format: JSON

Response Example:

{
"success": true,
"data": [
{ "name": "Thanksgiving", "price": 99 },
{ "name": "New Year", "price": 99 },
{ "name": "Christmas", "price": 99 },
{ "name": "Easter", "price": 99 }
]
}
