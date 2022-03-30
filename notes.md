# Functional Requirements

## Needs

- "library" object that is used to store and compare items
- add & remove objects
- active list object that displays items within categories
- clear ONLY checked items
- Delete entire active object
- Object constructor that creates item (id, item name, cateogory)
- Empty State for list

## Event Listeners

- clear checked items
- delete list
- check item
- remove with x icon
- add

## Adding an item

- get user input from search bar
- construct new object
- compare input item name to list of existing items
- exists: check if it is in active list
- does not exist: add to active list AND inventory list
- active list is filtered by category
  - Category name:
    - Item name

## Removing/Checking an Item

- Click empty circle, x icon is removed
- Click x icon and item is deleted
- Clear checked items remove all completed items to unclutter list
- Delete list refreshes entire list

Hover State for item

- if checkmark group or item name (h2) is hovered
  - show pointer and expand text and icon slighlty

# Style Guide

### Colors

--dark-green: rgb(19, 105, 60);
--green: rgb(67, 149, 57);
--light-green: rgb(220, 229, 224);
--blue: rgb(17, 110, 247);
--red: rgb(255, 0, 0);
--black: rgb(0, 0, 0);
--neutral-600: rgb(164, 164, 164);
--neutral-200: rgb(241, 241, 241);
--white: rgb(255, 255, 255);

### Typography

h1: Helvetica Bold / 18px
h2: Helvetica / 16px
body: Helvetica Light / 16px

/\*
Inventory Data: Constant list used to compare other items

- Check if input object exists - DNE: object constructor, add to inventory data, add to user inventory, update display list - Exists: - Get object from inventoryData - Compare to userInventoryList - DNE: Append to userInventory List, update displayList - Exists: do nothing
  \*/
