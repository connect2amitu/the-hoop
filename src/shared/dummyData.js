export const DUMMY_DEPARTMENTS = [
  {
    category_id: 1,
    category_name: "Special Dietary Needs",
    products_categories: [
      {
        id: 1,
        name: "Gluten Free",
        value: "gluten-Free"
      }
    ],
    image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31575/e19895a2-f411-4e11-8402-cdd24fc63536.jpg",
  },
  {
    category_id: 2,
    category_name: "Party Supplies & Crafts",
    products_categories: [
      {
        id: 1,
        name: "Arts & Crafts",
        value: "arts-crafts"
      },
      {
        id: 2,
        name: "Baby Shower",
        value: "baby-shower"
      },
      {
        id: 3,
        name: "Balloons & Accessories",
        value: "balloons-accessories"
      },
    ],
    image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31569/8cf086e9-66d0-43fc-ae34-aed5e4cfc499.jpg",
  },
  {
    category_id: 3,
    category_name: "Office & Electronics",
    slug: "office-electronics",
    products_categories: [
      {
        id: 1,
        name: "Cell Phone Tablets & Accessories",
        value: "gluten-Free"
      },
      {
        id: 2,
        name: "Computers & Computer Accessories",
        value: "gluten-Free"
      },
      {
        id: 3,
        name: "Gaming",
        value: "gluten-Free"
      }
    ],
    image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31565/158260a8-3d74-4f19-92c9-700e6b1462a8.jpg",
  },
  {
    category_id: 4,
    category_name: "School Lunch Box Essentials",
    products_categories: [
      {
        id: 1,
        name: "Lunchbox Top Picks",
        value: "gluten-Free"
      }
    ],
    image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31572/94b5076d-c277-4108-8df3-66397bc7ca16.jpg",
  },
  {
    category_id: 5,
    category_name: "Toys",
    products_categories: [
      {
        id: 1,
        name: "Action Figures & Playsets",
        value: "gluten-Free"
      },
      {
        id: 2,
        name: "Deodorants",
        value: "gluten-Free"
      }
    ],
    image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2guulkeunn7d8.cloudfront.net/assets/department_images/toys-bf104964e93efa1127147411c744112b2ba59e2fdef87b349ce05c1dc73e9068.png",
  },
  {
    category_id: 6,
    category_name: "Health & Nutrition",
    products_categories: [
      {
        id: 1,
        name: "Desserts",
        value: "gluten-Free"
      },
      {
        id: 2,
        name: "Baguettes Loaves & Breadsticks",
        value: "gluten-Free"
      }
    ],
    image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31560/b5c9e892-88e6-4a6b-9eb3-9dc84c00a7b4.jpg",
  },
  {
    category_id: 7,
    category_name: "Home Kitchen & Dine",
    products_categories: [
      {
        id: 1,
        name: "Bath",
        value: "gluten-Free"
      },
      {
        id: 2,
        name: "Bedding",
        value: "gluten-Free"
      },
      {
        id: 3,
        name: "Bakeware",
        value: "gluten-Free"
      }
    ],
    image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31561/c90c203c-19ee-4605-bb63-4c6feeaa5bc8.jpg",
  },
]



export const STORES = [
  {
    id: 1,
    name: "Maruti General Store",
    slug: "maruti-general-store",
    image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1487/5ffe3fb7-2a0c-4714-8c71-364d7186a3d3.png",
    tags: ["Test - 1", "Groceries", "Butcher Shop"],
    type: "delivery",
    categories: [
      {
        category_id: 1,
        name: "Offers",
        slug: "offers",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 1, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 2, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 3, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 4, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 5, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 6, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 7, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 8, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 9, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 10, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 11, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 12, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 13, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 14, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 15, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 16, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 17, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 18, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 19, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 20, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 21, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 22, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 23, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 24, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 25, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 26, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 27, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 28, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 29, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 30, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 31, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 32, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 33, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 34, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 35, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 36, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 2,
        name: "Vegitables",
        slug: "Vegitables",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 37, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 38, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 39, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 40, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 41, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 42, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 43, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 44, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 45, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 46, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 47, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 48, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 49, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 50, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 51, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 52, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 53, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 54, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 55, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 56, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 57, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 58, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 59, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 60, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 61, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 62, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 63, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 64, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 65, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 66, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 67, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 68, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 69, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 70, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 71, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 72, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 3,
        name: "Pets",
        slug: "Pets",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 73, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 74, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 75, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 76, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 77, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 78, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 79, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 80, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 81, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 82, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 83, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 84, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 85, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 86, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 87, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 88, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 89, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 90, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 91, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 92, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 93, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 94, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 95, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 96, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 97, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 98, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 99, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 100, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 101, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 102, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 103, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 104, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 105, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 106, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 107, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 108, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 4,
        name: "Grocceries",
        slug: "Grocceries",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 109, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 110, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 111, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 112, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 113, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 114, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 115, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 116, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 117, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 118, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 119, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 120, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 121, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 122, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 123, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 124, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 125, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 126, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 127, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 128, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 129, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 130, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 131, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 132, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 133, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 134, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 135, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 136, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 137, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 138, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 139, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 140, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 141, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 142, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 143, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 144, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 5,
        name: "Bath",
        slug: "Bath",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 145, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 146, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 147, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 148, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 149, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 150, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 151, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 152, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 153, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 154, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 155, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 156, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 157, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 158, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 159, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 160, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 161, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 162, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 163, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 164, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 165, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 166, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 167, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 168, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 169, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 170, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 171, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 172, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 173, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 174, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 175, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 176, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 177, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 178, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 179, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 180, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 6,
        name: "Electonics",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 181, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 182, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 183, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 184, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 185, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 186, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 187, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 188, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 189, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 190, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 191, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 192, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 193, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 194, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 195, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 196, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 197, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 198, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 199, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 200, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 201, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 202, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 203, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 204, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 205, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 206, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 207, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 208, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 209, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 210, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 211, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 212, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 213, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 214, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 215, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 216, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 7,
        name: "Others",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 217, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 218, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 219, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 220, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 221, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 222, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 223, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 224, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 225, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 226, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 227, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 228, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 229, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 230, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 231, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 232, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 233, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 234, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 235, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 236, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 237, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 238, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 239, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 240, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 241, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 242, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 243, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 244, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 245, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 246, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 247, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 248, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 249, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 250, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 251, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 252, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
    ],
    departments: [
      {
        category_id: 1,
        category_name: "Special Dietary Needs",
        products_categories: [
          {
            id: 1,
            name: "Gluten Free",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31575/e19895a2-f411-4e11-8402-cdd24fc63536.jpg",
      },
      {
        category_id: 2,
        category_name: "Party Supplies & Crafts",
        products_categories: [
          {
            id: 1,
            name: "Arts & Crafts",
            value: "arts-crafts"
          },
          {
            id: 2,
            name: "Baby Shower",
            value: "baby-shower"
          },
          {
            id: 3,
            name: "Balloons & Accessories",
            value: "balloons-accessories"
          },
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31569/8cf086e9-66d0-43fc-ae34-aed5e4cfc499.jpg",
      },
      {
        category_id: 3,
        category_name: "Office & Electronics",
        products_categories: [
          {
            id: 1,
            name: "Cell Phone Tablets & Accessories",
            value: "gluten-Free"
          },
          {
            id: 2,
            name: "Computers & Computer Accessories",
            value: "gluten-Free"
          },
          {
            id: 3,
            name: "Gaming",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31565/158260a8-3d74-4f19-92c9-700e6b1462a8.jpg",
      },
      {
        category_id: 4,
        category_name: "School Lunch Box Essentials",
        products_categories: [
          {
            id: 1,
            name: "Lunchbox Top Picks",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31572/94b5076d-c277-4108-8df3-66397bc7ca16.jpg",
      },
      {
        category_id: 5,
        category_name: "Toys",
        products_categories: [
          {
            id: 1,
            name: "Action Figures & Playsets",
            value: "gluten-Free"
          },
          {
            id: 2,
            name: "Deodorants",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2guulkeunn7d8.cloudfront.net/assets/department_images/toys-bf104964e93efa1127147411c744112b2ba59e2fdef87b349ce05c1dc73e9068.png",
      },
      {
        category_id: 6,
        category_name: "Health & Nutrition",
        products_categories: [
          {
            id: 1,
            name: "Desserts",
            value: "gluten-Free"
          },
          {
            id: 2,
            name: "Baguettes Loaves & Breadsticks",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31560/b5c9e892-88e6-4a6b-9eb3-9dc84c00a7b4.jpg",
      },
      {
        category_id: 7,
        category_name: "Home Kitchen & Dine",
        products_categories: [
          {
            id: 1,
            name: "Bath",
            value: "gluten-Free"
          },
          {
            id: 2,
            name: "Bedding",
            value: "gluten-Free"
          },
          {
            id: 3,
            name: "Bakeware",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31561/c90c203c-19ee-4605-bb63-4c6feeaa5bc8.jpg",
      },
    ]
  },
  {
    id: 2,
    name: "The Hoop",
    slug: "thehoop",
    image: require("../assets/images/logo/thehooplogo.svg"),
    tags: ["Organic", "Veggies", "Local"],
    type: "delivery",
    categories: [
      {
        category_id: 1,
        name: "Offers",
        slug: "offers",
        products: [
          {
            id: 8,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 500, "qty": 1, "unit": "Kg", "rate": 101, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 501, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 502, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 503, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 504, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 505, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 506, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 507, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 508, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 509, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 510, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 511, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 512, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 513, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 514, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 515, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 516, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 517, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 518, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 519, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 520, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "The Hoop Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 521, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 522, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 523, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "The Hoop Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 524, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 525, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 526, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 527, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 528, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 529, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 530, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 531, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 532, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 533, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 534, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 535, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 2,
        name: "Vegitables",
        slug: "vegitables",
        products: [
          {
            id: 9,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 536, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 537, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 538, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 539, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 540, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 541, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 542, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 543, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 544, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 545, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 546, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 547, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 548, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 549, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 550, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 551, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 552, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 553, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 554, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 555, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 556, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "The Hoop Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 557, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 558, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 559, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "The Hoop Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 560, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 561, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 562, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 563, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 564, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 565, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 566, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 567, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 568, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 569, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 570, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 571, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 3,
        name: "Pets",
        slug: "pets",
        products: [
          {
            id: 10,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 572, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 573, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 574, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 575, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 576, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 577, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 578, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 579, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 580, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 581, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 582, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 583, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 584, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 585, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 586, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 587, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 588, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 589, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 590, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 591, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 592, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "The Hoop Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 593, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 594, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 595, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "The Hoop Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 596, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 597, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 598, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 599, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 600, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 601, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 602, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 603, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 604, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 605, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 606, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 607, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 4,
        name: "Grocceries",
        slug: "groceries",
        products: [
          {
            id: 11,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 608, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 609, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 610, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 611, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 612, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 613, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 614, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 615, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 616, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 617, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 618, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 619, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 620, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 621, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 622, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 623, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 624, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 625, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 626, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 627, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 628, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "The Hoop Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 629, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 630, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 631, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "The Hoop Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 632, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 633, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 634, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 635, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 636, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 637, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 638, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 639, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 640, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 641, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 642, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 643, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 5,
        name: "Bath",
        slug: "bath",
        products: [
          {
            id: 12,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 644, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 645, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 646, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 647, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 648, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 649, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 650, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 651, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 652, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 653, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 654, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 655, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 656, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 657, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 658, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 659, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 660, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 661, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 662, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 663, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 664, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "The Hoop Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 665, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 666, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 667, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "The Hoop Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 668, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 669, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 670, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 671, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 672, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 673, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 674, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 675, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 676, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 677, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 678, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 679, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 6,
        name: "Electonics",
        products: [
          {
            id: 13,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 680, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 681, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 682, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 683, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 684, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 685, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 686, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 687, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 688, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 689, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 690, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 691, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 692, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 693, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 694, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 695, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 696, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 697, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 698, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 699, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 700, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "The Hoop Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 701, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 702, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 703, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "The Hoop Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 704, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 705, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 706, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 707, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 708, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 709, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 710, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 711, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 712, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 713, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 714, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 715, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
      {
        category_id: 7,
        name: "Others",
        products: [
          {
            id: 14,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 716, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 717, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 718, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 2,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: 100,
            discount: 8,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 719, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 720, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 721, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 3,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: 100,
            discount: 4,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 722, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 723, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 724, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 4,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: 100,
            discount: 9,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 725, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 726, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 727, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 5,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: 100,
            discount: 10,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 728, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 729, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 730, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 6,
            name: "The Hoop Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 731, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 732, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 733, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 7,
            name: "Clover Milk, Organic, Whole",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 734, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 735, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 736, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 8,
            name: "The Hoop Sprouts Organic Extra Firm Tofu",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 737, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 738, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 739, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 9,
            name: "The Hoop Sprouts Large Grade A Cage Free Eggs",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 740, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 741, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 742, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 10,
            name: "Clover Milk, Vitamin D",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 743, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 744, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 745, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 11,
            name: "Oatly! Oatmilk, The Original",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 746, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 747, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 748, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
          {
            id: 12,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: 100,
            discount: 5,
            image: "https://picsum.photos/200/300",
            data: [{ "sub_prod_id": 749, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 750, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 751, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
          },
        ]
      },
    ],
    departments: [
      {
        category_id: 1,
        category_name: "Special Dietary Needs",
        products_categories: [
          {
            id: 1,
            name: "Gluten Free",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31575/e19895a2-f411-4e11-8402-cdd24fc63536.jpg",
      },
      {
        category_id: 2,
        category_name: "Party Supplies & Crafts",
        products_categories: [
          {
            id: 1,
            name: "Arts & Crafts",
            value: "arts-crafts"
          },
          {
            id: 2,
            name: "Baby Shower",
            value: "baby-shower"
          },
          {
            id: 3,
            name: "Balloons & Accessories",
            value: "balloons-accessories"
          },
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31569/8cf086e9-66d0-43fc-ae34-aed5e4cfc499.jpg",
      },
      {
        category_id: 3,
        category_name: "Office & Electronics",
        products_categories: [
          {
            id: 1,
            name: "Cell Phone Tablets & Accessories",
            value: "gluten-Free"
          },
          {
            id: 2,
            name: "Computers & Computer Accessories",
            value: "gluten-Free"
          },
          {
            id: 3,
            name: "Gaming",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31565/158260a8-3d74-4f19-92c9-700e6b1462a8.jpg",
      },
      {
        category_id: 4,
        category_name: "School Lunch Box Essentials",
        products_categories: [
          {
            id: 1,
            name: "Lunchbox Top Picks",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31572/94b5076d-c277-4108-8df3-66397bc7ca16.jpg",
      },
      {
        category_id: 5,
        category_name: "Toys",
        products_categories: [
          {
            id: 1,
            name: "Action Figures & Playsets",
            value: "gluten-Free"
          },
          {
            id: 2,
            name: "Deodorants",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2guulkeunn7d8.cloudfront.net/assets/department_images/toys-bf104964e93efa1127147411c744112b2ba59e2fdef87b349ce05c1dc73e9068.png",
      },
      {
        category_id: 6,
        category_name: "Health & Nutrition",
        products_categories: [
          {
            id: 1,
            name: "Desserts",
            value: "gluten-Free"
          },
          {
            id: 2,
            name: "Baguettes Loaves & Breadsticks",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31560/b5c9e892-88e6-4a6b-9eb3-9dc84c00a7b4.jpg",
      },
      {
        category_id: 7,
        category_name: "Home Kitchen & Dine",
        products_categories: [
          {
            id: 1,
            name: "Bath",
            value: "gluten-Free"
          },
          {
            id: 2,
            name: "Bedding",
            value: "gluten-Free"
          },
          {
            id: 3,
            name: "Bakeware",
            value: "gluten-Free"
          }
        ],
        image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31561/c90c203c-19ee-4605-bb63-4c6feeaa5bc8.jpg",
      },
    ]
  },
  //#region 
  // {
  //   id: 3,
  //   name: "BigBasket",
  //   slug: "big-basket",
  //   image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/631/2293fb92-3352-4114-8025-c055d198be15.png",
  //   tags: ["Organic", "Groceries", "Butcher Shop"],
  //   type: "delivery",
  //   categories: [
  //     {
  //       category_id: 1,
  //       name: "Offers",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 1, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 2, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 3, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 4, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 5, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 6, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 7, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 8, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 9, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 10, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 11, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 12, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 13, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 14, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 15, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 16, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 17, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 18, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 19, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 20, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 21, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 22, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 23, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 24, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 25, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 26, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 27, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 28, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 29, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 30, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 31, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 32, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 33, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 34, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 35, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 36, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 2,
  //       name: "Vegitables",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 37, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 38, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 39, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 40, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 41, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 42, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 43, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 44, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 45, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 46, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 47, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 48, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 49, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 50, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 51, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 52, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 53, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 54, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 55, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 56, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 57, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 58, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 59, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 60, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 61, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 62, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 63, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 64, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 65, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 66, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 67, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 68, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 69, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 70, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 71, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 72, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 3,
  //       name: "Pets",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 73, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 74, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 75, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 76, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 77, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 78, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 79, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 80, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 81, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 82, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 83, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 84, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 85, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 86, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 87, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 88, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 89, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 90, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 91, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 92, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 93, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 94, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 95, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 96, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 97, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 98, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 99, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 100, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 101, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 102, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 103, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 104, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 105, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 106, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 107, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 108, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 4,
  //       name: "Grocceries",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 109, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 110, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 111, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 112, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 113, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 114, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 115, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 116, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 117, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 118, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 119, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 120, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 121, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 122, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 123, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 124, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 125, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 126, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 127, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 128, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 129, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 130, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 131, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 132, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 133, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 134, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 135, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 136, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 137, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 138, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 139, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 140, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 141, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 142, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 143, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 144, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 5,
  //       name: "Bath",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 145, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 146, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 147, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 148, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 149, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 150, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 151, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 152, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 153, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 154, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 155, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 156, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 157, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 158, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 159, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 160, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 161, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 162, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 163, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 164, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 165, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 166, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 167, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 168, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 169, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 170, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 171, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 172, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 173, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 174, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 175, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 176, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 177, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 178, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 179, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 180, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 6,
  //       name: "Electonics",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 181, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 182, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 183, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 184, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 185, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 186, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 187, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 188, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 189, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 190, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 191, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 192, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 193, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 194, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 195, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 196, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 197, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 198, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 199, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 200, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 201, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 202, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 203, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 204, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 205, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 206, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 207, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 208, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 209, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 210, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 211, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 212, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 213, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 214, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 215, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 216, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 7,
  //       name: "Others",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 217, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 218, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 219, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 220, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 221, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 222, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 223, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 224, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 225, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 226, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 227, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 228, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 229, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 230, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 231, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 232, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 233, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 234, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 235, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 236, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 237, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 238, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 239, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 240, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 241, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 242, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 243, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 244, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 245, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 246, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 247, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 248, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 249, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 250, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 251, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 252, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //   ],
  //   departments: [
  //     {
  //       category_id: 1,
  //       category_name: "Special Dietary Needs",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Gluten Free",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31575/e19895a2-f411-4e11-8402-cdd24fc63536.jpg",
  //     },
  //     {
  //       category_id: 2,
  //       category_name: "Party Supplies & Crafts",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Arts & Crafts",
  //           value: "arts-crafts"
  //         },
  //         {
  //           id: 2,
  //           name: "Baby Shower",
  //           value: "baby-shower"
  //         },
  //         {
  //           id: 3,
  //           name: "Balloons & Accessories",
  //           value: "balloons-accessories"
  //         },
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31569/8cf086e9-66d0-43fc-ae34-aed5e4cfc499.jpg",
  //     },
  //     {
  //       category_id: 3,
  //       category_name: "Office & Electronics",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Cell Phone Tablets & Accessories",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Computers & Computer Accessories",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 3,
  //           name: "Gaming",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31565/158260a8-3d74-4f19-92c9-700e6b1462a8.jpg",
  //     },
  //     {
  //       category_id: 4,
  //       category_name: "School Lunch Box Essentials",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Lunchbox Top Picks",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31572/94b5076d-c277-4108-8df3-66397bc7ca16.jpg",
  //     },
  //     {
  //       category_id: 5,
  //       category_name: "Toys",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Action Figures & Playsets",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Deodorants",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2guulkeunn7d8.cloudfront.net/assets/department_images/toys-bf104964e93efa1127147411c744112b2ba59e2fdef87b349ce05c1dc73e9068.png",
  //     },
  //     {
  //       category_id: 6,
  //       category_name: "Health & Nutrition",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Desserts",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Baguettes Loaves & Breadsticks",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31560/b5c9e892-88e6-4a6b-9eb3-9dc84c00a7b4.jpg",
  //     },
  //     {
  //       category_id: 7,
  //       category_name: "Home Kitchen & Dine",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Bath",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Bedding",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 3,
  //           name: "Bakeware",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31561/c90c203c-19ee-4605-bb63-4c6feeaa5bc8.jpg",
  //     },
  //   ]
  // },
  // {
  //   id: 4,
  //   name: "DGSM",
  //   slug: "dgsm",
  //   image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1239/fa662636-8cbe-4625-b4a8-e5a54cc647bc.png",
  //   tags: ["Organic", "Groceries", "Butcher Shop"],
  //   type: "delivery",
  //   categories: [
  //     {
  //       name: "DGSM - Dairy & Eggs",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 2,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //       ]
  //     },
  //     {
  //       name: "DGSM - Dairy & Eggs",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 2,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //       ]
  //     },
  //     {
  //       name: "DGSM - Dairy & Eggs",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 2,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //       ]
  //     },
  //     {
  //       name: "DGSM - Dairy & Eggs",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 2,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //       ]
  //     },
  //     {
  //       name: "DGSM - Dairy & Eggs",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 2,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //       ]
  //     },
  //     {
  //       name: "DGSM - Dairy & Eggs",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 2,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //       ]
  //     },
  //     {
  //       name: "DGSM - Dairy & Eggs",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 2,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //         {
  //           id: 5,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300"
  //         },
  //       ]
  //     },
  //   ], categories: [
  //     {
  //       category_id: 1,
  //       name: "Offers",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 1, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 2, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 3, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 4, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 5, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 6, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 7, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 8, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 9, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 10, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 11, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 12, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 13, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 14, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 15, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 16, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 17, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 18, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 19, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 20, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 21, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 22, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 23, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 24, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 25, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 26, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 27, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 28, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 29, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 30, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 31, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 32, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 33, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 34, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 35, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 36, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 2,
  //       name: "Vegitables",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 37, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 38, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 39, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 40, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 41, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 42, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 43, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 44, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 45, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 46, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 47, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 48, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 49, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 50, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 51, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 52, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 53, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 54, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 55, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 56, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 57, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 58, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 59, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 60, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 61, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 62, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 63, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 64, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 65, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 66, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 67, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 68, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 69, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 70, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 71, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 72, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 3,
  //       name: "Pets",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 73, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 74, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 75, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 76, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 77, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 78, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 79, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 80, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 81, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 82, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 83, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 84, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 85, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 86, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 87, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 88, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 89, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 90, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 91, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 92, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 93, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 94, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 95, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 96, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 97, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 98, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 99, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 100, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 101, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 102, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 103, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 104, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 105, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 106, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 107, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 108, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 4,
  //       name: "Grocceries",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 109, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 110, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 111, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 112, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 113, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 114, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 115, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 116, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 117, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 118, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 119, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 120, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 121, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 122, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 123, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 124, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 125, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 126, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 127, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 128, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 129, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 130, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 131, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 132, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 133, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 134, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 135, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 136, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 137, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 138, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 139, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 140, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 141, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 142, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 143, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 144, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 5,
  //       name: "Bath",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 145, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 146, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 147, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 148, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 149, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 150, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 151, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 152, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 153, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 154, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 155, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 156, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 157, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 158, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 159, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 160, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 161, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 162, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 163, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 164, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 165, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 166, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 167, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 168, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 169, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 170, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 171, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 172, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 173, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 174, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 175, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 176, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 177, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 178, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 179, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 180, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 6,
  //       name: "Electonics",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 181, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 182, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 183, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 184, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 185, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 186, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 187, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 188, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 189, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 190, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 191, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 192, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 193, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 194, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 195, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 196, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 197, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 198, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 199, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 200, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 201, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 202, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 203, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 204, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 205, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 206, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 207, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 208, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 209, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 210, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 211, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 212, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 213, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 214, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 215, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 216, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 7,
  //       name: "Others",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 217, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 218, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 219, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 220, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 221, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 222, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 223, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 224, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 225, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 226, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 227, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 228, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 229, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 230, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 231, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 232, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 233, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 234, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 235, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 236, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 237, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 238, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 239, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 240, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 241, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 242, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 243, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 244, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 245, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 246, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 247, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 248, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 249, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 250, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 251, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 252, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //   ],
  //   departments: [
  //     {
  //       category_id: 1,
  //       category_name: "Special Dietary Needs",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Gluten Free",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31575/e19895a2-f411-4e11-8402-cdd24fc63536.jpg",
  //     },
  //     {
  //       category_id: 2,
  //       category_name: "Party Supplies & Crafts",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Arts & Crafts",
  //           value: "arts-crafts"
  //         },
  //         {
  //           id: 2,
  //           name: "Baby Shower",
  //           value: "baby-shower"
  //         },
  //         {
  //           id: 3,
  //           name: "Balloons & Accessories",
  //           value: "balloons-accessories"
  //         },
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31569/8cf086e9-66d0-43fc-ae34-aed5e4cfc499.jpg",
  //     },
  //     {
  //       category_id: 3,
  //       category_name: "Office & Electronics",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Cell Phone Tablets & Accessories",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Computers & Computer Accessories",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 3,
  //           name: "Gaming",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31565/158260a8-3d74-4f19-92c9-700e6b1462a8.jpg",
  //     },
  //     {
  //       category_id: 4,
  //       category_name: "School Lunch Box Essentials",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Lunchbox Top Picks",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31572/94b5076d-c277-4108-8df3-66397bc7ca16.jpg",
  //     },
  //     {
  //       category_id: 5,
  //       category_name: "Toys",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Action Figures & Playsets",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Deodorants",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2guulkeunn7d8.cloudfront.net/assets/department_images/toys-bf104964e93efa1127147411c744112b2ba59e2fdef87b349ce05c1dc73e9068.png",
  //     },
  //     {
  //       category_id: 6,
  //       category_name: "Health & Nutrition",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Desserts",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Baguettes Loaves & Breadsticks",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31560/b5c9e892-88e6-4a6b-9eb3-9dc84c00a7b4.jpg",
  //     },
  //     {
  //       category_id: 7,
  //       category_name: "Home Kitchen & Dine",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Bath",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Bedding",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 3,
  //           name: "Bakeware",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31561/c90c203c-19ee-4605-bb63-4c6feeaa5bc8.jpg",
  //     },
  //   ]
  // },
  // {
  //   id: 5,
  //   name: "Appsomania",
  //   slug: "appsomania",
  //   image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1480/6ffb4adc-2a87-4208-bb0c-0a7fcb1cce99.png",
  //   tags: ["Organic", "Groceries", "Butcher Shop"],
  //   type: "delivery",
  //   categories: [
  //     {
  //       category_id: 1,
  //       name: "Offers",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 1, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 2, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 3, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 4, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 5, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 6, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 7, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 8, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 9, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 10, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 11, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 12, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 13, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 14, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 15, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 16, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 17, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 18, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 19, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 20, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 21, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 22, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 23, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 24, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 25, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 26, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 27, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 28, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 29, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 30, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 31, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 32, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 33, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 34, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 35, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 36, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 2,
  //       name: "Vegitables",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 37, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 38, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 39, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 40, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 41, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 42, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 43, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 44, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 45, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 46, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 47, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 48, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 49, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 50, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 51, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 52, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 53, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 54, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 55, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 56, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 57, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 58, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 59, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 60, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 61, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 62, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 63, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 64, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 65, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 66, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 67, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 68, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 69, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 70, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 71, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 72, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 3,
  //       name: "Pets",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 73, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 74, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 75, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 76, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 77, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 78, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 79, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 80, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 81, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 82, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 83, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 84, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 85, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 86, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 87, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 88, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 89, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 90, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 91, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 92, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 93, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 94, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 95, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 96, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 97, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 98, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 99, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 100, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 101, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 102, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 103, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 104, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 105, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 106, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 107, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 108, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 4,
  //       name: "Grocceries",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 109, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 110, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 111, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 112, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 113, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 114, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 115, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 116, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 117, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 118, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 119, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 120, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 121, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 122, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 123, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 124, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 125, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 126, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 127, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 128, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 129, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 130, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 131, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 132, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 133, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 134, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 135, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 136, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 137, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 138, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 139, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 140, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 141, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 142, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 143, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 144, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 5,
  //       name: "Bath",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 145, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 146, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 147, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 148, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 149, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 150, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 151, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 152, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 153, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 154, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 155, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 156, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 157, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 158, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 159, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 160, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 161, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 162, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 163, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 164, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 165, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 166, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 167, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 168, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 169, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 170, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 171, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 172, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 173, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 174, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 175, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 176, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 177, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 178, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 179, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 180, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 6,
  //       name: "Electonics",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 181, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 182, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 183, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 184, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 185, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 186, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 187, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 188, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 189, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 190, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 191, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 192, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 193, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 194, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 195, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 196, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 197, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 198, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 199, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 200, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 201, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 202, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 203, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 204, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 205, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 206, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 207, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 208, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 209, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 210, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 211, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 212, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 213, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 214, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 215, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 216, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 7,
  //       name: "Others",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 217, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 218, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 219, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 220, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 221, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 222, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 223, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 224, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 225, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 226, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 227, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 228, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 229, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 230, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 231, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 232, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 233, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 234, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 235, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 236, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 237, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 238, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 239, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 240, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 241, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 242, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 243, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 244, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 245, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 246, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 247, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 248, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 249, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 250, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 251, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 252, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //   ],
  //   departments: [
  //     {
  //       category_id: 1,
  //       category_name: "Special Dietary Needs",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Gluten Free",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31575/e19895a2-f411-4e11-8402-cdd24fc63536.jpg",
  //     },
  //     {
  //       category_id: 2,
  //       category_name: "Party Supplies & Crafts",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Arts & Crafts",
  //           value: "arts-crafts"
  //         },
  //         {
  //           id: 2,
  //           name: "Baby Shower",
  //           value: "baby-shower"
  //         },
  //         {
  //           id: 3,
  //           name: "Balloons & Accessories",
  //           value: "balloons-accessories"
  //         },
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31569/8cf086e9-66d0-43fc-ae34-aed5e4cfc499.jpg",
  //     },
  //     {
  //       category_id: 3,
  //       category_name: "Office & Electronics",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Cell Phone Tablets & Accessories",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Computers & Computer Accessories",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 3,
  //           name: "Gaming",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31565/158260a8-3d74-4f19-92c9-700e6b1462a8.jpg",
  //     },
  //     {
  //       category_id: 4,
  //       category_name: "School Lunch Box Essentials",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Lunchbox Top Picks",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31572/94b5076d-c277-4108-8df3-66397bc7ca16.jpg",
  //     },
  //     {
  //       category_id: 5,
  //       category_name: "Toys",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Action Figures & Playsets",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Deodorants",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2guulkeunn7d8.cloudfront.net/assets/department_images/toys-bf104964e93efa1127147411c744112b2ba59e2fdef87b349ce05c1dc73e9068.png",
  //     },
  //     {
  //       category_id: 6,
  //       category_name: "Health & Nutrition",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Desserts",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Baguettes Loaves & Breadsticks",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31560/b5c9e892-88e6-4a6b-9eb3-9dc84c00a7b4.jpg",
  //     },
  //     {
  //       category_id: 7,
  //       category_name: "Home Kitchen & Dine",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Bath",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Bedding",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 3,
  //           name: "Bakeware",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31561/c90c203c-19ee-4605-bb63-4c6feeaa5bc8.jpg",
  //     },
  //   ]
  // },
  // {
  //   id: 6,
  //   name: "JioMart",
  //   slug: "jio-mart",
  //   image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1517/abd91af8-6dc9-43f7-b146-6ef7d00bdb62.jpg",
  //   tags: ["Organic", "Groceries", "Butcher Shop"],
  //   type: "delivery",
  //   categories: [
  //     {
  //       category_id: 1,
  //       name: "Offers",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 1, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 2, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 3, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 4, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 5, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 6, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 7, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 8, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 9, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 10, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 11, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 12, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 13, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 14, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 15, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 16, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 17, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 18, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 19, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 20, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 21, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 22, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 23, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 24, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 25, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 26, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 27, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 28, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 29, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 30, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 31, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 32, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 33, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 34, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 35, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 36, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 2,
  //       name: "Vegitables",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 37, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 38, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 39, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 40, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 41, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 42, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 43, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 44, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 45, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 46, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 47, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 48, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 49, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 50, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 51, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 52, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 53, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 54, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 55, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 56, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 57, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 58, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 59, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 60, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 61, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 62, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 63, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 64, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 65, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 66, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 67, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 68, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 69, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 70, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 71, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 72, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 3,
  //       name: "Pets",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 73, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 74, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 75, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 76, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 77, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 78, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 79, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 80, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 81, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 82, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 83, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 84, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 85, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 86, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 87, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 88, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 89, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 90, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 91, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 92, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 93, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 94, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 95, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 96, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 97, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 98, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 99, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 100, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 101, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 102, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 103, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 104, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 105, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 106, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 107, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 108, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 4,
  //       name: "Grocceries",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 109, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 110, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 111, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 112, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 113, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 114, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 115, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 116, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 117, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 118, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 119, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 120, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 121, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 122, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 123, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 124, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 125, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 126, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 127, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 128, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 129, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 130, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 131, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 132, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 133, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 134, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 135, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 136, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 137, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 138, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 139, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 140, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 141, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 142, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 143, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 144, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 5,
  //       name: "Bath",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 145, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 146, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 147, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 148, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 149, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 150, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 151, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 152, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 153, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 154, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 155, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 156, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 157, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 158, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 159, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 160, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 161, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 162, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 163, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 164, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 165, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 166, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 167, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 168, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 169, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 170, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 171, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 172, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 173, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 174, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 175, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 176, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 177, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 178, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 179, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 180, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 6,
  //       name: "Electonics",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 181, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 182, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 183, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 184, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 185, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 186, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 187, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 188, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 189, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 190, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 191, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 192, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 193, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 194, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 195, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 196, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 197, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 198, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 199, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 200, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 201, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 202, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 203, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 204, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 205, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 206, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 207, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 208, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 209, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 210, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 211, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 212, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 213, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 214, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 215, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 216, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 7,
  //       name: "Others",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 217, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 218, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 219, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 220, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 221, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 222, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 223, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 224, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 225, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 226, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 227, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 228, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 229, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 230, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 231, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 232, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 233, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 234, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 235, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 236, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 237, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 238, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 239, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 240, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 241, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 242, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 243, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 244, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 245, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 246, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 247, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 248, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 249, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 250, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 251, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 252, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //   ],
  //   departments: [
  //     {
  //       category_id: 1,
  //       category_name: "Special Dietary Needs",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Gluten Free",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31575/e19895a2-f411-4e11-8402-cdd24fc63536.jpg",
  //     },
  //     {
  //       category_id: 2,
  //       category_name: "Party Supplies & Crafts",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Arts & Crafts",
  //           value: "arts-crafts"
  //         },
  //         {
  //           id: 2,
  //           name: "Baby Shower",
  //           value: "baby-shower"
  //         },
  //         {
  //           id: 3,
  //           name: "Balloons & Accessories",
  //           value: "balloons-accessories"
  //         },
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31569/8cf086e9-66d0-43fc-ae34-aed5e4cfc499.jpg",
  //     },
  //     {
  //       category_id: 3,
  //       category_name: "Office & Electronics",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Cell Phone Tablets & Accessories",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Computers & Computer Accessories",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 3,
  //           name: "Gaming",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31565/158260a8-3d74-4f19-92c9-700e6b1462a8.jpg",
  //     },
  //     {
  //       category_id: 4,
  //       category_name: "School Lunch Box Essentials",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Lunchbox Top Picks",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31572/94b5076d-c277-4108-8df3-66397bc7ca16.jpg",
  //     },
  //     {
  //       category_id: 5,
  //       category_name: "Toys",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Action Figures & Playsets",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Deodorants",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2guulkeunn7d8.cloudfront.net/assets/department_images/toys-bf104964e93efa1127147411c744112b2ba59e2fdef87b349ce05c1dc73e9068.png",
  //     },
  //     {
  //       category_id: 6,
  //       category_name: "Health & Nutrition",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Desserts",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Baguettes Loaves & Breadsticks",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31560/b5c9e892-88e6-4a6b-9eb3-9dc84c00a7b4.jpg",
  //     },
  //     {
  //       category_id: 7,
  //       category_name: "Home Kitchen & Dine",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Bath",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Bedding",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 3,
  //           name: "Bakeware",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31561/c90c203c-19ee-4605-bb63-4c6feeaa5bc8.jpg",
  //     },
  //   ]
  // },
  // {
  //   id: 7,
  //   name: "D-Mart",
  //   slug: "d-mart",
  //   image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/220/fba1c010-69bd-4fd2-9d51-031a8cbe2965.png",
  //   tags: ["Organic", "Groceries", "Butcher Shop"],
  //   type: "delivery",
  //   categories: [
  //     {
  //       category_id: 1,
  //       name: "Offers",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 1, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 2, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 3, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 4, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 5, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 6, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 7, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 8, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 9, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 10, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 11, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 12, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 13, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 14, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 15, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 16, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 17, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 18, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 19, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 20, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 21, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 22, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 23, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 24, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 25, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 26, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 27, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 28, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 29, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 30, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 31, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 32, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 33, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 34, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 35, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 36, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 2,
  //       name: "Vegitables",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 37, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 38, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 39, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 40, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 41, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 42, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 43, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 44, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 45, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 46, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 47, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 48, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 49, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 50, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 51, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 52, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 53, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 54, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 55, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 56, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 57, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 58, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 59, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 60, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 61, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 62, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 63, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 64, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 65, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 66, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 67, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 68, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 69, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 70, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 71, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 72, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 3,
  //       name: "Pets",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 73, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 74, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 75, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 76, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 77, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 78, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 79, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 80, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 81, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 82, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 83, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 84, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 85, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 86, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 87, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 88, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 89, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 90, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 91, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 92, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 93, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 94, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 95, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 96, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 97, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 98, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 99, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 100, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 101, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 102, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 103, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 104, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 105, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 106, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 107, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 108, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 4,
  //       name: "Grocceries",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 109, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 110, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 111, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 112, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 113, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 114, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 115, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 116, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 117, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 118, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 119, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 120, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 121, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 122, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 123, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 124, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 125, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 126, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 127, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 128, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 129, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 130, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 131, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 132, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 133, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 134, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 135, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 136, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 137, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 138, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 139, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 140, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 141, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 142, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 143, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 144, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 5,
  //       name: "Bath",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 145, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 146, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 147, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 148, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 149, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 150, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 151, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 152, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 153, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 154, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 155, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 156, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 157, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 158, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 159, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 160, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 161, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 162, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 163, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 164, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 165, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 166, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 167, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 168, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 169, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 170, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 171, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 172, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 173, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 174, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 175, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 176, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 177, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 178, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 179, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 180, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 6,
  //       name: "Electonics",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 181, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 182, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 183, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 184, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 185, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 186, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 187, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 188, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 189, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 190, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 191, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 192, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 193, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 194, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 195, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 196, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 197, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 198, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 199, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 200, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 201, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 202, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 203, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 204, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 205, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 206, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 207, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 208, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 209, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 210, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 211, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 212, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 213, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 214, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 215, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 216, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //     {
  //       category_id: 7,
  //       name: "Others",
  //       products: [
  //         {
  //           id: 1,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 217, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 218, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 219, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 2,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
  //           price: 100,
  //           discount: 8,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 220, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 221, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 222, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 3,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
  //           price: 100,
  //           discount: 4,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 223, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 224, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 225, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 4,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
  //           price: 100,
  //           discount: 9,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 226, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 227, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 228, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 5,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
  //           price: 100,
  //           discount: 10,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 229, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 230, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 231, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 6,
  //           name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 232, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 233, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 234, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 7,
  //           name: "Clover Milk, Organic, Whole",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 235, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 236, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 237, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 8,
  //           name: "Sprouts Organic Extra Firm Tofu",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 238, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 239, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 240, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 9,
  //           name: "Sprouts Large Grade A Cage Free Eggs",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 241, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 242, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 243, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 10,
  //           name: "Clover Milk, Vitamin D",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 244, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 245, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 246, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 11,
  //           name: "Oatly! Oatmilk, The Original",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 247, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 248, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 249, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //         {
  //           id: 12,
  //           name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
  //           price: 100,
  //           discount: 5,
  //           image: "https://picsum.photos/200/300",
  //           data: [{ "sub_prod_id": 250, "qty": 1, "unit": "Kg", "rate": 65, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 251, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 252, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]
  //         },
  //       ]
  //     },
  //   ],
  //   departments: [
  //     {
  //       category_id: 1,
  //       category_name: "Special Dietary Needs",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Gluten Free",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31575/e19895a2-f411-4e11-8402-cdd24fc63536.jpg",
  //     },
  //     {
  //       category_id: 2,
  //       category_name: "Party Supplies & Crafts",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Arts & Crafts",
  //           value: "arts-crafts"
  //         },
  //         {
  //           id: 2,
  //           name: "Baby Shower",
  //           value: "baby-shower"
  //         },
  //         {
  //           id: 3,
  //           name: "Balloons & Accessories",
  //           value: "balloons-accessories"
  //         },
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31569/8cf086e9-66d0-43fc-ae34-aed5e4cfc499.jpg",
  //     },
  //     {
  //       category_id: 3,
  //       category_name: "Office & Electronics",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Cell Phone Tablets & Accessories",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Computers & Computer Accessories",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 3,
  //           name: "Gaming",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31565/158260a8-3d74-4f19-92c9-700e6b1462a8.jpg",
  //     },
  //     {
  //       category_id: 4,
  //       category_name: "School Lunch Box Essentials",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Lunchbox Top Picks",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31572/94b5076d-c277-4108-8df3-66397bc7ca16.jpg",
  //     },
  //     {
  //       category_id: 5,
  //       category_name: "Toys",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Action Figures & Playsets",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Deodorants",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2guulkeunn7d8.cloudfront.net/assets/department_images/toys-bf104964e93efa1127147411c744112b2ba59e2fdef87b349ce05c1dc73e9068.png",
  //     },
  //     {
  //       category_id: 6,
  //       category_name: "Health & Nutrition",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Desserts",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Baguettes Loaves & Breadsticks",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31560/b5c9e892-88e6-4a6b-9eb3-9dc84c00a7b4.jpg",
  //     },
  //     {
  //       category_id: 7,
  //       category_name: "Home Kitchen & Dine",
  //       products_categories: [
  //         {
  //           id: 1,
  //           name: "Bath",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 2,
  //           name: "Bedding",
  //           value: "gluten-Free"
  //         },
  //         {
  //           id: 3,
  //           name: "Bakeware",
  //           value: "gluten-Free"
  //         }
  //       ],
  //       image: "https://d2d8wwwkmhfcva.cloudfront.net/120x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/department/image/31561/c90c203c-19ee-4605-bb63-4c6feeaa5bc8.jpg",
  //     },
  //   ]
  // }
  //#endregion
]


export const CART = {
  grand_total: 490,
  offer: 20,
  items: [
    {
      retailer_id: 1,
      store_name: "Walmart",
      image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1289/9f79fb62-4b6d-43d8-bd13-8fa60e3528fa.png",
      price: 880,
      items: [
        {
          item_id: 1,
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 2,
          discount: 1,
          retailer_id: 1,
          price: 100
        },
        {
          item_id: 2,
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 4,
          discount: 1,
          retailer_id: 1,
          price: 170
        }
      ]
    },
    {
      retailer_id: 2,
      store_name: "The Hoop",
      image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/31/f889f29f-5d02-4e96-92d2-19c05e886ff6.png",
      price: 170,
      items: [
        {
          item_id: 1,
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 2,
          discount: 1,
          retailer_id: 2,
          price: 30
        },
        {
          item_id: 2,
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 4,
          discount: 1,
          retailer_id: 2,
          price: 20
        },
        {
          item_id: 3,
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 1,
          discount: 1,
          retailer_id: 2,
          price: 90
        },
      ]
    },
    {
      retailer_id: 3,
      store_name: "DGSM",
      image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1289/9f79fb62-4b6d-43d8-bd13-8fa60e3528fa.png",
      price: 140,
      items: [
        {
          item_id: 1,
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 2,
          discount: 1,
          retailer_id: 3,
          price: 30
        },
        {
          item_id: 2,
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 4,
          discount: 1,
          retailer_id: 3,
          price: 20
        },
        {
          item_id: 3,
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 2,
          discount: 1,
          retailer_id: 3,
          price: 90
        },
        {
          item_id: 4,
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 2,
          discount: 1,
          retailer_id: 3,
          price: 90
        },
      ]
    }
  ]
}