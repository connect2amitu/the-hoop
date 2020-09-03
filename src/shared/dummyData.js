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
    name: "Walmart",
    slug: "walmart",
    image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1487/5ffe3fb7-2a0c-4714-8c71-364d7186a3d3.png",
    tags: ["Organic", "Groceries", "Butcher Shop"],
    type: "delivery",
    categories: [
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
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
    image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1487/5ffe3fb7-2a0c-4714-8c71-364d7186a3d3.png",
    tags: ["Organic", "Veggies", "Local"],
    type: "delivery",
    categories: [
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 1",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 2",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 3",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 4",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs 5",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Vegitables",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Pets",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Grocceries",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Bath",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Electonics",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Others",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
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
    id: 3,
    name: "BigBasket",
    slug: "big-basket",
    image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/631/2293fb92-3352-4114-8025-c055d198be15.png",
    tags: ["Organic", "Groceries", "Butcher Shop"],
    type: "delivery",
    categories: [
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
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
    id: 4,
    name: "DGSM",
    slug: "dgsm",
    image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1239/fa662636-8cbe-4625-b4a8-e5a54cc647bc.png",
    tags: ["Organic", "Groceries", "Butcher Shop"],
    type: "delivery",
    categories: [
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
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
    id: 5,
    name: "Appsomania",
    slug: "appsomania",
    image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1480/6ffb4adc-2a87-4208-bb0c-0a7fcb1cce99.png",
    tags: ["Organic", "Groceries", "Butcher Shop"],
    type: "delivery",
    categories: [
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
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
    id: 6,
    name: "JioMart",
    slug: "jio-mart",
    image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1517/abd91af8-6dc9-43f7-b146-6ef7d00bdb62.jpg",
    tags: ["Organic", "Groceries", "Butcher Shop"],
    type: "delivery",
    categories: [
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
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
    id: 7,
    name: "D-Mart",
    slug: "d-mart",
    image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/220/fba1c010-69bd-4fd2-9d51-031a8cbe2965.png",
    tags: ["Organic", "Groceries", "Butcher Shop"],
    type: "delivery",
    categories: [
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
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
    id: 8,
    name: "Testing",
    slug: "testing",
    image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1289/9f79fb62-4b6d-43d8-bd13-8fa60e3528fa.png",
    tags: ["Organic", "Groceries", "Butcher Shop"],
    type: "delivery",
    categories: [
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
        ]
      },
      {
        name: "Dairy & Eggs",
        products: [
          {
            id: 1,
            name: "Sprouts Large Brown Cage Free Grade A Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 2,
            name: "Clover Milk, Organic, Whole",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 3,
            name: "Sprouts Organic Extra Firm Tofu",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 4,
            name: "Sprouts Large Grade A Cage Free Eggs",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Clover Milk, Vitamin D",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Oatly! Oatmilk, The Original",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
          },
          {
            id: 5,
            name: "Vital Farms Vital Farms Pasture-Raised (Alfresco) Eggs 18",
            price: "100",
            discount: "5",
            image: "https://picsum.photos/200/300"
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
]


export const CART = {
  grand_total: 490,
  offer: 20,
  items: [
    {
      store_name: "Walmart",
      image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1289/9f79fb62-4b6d-43d8-bd13-8fa60e3528fa.png",
      price: 880,
      items: [
        {
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 2,
          discount: 1,
          retailer_id: 1,
          price: 100
        },
        {
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
      store_name: "The Hoop",
      image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/31/f889f29f-5d02-4e96-92d2-19c05e886ff6.png",
      price: 170,
      items: [
        {
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 2,
          discount: 1,
          retailer_id: 1,
          price: 30
        },
        {
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 4,
          discount: 1,
          retailer_id: 1,
          price: 20
        },
        {
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 1,
          discount: 1,
          retailer_id: 1,
          price: 90
        },
      ]
    },
    {
      store_name: "DGSM",
      image: "https://d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1289/9f79fb62-4b6d-43d8-bd13-8fa60e3528fa.png",
      price: 140,
      items: [
        {
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 2,
          discount: 1,
          retailer_id: 1,
          price: 30
        },
        {
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 4,
          discount: 1,
          retailer_id: 1,
          price: 20
        },
        {
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 2,
          discount: 1,
          retailer_id: 1,
          price: 90
        },
        {
          name: "Heinz Tomato Ketchup",
          image: "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d086ea67-c0e9-4e87-b584-1d684356eb1a.jpg",
          quantity: 2,
          discount: 1,
          retailer_id: 1,
          price: 90
        },
      ]
    }
  ]
}