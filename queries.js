//product database

db.product.insertMany([
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price":26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    },
    {
        "id": "16",
        "product_name": "Small Soft Chair",
        "product_price": 47.00,
        "product_material": "Cotton",
        "product_color": "teal"
    },
    {
        "id": "17",
        "product_name": "Incredible Metal Car",
        "product_price":36.00,
        "product_material": "Fresh",
        "product_color": "indigo"
    },
    {
        "id": "18",
        "product_name": "Licensed Plastic Bacon",
        "product_price":88.00,
        "product_material": "Steel",
        "product_color": "yellow"
    },
    {
        "id": "19",
        "product_name": "Intelligent Cotton Chips",
        "product_price": 46.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "20",
        "product_name": "Handcrafted Wooden Bacon",
        "product_price": 36.00,
        "product_material": "Concrete",
        "product_color": "lime"
    },
    {
        "id": "21",
        "product_name": "Unbranded Granite Chicken",
        "product_price": 90.00,
        "product_material": "Metal",
        "product_color": "gold"
    },
    {
        "id": "22",
        "product_name": "Ergonomic Soft Hat",
        "product_price": 99.00,
        "product_material": "Rubber",
        "product_color": "black"
    },
    {
        "id": "23",
        "product_name": "Intelligent Steel Pizza",
        "product_price": 95.00,
        "product_material": "Cotton",
        "product_color": "azure"
    },
    {
        "id": "24",
        "product_name": "Tasty Rubber Cheese",
        "product_price":47.00,
        "product_material": "Frozen",
        "product_color": "orchid"
    },
    {
        "id": "25",
        "product_name": "Licensed Steel Car",
        "product_price":20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
    }
])

//1.find all the information about each products

db.product.find({}).pretty({})
// {
//   _id: ObjectId("63faf22833803dfab1d030a4"),
//   id: '1',
//   product_name: 'Intelligent Fresh Chips',
//   product_price: 655,
//   product_material: 'Concrete',
//   product_color: 'mint green'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a5"),
//   id: '2',
//   product_name: 'Practical Fresh Sausages',
//   product_price: 911,
//   product_material: 'Cotton',
//   product_color: 'indigo'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a6"),
//   id: '3',
//   product_name: 'Refined Steel Car',
//   product_price: 690,
//   product_material: 'Rubber',
//   product_color: 'gold'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a7"),
//   id: '4',
//   product_name: 'Gorgeous Plastic Pants',
//   product_price: 492,
//   product_material: 'Soft',
//   product_color: 'plum'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a8"),
//   id: '5',
//   product_name: 'Sleek Cotton Chair',
//   product_price: 33,
//   product_material: 'Fresh',
//   product_color: 'black'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a9"),
//   id: '6',
//   product_name: 'Awesome Wooden Towels',
//   product_price: 474,
//   product_material: 'Plastic',
//   product_color: 'orange'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030aa"),
//   id: '7',
//   product_name: 'Practical Soft Shoes',
//   product_price: 500,
//   product_material: 'Rubber',
//   product_color: 'pink'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ab"),
//   id: '8',
//   product_name: 'Incredible Steel Hat',
//   product_price: 78,
//   product_material: 'Rubber',
//   product_color: 'violet'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ac"),
//   id: '9',
//   product_name: 'Awesome Wooden Ball',
//   product_price: 28,
//   product_material: 'Soft',
//   product_color: 'azure'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ad"),
//   id: '10',
//   product_name: 'Generic Wooden Pizza',
//   product_price: 84,
//   product_material: 'Frozen',
//   product_color: 'indigo'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ae"),
//   id: '11',
//   product_name: 'Unbranded Wooden Cheese',
//   product_price: 26,
//   product_material: 'Soft',
//   product_color: 'black'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030af"),
//   id: '12',
//   product_name: 'Unbranded Plastic Salad',
//   product_price: 89,
//   product_material: 'Wooden',
//   product_color: 'pink'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b0"),
//   id: '13',
//   product_name: 'Gorgeous Cotton Keyboard',
//   product_price: 37,
//   product_material: 'Concrete',
//   product_color: 'sky blue'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b1"),
//   id: '14',
//   product_name: 'Incredible Steel Shirt',
//   product_price: 54,
//   product_material: 'Metal',
//   product_color: 'white'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b2"),
//   id: '15',
//   product_name: 'Ergonomic Cotton Hat',
//   product_price: 43,
//   product_material: 'Rubber',
//   product_color: 'mint green'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b3"),
//   id: '16',
//   product_name: 'Small Soft Chair',
//   product_price: 47,
//   product_material: 'Cotton',
//   product_color: 'teal'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b4"),
//   id: '17',
//   product_name: 'Incredible Metal Car',
//   product_price: 36,
//   product_material: 'Fresh',
//   product_color: 'indigo'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b5"),
//   id: '18',
//   product_name: 'Licensed Plastic Bacon',
//   product_price: 88,
//   product_material: 'Steel',
//   product_color: 'yellow'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b6"),
//   id: '19',
//   product_name: 'Intelligent Cotton Chips',
//   product_price: 46,
//   product_material: 'Soft',
//   product_color: 'azure'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b7"),
//   id: '20',
//   product_name: 'Handcrafted Wooden Bacon',
//   product_price: 36,
//   product_material: 'Concrete',
//   product_color: 'lime'
// }
// Type "it" for more
// it
// {
//   _id: ObjectId("63faf22833803dfab1d030b8"),
//   id: '21',
//   product_name: 'Unbranded Granite Chicken',
//   product_price: 90,
//   product_material: 'Metal',
//   product_color: 'gold'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b9"),
//   id: '22',
//   product_name: 'Ergonomic Soft Hat',
//   product_price: 99,
//   product_material: 'Rubber',
//   product_color: 'black'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ba"),
//   id: '23',
//   product_name: 'Intelligent Steel Pizza',
//   product_price: 95,
//   product_material: 'Cotton',
//   product_color: 'azure'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030bb"),
//   id: '24',
//   product_name: 'Tasty Rubber Cheese',
//   product_price: 47,
//   product_material: 'Frozen',
//   product_color: 'orchid'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030bc"),
//   id: '25',
//   product_name: 'Licensed Steel Car',
//   product_price: 20,
//   product_material: 'Cotton',
//   product_color: 'indigo'
// }

//2.find the product price which are between 400 to 800

db.product.find({product_price:{$gte:400,$lt:800}}).pretty();
// {
//   _id: ObjectId("63faf22833803dfab1d030a4"),
//   id: '1',
//   product_name: 'Intelligent Fresh Chips',
//   product_price: 655,
//   product_material: 'Concrete',
//   product_color: 'mint green'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a6"),
//   id: '3',
//   product_name: 'Refined Steel Car',
//   product_price: 690,
//   product_material: 'Rubber',
//   product_color: 'gold'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a7"),
//   id: '4',
//   product_name: 'Gorgeous Plastic Pants',
//   product_price: 492,
//   product_material: 'Soft',
//   product_color: 'plum'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a9"),
//   id: '6',
//   product_name: 'Awesome Wooden Towels',
//   product_price: 474,
//   product_material: 'Plastic',
//   product_color: 'orange'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030aa"),
//   id: '7',
//   product_name: 'Practical Soft Shoes',
//   product_price: 500,
//   product_material: 'Rubber',
//   product_color: 'pink'
// }

//3.find the product price which are not between 400 to 600

db.product.find({product_price:{$not:{$gte:400,$lt:600}}}).pretty();
// {
//   _id: ObjectId("63faf22833803dfab1d030a4"),
//   id: '1',
//   product_name: 'Intelligent Fresh Chips',
//   product_price: 655,
//   product_material: 'Concrete',
//   product_color: 'mint green'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a5"),
//   id: '2',
//   product_name: 'Practical Fresh Sausages',
//   product_price: 911,
//   product_material: 'Cotton',
//   product_color: 'indigo'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a6"),
//   id: '3',
//   product_name: 'Refined Steel Car',
//   product_price: 690,
//   product_material: 'Rubber',
//   product_color: 'gold'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a8"),
//   id: '5',
//   product_name: 'Sleek Cotton Chair',
//   product_price: 33,
//   product_material: 'Fresh',
//   product_color: 'black'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ab"),
//   id: '8',
//   product_name: 'Incredible Steel Hat',
//   product_price: 78,
//   product_material: 'Rubber',
//   product_color: 'violet'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ac"),
//   id: '9',
//   product_name: 'Awesome Wooden Ball',
//   product_price: 28,
//   product_material: 'Soft',
//   product_color: 'azure'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ad"),
//   id: '10',
//   product_name: 'Generic Wooden Pizza',
//   product_price: 84,
//   product_material: 'Frozen',
//   product_color: 'indigo'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ae"),
//   id: '11',
//   product_name: 'Unbranded Wooden Cheese',
//   product_price: 26,
//   product_material: 'Soft',
//   product_color: 'black'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030af"),
//   id: '12',
//   product_name: 'Unbranded Plastic Salad',
//   product_price: 89,
//   product_material: 'Wooden',
//   product_color: 'pink'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b0"),
//   id: '13',
//   product_name: 'Gorgeous Cotton Keyboard',
//   product_price: 37,
//   product_material: 'Concrete',
//   product_color: 'sky blue'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b1"),
//   id: '14',
//   product_name: 'Incredible Steel Shirt',
//   product_price: 54,
//   product_material: 'Metal',
//   product_color: 'white'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b2"),
//   id: '15',
//   product_name: 'Ergonomic Cotton Hat',
//   product_price: 43,
//   product_material: 'Rubber',
//   product_color: 'mint green'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b5"),
//   id: '18',
//   product_name: 'Licensed Plastic Bacon',
//   product_price: 88,
//   product_material: 'Steel',
//   product_color: 'yellow'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b6"),
//   id: '19',
//   product_name: 'Intelligent Cotton Chips',
//   product_price: 46,
//   product_material: 'Soft',
//   product_color: 'azure'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b8"),
//   id: '21',
//   product_name: 'Unbranded Granite Chicken',
//   product_price: 90,
//   product_material: 'Metal',
//   product_color: 'gold'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b9"),
//   id: '22',
//   product_name: 'Ergonomic Soft Hat',
//   product_price: 99,
//   product_material: 'Rubber',
//   product_color: 'black'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ba"),
//   id: '23',
//   product_name: 'Intelligent Steel Pizza',
//   product_price: 95,
//   product_material: 'Cotton',
//   product_color: 'azure'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030bc"),
//   id: '25',
//   product_name: 'Licensed Steel Car',
//   product_price: 20,
//   product_material: 'Cotton',
//   product_color: 'indigo'
// }

//4.list the four product which are grater than 500 in price

db.product.find({product_price:{$gte:500}}).pretty();
// {
//   _id: ObjectId("63faf22833803dfab1d030a4"),
//   id: '1',
//   product_name: 'Intelligent Fresh Chips',
//   product_price: 655,
//   product_material: 'Concrete',
//   product_color: 'mint green'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a5"),
//   id: '2',
//   product_name: 'Practical Fresh Sausages',
//   product_price: 911,
//   product_material: 'Cotton',
//   product_color: 'indigo'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a6"),
//   id: '3',
//   product_name: 'Refined Steel Car',
//   product_price: 690,
//   product_material: 'Rubber',
//   product_color: 'gold'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030aa"),
//   id: '7',
//   product_name: 'Practical Soft Shoes',
//   product_price: 500,
//   product_material: 'Rubber',
//   product_color: 'pink'
// }


//5.find the product name and poduct matrial of each product

db.product.find({},{product_name:1,product_material:1}).pretty();
// {
//   _id: ObjectId("63faf22833803dfab1d030a4"),
//   product_name: 'Intelligent Fresh Chips',
//   product_material: 'Concrete'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a5"),
//   product_name: 'Practical Fresh Sausages',
//   product_material: 'Cotton'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a6"),
//   product_name: 'Refined Steel Car',
//   product_material: 'Rubber'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a7"),
//   product_name: 'Gorgeous Plastic Pants',
//   product_material: 'Soft'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a8"),
//   product_name: 'Sleek Cotton Chair',
//   product_material: 'Fresh'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030a9"),
//   product_name: 'Awesome Wooden Towels',
//   product_material: 'Plastic'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030aa"),
//   product_name: 'Practical Soft Shoes',
//   product_material: 'Rubber'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ab"),
//   product_name: 'Incredible Steel Hat',
//   product_material: 'Rubber'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ac"),
//   product_name: 'Awesome Wooden Ball',
//   product_material: 'Soft'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ad"),
//   product_name: 'Generic Wooden Pizza',
//   product_material: 'Frozen'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ae"),
//   product_name: 'Unbranded Wooden Cheese',
//   product_material: 'Soft'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030af"),
//   product_name: 'Unbranded Plastic Salad',
//   product_material: 'Wooden'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b0"),
//   product_name: 'Gorgeous Cotton Keyboard',
//   product_material: 'Concrete'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b1"),
//   product_name: 'Incredible Steel Shirt',
//   product_material: 'Metal'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b2"),
//   product_name: 'Ergonomic Cotton Hat',
//   product_material: 'Rubber'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b3"),
//   product_name: 'Small Soft Chair',
//   product_material: 'Cotton'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b4"),
//   product_name: 'Incredible Metal Car',
//   product_material: 'Fresh'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b5"),
//   product_name: 'Licensed Plastic Bacon',
//   product_material: 'Steel'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b6"),
//   product_name: 'Intelligent Cotton Chips',
//   product_material: 'Soft'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b7"),
//   product_name: 'Handcrafted Wooden Bacon',
//   product_material: 'Concrete'
// }
// Type "it" for more
// it
// {
//   _id: ObjectId("63faf22833803dfab1d030b8"),
//   product_name: 'Unbranded Granite Chicken',
//   product_material: 'Metal'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030b9"),
//   product_name: 'Ergonomic Soft Hat',
//   product_material: 'Rubber'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030ba"),
//   product_name: 'Intelligent Steel Pizza',
//   product_material: 'Cotton'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030bb"),
//   product_name: 'Tasty Rubber Cheese',
//   product_material: 'Frozen'
// }
// {
//   _id: ObjectId("63faf22833803dfab1d030bc"),
//   product_name: 'Licensed Steel Car',
//   product_material: 'Cotton'
// }

//6.find the product with row id of 10

db.product.find({id:{$eq:"10"}})
// {
//   _id: ObjectId("63faf22833803dfab1d030ad"),
//   id: '10',
//   product_name: 'Generic Wooden Pizza',
//   product_price: 84,
//   product_material: 'Frozen',
//   product_color: 'indigo'
// }

//7.find only the product name and product materiel 

db.product.find({},{_id:0,product_name:1,product_material:1}).pretty();
// {
//   product_name: 'Intelligent Fresh Chips',
//   product_material: 'Concrete'
// }
// {
//   product_name: 'Practical Fresh Sausages',
//   product_material: 'Cotton'
// }
// {
//   product_name: 'Refined Steel Car',
//   product_material: 'Rubber'
// }
// {
//   product_name: 'Gorgeous Plastic Pants',
//   product_material: 'Soft'
// }
// {
//   product_name: 'Sleek Cotton Chair',
//   product_material: 'Fresh'
// }
// {
//   product_name: 'Awesome Wooden Towels',
//   product_material: 'Plastic'
// }
// {
//   product_name: 'Practical Soft Shoes',
//   product_material: 'Rubber'
// }
// {
//   product_name: 'Incredible Steel Hat',
//   product_material: 'Rubber'
// }
// {
//   product_name: 'Awesome Wooden Ball',
//   product_material: 'Soft'
// }
// {
//   product_name: 'Generic Wooden Pizza',
//   product_material: 'Frozen'
// }
// {
//   product_name: 'Unbranded Wooden Cheese',
//   product_material: 'Soft'
// }
// {
//   product_name: 'Unbranded Plastic Salad',
//   product_material: 'Wooden'
// }
// {
//   product_name: 'Gorgeous Cotton Keyboard',
//   product_material: 'Concrete'
// }
// {
//   product_name: 'Incredible Steel Shirt',
//   product_material: 'Metal'
// }
// {
//   product_name: 'Ergonomic Cotton Hat',
//   product_material: 'Rubber'
// }
// {
//   product_name: 'Small Soft Chair',
//   product_material: 'Cotton'
// }
// {
//   product_name: 'Incredible Metal Car',
//   product_material: 'Fresh'
// }
// {
//   product_name: 'Licensed Plastic Bacon',
//   product_material: 'Steel'
// }
// {
//   product_name: 'Intelligent Cotton Chips',
//   product_material: 'Soft'
// }
// {
//   product_name: 'Handcrafted Wooden Bacon',
//   product_material: 'Concrete'
// }
// Type "it" for more
// it
// {
//   product_name: 'Unbranded Granite Chicken',
//   product_material: 'Metal'
// }
// {
//   product_name: 'Ergonomic Soft Hat',
//   product_material: 'Rubber'
// }
// {
//   product_name: 'Intelligent Steel Pizza',
//   product_material: 'Cotton'
// }
// {
//   product_name: 'Tasty Rubber Cheese',
//   product_material: 'Frozen'
// }
// {
//   product_name: 'Licensed Steel Car',
//   product_material: 'Cotton'
// }

//8.find all products which contain the value of soft in product materil

db.product.find({
  product_material:{$eq:
  "Soft"}});
  // {
  //   _id: ObjectId("63faf22833803dfab1d030a7"),
  //   id: '4',
  //   product_name: 'Gorgeous Plastic Pants',
  //   product_price: 492,
  //   product_material: 'Soft',
  //   product_color: 'plum'
  // }
  // {
  //   _id: ObjectId("63faf22833803dfab1d030ac"),
  //   id: '9',
  //   product_name: 'Awesome Wooden Ball',
  //   product_price: 28,
  //   product_material: 'Soft',
  //   product_color: 'azure'
  // }
  // {
  //   _id: ObjectId("63faf22833803dfab1d030ae"),
  //   id: '11',
  //   product_name: 'Unbranded Wooden Cheese',
  //   product_price: 26,
  //   product_material: 'Soft',
  //   product_color: 'black'
  // }
  // {
  //   _id: ObjectId("63faf22833803dfab1d030b6"),
  //   id: '19',
  //   product_name: 'Intelligent Cotton Chips',
  //   product_price: 46,
  //   product_material: 'Soft',
  //   product_color: 'azure'
  // }

  //9.find products which condain product color indigo and poduct price 492.00

  // sollution no products found

  //10.delete the products which product price value are same 

  db.product.aggregate([
    { $group: { _id: "$product_price", count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
  ]);
// {
//   _id: 47,
//   count: 2
// }
// {
//   _id: 36,
//   count: 2
// }

db.product.remove({ product_price: 36 });

// {
//   acknowledged: true,
//   deletedCount: 2
// }
db.product.remove({ product_price: 47 });
// {
//   acknowledged: true,
//   deletedCount: 2
// }

