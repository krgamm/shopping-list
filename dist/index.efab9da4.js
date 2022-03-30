"use strict";
function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(e, t) : void 0;
    }
}
function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
}
function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for(var a = 0, i = new Array(t); a < t; a++)i[a] = e[a];
    return i;
}
var inventoryData = [
    {
        id: 1,
        itemName: "Bagels",
        category: "Grains"
    },
    {
        id: 2,
        itemName: "Bread",
        category: "Grains"
    },
    {
        id: 3,
        itemName: "Bread rolls",
        category: "Grains"
    },
    {
        id: 4,
        itemName: "Buns",
        category: "Grains"
    },
    {
        id: 5,
        itemName: "Doughnuts",
        category: "Grains"
    },
    {
        id: 6,
        itemName: "Tortilla wraps",
        category: "Grains"
    },
    {
        id: 7,
        itemName: "Cereal",
        category: "Grains"
    },
    {
        id: 8,
        itemName: "Pasta",
        category: "Grains"
    },
    {
        id: 9,
        itemName: "Rice",
        category: "Grains"
    },
    {
        id: 10,
        itemName: "Apples",
        category: "Fruit"
    },
    {
        id: 11,
        itemName: "Apricots",
        category: "Fruit"
    },
    {
        id: 12,
        itemName: "Avocados",
        category: "Fruit"
    },
    {
        id: 13,
        itemName: "Bananas",
        category: "Fruit"
    },
    {
        id: 14,
        itemName: "Blackberries",
        category: "Fruit"
    },
    {
        id: 15,
        itemName: "Cherries",
        category: "Fruit"
    },
    {
        id: 16,
        itemName: "Grapes",
        category: "Fruit"
    },
    {
        id: 17,
        itemName: "Grapefruit",
        category: "Fruit"
    },
    {
        id: 18,
        itemName: "Kiwi",
        category: "Fruit"
    },
    {
        id: 19,
        itemName: "Lemons",
        category: "Fruit"
    },
    {
        id: 20,
        itemName: "Limes",
        category: "Fruit"
    },
    {
        id: 21,
        itemName: "Mangos",
        category: "Fruit"
    },
    {
        id: 22,
        itemName: "Oranges",
        category: "Fruit"
    },
    {
        id: 23,
        itemName: "Peaches",
        category: "Fruit"
    },
    {
        id: 24,
        itemName: "Pears",
        category: "Fruit"
    },
    {
        id: 25,
        itemName: "Plums",
        category: "Fruit"
    },
    {
        id: 26,
        itemName: "Pineapples",
        category: "Fruit"
    },
    {
        id: 27,
        itemName: "Raspberries",
        category: "Fruit"
    },
    {
        id: 28,
        itemName: "Strawberries",
        category: "Fruit"
    },
    {
        id: 29,
        itemName: "Watermelons",
        category: "Fruit"
    },
    {
        id: 30,
        itemName: "Bacon",
        category: "Meat"
    },
    {
        id: 31,
        itemName: "Beef",
        category: "Meat"
    },
    {
        id: 32,
        itemName: "Chicken",
        category: "Meat"
    },
    {
        id: 33,
        itemName: "Duck",
        category: "Meat"
    },
    {
        id: 34,
        itemName: "Fish",
        category: "Meat"
    },
    {
        id: 35,
        itemName: "Goose",
        category: "Meat"
    },
    {
        id: 36,
        itemName: "Ham",
        category: "Meat"
    },
    {
        id: 37,
        itemName: "Lamb",
        category: "Meat"
    },
    {
        id: 38,
        itemName: "Oysters",
        category: "Meat"
    },
    {
        id: 39,
        itemName: "Pork",
        category: "Meat"
    },
    {
        id: 40,
        itemName: "Turkey",
        category: "Meat"
    },
    {
        id: 41,
        itemName: "Crisps",
        category: "Snacks"
    },
    {
        id: 42,
        itemName: "Dried fruit",
        category: "Snacks"
    },
    {
        id: 43,
        itemName: "Gum",
        category: "Snacks"
    },
    {
        id: 44,
        itemName: "Nuts",
        category: "Snacks"
    },
    {
        id: 45,
        itemName: "Salsa",
        category: "Snacks"
    },
    {
        id: 46,
        itemName: "Butter",
        category: "Dairy"
    },
    {
        id: 47,
        itemName: "Cottage cheese",
        category: "Dairy"
    },
    {
        id: 48,
        itemName: "Cheese",
        category: "Dairy"
    },
    {
        id: 49,
        itemName: "Milk",
        category: "Dairy"
    },
    {
        id: 50,
        itemName: "Yogurt",
        category: "Dairy"
    },
    {
        id: 51,
        itemName: "Aubergines",
        category: "Vegetables"
    },
    {
        id: 52,
        itemName: "Beans",
        category: "Vegetables"
    },
    {
        id: 53,
        itemName: "Beetroot",
        category: "Vegetables"
    },
    {
        id: 54,
        itemName: "Broccoli",
        category: "Vegetables"
    },
    {
        id: 55,
        itemName: "Brussel’s sprouts",
        category: "Vegetables"
    },
    {
        id: 56,
        itemName: "Cabbage",
        category: "Vegetables"
    },
    {
        id: 57,
        itemName: "Carrots",
        category: "Vegetables"
    },
    {
        id: 58,
        itemName: "Garlic",
        category: "Vegetables"
    },
    {
        id: 59,
        itemName: "Ginger",
        category: "Vegetables"
    },
    {
        id: 60,
        itemName: "Lettuce",
        category: "Vegetables"
    },
    {
        id: 61,
        itemName: "Onions",
        category: "Vegetables"
    },
    {
        id: 62,
        itemName: "Peppers",
        category: "Vegetables"
    },
    {
        id: 63,
        itemName: "Potatoes",
        category: "Vegetables"
    },
    {
        id: 64,
        itemName: "Radishes",
        category: "Vegetables"
    },
    {
        id: 65,
        itemName: "Spinach",
        category: "Vegetables"
    },
    {
        id: 66,
        itemName: "Sweetcorn",
        category: "Vegetables"
    },
    {
        id: 67,
        itemName: "Tomatoes",
        category: "Vegetables"
    },
    {
        id: 68,
        itemName: "Biscuits",
        category: "Sweets"
    },
    {
        id: 69,
        itemName: "Brownies",
        category: "Sweets"
    },
    {
        id: 70,
        itemName: "Chocolate",
        category: "Sweets"
    },
    {
        id: 71,
        itemName: "Cake",
        category: "Sweets"
    },
    {
        id: 72,
        itemName: "Cookies",
        category: "Sweets"
    },
    {
        id: 73,
        itemName: "Honey",
        category: "Sweets"
    },
    {
        id: 74,
        itemName: "Jam",
        category: "Sweets"
    },
    {
        id: 75,
        itemName: "Maple syrup",
        category: "Sweets"
    },
    {
        id: 76,
        itemName: "Sweets",
        category: "Sweets"
    },
    {
        id: 77,
        itemName: "Waffles",
        category: "Sweets"
    },
    {
        id: 78,
        itemName: "Alcohol",
        category: "Drinks"
    },
    {
        id: 79,
        itemName: "Cocoa",
        category: "Drinks"
    },
    {
        id: 80,
        itemName: "Coffee",
        category: "Drinks"
    },
    {
        id: 81,
        itemName: "Juice",
        category: "Drinks"
    },
    {
        id: 82,
        itemName: "Soda drinks",
        category: "Drinks"
    },
    {
        id: 83,
        itemName: "Tea",
        category: "Drinks"
    },
    {
        id: 84,
        itemName: "Water",
        category: "Drinks"
    },
    {
        id: 85,
        itemName: "Basil",
        category: "Seasoning"
    },
    {
        id: 86,
        itemName: "BBQ seasoning",
        category: "Seasoning"
    },
    {
        id: 87,
        itemName: "Cinnamon",
        category: "Seasoning"
    },
    {
        id: 88,
        itemName: "Cumin",
        category: "Seasoning"
    },
    {
        id: 89,
        itemName: "Curry powder",
        category: "Seasoning"
    },
    {
        id: 90,
        itemName: "Garlic powder",
        category: "Seasoning"
    },
    {
        id: 91,
        itemName: "Oregano",
        category: "Seasoning"
    },
    {
        id: 92,
        itemName: "Paprika",
        category: "Seasoning"
    },
    {
        id: 93,
        itemName: "Parsley",
        category: "Seasoning"
    },
    {
        id: 94,
        itemName: "Pepper",
        category: "Seasoning"
    },
    {
        id: 95,
        itemName: "Poppy seed",
        category: "Seasoning"
    },
    {
        id: 96,
        itemName: "Rosemary",
        category: "Seasoning"
    },
    {
        id: 97,
        itemName: "Sage",
        category: "Seasoning"
    },
    {
        id: 98,
        itemName: "Salt",
        category: "Seasoning"
    },
    {
        id: 99,
        itemName: "Vanilla",
        category: "Seasoning"
    },
    {
        id: 100,
        itemName: "Thyme",
        category: "Seasoning"
    },
    {
        id: 101,
        itemName: "Bath/shower gel",
        category: "Personal Care"
    },
    {
        id: 102,
        itemName: "Feminine products",
        category: "Personal Care"
    },
    {
        id: 103,
        itemName: "Lotion",
        category: "Personal Care"
    },
    {
        id: 104,
        itemName: "Shaving cream",
        category: "Personal Care"
    },
    {
        id: 105,
        itemName: "Shampoo",
        category: "Personal Care"
    },
    {
        id: 106,
        itemName: "Soap",
        category: "Personal Care"
    },
    {
        id: 107,
        itemName: "Sunscreen",
        category: "Personal Care"
    },
    {
        id: 108,
        itemName: "Tissues",
        category: "Personal Care"
    },
    {
        id: 109,
        itemName: "Toilet tissue",
        category: "Personal Care"
    },
    {
        id: 110,
        itemName: "Ice Cream",
        category: "Dessert"
    },
    {
        id: 111,
        itemName: "Whipped Cream",
        category: "Sweets"
    },
    {
        id: 112,
        itemName: "Sprinkles",
        category: "Baking"
    }
], userInventoryList = [
    {
        id: 49,
        itemName: "Milk",
        category: "Dairy"
    },
    {
        id: 110,
        itemName: "Ice Cream",
        category: "Sweets"
    },
    {
        id: 111,
        itemName: "Whipped Cream",
        category: "Sweets"
    },
    {
        id: 112,
        itemName: "Sprinkles",
        category: "Baking"
    }
], displayList = [], selectedList = [], addBtnEl = document.querySelector(".button__add"), userInputItemEl = document.querySelector(".search-bar__item"), userInputCategoryEl = document.querySelector(".search-bar__category"), searchBarEl = document.querySelector(".search-bar").querySelectorAll("input");
function Item(e, t, a) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    this.id = e, this.itemName = t, this.category = a, this.checked = i;
}
function removeAllChildNodes(e) {
    for(; e.firstChild;)e.removeChild(e.firstChild);
}
function sortCategories() {
    displayList = [], _toConsumableArray(new Set(userInventoryList.map(function(e) {
        return e.category;
    }))).forEach(function(e) {
        displayList.push(userInventoryList.filter(function(t) {
            return t.category == e;
        }));
    });
    var e1 = document.querySelector("#shopping-list");
    if (removeAllChildNodes(e1), displayList.forEach(function(t2) {
        var a = document.createElement("div");
        a.setAttribute("class", "category-group");
        var i1 = document.createElement("div");
        i1.setAttribute("class", "divider-horizontal");
        var r1 = document.createElement("h1");
        r1.innerText = t2[0].category, a.append(r1), a.appendChild(i1), t2.forEach(function(e) {
            var t = document.createElement("div");
            t.setAttribute("class", "checkmark-group");
            var i = document.createElement("img");
            i.src = "/assets/checkmark.svg", i.setAttribute("class", "checkmark-icon display-helper");
            var r = document.createElement("div");
            r.setAttribute("class", "circle");
            var o = document.createElement("h2");
            o.setAttribute("class", "item-name"), o.innerText = e.itemName;
            var n = document.createElement("div");
            n.setAttribute("class", "icon-wrapper");
            var c = document.createElement("img");
            c.src = "/assets/close.svg", c.setAttribute("class", "close-icon");
            var s = document.createElement("div");
            s.setAttribute("class", "item"), s.setAttribute("id", e.id), o.addEventListener("click", checkItemToggle), t.addEventListener("click", checkItemToggle), n.addEventListener("click", removeItem), s.appendChild(t), t.appendChild(i), t.appendChild(r), s.appendChild(o), s.appendChild(n), n.appendChild(c), a.appendChild(s);
        }), e1.appendChild(a);
    }), selectedList.forEach(function(e) {
        var t = e.id;
        document.getElementById("".concat(t)).classList.toggle("item-active");
    }), 0 === userInventoryList.length) {
        var t1 = document.querySelector("#shopping-list"), a1 = document.createElement("h1");
        a1.innerText = "Shopping list is empty", a1.setAttribute("style", "margin: 0 auto"), t1.appendChild(a1);
    }
}
function compareItem() {
    var e2 = userInputItemEl.value, t = userInputCategoryEl.value;
    if ("" === e2) alert("Item Name Required");
    else {
        var a = _toConsumableArray(new Set(inventoryData.map(function(e) {
            return e.itemName;
        }))), i = _toConsumableArray(new Set(userInventoryList.map(function(e) {
            return e.itemName;
        })));
        if (-1 === a.indexOf(e2)) storeItem(new Item(inventoryData.length + 1, e2, t));
        else if (-1 === i.indexOf(e2)) {
            var r = a.indexOf(e2);
            addItem(inventoryData[r]);
        }
    }
}
function addItem(e) {
    userInventoryList.push(e), sortCategories();
}
function storeItem(e) {
    inventoryData.push(e), addItem(e);
}
function removeItem(e3) {
    var t;
    switch(e3.target.getAttribute("class")){
        case "icon-wrapper":
            t = e3.target.parentElement;
            break;
        case "close-icon":
            t = e3.target.parentElement.parentElement;
    }
    var a = t.getAttribute("id");
    t.remove();
    var i = userInventoryList.findIndex(function(e) {
        return e.id == a;
    });
    userInventoryList.splice(i, 1), displayList.forEach(function(e4) {
        i = e4.findIndex(function(e) {
            return e.id == a;
        }), e4.splice(i, 1);
    }), sortCategories();
}
function checkItemToggle(e) {
    var t, a;
    if ("icon-wrapper" === e.target.getAttribute("class") || "close-icon" === e.target.getAttribute("class")) {
        switch(e.target.getAttribute("class")){
            case "icon-wrapper":
                a = e.target.parentElement;
                break;
            case "close-icon":
                a = e.target.parentElement.parentElement;
        }
        updateSelectedList(t = a.getAttribute("id"), e);
    } else {
        switch(e.target.getAttribute("class")){
            case "item-name":
                a = e.target.parentElement;
                break;
            case "circle":
            case "checkmark-icon display-helper":
                a = e.target.parentElement.parentElement;
                break;
            case "checkmark-group":
                a = e.target.parentElement;
        }
        t = a.getAttribute("id"), a.classList.toggle("item-active"), updateSelectedList(t, e);
    }
}
function updateSelectedList(e, t) {
    var a = inventoryData[e - 1], i = selectedList.indexOf(a);
    "icon-wrapper" === t.target.getAttribute("class") || "close-icon" === t.target.getAttribute("class") ? (selectedList.splice(i, 1), displayList.splice(i, 1)) : -1 === i ? selectedList.push(a) : selectedList.splice(i, 1), sortCategories();
}
document.querySelector(".search-bar__category").value = "Misc", sortCategories(), addBtnEl.addEventListener("click", compareItem), searchBarEl.forEach(function(e5) {
    e5.addEventListener("keyup", function(e) {
        "Enter" === e.code && (e.preventDefault(), addBtnEl.click());
    });
});
var clearBtn = document.querySelector(".button__clear");
function clearCheckedItems() {
    var e;
    selectedList.forEach(function(t3) {
        e = t3.id, document.getElementById("".concat(e)).querySelector(".icon-wrapper").click();
        var a = userInventoryList.findIndex(function(t) {
            return t.id == e;
        });
        userInventoryList.splice(a, 1);
    }), selectedList = [];
}
clearBtn.addEventListener("click", clearCheckedItems);
var deleteBtn = document.querySelector(".button__delete");
function deleteList() {
    displayList = [], userInventoryList = [], displayList = [], selectedList = [], sortCategories();
}
deleteBtn.addEventListener("click", deleteList);

//# sourceMappingURL=index.efab9da4.js.map
