# Data Integrasi API Spec

### Get Data Checkup

Endpoint : GET /api/checkup

Request Header :

- Api_key : "29sjdas91jksadn92nsasdo92nas92ndsa82"

Request Param :

- nik : "1312543234234" (optional)
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

- Api_key : "29sjdas91jksadn92nsasdo92nas92ndsa82"

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
