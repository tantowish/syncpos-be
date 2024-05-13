# Fasyankes Account API Spec

### Register Account Fasyankes

Endpoint : POST /api/fasyankes/register

Request Body :

```
{
	"email": "toshka@toshka.com",
	"password": "123",
	"nama": "Klinik Toshka",
	"alamat": "JLN Merdeka LK VII",
	"provinsi": "Daerah Istimewa Yogyakarta",
	"kabupaten": "Sleman",
	"kecamatan": "Catur Tunggal",
	"kelurahan": "Bulaksumur",
	"no_telp": "08127882312382"
}
```

Response Body (Success) :

```
{
	"message": "Success",
	"data": {
		"id": "550e8400-e29b-41d4-a716-446655440000"
		"email": "toshka@toshka.com",
		"password": "123",
		"nama": "Klinik Toshka",
		"alamat": "JLN Merdeka LK VII",
		"provinsi": "Daerah Istimewa Yogyakarta",
		"kabupaten": "Sleman",
		"kecamatan": "Catur Tunggal",
		"kelurahan": "Bulaksumur",
		"no_telp": "08127882312382"
	}
}
```

Response Body (Failed) :

```
{
	"error": "unauthorized"
}
```

### Login Fasyankes

Endpoint : POST /api/fasyankes/login

Request Body :

```
{
	"email": "toshka@toshka.com",
	"password": "123"
}
```

Response Body (Success) :

```
{
	"message": "Success",
	"data": {
		"id": "550e8400-e29b-41d4-a716-446655440000"
		"email": "toshka@toshka.com",
		"password": "123",
		"nama": "Klinik Toshka",
		"alamat": "JLN Merdeka LK VII",
		"provinsi": "Daerah Istimewa Yogyakarta",
		"kabupaten": "Sleman",
		"kecamatan": "Catur Tunggal",
		"kelurahan": "Bulaksumur",
		"no_telp": "08127882312382"
	},
	"token": {
		"api_key": "sadlaskoiwjq9jasdiasdaosdijoiwq-asodjasodjiovsao"
	}
}
```

Response Body (Failed) :

```
{
	"error": "unauthorized"
}
```

### Get Fasyankes

Endpoint : POST /api/fasyankes/:uuid

Request Header :

- Authorization: "bearer 29sjdas91jksadn92nsasdo92nas92ndsa82"

Response Body (Success) :

```
{
	"message": "Success",
	"data": {
		"id": "550e8400-e29b-41d4-a716-446655440000"
		"email": "toshka@toshka.com",
		"password": "123",
		"nama": "Klinik Toshka",
		"alamat": "JLN Merdeka LK VII",
		"provinsi": "Daerah Istimewa Yogyakarta",
		"kabupaten": "Sleman",
		"kecamatan": "Catur Tunggal",
		"kelurahan": "Bulaksumur",
		"no_telp": "08127882312382"
	}
}
```

Response Body (Failed) :

```
{
	"error": "unauthorized"
}
```

### Update Account Fasyankes

Endpoint : PATCH /api/fasyankes/:uuid

Request Body :

```
{
	"nama": "Klinik Toshka Edit",
	"alamat": "JLN Merdeka LK VII Edit",
}
```

Response Body (Success) :

```
{
	"message": "Success",
	"data": {
		"id": "550e8400-e29b-41d4-a716-446655440000"
		"email": "toshka@toshka.com",
		"password": "123",
		"nama": "Klinik Toshka Edit",
		"alamat": "JLN Merdeka LK VII Edit",
		"provinsi": "Daerah Istimewa Yogyakarta",
		"kabupaten": "Sleman",
		"kecamatan": "Catur Tunggal",
		"kelurahan": "Bulaksumur",
		"no_telp": "08127882312382"
	}
}
```

Response Body (Failed) :

```
{
	"error": "unauthorized"
}
```
