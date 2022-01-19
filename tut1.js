// INSERTING DATA IN MONGO DB
use ronnyKart
db.items.insertOne({name:"Samsung", price: 22000, rating: 4.5})
db.items.insertMany([{name:"Samsung", price: 22000, rating: 4.5},{name:"Moto", price: 33000, rating: 5}])