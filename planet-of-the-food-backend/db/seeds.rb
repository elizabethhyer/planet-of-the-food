# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ood.create(name: "Delta Fifty")
Ood.create(name: "Ood Sigma")
Ood.create(name: "Nephew")
Ood.create(name: "Klineman Halpen")
Ood.create(name: "Ood Elder")
Ood.create(name: "Brian the Ood")

Recipe.create(name: "Mac and Cheese", content: "milk, cheese and macaroni", ood_id:1)
Recipe.create(name: "Hot Chocolate", content: "chocolate powder and milk", ood_id:2)
Recipe.create(name: "PB&J", content: "bread, peanut butter and jelly", ood_id:3)
Recipe.create(name: "Spaghetti", content: "pasta sauce and spaghetti noodles", ood_id:4)
Recipe.create(name: "Toast", content: "bread", ood_id:5)
Recipe.create(name: "Grilled Cheese", content: "bread and cheese slices", ood_id:6)
Recipe.create(name: "Mashed Potatos", content: "potatos and butter", ood_id:6)
Recipe.create(name: "Grilled Chicken", content: "chicken", ood_id:5)
Recipe.create(name: "Waffles", content: "eggos", ood_id:2)
Recipe.create(name: "Charcuterie", content: "5 lunchables", ood_id:2)
Recipe.create(name: "Tacos", content: "ground beef, cheese and el paso taco shells", ood_id:2)
Recipe.create(name: "Cereal", content: "milk and cereal", ood_id:4)
Recipe.create(name: "Ham and Cheese Sandwhich", content: "ham, cheese and bread", ood_id:4)
Recipe.create(name: "Fish Fingers and Custard", content: "fish fingers, custard", ood_id:3)
Recipe.create(name: "Scrambled Eggs", content: "eggs", ood_id:1)
Recipe.create(name: "Kool-Aid", content: "water, kool-aid mix", ood_id:1)
Recipe.create(name: "Brownies", content: "brownie mix, oil and egg", ood_id:1)
Recipe.create(name: "Chocolate Chip Cookies", content: "chocolate chip cookie dough", ood_id:3)
Recipe.create(name: "Whiskey, Neat", content: "whiskey", ood_id:2)
Recipe.create(name: "Flaky, Crispy Potatos with Creamy Onion Sauce", content: "chips and french onion dip", ood_id:1)