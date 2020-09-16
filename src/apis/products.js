import Axios from "axios";

//#region 
const data = [
  {
    "category_name": "Green Vegetables",
    "category_id": 1,
    "products": [
      {
        "id": 1,
        "product_name": "Bitter Gourd Small ( કાજુ કારેલા )",
        "image": "product_images/Bitter-Gourd(Karela).jpg",
        "data": [
          {
            "sub_prod_id": 1,
            "qty": 1,
            "unit": "Kg",
            "rate": 90,
            "product_url": "bitter-gourd-small-1-kg"
          },
          {
            "sub_prod_id": 2,
            "qty": 500,
            "unit": "Gram",
            "rate": 45,
            "product_url": "bitter-gourd-small-500-g"
          },
          {
            "sub_prod_id": 3,
            "qty": 250,
            "unit": "Gram",
            "rate": 25,
            "product_url": "bitter-gourd-small-250-g"
          }
        ]
      },
      {
        "id": 2,
        "product_name": "Ridge Gourd ( તુરીયા )",
        "image": "product_images/Ridge-Gourd(Turiya).jpg",
        "data": [
          {
            "sub_prod_id": 4,
            "qty": 1,
            "unit": "Kg",
            "rate": 90,
            "product_url": "ridge-gourd-1-kg"
          },
          {
            "sub_prod_id": 5,
            "qty": 500,
            "unit": "Gram",
            "rate": 45,
            "product_url": "ridge-gourd-500-g"
          },
          {
            "sub_prod_id": 6,
            "qty": 250,
            "unit": "Gram",
            "rate": 25,
            "product_url": "ridge-gourd-250-g"
          }
        ]
      },
      {
        "id": 3,
        "product_name": "Tinda ( ટીંડા )",
        "image": "product_images/Tinda.jpg",
        "data": [
          {
            "sub_prod_id": 7,
            "qty": 1,
            "unit": "Kg",
            "rate": 140,
            "product_url": "tinda-1-kg"
          },
          {
            "sub_prod_id": 8,
            "qty": 500,
            "unit": "Gram",
            "rate": 70,
            "product_url": "tinda-500-g"
          },
          {
            "sub_prod_id": 9,
            "qty": 250,
            "unit": "Gram",
            "rate": 35,
            "product_url": "tinda-250-g"
          }
        ]
      },
      {
        "id": 4,
        "product_name": "Coccinia grandis ( ટીંડોરા )",
        "image": "product_images/Coccinia-grandis.jpg",
        "data": [
          {
            "sub_prod_id": 10,
            "qty": 1,
            "unit": "Kg",
            "rate": 160,
            "product_url": "coccinia-grandis-1-kg"
          },
          {
            "sub_prod_id": 11,
            "qty": 500,
            "unit": "Gram",
            "rate": 80,
            "product_url": "coccinia-grandis-500-g"
          },
          {
            "sub_prod_id": 12,
            "qty": 250,
            "unit": "Gram",
            "rate": 40,
            "product_url": "coccinia-grandis-250-g"
          }
        ]
      },
      {
        "id": 5,
        "product_name": "Cauliflower ( ફૂલ ગોબી )",
        "image": "product_images/Cauliflower.jpg",
        "data": [
          {
            "sub_prod_id": 13,
            "qty": 1,
            "unit": "Kg",
            "rate": 90,
            "product_url": "cauliflower-1-kg"
          },
          {
            "sub_prod_id": 14,
            "qty": 500,
            "unit": "Gram",
            "rate": 45,
            "product_url": "cauliflower-500-g"
          },
          {
            "sub_prod_id": 151,
            "qty": 250,
            "unit": "Gram",
            "rate": 23,
            "product_url": "cauliflower-250-g"
          }
        ]
      },
      {
        "id": 6,
        "product_name": "White Cucumber ( સફેદ કાકડી )",
        "image": "product_images/White-Cucumber.jpg",
        "data": [
          {
            "sub_prod_id": 15,
            "qty": 1,
            "unit": "Kg",
            "rate": 65,
            "product_url": "white-cucumber-1-kg"
          },
          {
            "sub_prod_id": 16,
            "qty": 500,
            "unit": "Gram",
            "rate": 33,
            "product_url": "white-cucumber-500-g"
          },
          {
            "sub_prod_id": 152,
            "qty": 250,
            "unit": "Gram",
            "rate": 17,
            "product_url": "white-cucumber-250-g"
          }
        ]
      },
      {
        "id": 7,
        "product_name": "Green Cucumber ( કાકડી )",
        "image": "product_images/Cucumber(Kakdi).jpg",
        "data": [
          {
            "sub_prod_id": 17,
            "qty": 1,
            "unit": "Kg",
            "rate": 60,
            "product_url": "green-cucumber-1-kg"
          },
          {
            "sub_prod_id": 18,
            "qty": 500,
            "unit": "Gram",
            "rate": 30,
            "product_url": "green-cucumber-500-g"
          },
          {
            "sub_prod_id": 153,
            "qty": 250,
            "unit": "Gram",
            "rate": 15,
            "product_url": "green-cucumber-250-g"
          }
        ]
      },
      {
        "id": 8,
        "product_name": "Pointed Gourd ( પરવળ )",
        "image": "product_images/Pointed-Gourd.jpg",
        "data": [
          {
            "sub_prod_id": 19,
            "qty": 1,
            "unit": "Kg",
            "rate": 100,
            "product_url": "pointed-gourd-1-kg"
          },
          {
            "sub_prod_id": 20,
            "qty": 500,
            "unit": "Gram",
            "rate": 50,
            "product_url": "pointed-gourd-500-g"
          },
          {
            "sub_prod_id": 154,
            "qty": 250,
            "unit": "Gram",
            "rate": 25,
            "product_url": "pointed-gourd-250-g"
          }
        ]
      },
      {
        "id": 9,
        "product_name": "Lemon ( નીબું )",
        "image": "product_images/Lemon(Nimbu).jpg",
        "data": [
          {
            "sub_prod_id": 21,
            "qty": 500,
            "unit": "Gram",
            "rate": 25,
            "product_url": "lemon-500-g"
          },
          {
            "sub_prod_id": 155,
            "qty": 1,
            "unit": "Kg",
            "rate": 50,
            "product_url": "lemon-1-kg"
          },
          {
            "sub_prod_id": 156,
            "qty": 250,
            "unit": "Gram",
            "rate": 13,
            "product_url": "lemon-250-g"
          }
        ]
      },
      {
        "id": 10,
        "product_name": "Sponge gourd ( ગલકા )",
        "image": "product_images/Sponge-gourd.jpg",
        "data": [
          {
            "sub_prod_id": 22,
            "qty": 1,
            "unit": "Kg",
            "rate": 65,
            "product_url": "sponge-gourd-1-kg"
          },
          {
            "sub_prod_id": 23,
            "qty": 500,
            "unit": "Gram",
            "rate": 33,
            "product_url": "sponge-gourd-500-g"
          },
          {
            "sub_prod_id": 157,
            "qty": 250,
            "unit": "Gram",
            "rate": 17,
            "product_url": "sponge-gourd-250-g"
          }
        ]
      },
      {
        "id": 12,
        "product_name": "Tomato ( ટામેટા )",
        "image": "product_images/Tometo.jpg",
        "data": [
          {
            "sub_prod_id": 26,
            "qty": 1,
            "unit": "Kg",
            "rate": 80,
            "product_url": "tomato-1-kg"
          },
          {
            "sub_prod_id": 27,
            "qty": 500,
            "unit": "Gram",
            "rate": 40,
            "product_url": "tomato-500-g"
          }
        ]
      },
      {
        "id": 13,
        "product_name": "Cabbage ( કોબીઝ )",
        "image": "product_images/Cabbage(Kobiz).jpg",
        "data": [
          {
            "sub_prod_id": 29,
            "qty": 1,
            "unit": "Kg",
            "rate": 50,
            "product_url": "cabbage-1-kg"
          },
          {
            "sub_prod_id": 30,
            "qty": 500,
            "unit": "Gram",
            "rate": 30,
            "product_url": "cabbage-500-g"
          },
          {
            "sub_prod_id": 158,
            "qty": 250,
            "unit": "Gram",
            "rate": 20,
            "product_url": "cabbage-250-g"
          }
        ]
      },
      {
        "id": 14,
        "product_name": "Bottle Gourd ( દૂધી )",
        "image": "product_images/Bottle-Gourd(loki).jpg",
        "data": [
          {
            "sub_prod_id": 31,
            "qty": 1,
            "unit": "Kg",
            "rate": 90,
            "product_url": "bottle-gourd-1-kg"
          },
          {
            "sub_prod_id": 32,
            "qty": 500,
            "unit": "Gram",
            "rate": 45,
            "product_url": "bottle-gourd-500-g"
          },
          {
            "sub_prod_id": 159,
            "qty": 250,
            "unit": "Gram",
            "rate": 23,
            "product_url": "bottle-gourd-250-g"
          }
        ]
      },
      {
        "id": 15,
        "product_name": "ladies' fingers ( ભીંડા )",
        "image": "product_images/Lady-Finger(Bhindi).jpg",
        "data": [
          {
            "sub_prod_id": 33,
            "qty": 1,
            "unit": "Kg",
            "rate": 80,
            "product_url": "ladies-fingers-1-kg"
          },
          {
            "sub_prod_id": 34,
            "qty": 500,
            "unit": "Gram",
            "rate": 40,
            "product_url": "ladies-fingers-500-g"
          },
          {
            "sub_prod_id": 150,
            "qty": 250,
            "unit": "Gram",
            "rate": 20,
            "product_url": "ladies-fingers-250-g"
          }
        ]
      }
    ]
  },
  {
    "category_name": "Beans",
    "category_id": 2,
    "products": [
      {
        "id": 16,
        "product_name": "Green Pea ( વટાણા )",
        "image": "product_images/Green-Pea.jpg",
        "data": [
          {
            "sub_prod_id": 35,
            "qty": 1,
            "unit": "Kg",
            "rate": 250,
            "product_url": "green-pea-1-kg"
          },
          {
            "sub_prod_id": 36,
            "qty": 500,
            "unit": "Gram",
            "rate": 125,
            "product_url": "green-pea-500-g"
          },
          {
            "sub_prod_id": 37,
            "qty": 250,
            "unit": "Gram",
            "rate": 65,
            "product_url": "green-pea-250-g"
          }
        ]
      },
      {
        "id": 17,
        "product_name": "French bean ( ફણસી )",
        "image": "product_images/French-bean.jpg",
        "data": [
          {
            "sub_prod_id": 38,
            "qty": 1,
            "unit": "Kg",
            "rate": 90,
            "product_url": "french-bean-1-kg"
          },
          {
            "sub_prod_id": 39,
            "qty": 500,
            "unit": "Gram",
            "rate": 45,
            "product_url": "french-bean-500-g"
          },
          {
            "sub_prod_id": 160,
            "qty": 250,
            "unit": "Gram",
            "rate": 23,
            "product_url": "french-bean-250-g"
          }
        ]
      },
      {
        "id": 18,
        "product_name": "Indian Beans ( વાલોળ )",
        "image": "product_images/Indian-Beans.jpg",
        "data": [
          {
            "sub_prod_id": 40,
            "qty": 1,
            "unit": "Kg",
            "rate": 110,
            "product_url": "indian-beans-1-kg"
          },
          {
            "sub_prod_id": 41,
            "qty": 500,
            "unit": "Gram",
            "rate": 55,
            "product_url": "indian-beans-500-g"
          },
          {
            "sub_prod_id": 161,
            "qty": 250,
            "unit": "Gram",
            "rate": 28,
            "product_url": "indian-beans-250-g"
          }
        ]
      },
      {
        "id": 19,
        "product_name": "Drumstick ( સરગવા )",
        "image": "product_images/Drumstick.jpg",
        "data": [
          {
            "sub_prod_id": 51,
            "qty": 1,
            "unit": "Kg",
            "rate": 130,
            "product_url": "drumstick-1-kg"
          },
          {
            "sub_prod_id": 52,
            "qty": 500,
            "unit": "Gram",
            "rate": 65,
            "product_url": "drumstick-500-g"
          },
          {
            "sub_prod_id": 162,
            "qty": 250,
            "unit": "Gram",
            "rate": 33,
            "product_url": "drumstick-250-g"
          }
        ]
      },
      {
        "id": 20,
        "product_name": "Cluster bean ( ગુવાર )",
        "image": "product_images/Cluster-Bean(Guvar).jpg",
        "data": [
          {
            "sub_prod_id": 42,
            "qty": 1,
            "unit": "Kg",
            "rate": 90,
            "product_url": "cluster-bean-1-kg"
          },
          {
            "sub_prod_id": 43,
            "qty": 500,
            "unit": "Gram",
            "rate": 45,
            "product_url": "cluster-bean-500-g"
          },
          {
            "sub_prod_id": 163,
            "qty": 250,
            "unit": "Gram",
            "rate": 23,
            "product_url": "cluster-bean-250-g"
          }
        ]
      },
      {
        "id": 21,
        "product_name": "Pigeon Pea ( તુવેર )",
        "image": "product_images/Pigeon-Pea.jpg",
        "data": [
          {
            "sub_prod_id": 44,
            "qty": 1,
            "unit": "Kg",
            "rate": 250,
            "product_url": "pigeon-pea-1-kg"
          },
          {
            "sub_prod_id": 45,
            "qty": 500,
            "unit": "Gram",
            "rate": 125,
            "product_url": "pigeon-pea-500-g"
          },
          {
            "sub_prod_id": 164,
            "qty": 250,
            "unit": "Gram",
            "rate": 63,
            "product_url": "pigeon-pea-250-g"
          }
        ]
      },
      {
        "id": 22,
        "product_name": "Cowpea ( ચોળી )",
        "image": "product_images/Beans(Choli).jpg",
        "data": [
          {
            "sub_prod_id": 46,
            "qty": 1,
            "unit": "Kg",
            "rate": 180,
            "product_url": "cowpea-1-kg"
          },
          {
            "sub_prod_id": 47,
            "qty": 500,
            "unit": "Gram",
            "rate": 90,
            "product_url": "cowpea-500-g"
          },
          {
            "sub_prod_id": 48,
            "qty": 250,
            "unit": "Gram",
            "rate": 45,
            "product_url": "cowpea-250-g"
          }
        ]
      },
      {
        "id": 23,
        "product_name": "Surti Beans ( પાપડી )",
        "image": "product_images/Surti-Beans.jpg",
        "data": [
          {
            "sub_prod_id": 49,
            "qty": 1,
            "unit": "Kg",
            "rate": 210,
            "product_url": "surti-beans-1-kg"
          },
          {
            "sub_prod_id": 50,
            "qty": 500,
            "unit": "Gram",
            "rate": 100,
            "product_url": "surti-beans-500-g"
          },
          {
            "sub_prod_id": 165,
            "qty": 250,
            "unit": "Gram",
            "rate": 53,
            "product_url": "surti-beans-250-g"
          }
        ]
      }
    ]
  },
  {
    "category_name": "Chillies",
    "category_id": 3,
    "products": [
      {
        "id": 24,
        "product_name": "Sitara Chilli ( નાની મરચા )",
        "image": "product_images/Sitara-Chilli.jpg",
        "data": [
          {
            "sub_prod_id": 53,
            "qty": 500,
            "unit": "Gram",
            "rate": 40,
            "product_url": "sitara-chilli-500-g"
          },
          {
            "sub_prod_id": 54,
            "qty": 250,
            "unit": "Gram",
            "rate": 20,
            "product_url": "sitara-chilli-250-g"
          }
        ]
      },
      {
        "id": 25,
        "product_name": "Picador Chilli ( મોટી મરચા )",
        "image": "product_images/Picador-Chilli.jpg",
        "data": [
          {
            "sub_prod_id": 55,
            "qty": 500,
            "unit": "Gram",
            "rate": 55,
            "product_url": "picador-chilli-500-g"
          },
          {
            "sub_prod_id": 56,
            "qty": 250,
            "unit": "Gram",
            "rate": 28,
            "product_url": "picador-chilli-250-g"
          }
        ]
      },
      {
        "id": 26,
        "product_name": "Capsicum ( કેપ્સિકમ )",
        "image": "product_images/Capsicum-Green.jpg",
        "data": [
          {
            "sub_prod_id": 57,
            "qty": 1,
            "unit": "Kg",
            "rate": 110,
            "product_url": "capsicum-1-kg"
          },
          {
            "sub_prod_id": 58,
            "qty": 500,
            "unit": "Gram",
            "rate": 55,
            "product_url": "capsicum-500-g"
          },
          {
            "sub_prod_id": 59,
            "qty": 250,
            "unit": "Gram",
            "rate": 28,
            "product_url": "capsicum-250-g"
          }
        ]
      },
      {
        "id": 27,
        "product_name": "g 4 Chilli ( ઝીણી મરચા )",
        "image": "product_images/G4-Chilli.jpg",
        "data": [
          {
            "sub_prod_id": 60,
            "qty": 500,
            "unit": "Gram",
            "rate": 50,
            "product_url": "g-4-chilli-500-g"
          },
          {
            "sub_prod_id": 61,
            "qty": 250,
            "unit": "Gram",
            "rate": 25,
            "product_url": "g-4-chilli-250-g"
          }
        ]
      },
      {
        "id": 28,
        "product_name": "Big Green Chilli ( ફાફડા મરચા )",
        "image": "product_images/Big-green-chilli.jpg",
        "data": [
          {
            "sub_prod_id": 62,
            "qty": 500,
            "unit": "Gram",
            "rate": 38,
            "product_url": "big-green-chilli-500-g"
          },
          {
            "sub_prod_id": 63,
            "qty": 250,
            "unit": "Gram",
            "rate": 19,
            "product_url": "big-green-chilli-250-g"
          }
        ]
      }
    ]
  },
  {
    "category_name": "Leafy Vegetables",
    "category_id": 4,
    "products": [
      {
        "id": 29,
        "product_name": "Fenugreek Leaves Big ( મોટી મેથી )",
        "image": "product_images/Fenugreek-Leaves-Big.jpg",
        "data": [
          {
            "sub_prod_id": 64,
            "qty": 500,
            "unit": "Gram",
            "rate": 55,
            "product_url": "fenugreek-leaves-big-500-g"
          },
          {
            "sub_prod_id": 166,
            "qty": 1,
            "unit": "Kg",
            "rate": 110,
            "product_url": "fenugreek-leaves-big-1-kg"
          },
          {
            "sub_prod_id": 185,
            "qty": 250,
            "unit": "Gram",
            "rate": 28,
            "product_url": "fenugreek-leaves-big-250-g"
          }
        ]
      },
      {
        "id": 30,
        "product_name": "Fenugreek Leaves Small ( નાની મેથી )",
        "image": "product_images/Methi.jpg",
        "data": [
          {
            "sub_prod_id": 65,
            "qty": 1,
            "unit": "Kg",
            "rate": 95,
            "product_url": "fenugreek-leaves-small-1-kg"
          },
          {
            "sub_prod_id": 186,
            "qty": 500,
            "unit": "Gram",
            "rate": 48,
            "product_url": "fenugreek-leaves-small-500-g"
          },
          {
            "sub_prod_id": 187,
            "qty": 250,
            "unit": "Gram",
            "rate": 24,
            "product_url": "fenugreek-leaves-small-250-g"
          }
        ]
      },
      {
        "id": 31,
        "product_name": "Green onion ( લીલા કાંદા )",
        "image": "product_images/Green-onion.jpg",
        "data": [
          {
            "sub_prod_id": 66,
            "qty": 1,
            "unit": "Kg",
            "rate": 105,
            "product_url": "green-onion-1-kg"
          },
          {
            "sub_prod_id": 67,
            "qty": 500,
            "unit": "Gram",
            "rate": 53,
            "product_url": "green-onion-500-g"
          }
        ]
      },
      {
        "id": 34,
        "product_name": "Mint ( પૂદીનો )",
        "image": "product_images/pudino.jpg",
        "data": [
          {
            "sub_prod_id": 71,
            "qty": 1,
            "unit": "pcs",
            "rate": 35,
            "product_url": "mint-1-pcs"
          }
        ]
      },
      {
        "id": 35,
        "product_name": "Green Tea ( લીલી ચા )",
        "image": "product_images/Green-tea.jpg",
        "data": [
          {
            "sub_prod_id": 72,
            "qty": 1,
            "unit": "pcs",
            "rate": 35,
            "product_url": "green-tea-1-pcs"
          }
        ]
      },
      {
        "id": 36,
        "product_name": "Curry Leaves ( કડી લીમડો )",
        "image": "product_images/Curry-Leaves.jpg",
        "data": [
          {
            "sub_prod_id": 73,
            "qty": 1,
            "unit": "pcs",
            "rate": 30,
            "product_url": "curry-leaves-1-pcs"
          }
        ]
      },
      {
        "id": 37,
        "product_name": "Coriander Leaves ( કોથમીર )",
        "image": "product_images/Coriander-Leaf(Dhaniya).jpg",
        "data": [
          {
            "sub_prod_id": 74,
            "qty": 1,
            "unit": "pcs",
            "rate": 35,
            "product_url": "coriander-leaves-1-pcs"
          }
        ]
      }
    ]
  },
  {
    "category_name": "Brinjals",
    "category_id": 5,
    "products": [
      {
        "id": 41,
        "product_name": "Gulabi Brinjal ( ગુલાબી રીંગણ )",
        "image": "product_images/brinjal(began).jpg",
        "data": [
          {
            "sub_prod_id": 78,
            "qty": 1,
            "unit": "Kg",
            "rate": 110,
            "product_url": "gulabi-brinjal-1-kg"
          },
          {
            "sub_prod_id": 79,
            "qty": 500,
            "unit": "Gram",
            "rate": 55,
            "product_url": "gulabi-brinjal-500-g"
          },
          {
            "sub_prod_id": 167,
            "qty": 250,
            "unit": "Gram",
            "rate": 28,
            "product_url": "gulabi-brinjal-250-g"
          }
        ]
      },
      {
        "id": 42,
        "product_name": "Raw Brinjal ( લીલા રીંગણ )",
        "image": "product_images/Raw-Brinjal.jpg",
        "data": [
          {
            "sub_prod_id": 80,
            "qty": 1,
            "unit": "Kg",
            "rate": 80,
            "product_url": "raw-brinjal-1-kg"
          },
          {
            "sub_prod_id": 81,
            "qty": 500,
            "unit": "Gram",
            "rate": 40,
            "product_url": "raw-brinjal-500-g"
          },
          {
            "sub_prod_id": 168,
            "qty": 250,
            "unit": "Gram",
            "rate": 20,
            "product_url": "raw-brinjal-250-g"
          }
        ]
      },
      {
        "id": 44,
        "product_name": "King Brinjal ( ભરથા )",
        "image": "product_images/Bhartha-Brinjal.jpg",
        "data": [
          {
            "sub_prod_id": 84,
            "qty": 1,
            "unit": "Kg",
            "rate": 75,
            "product_url": "king-brinjal-1-kg"
          },
          {
            "sub_prod_id": 85,
            "qty": 500,
            "unit": "Gram",
            "rate": 38,
            "product_url": "king-brinjal-500-g"
          },
          {
            "sub_prod_id": 170,
            "qty": 250,
            "unit": "Gram",
            "rate": 19,
            "product_url": "king-brinjal-250-g"
          }
        ]
      }
    ]
  },
  {
    "category_name": "Tubers",
    "category_id": 6,
    "products": [
      {
        "id": 45,
        "product_name": "Yam ( રતાળુ )",
        "image": "product_images/yam.jpg",
        "data": [
          {
            "sub_prod_id": 86,
            "qty": 1,
            "unit": "Kg",
            "rate": 140,
            "product_url": "yam-1-kg"
          },
          {
            "sub_prod_id": 87,
            "qty": 500,
            "unit": "Gram",
            "rate": 70,
            "product_url": "yam-500-g"
          }
        ]
      },
      {
        "id": 46,
        "product_name": "Garlic ( લસણ )",
        "image": "product_images/Garlic.jpg",
        "data": [
          {
            "sub_prod_id": 88,
            "qty": 1,
            "unit": "Kg",
            "rate": 220,
            "product_url": "garlic-1-kg"
          },
          {
            "sub_prod_id": 89,
            "qty": 500,
            "unit": "Gram",
            "rate": 110,
            "product_url": "garlic-500-kg"
          },
          {
            "sub_prod_id": 90,
            "qty": 250,
            "unit": "Gram",
            "rate": 55,
            "product_url": "garlic-250-g"
          }
        ]
      },
      {
        "id": 47,
        "product_name": "Sweet potato ( સક્કરીયા )",
        "image": "product_images/sweet-poteto.jpg",
        "data": [
          {
            "sub_prod_id": 91,
            "qty": 1,
            "unit": "Kg",
            "rate": 60,
            "product_url": "sweet-potato-1-kg"
          },
          {
            "sub_prod_id": 92,
            "qty": 500,
            "unit": "Gram",
            "rate": 30,
            "product_url": "sweet-potato-500-g"
          }
        ]
      },
      {
        "id": 48,
        "product_name": "Ginger ( આદુ )",
        "image": "product_images/Ginger.jpg",
        "data": [
          {
            "sub_prod_id": 93,
            "qty": 500,
            "unit": "Gram",
            "rate": 70,
            "product_url": "ginger-500-g"
          },
          {
            "sub_prod_id": 94,
            "qty": 250,
            "unit": "Gram",
            "rate": 35,
            "product_url": "ginger-250-g"
          }
        ]
      },
      {
        "id": 49,
        "product_name": "Carrot ( ગાજર )",
        "image": "product_images/Carrot(Gajar).jpg",
        "data": [
          {
            "sub_prod_id": 95,
            "qty": 1,
            "unit": "Kg",
            "rate": 50,
            "product_url": "carrot-1-kg"
          },
          {
            "sub_prod_id": 96,
            "qty": 500,
            "unit": "Gram",
            "rate": 25,
            "product_url": "carrot-500-g"
          },
          {
            "sub_prod_id": 171,
            "qty": 250,
            "unit": "Gram",
            "rate": 13,
            "product_url": "carrot-250-g"
          }
        ]
      },
      {
        "id": 50,
        "product_name": "Taro ( અરવી )",
        "image": "product_images/taro.jpg",
        "data": [
          {
            "sub_prod_id": 97,
            "qty": 1,
            "unit": "Kg",
            "rate": 45,
            "product_url": "taro-1-kg"
          },
          {
            "sub_prod_id": 98,
            "qty": 500,
            "unit": "Gram",
            "rate": 23,
            "product_url": "taro-500-g"
          },
          {
            "sub_prod_id": 172,
            "qty": 250,
            "unit": "Gram",
            "rate": 12,
            "product_url": "taro-250-g"
          }
        ]
      },
      {
        "id": 51,
        "product_name": "Elephant Foot Yam ( સુરણ )",
        "image": "product_images/Elephant-Foot-Yam.jpg",
        "data": [
          {
            "sub_prod_id": 99,
            "qty": 1,
            "unit": "Kg",
            "rate": 55,
            "product_url": "elephant-foot-yam-1-kg"
          },
          {
            "sub_prod_id": 100,
            "qty": 500,
            "unit": "Gram",
            "rate": 28,
            "product_url": "elephant-foot-yam-500-g"
          }
        ]
      },
      {
        "id": 52,
        "product_name": "Potato ( બટાકા )",
        "image": "product_images/Poteto.jpg",
        "data": [
          {
            "sub_prod_id": 101,
            "qty": 1,
            "unit": "Kg",
            "rate": 60,
            "product_url": "potato-1-kg"
          },
          {
            "sub_prod_id": 102,
            "qty": 500,
            "unit": "Gram",
            "rate": 30,
            "product_url": "potato-500-g"
          }
        ]
      },
      {
        "id": 53,
        "product_name": "Dum Aloo ( નાના બટાકા )",
        "image": "product_images/Dum-Aloo.jpg",
        "data": [
          {
            "sub_prod_id": 103,
            "qty": 1,
            "unit": "Kg",
            "rate": 60,
            "product_url": "dum-aloo-1-kg"
          },
          {
            "sub_prod_id": 104,
            "qty": 500,
            "unit": "Gram",
            "rate": 30,
            "product_url": "dum-aloo-500-g"
          }
        ]
      },
      {
        "id": 54,
        "product_name": "Beetroot ( બીટ )",
        "image": "product_images/beetroot.jpg",
        "data": [
          {
            "sub_prod_id": 105,
            "qty": 1,
            "unit": "Kg",
            "rate": 35,
            "product_url": "beetroot-1-kg"
          },
          {
            "sub_prod_id": 106,
            "qty": 500,
            "unit": "Gram",
            "rate": 18,
            "product_url": "beetroot-500-g"
          },
          {
            "sub_prod_id": 173,
            "qty": 250,
            "unit": "Gram",
            "rate": 10,
            "product_url": "beetroot-250-g"
          }
        ]
      },
      {
        "id": 55,
        "product_name": "Pumpkin ( કદુ )",
        "image": "product_images/Pumpkin.jpg",
        "data": [
          {
            "sub_prod_id": 107,
            "qty": 1,
            "unit": "Kg",
            "rate": 40,
            "product_url": "pumpkin-1-kg"
          }
        ]
      },
      {
        "id": 56,
        "product_name": "Onion ( કાંદા )",
        "image": "product_images/Onion.jpg",
        "data": [
          {
            "sub_prod_id": 108,
            "qty": 1,
            "unit": "Kg",
            "rate": 35,
            "product_url": "onion-1-kg"
          },
          {
            "sub_prod_id": 109,
            "qty": 500,
            "unit": "Gram",
            "rate": 18,
            "product_url": "onion-500-g"
          }
        ]
      }
    ]
  },
  {
    "category_name": "Special",
    "category_id": 7,
    "products": [
      {
        "id": 57,
        "product_name": "Broccoli ( બ્રોકલી )",
        "image": "product_images/Broccoli.jpg",
        "data": [
          {
            "sub_prod_id": 125,
            "qty": 500,
            "unit": "Gram",
            "rate": 200,
            "product_url": "broccoli-500-g"
          },
          {
            "sub_prod_id": 126,
            "qty": 250,
            "unit": "Gram",
            "rate": 100,
            "product_url": "broccoli-250-g"
          }
        ]
      },
      {
        "id": 58,
        "product_name": "Red Capsicum ( લાલ કેપ્સિકમ )",
        "image": "product_images/Capsicum-Red.jpg",
        "data": [
          {
            "sub_prod_id": 110,
            "qty": 1,
            "unit": "Kg",
            "rate": 330,
            "product_url": "red-capsicum-1-kg"
          },
          {
            "sub_prod_id": 111,
            "qty": 500,
            "unit": "Gram",
            "rate": 165,
            "product_url": "red-capsicum-500-g"
          },
          {
            "sub_prod_id": 174,
            "qty": 250,
            "unit": "Gram",
            "rate": 83,
            "product_url": "red-capsicum-250-g"
          }
        ]
      },
      {
        "id": 59,
        "product_name": "Yellow Capsicum ( પીળા કેપ્સિકમ )",
        "image": "product_images/Capsicum-Yellow.jpg",
        "data": [
          {
            "sub_prod_id": 112,
            "qty": 1,
            "unit": "Kg",
            "rate": 330,
            "product_url": "yellow-capsicum-1-kg"
          },
          {
            "sub_prod_id": 113,
            "qty": 500,
            "unit": "Gram",
            "rate": 165,
            "product_url": "yellow-capsicum-500-g"
          },
          {
            "sub_prod_id": 175,
            "qty": 250,
            "unit": "Gram",
            "rate": 83,
            "product_url": "yellow-capsicum-250-g"
          }
        ]
      },
      {
        "id": 62,
        "product_name": "Mushroom ( મશરૂમ )",
        "image": "product_images/Mushroom.jpg",
        "data": [
          {
            "sub_prod_id": 118,
            "qty": 1,
            "unit": "pcs",
            "rate": 55,
            "product_url": "mushroom-200-g"
          }
        ]
      },
      {
        "id": 63,
        "product_name": "Babycorn ( બેબી કોર્ન )",
        "image": "product_images/baby-corn.jpg",
        "data": [
          {
            "sub_prod_id": 120,
            "qty": 1,
            "unit": "pcs",
            "rate": 45,
            "product_url": "babycorn-200-g"
          }
        ]
      },
      {
        "id": 64,
        "product_name": "Maize ( મકાઈ )",
        "image": "product_images/Corn(Makai).jpg",
        "data": [
          {
            "sub_prod_id": 123,
            "qty": 1,
            "unit": "Kg",
            "rate": 40,
            "product_url": "maize-1-pcs"
          },
          {
            "sub_prod_id": 177,
            "qty": 1,
            "unit": "pcs",
            "rate": 35,
            "product_url": "maize-1-pcs"
          }
        ]
      },
      {
        "id": 65,
        "product_name": "Kacha Papaya ( કાચા પપૈયા )",
        "image": "product_images/Kacha-Papaya.jpg",
        "data": [
          {
            "sub_prod_id": 122,
            "qty": 1,
            "unit": "Kg",
            "rate": 30,
            "product_url": "kacha-papaya-1-kg"
          },
          {
            "sub_prod_id": 178,
            "qty": 1,
            "unit": "pcs",
            "rate": 15,
            "product_url": "kacha-papaya-1-pcs"
          }
        ]
      },
      {
        "id": 66,
        "product_name": "Kacha Kela ( કાચા કેળા )",
        "image": "product_images/raw-banana.jpg",
        "data": [
          {
            "sub_prod_id": 127,
            "qty": 1,
            "unit": "Kg",
            "rate": 30,
            "product_url": "kacha-kela-1-kg"
          }
        ]
      }
    ]
  },
  {
    "category_name": "Fruits",
    "category_id": 8,
    "products": [
      {
        "id": 68,
        "product_name": "Shimla Apple ( સિમલા સફરજન )",
        "image": "product_images/simla-apple.jpg",
        "data": [
          {
            "sub_prod_id": 128,
            "qty": 1,
            "unit": "Kg",
            "rate": 300,
            "product_url": "shimla-apple-1-kg"
          },
          {
            "sub_prod_id": 129,
            "qty": 500,
            "unit": "Gram",
            "rate": 150,
            "product_url": "shimla-apple-500-g"
          }
        ]
      },
      {
        "id": 72,
        "product_name": "Pomegranate ( દાડમ )",
        "image": "product_images/Pomegranate.jpg",
        "data": [
          {
            "sub_prod_id": 134,
            "qty": 1,
            "unit": "Kg",
            "rate": 110,
            "product_url": "pomegranate-1-kg"
          },
          {
            "sub_prod_id": 135,
            "qty": 500,
            "unit": "Gram",
            "rate": 55,
            "product_url": "pomegranate-500-g"
          }
        ]
      },
      {
        "id": 73,
        "product_name": "Pineapple ( અનેનાસ )",
        "image": "product_images/Pineapple.jpg",
        "data": [
          {
            "sub_prod_id": 136,
            "qty": 1,
            "unit": "Kg",
            "rate": 80,
            "product_url": "pineapple-1-kg"
          },
          {
            "sub_prod_id": 137,
            "qty": 500,
            "unit": "Gram",
            "rate": 40,
            "product_url": "pineapple-500-g"
          }
        ]
      },
      {
        "id": 76,
        "product_name": "Papaya ( પપૈયા )",
        "image": "product_images/Papaya.jpg",
        "data": [
          {
            "sub_prod_id": 142,
            "qty": 1,
            "unit": "Kg",
            "rate": 45,
            "product_url": "papaya-1-kg"
          },
          {
            "sub_prod_id": 143,
            "qty": 500,
            "unit": "Gram",
            "rate": 25,
            "product_url": "papaya-500-g"
          }
        ]
      },
      {
        "id": 77,
        "product_name": "Banana ( કેળા )",
        "image": "product_images/banana.jpg",
        "data": [
          {
            "sub_prod_id": 144,
            "qty": 12,
            "unit": "pcs",
            "rate": 50,
            "product_url": "banana-12-pcs"
          },
          {
            "sub_prod_id": 145,
            "qty": 6,
            "unit": "pcs",
            "rate": 25,
            "product_url": "banana-6-pcs"
          }
        ]
      }
    ]
  }
]
// //#endregion

export const getProducts = async () => {
  var data = await Axios.get(`https://thehoop.in/admin/temp/hoop_product_new.php`).then(resp => {
    return resp.data.data;
  }).catch(e => {
    console.log('await e =>', e);
    return e;
  })
  return data;
}
