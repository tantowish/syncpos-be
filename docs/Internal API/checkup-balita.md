## Checkup Balita API Spec

### Get List Checkup Balita

Endpoint : GET /api/checkup/balita

Request Header :

- Authorization : "bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Response Body (Success) :

```
{
  "message": "Success",
  "data": [
    {
        "id" : "oasdlnasldna=asdnasdans-12312adsa"
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    	"nik": "3829102049203217",
	"umur": "12"
        "berat_badan": 22,
        "tinggi_badan": 50,
        "lingkar_kepala": 35,
	"patient": {
		"nama": "John Doe",
		"jenis_kelamin": "Perempuan"
	}
    },
    {
        "id" : "oasdlnasldna=asdnasdans-12312adsa"
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    	"nik": "3829102049203217",
	"umur": "14"
        "berat_badan": 19,
        "tinggi_badan": 62,
        "lingkar_kepala": 30,
	"patient": {
		"nama": "John Cena",
		"jenis_kelamin": "Laki - Laki"
	}
    }
  ]
}
```

Response Body (Failed) :

```
{
  "error": "failed to fetch data"
}
```

### Get Checkup Balita by UUID

Endpoint : GET /api/checkup/:uuid

Request Header :

- Authorization : "bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Response Body (Success) :

```
{
  "message": "Success",
  "data": {
        "id" : "oasdlnasldna=asdnasdans-12312adsa"
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    	"nik": "3829102049203217",
	"umur": "14"
        "berat_badan": 19,
        "tinggi_badan": 62,
        "lingkar_kepala": 30,
	"patient": {
		"nama": "John Cena",
		"jenis_kelamin": "Laki - Laki",
		"alamat": "JLN merdeka",
		"tanggal_lahir": "2003-07-07",
	}
  }
}
```

Response Body (Failed) :

```
{
  "error": "failed to fetch data"
}
```

### Post Checkup Balita

Endpoint : POST /api/checkup/balita

Request Header :

- Authorization : "Bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Request Body :

```
{
 	"fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
	"nik": "3829102049203217",
	"umur": 15,
  	"berat_badan": 32,
  	"tinggi_badan": 70,
  	"lingkar_kepala": 43
}
```

Response Body (Success) :

```
{  
  "message" : "Success",
  "data" : {
    "id" : "oasdlnasldna=asdnasdans-12312adsa",
    "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    "nik": "3829102049203217",
    "umur": 15
    "berat_badan": 32,
    "tinggi_badan": 70,
    "lingkar_kepala": 43
}
```

Response Body (Failed) :

```
  "message" : "field {...} is required"
```

### Update Checkup Balita

Endpoint : PUT /api/checkup/balita/:uuid

Request Header :

- Authorization : "Bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Request Body :

```
{
  "umur": 13
  "berat_badan": 20,
  "tinggi_badan": 50,
  "lingkar_kepala": 34
}
```

Response Body (Success) :

```
{
  "message" : "Success",
  "data" : {
    "id" : :uuid,
    "nik": "3829102049203217",
    "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    "umur": 13
    "berat_badan": 20,
    "tinggi_badan": 50,
    "lingkar_kepala": 34
  }
```

Response Body (Failed) :

```
  "message" : "Checkup not found"
```


### Delete Checkup Balita

Endpoint : DELETE /api/checkup/balita/:uuid

Request Header :

- Authorization : "Bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Response Body (Success) :

```
  "message" : "Success",
  "data" : {
    "id" : :uuid,
    "nik": "3829102049203217",
    "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    "umur": 13
    "berat_badan": 20,
    "tinggi_badan": 50,
    "lingkar_kepala": 34
  }
```

Response Body (Failed) :

```
  "message" : "Checkup not found"
```
