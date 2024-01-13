import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Item
 * Body
 * - Search
 * - ReastaurantContainer
 *   - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contract 
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>

  )
}

const resObj = [
  {
    "info": {
      "id": "781389",
      "name": "Mumma'S Kitchen",
      "cloudinaryImageId": "da34f1382cb97166f2bd96653bc70e1b",
      "locality": "Central Chittorgarh",
      "areaName": "Central Chittorgarh",
      "costForTwo": "₹199 for two",
      "cuisines": [
        "North Indian",
        "Snacks"
      ],
      "veg": true,
      "parentId": "14861",
      "avgRatingString": "NEW",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-22 22:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-12de93e2-b5a8-4e01-8f9e-4073a45f867e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mummas-kitchen-central-chittorgarh-chittorgarh-781389",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "216009",
      "name": "Aagha Nonveg & Veg Restaurant",
      "cloudinaryImageId": "yjablt7cow8avo820dpl",
      "locality": "Kacchi Basti",
      "areaName": "Central Chittorgarh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Biryani"
      ],
      "avgRating": 4,
      "parentId": "25440",
      "avgRatingString": "4.0",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-22 22:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-12de93e2-b5a8-4e01-8f9e-4073a45f867e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/aagha-nonveg-and-veg-restaurant-kacchi-basti-central-chittorgarh-chittorgarh-216009",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "685360",
      "name": "The Muni Cafestro",
      "cloudinaryImageId": "54e901ad7b59263a080bd7d0b887d305",
      "locality": "Sethu Marg",
      "areaName": "Central Chittorgarh",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Beverages",
        "North Indian",
        "Chinese",
        "Italian-American",
        "Mexican",
        "Fast Food",
        "Kebabs",
        "Snacks"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "408822",
      "avgRatingString": "4.4",
      "totalRatingsString": "4",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-22 22:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-12de93e2-b5a8-4e01-8f9e-4073a45f867e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-muni-cafestro-sethu-marg-central-chittorgarh-chittorgarh-685360",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "223705",
      "name": "Jain Food Court",
      "cloudinaryImageId": "bcnzguzi7pi0m1jimuup",
      "locality": "Bhilwara Road",
      "areaName": "Central Chittorgarh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Thalis"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "108884",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-22 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-12de93e2-b5a8-4e01-8f9e-4073a45f867e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/jain-food-court-bhilwara-road-central-chittorgarh-chittorgarh-223705",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "648825",
      "name": "The Aroma Cafe",
      "cloudinaryImageId": "fbcc610f795d3cdf197e94b930c3d1e9",
      "locality": "Maharana Pratap Setu Marg",
      "areaName": "Gandhi Nagar",
      "costForTwo": "₹199 for two",
      "cuisines": [
        "Pizzas",
        "Chinese",
        "Fast Food",
        "Italian"
      ],
      "avgRating": 3.2,
      "veg": true,
      "parentId": "204744",
      "avgRatingString": "3.2",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 0.3,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "0.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-22 21:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-12de93e2-b5a8-4e01-8f9e-4073a45f867e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-aroma-cafe-maharana-pratap-setu-marg-gandhi-nagar-chittorgarh-648825",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "685811",
      "name": "Pizza Burst",
      "cloudinaryImageId": "d1f427e88dde5cc6fb1a6eae2f56a700",
      "locality": "Mundara Complex",
      "areaName": "Central Chittorgarh",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Salads",
        "Burgers",
        "Snacks"
      ],
      "avgRating": 3.2,
      "veg": true,
      "parentId": "158394",
      "avgRatingString": "3.2",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-22 22:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹250 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-12de93e2-b5a8-4e01-8f9e-4073a45f867e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-burst-mundara-complex-central-chittorgarh-chittorgarh-685811",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "180987",
      "name": "Ashirwad Dining Hall",
      "cloudinaryImageId": "v6qgan0vcu0s0fssvnk6",
      "locality": "Station Road",
      "areaName": "Central Chittorgarh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "36831",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 4.2,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "4.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-22 22:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-12de93e2-b5a8-4e01-8f9e-4073a45f867e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ashirwad-dining-hall-station-road-central-chittorgarh-chittorgarh-180987",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "181637",
      "name": "Meera restaurant",
      "cloudinaryImageId": "cwxrqxlyphejmlloimhf",
      "locality": "Chittorgarh",
      "areaName": "Central Chittorgarh",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 4,
      "parentId": "134749",
      "avgRatingString": "4.0",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "34 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-22 22:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-12de93e2-b5a8-4e01-8f9e-4073a45f867e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/meera-restaurant-central-chittorgarh-chittorgarh-181637",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "457503",
      "name": "Jai Bhavani Vadapav",
      "cloudinaryImageId": "h3gqhktkhxfbnjejaufj",
      "locality": "Chandan Pura",
      "areaName": "Central Chittorgarh",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian",
        "Burgers",
        "Pizzas"
      ],
      "avgRating": 3.9,
      "veg": true,
      "parentId": "108382",
      "avgRatingString": "3.9",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-22 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹250 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-12de93e2-b5a8-4e01-8f9e-4073a45f867e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/jai-bhavani-vadapav-chandan-pura-central-chittorgarh-chittorgarh-457503",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const RestaurantCard = (props) => {
  const { resData } =props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
          resData.info.cloudinaryImageId
       }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRatingString}</h4>
      <h4>{resData.info.sla.deliveryTime}</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
       ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);