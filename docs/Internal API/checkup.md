# Data Integrasi API Spec

### Get Data Checkup

Endpoint : GET /api/checkup

Request Header :

- Authorization : "bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Request Query :

- nik : "9384521232142348" (optional)
- status : "balita" / "lansia" (optional)

Response Body (Success) :

```
{
  "message": "Success",
  "data": [
    {
      "nik": "3829102049203217",
      "nama": "verlino rf",
      "jenis_kelamin": "laki-laki",
      "status": "balita",
      histori: {
        "id" : "oasdlnasldna=asdnasdans-12312adsa"
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
        "berat_badan": 60.5,
        "tinggi_badan": 175,
        "lingkar_kepala": 10
      }
    },
    {
      "nik": "3829102049203217",
      "nama": "praneta dwi indarti",
      "jenis_kelamin": "perempuan",
      "status": "lansia",
      histori: {
        "id" : "oasdlnasldna=asdnasdans-12312adsa"
        "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
        "berat_badan": 60.5,
        "tinggi_badan": 175,
        "tekanan_darah": "50",
        "denyut_nadi": "50",
        "assesment": "70",
      }
    },
  ]
}
```

Response Body (Failed) :

```
{
  "error": "failed to fetch data"
}
```

### Get Data Checkup by UUID

Endpoint : GET /api/checkup/:uuid

Request Header :

- Authorization : "bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Response Body (Success) :

```
{
  "message": "Success",
  "data": {
    "nik": "3829102049203217",
    "nama": "verlino rf",
    "jenis_kelamin": "laki-laki",
    "status": "balita",
    histori: {
      "id" : :uuid
      "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
      "berat_badan": 60.5,
      "tinggi_badan": 175,
      "lingkar_kepala": 10
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
  "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
  "nik": "3829102049203217",
  "berat_badan": 60.5,
  "tinggi_badan": 175,
  "lingkar_kepala": 10
```

Response Body (Success) :

```
  "message" : "Success",
  "data" : {
    "id" : "oasdlnasldna=asdnasdans-12312adsa",
    "nik": "3829102049203217",
    "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    "berat_badan": 60.5,
    "tinggi_badan": 175,
    "lingkar_kepala": 10
  }
```

Response Body (Failed) :

```
  "message" : "field {...} is required"
```

### Post Checkup Lansia

Endpoint : POST /api/checkup/balita

Request Header :

- Authorization : "Bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Request Body :

```
  "nik": "3829102049203217",
  "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
  "berat_badan": 60.5,
  "tinggi_badan": 175,
  "tekanan_darah": "50",
  "denyut_nadi": "50",
  "assesment": "70",
```

Response Body (Success) :

```
  "message" : "Success",
  "data" : {
    "id" : "oasdlnasldna=asdnasdans-12312adsa",
    "nik": "3829102049203217",
    "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    "berat_badan": 60.5,
    "tinggi_badan": 175,
    "tekanan_darah": "50",
    "denyut_nadi": "50",
    "assesment": "70",
  }
```

Response Body (Failed) :

```
  "message" : "field {...} is required"
```

### Update Checkup Balita

Endpoint : PATCH /api/checkup/balita/:uuid

Request Header :

- Authorization : "Bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Request Body :

```
  "nik": "3829102049203217",
  "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
  "berat_badan": 60.5,
  "tinggi_badan": 175,
  "lingkar_kepala": 10
```

Response Body (Success) :

```
  "message" : "Success",
  "data" : {
    "id" : :uuid,
    "nik": "3829102049203217",
    "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    "berat_badan": 60.5,
    "tinggi_badan": 175,
    "lingkar_kepala": 10
  }
```

Response Body (Failed) :

```
  "message" : "Checkup not found"
```

### Update Checkup Lansia

Endpoint : PATCH /api/checkup/lansia/:uuid

Request Header :

- Authorization : "Bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Request Body :

```
  "nik": "3829102049203217",
  "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
  "berat_badan": 60.5,
  "tinggi_badan": 175,
  "tekanan_darah": "50",
  "denyut_nadi": "50",
  "assesment": "70",
```

Response Body (Success) :

```
  "message" : "Success",
  "data" : {
    "id" : :uuid,
    "nik": "3829102049203217",
    "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    "berat_badan": 60.5,
    "tinggi_badan": 175,
    "tekanan_darah": "50",
    "denyut_nadi": "50",
    "assesment": "70",
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
    "berat_badan": 60.5,
    "tinggi_badan": 175,
    "lingkar_kepala": 10
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

Request Body :

Response Body (Success) :

```
  "message" : "Success",
  "data" : {
    "id" : :uuid,
    "nik": "3829102049203217",
    "fasyankes_id": "550e8400-e29b-41d4-a716-446655440000",
    "berat_badan": 60.5,
    "tinggi_badan": 175,
    "tekanan_darah": "50",
    "denyut_nadi": "50",
    "assesment": "70",
  }
```

Response Body (Failed) :

```
  "message" : "Checkup not found"
```
