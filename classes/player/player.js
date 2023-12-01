export class Player {
    constructor() {
        this.inventory = ['banana'];
    }

    getInventory() {
        // Temporary
        const inventoryArray = [
            {
                id: "candle",
                name: "Candle",
                image: "image/items/candle.png",
                descriptionRules: "Grants visibility in pitch-black rooms, and in a pinch, may set something aflame.",
                descriptionFlavor: "A peculiar candle with almost transparent wax. You found it on a shrine of unknown origin."
            },
            {
                id: "ring",
                name: "Ring of Unsealing",
                image: "image/items/ring.png",
                descriptionRules: "Bypasses magic seals on doors.",
                descriptionFlavor: "Perhaps the most desirable of invested items are magic rings, whose powers resist the erosion of time through the art of permanency. This particular ring's physical appearance resembles the warding seals placed on thresholds."
            },
            {
                id: "sword",
                name: "Ebony Sword",
                image: "image/items/sword.png",
                descriptionRules: "+5 ATK",
                descriptionFlavor: "An ebony-black sword with gilded ornamentation. It was given to you by the Princess, and allegedly, belonged to her royal guardsmen long ago."
            },
        ];

        let itemRowToggleArray = [];
        inventoryArray.forEach((item) => {
            const toggleData = [
                {className: 'revealed', target: '.visuals.revealed'}, 
                {className: 'revealed', target: `[data-id=${item.id}]`}, 
                {className: 'selected', target: '.item-row.selected'}, 
                {className: 'selected', target: `[data-key=${item.id}]`}
            ];
            itemRowToggleArray.push(toggleData);
        });

        const itemDescriptionToggleArray = [{className: 'show-description', target: '#inventory-menu .inner'}];

        return {
            inventory: inventoryArray,
            itemRowToggle: itemRowToggleArray,
            itemDescriptionToggle: itemDescriptionToggleArray
        }


        //return this.inventory;
    }

    addInventoryItem(item) {
        this.inventory.push(item);
        return this.inventory;
    }
  }



