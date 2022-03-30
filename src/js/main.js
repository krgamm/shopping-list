/* Global Variables */
let inventoryData = [
  {
    id: 1,
    itemName: "Bagels",
    category: "Grains",
  },
  {
    id: 2,
    itemName: "Bread",
    category: "Grains",
  },
  {
    id: 3,
    itemName: "Bread rolls",
    category: "Grains",
  },
  {
    id: 4,
    itemName: "Buns",
    category: "Grains",
  },
  {
    id: 5,
    itemName: "Doughnuts",
    category: "Grains",
  },
  {
    id: 6,
    itemName: "Tortilla wraps",
    category: "Grains",
  },
  {
    id: 7,
    itemName: "Cereal",
    category: "Grains",
  },
  {
    id: 8,
    itemName: "Pasta",
    category: "Grains",
  },
  {
    id: 9,
    itemName: "Rice",
    category: "Grains",
  },
  {
    id: 10,
    itemName: "Apples",
    category: "Fruit",
  },
  {
    id: 11,
    itemName: "Apricots",
    category: "Fruit",
  },
  {
    id: 12,
    itemName: "Avocados",
    category: "Fruit",
  },
  {
    id: 13,
    itemName: "Bananas",
    category: "Fruit",
  },
  {
    id: 14,
    itemName: "Blackberries",
    category: "Fruit",
  },
  {
    id: 15,
    itemName: "Cherries",
    category: "Fruit",
  },
  {
    id: 16,
    itemName: "Grapes",
    category: "Fruit",
  },
  {
    id: 17,
    itemName: "Grapefruit",
    category: "Fruit",
  },
  {
    id: 18,
    itemName: "Kiwi",
    category: "Fruit",
  },
  {
    id: 19,
    itemName: "Lemons",
    category: "Fruit",
  },
  {
    id: 20,
    itemName: "Limes",
    category: "Fruit",
  },
  {
    id: 21,
    itemName: "Mangos",
    category: "Fruit",
  },
  {
    id: 22,
    itemName: "Oranges",
    category: "Fruit",
  },
  {
    id: 23,
    itemName: "Peaches",
    category: "Fruit",
  },
  {
    id: 24,
    itemName: "Pears",
    category: "Fruit",
  },
  {
    id: 25,
    itemName: "Plums",
    category: "Fruit",
  },
  {
    id: 26,
    itemName: "Pineapples",
    category: "Fruit",
  },
  {
    id: 27,
    itemName: "Raspberries",
    category: "Fruit",
  },
  {
    id: 28,
    itemName: "Strawberries",
    category: "Fruit",
  },
  {
    id: 29,
    itemName: "Watermelons",
    category: "Fruit",
  },
  {
    id: 30,
    itemName: "Bacon",
    category: "Meat",
  },
  {
    id: 31,
    itemName: "Beef",
    category: "Meat",
  },
  {
    id: 32,
    itemName: "Chicken",
    category: "Meat",
  },
  {
    id: 33,
    itemName: "Duck",
    category: "Meat",
  },
  {
    id: 34,
    itemName: "Fish",
    category: "Meat",
  },
  {
    id: 35,
    itemName: "Goose",
    category: "Meat",
  },
  {
    id: 36,
    itemName: "Ham",
    category: "Meat",
  },
  {
    id: 37,
    itemName: "Lamb",
    category: "Meat",
  },
  {
    id: 38,
    itemName: "Oysters",
    category: "Meat",
  },
  {
    id: 39,
    itemName: "Pork",
    category: "Meat",
  },
  {
    id: 40,
    itemName: "Turkey",
    category: "Meat",
  },
  {
    id: 41,
    itemName: "Crisps",
    category: "Snacks",
  },
  {
    id: 42,
    itemName: "Dried fruit",
    category: "Snacks",
  },
  {
    id: 43,
    itemName: "Gum",
    category: "Snacks",
  },
  {
    id: 44,
    itemName: "Nuts",
    category: "Snacks",
  },
  {
    id: 45,
    itemName: "Salsa",
    category: "Snacks",
  },
  {
    id: 46,
    itemName: "Butter",
    category: "Dairy",
  },
  {
    id: 47,
    itemName: "Cottage cheese",
    category: "Dairy",
  },
  {
    id: 48,
    itemName: "Cheese",
    category: "Dairy",
  },
  {
    id: 49,
    itemName: "Milk",
    category: "Dairy",
  },
  {
    id: 50,
    itemName: "Yogurt",
    category: "Dairy",
  },
  {
    id: 51,
    itemName: "Aubergines",
    category: "Vegetables",
  },
  {
    id: 52,
    itemName: "Beans",
    category: "Vegetables",
  },
  {
    id: 53,
    itemName: "Beetroot",
    category: "Vegetables",
  },
  {
    id: 54,
    itemName: "Broccoli",
    category: "Vegetables",
  },
  {
    id: 55,
    itemName: "Brussel’s sprouts",
    category: "Vegetables",
  },
  {
    id: 56,
    itemName: "Cabbage",
    category: "Vegetables",
  },
  {
    id: 57,
    itemName: "Carrots",
    category: "Vegetables",
  },
  {
    id: 58,
    itemName: "Garlic",
    category: "Vegetables",
  },
  {
    id: 59,
    itemName: "Ginger",
    category: "Vegetables",
  },
  {
    id: 60,
    itemName: "Lettuce",
    category: "Vegetables",
  },
  {
    id: 61,
    itemName: "Onions",
    category: "Vegetables",
  },
  {
    id: 62,
    itemName: "Peppers",
    category: "Vegetables",
  },
  {
    id: 63,
    itemName: "Potatoes",
    category: "Vegetables",
  },
  {
    id: 64,
    itemName: "Radishes",
    category: "Vegetables",
  },
  {
    id: 65,
    itemName: "Spinach",
    category: "Vegetables",
  },
  {
    id: 66,
    itemName: "Sweetcorn",
    category: "Vegetables",
  },
  {
    id: 67,
    itemName: "Tomatoes",
    category: "Vegetables",
  },
  {
    id: 68,
    itemName: "Biscuits",
    category: "Sweets",
  },
  {
    id: 69,
    itemName: "Brownies",
    category: "Sweets",
  },
  {
    id: 70,
    itemName: "Chocolate",
    category: "Sweets",
  },
  {
    id: 71,
    itemName: "Cake",
    category: "Sweets",
  },
  {
    id: 72,
    itemName: "Cookies",
    category: "Sweets",
  },
  {
    id: 73,
    itemName: "Honey",
    category: "Sweets",
  },
  {
    id: 74,
    itemName: "Jam",
    category: "Sweets",
  },
  {
    id: 75,
    itemName: "Maple syrup",
    category: "Sweets",
  },
  {
    id: 76,
    itemName: "Sweets",
    category: "Sweets",
  },
  {
    id: 77,
    itemName: "Waffles",
    category: "Sweets",
  },
  {
    id: 78,
    itemName: "Alcohol",
    category: "Drinks",
  },
  {
    id: 79,
    itemName: "Cocoa",
    category: "Drinks",
  },
  {
    id: 80,
    itemName: "Coffee",
    category: "Drinks",
  },
  {
    id: 81,
    itemName: "Juice",
    category: "Drinks",
  },
  {
    id: 82,
    itemName: "Soda drinks",
    category: "Drinks",
  },
  {
    id: 83,
    itemName: "Tea",
    category: "Drinks",
  },
  {
    id: 84,
    itemName: "Water",
    category: "Drinks",
  },
  {
    id: 85,
    itemName: "Basil",
    category: "Seasoning",
  },
  {
    id: 86,
    itemName: "BBQ seasoning",
    category: "Seasoning",
  },
  {
    id: 87,
    itemName: "Cinnamon",
    category: "Seasoning",
  },
  {
    id: 88,
    itemName: "Cumin",
    category: "Seasoning",
  },
  {
    id: 89,
    itemName: "Curry powder",
    category: "Seasoning",
  },
  {
    id: 90,
    itemName: "Garlic powder",
    category: "Seasoning",
  },
  {
    id: 91,
    itemName: "Oregano",
    category: "Seasoning",
  },
  {
    id: 92,
    itemName: "Paprika",
    category: "Seasoning",
  },
  {
    id: 93,
    itemName: "Parsley",
    category: "Seasoning",
  },
  {
    id: 94,
    itemName: "Pepper",
    category: "Seasoning",
  },
  {
    id: 95,
    itemName: "Poppy seed",
    category: "Seasoning",
  },
  {
    id: 96,
    itemName: "Rosemary",
    category: "Seasoning",
  },
  {
    id: 97,
    itemName: "Sage",
    category: "Seasoning",
  },
  {
    id: 98,
    itemName: "Salt",
    category: "Seasoning",
  },
  {
    id: 99,
    itemName: "Vanilla",
    category: "Seasoning",
  },
  {
    id: 100,
    itemName: "Thyme",
    category: "Seasoning",
  },
  {
    id: 101,
    itemName: "Bath/shower gel",
    category: "Personal Care",
  },
  {
    id: 102,
    itemName: "Feminine products",
    category: "Personal Care",
  },
  {
    id: 103,
    itemName: "Lotion",
    category: "Personal Care",
  },
  {
    id: 104,
    itemName: "Shaving cream",
    category: "Personal Care",
  },
  {
    id: 105,
    itemName: "Shampoo",
    category: "Personal Care",
  },
  {
    id: 106,
    itemName: "Soap",
    category: "Personal Care",
  },
  {
    id: 107,
    itemName: "Sunscreen",
    category: "Personal Care",
  },
  {
    id: 108,
    itemName: "Tissues",
    category: "Personal Care",
  },
  {
    id: 109,
    itemName: "Toilet tissue",
    category: "Personal Care",
  },
  {
    id: 110,
    itemName: "Ice Cream",
    category: "Dessert",
  },
  {
    id: 111,
    itemName: "Whipped Cream",
    category: "Sweets",
  },
  {
    id: 112,
    itemName: "Sprinkles",
    category: "Baking",
  },
];
let userInventoryList = [
  {
    id: 49,
    itemName: "Milk",
    category: "Dairy",
  },
  {
    id: 110,
    itemName: "Ice Cream",
    category: "Sweets",
  },
  {
    id: 111,
    itemName: "Whipped Cream",
    category: "Sweets",
  },
  {
    id: 112,
    itemName: "Sprinkles",
    category: "Baking",
  },
];
let displayList = [];
let selectedList = [];

/* DOM Elements */
let addBtnEl = document.querySelector(".button__add");
let userInputItemEl = document.querySelector(".search-bar__item");
let userInputCategoryEl = document.querySelector(".search-bar__category");
let searchBarEl = document
  .querySelector(".search-bar")
  .querySelectorAll("input");
document.querySelector(".search-bar__category").value = "Misc";

/* New Item Constructor */
function Item(id, name, category, checked = 0) {
  this.id = id;
  this.itemName = name;
  this.category = category;
  this.checked = checked;
}

/* Helper Functions */
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/* Main Functions */
function sortCategories() {
  displayList = [];

  //Finds unique categories from User input
  let categories = [
    ...new Set(userInventoryList.map(({ category }) => category)),
  ];

  //Organize new object by category
  categories.forEach((element) => {
    displayList.push(
      userInventoryList.filter((item) => item.category == element)
    );
  });

  const shoppingListEl = document.querySelector("#shopping-list");
  removeAllChildNodes(shoppingListEl);
  // Constructing DOM elements to append
  displayList.forEach((e) => {
    const categoryGroup = document.createElement("div");
    categoryGroup.setAttribute("class", "category-group");
    const dividerHorizontal = document.createElement("div");
    dividerHorizontal.setAttribute("class", "divider-horizontal");
    const categoryName = document.createElement("h1");
    categoryName.innerText = e[0].category;
    categoryGroup.append(categoryName);
    categoryGroup.appendChild(dividerHorizontal);

    // Iterate over each item and construct DOM styling
    e.forEach((e) => {
      const checkmarkGroup = document.createElement("div");
      checkmarkGroup.setAttribute("class", "checkmark-group");
      const checkmarkIcon = document.createElement("img");
      checkmarkIcon.src = "/assets/checkmark.svg";
      checkmarkIcon.setAttribute("class", "checkmark-icon display-helper");
      const circle = document.createElement("div");
      circle.setAttribute("class", "circle");
      const itemName = document.createElement("h2");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = e.itemName;

      const iconWrapper = document.createElement("div");
      iconWrapper.setAttribute("class", "icon-wrapper");
      const closeIcon = document.createElement("img");
      closeIcon.src = "/assets/close.svg";
      closeIcon.setAttribute("class", "close-icon");
      const itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "item");
      itemContainer.setAttribute("id", e.id);

      itemName.addEventListener("click", checkItemToggle);
      checkmarkGroup.addEventListener("click", checkItemToggle);
      iconWrapper.addEventListener("click", removeItem);

      itemContainer.appendChild(checkmarkGroup);
      checkmarkGroup.appendChild(checkmarkIcon);
      checkmarkGroup.appendChild(circle);
      itemContainer.appendChild(itemName);
      itemContainer.appendChild(iconWrapper);
      iconWrapper.appendChild(closeIcon);
      categoryGroup.appendChild(itemContainer);
    });

    shoppingListEl.appendChild(categoryGroup);
  });
  // Assign active class to checked items
  selectedList.forEach((item) => {
    let id = item.id;
    let itemEl = document.getElementById(`${id}`);
    itemEl.classList.toggle("item-active");
  });
  // Shopping List empty state
  if (userInventoryList.length === 0) {
    const shoppingListEl = document.querySelector("#shopping-list");
    const emptyStateH1 = document.createElement("h1");
    emptyStateH1.innerText = "Shopping list is empty";
    emptyStateH1.setAttribute("style", "margin: 0 auto");
    shoppingListEl.appendChild(emptyStateH1);
  }
}
sortCategories();

function compareItem() {
  let userInputItem = userInputItemEl.value;
  let userInputCategory = userInputCategoryEl.value;

  if (userInputItem === "") {
    alert("Item Name Required");
  } else {
    // Checking if item exitsts by comparing data with user input
    let itemNames = [...new Set(inventoryData.map(({ itemName }) => itemName))];
    let inputNames = [
      ...new Set(userInventoryList.map(({ itemName }) => itemName)),
    ];
    if (itemNames.indexOf(userInputItem) === -1) {
      let newItem = new Item(
        inventoryData.length + 1,
        userInputItem,
        userInputCategory
      );
      storeItem(newItem);
    } else if (inputNames.indexOf(userInputItem) === -1) {
      let itemLocation = itemNames.indexOf(userInputItem);
      let existObj = inventoryData[itemLocation];
      addItem(existObj);
    }
  }
}

// Add button and "Enter" key functionality
addBtnEl.addEventListener("click", compareItem);
searchBarEl.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
      event.preventDefault();
      addBtnEl.click();
    }
  });
});

function addItem(item) {
  userInventoryList.push(item);
  sortCategories();
}
function storeItem(item) {
  inventoryData.push(item);
  addItem(item);
}
function removeItem(e) {
  let parentItem;

  // Gets correct parent element id
  switch (e.target.getAttribute("class")) {
    case "icon-wrapper":
      parentItem = e.target.parentElement;

      break;
    case "close-icon":
      parentItem = e.target.parentElement.parentElement;
  }
  let idEl = parentItem.getAttribute("id");

  //Remove from DOM
  parentItem.remove();

  // Remove from user inventory and display list
  let itemIndex = userInventoryList.findIndex((item) => item.id == idEl);
  userInventoryList.splice(itemIndex, 1);
  displayList.forEach((category) => {
    itemIndex = category.findIndex((item) => item.id == idEl);
    category.splice(itemIndex, 1);
  });
  sortCategories();
}

function checkItemToggle(e) {
  let selectedId;
  let parentItem;
  if (
    e.target.getAttribute("class") === "icon-wrapper" ||
    e.target.getAttribute("class") === "close-icon"
  ) {
    switch (e.target.getAttribute("class")) {
      case "icon-wrapper":
        parentItem = e.target.parentElement;
        break;
      case "close-icon":
        parentItem = e.target.parentElement.parentElement;
    }
    selectedId = parentItem.getAttribute("id");
    updateSelectedList(selectedId, e);
  } else {
    switch (e.target.getAttribute("class")) {
      case "item-name":
        parentItem = e.target.parentElement;
        break;
      case "circle":
        parentItem = e.target.parentElement.parentElement;
        break;
      case "checkmark-icon display-helper":
        parentItem = e.target.parentElement.parentElement;
        break;
      case "checkmark-group":
        parentItem = e.target.parentElement;
    }
    selectedId = parentItem.getAttribute("id");
    parentItem.classList.toggle("item-active");
    updateSelectedList(selectedId, e);
  }
}

function updateSelectedList(selectedItemId, e) {
  let retrieveObj = inventoryData[selectedItemId - 1];
  let getIndex = selectedList.indexOf(retrieveObj);

  if (
    e.target.getAttribute("class") === "icon-wrapper" ||
    e.target.getAttribute("class") === "close-icon"
  ) {
    selectedList.splice(getIndex, 1);
    displayList.splice(getIndex, 1);
  } else {
    if (getIndex === -1) {
      selectedList.push(retrieveObj);
    } else {
      selectedList.splice(getIndex, 1);
    }
  }
  sortCategories();
}

const clearBtn = document.querySelector(".button__clear");
clearBtn.addEventListener("click", clearCheckedItems);
function clearCheckedItems() {
  let idEl;
  selectedList.forEach((e) => {
    idEl = e.id;
    let closeBtnEl = document.getElementById(`${idEl}`);
    let closeBtn = closeBtnEl.querySelector(".icon-wrapper");
    closeBtn.click();
    let itemIndex = userInventoryList.findIndex((item) => item.id == idEl);
    userInventoryList.splice(itemIndex, 1);
  });
  selectedList = [];
}

const deleteBtn = document.querySelector(".button__delete");
deleteBtn.addEventListener("click", deleteList);
function deleteList() {
  displayList = [];
  userInventoryList = [];
  displayList = [];
  selectedList = [];
  sortCategories();
}
