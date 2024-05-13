# Data Integrasi API Spec

### Get Data Integration

Endpoint : GET /api/data_integration

Request Header :

- Authorization: "29sjdas91jksadn92nsasdo92nas92ndsa82"

Reponse Body (Success) :

```
{
	"message": "Success",
	"data": {
			"OrganizationId": "550e8400-e29b-41d4-a716-446655440000",
			"api_key": "29sjdas91jksadn92nsasdo92nas92ndsa82"
		}
}
```

Response Body (Failed) :

```
{
	"error": "unauthorized"
}
```

### Create Data Integration

Endpoint : POST /api/data_integration

Request Header :

- Authorization: "29sjdas91jksadn92nsasdo92nas92ndsa82"

Reponse Body (Success) :

```
{
	"message": "Success",
	"data": {
			"OrganizationId": "550e8400-e29b-41d4-a716-446655440000",
			"api_key": "29sjdas91jksadn92nsasdo92nas92ndsa82"
		}
}
```

Response Body (Failed) :

```
{
	"error": "unauthorized"
}
```
