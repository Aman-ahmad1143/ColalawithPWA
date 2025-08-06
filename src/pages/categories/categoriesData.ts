export interface SubCategory {
  id: number;
  name: string;
  image: string;
  productCount: number;
}

export interface SubCategoryGroup {
  id: number;
  groupName: string;
  subcategories: SubCategory[];
}

export interface Category {
  id: number;
  name: string;
  productCount: number;
  image: string;
  type: 'product' | 'service';
  subcategoryGroups: SubCategoryGroup[];
}

export const categoriesData: Category[] = [
  {
    id: 1,
    name: "Phones & Tablets",
    productCount: 500,
    image: "/Phone_Tablet.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 1001,
        groupName: "Mobile Phones",
        subcategories: [
          { id: 101, name: "Smartphones", image: "/Phone_Tablet.png", productCount: 26 },
          { id: 102, name: "Basic Phones", image: "/Phone_Tablet.png", productCount: 26 },
          { id: 103, name: "Smartphones", image: "/Phone_Tablet.png", productCount: 26 }
        ]
      },
      {
        id: 1002,
        groupName: "Tablets",
        subcategories: [
          { id: 201, name: "Android Tablets", image: "/Phone_Tablet.png", productCount: 26 },
          { id: 202, name: "Educational Tablets", image: "/Phone_Tablet.png", productCount: 26 },
          { id: 203, name: "iPads", image: "/Phone_Tablet.png", productCount: 26 },
          { id: 204, name: "Accessories", image: "/Phone_Tablet.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Fashion",
    productCount: 500,
    image: "/Cat_Fashion.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 2001,
        groupName: "Clothing",
        subcategories: [
          { id: 301, name: "Men's Wear", image: "/fashion.png", productCount: 26 },
          { id: 302, name: "Women's Wear", image: "/Cat_Fashion.png", productCount: 26 },
          { id: 303, name: "Kids Wear", image: "/fashion.png", productCount: 26 }
        ]
      },
      {
        id: 2002,
        groupName: "Accessories",
        subcategories: [
          { id: 401, name: "Bags", image: "/fashion.png", productCount: 26 },
          { id: 402, name: "Jewelry", image: "/fashion.png", productCount: 26 },
          { id: 403, name: "Watches", image: "/fashion.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Home & Office",
    productCount: 500,
    image: "/Home.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 3001,
        groupName: "Home",
        subcategories: [
          { id: 501, name: "Furniture", image: "/Home.png", productCount: 26 },
          { id: 502, name: "Decor", image: "/Home.png", productCount: 26 },
          { id: 503, name: "Kitchen", image: "/Home.png", productCount: 26 }
        ]
      },
      {
        id: 3002,
        groupName: "Office",
        subcategories: [
          { id: 601, name: "Office Supplies", image: "/Home.png", productCount: 26 },
          { id: 602, name: "Stationery", image: "/Home.png", productCount: 26 },
          { id: 603, name: "Equipment", image: "/Home.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Electronics",
    productCount: 500,
    image: "/Electronic.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 4001,
        groupName: "Audio & Video",
        subcategories: [
          { id: 701, name: "Audio", image: "/Electronic.png", productCount: 26 },
          { id: 702, name: "TV & Video", image: "/Electronic.png", productCount: 26 },
          { id: 703, name: "Cameras", image: "/camera.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Computing",
    productCount: 500,
    image: "/Computing.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 5001,
        groupName: "Computers",
        subcategories: [
          { id: 801, name: "Laptops", image: "/Computing.png", productCount: 26 },
          { id: 802, name: "Desktop PCs", image: "/Computing.png", productCount: 26 },
          { id: 803, name: "Accessories", image: "/Computing.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Grocery",
    productCount: 500,
    image: "/Grocery.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 6001,
        groupName: "Food",
        subcategories: [
          { id: 901, name: "Fresh Produce", image: "/Grocery.png", productCount: 26 },
          { id: 902, name: "Packaged Foods", image: "/Grocery.png", productCount: 26 },
          { id: 903, name: "Beverages", image: "/Grocery.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Automobiles",
    productCount: 500,
    image: "/AutoMobile.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 7001,
        groupName: "Vehicles",
        subcategories: [
          { id: 1001, name: "Cars", image: "/AutoMobile.png", productCount: 26 },
          { id: 1002, name: "Parts", image: "/AutoMobile.png", productCount: 26 },
          { id: 1003, name: "Accessories", image: "/AutoMobile.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Garden & Outdoors",
    productCount: 500,
    image: "/Garden.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 8001,
        groupName: "Garden",
        subcategories: [
          { id: 1101, name: "Plants", image: "/Garden.png", productCount: 26 },
          { id: 1102, name: "Tools", image: "/Garden.png", productCount: 26 },
          { id: 1103, name: "Furniture", image: "/Garden.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Gaming",
    productCount: 500,
    image: "/Gaming.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 9001,
        groupName: "Gaming",
        subcategories: [
          { id: 1201, name: "Consoles", image: "/Gaming.png", productCount: 26 },
          { id: 1202, name: "Games", image: "/Gaming.png", productCount: 26 },
          { id: 1203, name: "Accessories", image: "/Gaming.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Sporting Goods",
    productCount: 500,
    image: "/Sports.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 10001,
        groupName: "Sports",
        subcategories: [
          { id: 1301, name: "Fitness", image: "/Sports.png", productCount: 26 },
          { id: 1302, name: "Outdoor Sports", image: "/Sports.png", productCount: 26 },
          { id: 1303, name: "Team Sports", image: "/Sports.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 11,
    name: "Baby Products",
    productCount: 500,
    image: "/Baby.png",
    type: "product",
    subcategoryGroups: [
      {
        id: 11001,
        groupName: "Baby",
        subcategories: [
          { id: 1401, name: "Clothing", image: "/Baby.png", productCount: 26 },
          { id: 1402, name: "Toys", image: "/Baby.png", productCount: 26 },
          { id: 1403, name: "Feeding", image: "/Baby.png", productCount: 26 }
        ]
      }
    ]
  },
  {
    id: 12,
    name: "Services",
    productCount: 20,
    image: "/services.png",
    type: "service",
    subcategoryGroups: [
      {
        id: 12001,
        groupName: "Services",
        subcategories: [
          { id: 1501, name: "Home Services", image: "/services.png", productCount: 20 },
          { id: 1502, name: "Professional", image: "/services.png", productCount: 20 },
          { id: 1503, name: "Personal", image: "/services.png", productCount: 20 }
        ]
      }
    ]
  }
];
