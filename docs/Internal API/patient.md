## Patient API Spec

### Get Data Patient

Endpoint : GET /api/patient/:nik

Request Header :

- Authorization : "bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Response Body (Success) :

```
{
	"message": "Success"
	"data": {
		"nik": "121412432",
		"nama": "John Doe",
		"jenis_kelamin": "Laki - laki",
		"tanggal_lahir": "1956-05-02",
		"alamat": "JLN Merdeka",
		"status": "balita"
	}
}
```

Response Body (Failed) :

```
{
	"error": "nik doesnt exist"
}
```

### Create Data Patient

Endpoint : POST /api/patient/

Request Header :

- Authorization : "bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Request Body :

```
{
	"nik": "121412432",
	"nama": "John Doe",
	"jenis_kelamin": "Laki - laki",
	"tanggal_lahir": "1956-05-02",
	"alamat": "JLN Merdeka",
	"status": "balita"
}
```

Response Body (Success) :

```
{
	"message": "Success"
	"data": {
		"nik": "121412432",
		"nama": "John Doe",
		"jenis_kelamin": "Laki - laki",
		"tanggal_lahir": "1956-05-02",
		"alamat": "JLN Merdeka",
		"status": "balita"
	}
}
```

Response Body (Failed) :

```
{
	"error": "nik doesnt exist"
}
```

### Get Data Patient Checkup History

Endpoint : GET /api/patient/:nik/checkup

Request Header :

- Authorization : "bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Response Body (Success) :

```
{
	"message": "Success"
	"data": {
		"nik": "121412432",
		"nama": "John Doe",
		"jenis_kelamin": "Laki - laki",
		"tanggal_lahir": "1956-05-02",
		"alamat": "JLN Merdeka",
		"status": "balita",
		"checkup": [
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
				"umur": "87"
        			"berat_badan": 50,
        			"tinggi_badan": 158,
        			"tekanan_darah": "120/90",
				"denyut_nadi": "70-100",
				"assesment": "600"
				"patient": {
					"nama": "John Ace",
					"jenis_kelamin": "Laki - laki"
				}
    			},
  		]
	}
}
```

Response Body (Failed) :

```
{
	"error": "nik doesnt exist"
}
```
