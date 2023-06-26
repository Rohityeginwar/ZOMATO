Zomato App


// page1

List of city

https://zomapi-s17p.onrender.com/location

Rest wrt to city

http://localhost:9120/restaurants?stateId=3

https://zomapi-s17p.onrender.com/restaurants?stateId=3

List of Quick Search

http://localhost:9120/mealType
https://zomapi-s17p.onrender.com/mealType
//page2

Rest wrt to mealtype

https://zomapi-s17p.onrender.com/restaurants?mealId=4
https://zomapi-s17p.onrender.com/restaurants?stateId=1&mealId=2


Rest wrt to mealtype + cuisine

https://zomapi-s17p.onrender.com/filter/1?cuisineId=2
Rest wrt to mealtype + cost

https://zomapi-s17p.onrender.com/filter/1?lcost=400&hcost=1000

//Page3

Details of Restaurant

https://zomapi-s17p.onrender.com/details/64721c6faca8e9e0294f0067
Menu of restaurant

https://zomapi-s17p.onrender.com/menu/10

//Page4

Details of Menu selected

https://zomapi-s17p.onrender.com/menuDetails {"id":[4,8,21,9]}
Place Order

https://zomapi-s17p.onrender.com/placeOrder { "orderId" : 2, "name" : "Amit", "email" : "amit@gmail.com", "address" : "Hom 65", "phone" : 8934645457, "cost" : 612, "menuItem" : [ 45, 34, 41 ], "status" : "Delivered" }

// Page5

List of all the orders

https://zomapi-s17p.onrender.com/orders

Update orders details

https://zomapi-s17p.onrender.com/updateOrder { "_id":"647c9ef070ab7d9b545a4090", "status":"Out for delivery" }

Delete Orders

https://zomapi-s17p.onrender.com/deleteOrder {"_id":"647c9f2e36e6ecf8fde6722b"}