# Fasyankes API Spec

### Create Fasyankes

Endpoint : POST /api/fasyankes


Request Header :

- OrganizationId : "550e8400-e29b-41d4-a716-446655440000"
- Api_key : "29sjdas91jksadn92nsasdo92nas92ndsa82"

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
