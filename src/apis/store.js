import { HOST_API } from "../shared/constants";

const Axios = require("axios");

export const fetchStores = async (location) => {
  // var data = await Axios.get(`${HOST_API}/Customer/getNearbyStores?lat=${location.latitude}&lon=${location.longitude}`).then(resp => {
  var data = await Axios.get(`${HOST_API}/Customer/getNearbyStores?lat=21.1637734&lon=72.79919720000001`).then(resp => {
    return resp.data.data;
  }).catch(e => {
    console.log('e =>', e);
  })
  return data;

}

export const fetchStoreCategories = async (slug) => {
  var data = await Axios.get(`${HOST_API}/customer/getStoreCategories?store=${slug}`).then(resp => {
    return resp.data.data;
  }).catch(e => {
    console.log('e =>', e);
  })
  return data;

}

export const fetchStoreBySlug = async (slug) => {
  var data = await Axios.get(`${HOST_API}/customer/getStoreCategories?store=${slug}`).then(resp => {
    return {
      "status": 200,
      "message": "OK",
      "data": {
        "id": null,
        "store_name": null,
        "slug": null,
        "image": "https://hoopstore.in/",
        "categories": [
          {
            "category_id": 2,
            "name": "Vegetable",
            "desc": null,
            "img": "https://hoopstore.in/uploads/categories/1/5f61e4ad88a88.png",
            "sub_categories": [
              {
                "sub_category_id": 3,
                "sub_category_name": "Leafy green",
                "sub_category_desc": null,
                "sub_category_slug": "Leafy green",
                "products": [
                  {
                    "id": 2,
                    "name": "Lettuce",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  },
                  {
                    "id": 2,
                    "name": "Spinach",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
              {
                "sub_category_id": 3,
                "sub_category_name": "Cruciferous",
                "sub_category_desc": null,
                "sub_category_slug": "Cruciferous",
                "products": [
                  {
                    "id": 2,
                    "name": "Cabbage",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  },
                  {
                    "id": 2,
                    "name": "Cauliflower",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
              {
                "sub_category_id": 3,
                "sub_category_name": "Marrow",
                "sub_category_desc": null,
                "sub_category_slug": "Marrow",
                "products": [
                  {
                    "id": 2,
                    "name": "pumpkin",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  },
                  {
                    "id": 2,
                    "name": "Cucumber",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
              {
                "sub_category_id": 3,
                "sub_category_name": "Root",
                "sub_category_desc": null,
                "sub_category_slug": "Root",
                "products": [
                  {
                    "id": 2,
                    "name": "Potato",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  },
                  {
                    "id": 2,
                    "name": "Sweet potato",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            "category_id": 3,
            "name": "Italian",
            "desc": null,
            "img": "https://hoopstore.in/uploads/categories/1/5f606a723fc2d.png",
            "sub_categories": [
              {
                "sub_category_id": 3,
                "sub_category_name": "Pasta",
                "sub_category_desc": null,
                "sub_category_slug": "pasta",
                "products": [
                  {
                    "id": 2,
                    "name": "Red Sauce Pasta",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
              {
                "sub_category_id": 3,
                "sub_category_name": "Pasta",
                "sub_category_desc": null,
                "sub_category_slug": "pasta",
                "products": [
                  {
                    "id": 2,
                    "name": "Red Sauce Pasta",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
              {
                "sub_category_id": 3,
                "sub_category_name": "Pasta",
                "sub_category_desc": null,
                "sub_category_slug": "pasta",
                "products": [
                  {
                    "id": 2,
                    "name": "Red Sauce Pasta",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
              {
                "sub_category_id": 3,
                "sub_category_name": "Pasta",
                "sub_category_desc": null,
                "sub_category_slug": "pasta",
                "products": [
                  {
                    "id": 2,
                    "name": "Red Sauce Pasta",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
            ]
          },
          {
            "category_id": 4,
            "name": "Chinese",
            "desc": null,
            "img": "https://hoopstore.in/uploads/categories/1/5f69ff2d1bb88.png",
            "sub_categories": [
              {
                "sub_category_id": 3,
                "sub_category_name": "Pasta",
                "sub_category_desc": null,
                "sub_category_slug": "pasta",
                "products": [
                  {
                    "id": 2,
                    "name": "Red Sauce Pasta",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
              {
                "sub_category_id": 3,
                "sub_category_name": "Pasta",
                "sub_category_desc": null,
                "sub_category_slug": "pasta",
                "products": [
                  {
                    "id": 2,
                    "name": "Red Sauce Pasta",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
              {
                "sub_category_id": 3,
                "sub_category_name": "Pasta",
                "sub_category_desc": null,
                "sub_category_slug": "pasta",
                "products": [
                  {
                    "id": 2,
                    "name": "Red Sauce Pasta",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
              {
                "sub_category_id": 3,
                "sub_category_name": "Pasta",
                "sub_category_desc": null,
                "sub_category_slug": "pasta",
                "products": [
                  {
                    "id": 2,
                    "name": "Red Sauce Pasta",
                    "desc": null,
                    "data": [
                      {
                        "sub_prod_id": 4,
                        "qty": 1,
                        "uom": "SMALL PLATE",
                        "rate": 100,
                        "product_url": "red-sauce-pasta-1-small-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a013849df4.png"
                      },
                      {
                        "sub_prod_id": 5,
                        "qty": 1,
                        "uom": "REGULAR PLATE",
                        "rate": 130,
                        "product_url": "red-sauce-pasta-1-regular-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a015d88d00.png"
                      },
                      {
                        "sub_prod_id": 6,
                        "qty": 1,
                        "uom": "LARGE PLATE",
                        "rate": 160,
                        "product_url": "red-sauce-pasta-1-large-plate",
                        "discount": 0,
                        "img": "https://hoopstore.in/uploads/items/1/3/3/2/5f6a0165c133f.png"
                      }
                    ]
                  }
                ]
              },
            ]
          }
        ]
      }
    };
  }).catch(e => {
    console.log('e =>', e);
  })
  return data;

}
