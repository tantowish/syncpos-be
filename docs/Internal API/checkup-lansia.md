## Checkup Lansia API Spec

### Get List Checkup Lansia

Endpoint : GET /api/checkup/lansia

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
	"umur": "67"
        "berat_badan": 50,
        "tinggi_badan": 169,
        "tekanan_darah": "120/90",
	"denyut_nadi": "70-100",
	"assesment": "100"
	"patient": {
		"nama": "John Doe",
		"jenis_kelamin": "Perempuan"
	}
    },
    {
        "id" : "oasdlnasldna=asdnasdans-12312adsa"
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    	"nik": "3829102049203217",
	"umur": "80"
        "berat_badan": 42,
        "tinggi_badan": 156,
        "tekanan_darah": "130/100",
	"denyut_nadi": "70-110",
	"assesment": "80"
	"patient": {
		"nama": "John Ane",
		"jenis_kelamin": "Laki - laki"
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

### Get Checkup Lansia by UUID

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
	"umur": "80"
        "berat_badan": 42,
        "tinggi_badan": 156,
        "tekanan_darah": "130/100",
	"denyut_nadi": "70-110",
	"assesment": "80"
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

### Post Checkup Lansia

Endpoint : POST /api/checkup/lansia

Request Header :

- Authorization : "Bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Request Body :

```
{
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    	"nik": "3829102049203217",
	"umur": "80"
        "berat_badan": 42,
        "tinggi_badan": 156,
        "tekanan_darah": "130/100",
	"denyut_nadi": "70-110",
	"assesment": "80"
}
```

Response Body (Success) :

```
{
  "message" : "Success",
  "data" : {
        "id" : "oasdlnasldna=asdnasdans-12312adsa"
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    	"nik": "3829102049203217",
	"umur": "80"
        "berat_badan": 42,
        "tinggi_badan": 156,
        "tekanan_darah": "130/100",
	"denyut_nadi": "70-110",
	"assesment": "80"
}
```

Response Body (Failed) :

```
  "message" : "field {...} is required"
```

### Update Checkup Lansia

Endpoint : PUT /api/checkup/lansia/:uuid

Request Header :

- Authorization : "Bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Request Body :

```
{
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    	"nik": "3829102049203217",
	"umur": "80"
        "berat_badan": 42,
        "tinggi_badan": 156,
        "tekanan_darah": "130/100",
	"denyut_nadi": "70-110",
	"assesment": "80"
}
```

Response Body (Success) :

```
{
  "message" : "Success",
  "data" : {
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    	"nik": "3829102049203217",
	"umur": "80"
        "berat_badan": 42,
        "tinggi_badan": 156,
        "tekanan_darah": "130/100",
	"denyut_nadi": "70-110",
	"assesment": "80"
  }
```

Response Body (Failed) :

```
  "message" : "Checkup not found"
```

### Delete Checkup Lansia

Endpoint : DELETE /api/checkup/lansia/:uuid

Request Header :

- Authorization : "Bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Response Body (Success) :

```
  "message" : "Success",
  "data" : {
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    	"nik": "3829102049203217",
	"umur": "80"
        "berat_badan": 42,
        "tinggi_badan": 156,
        "tekanan_darah": "130/100",
	"denyut_nadi": "70-110",
	"assesment": "80"
  }
```

Response Body (Failed) :

```
  "message" : "Checkup not found"
```
