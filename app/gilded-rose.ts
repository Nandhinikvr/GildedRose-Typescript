export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

   // delcare a function to update the quality property if each item in the array

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') // legendary item, never has to be sold or decreases in Quality
            {
                if (this.items[i].quality >= 0 && this.items[i].quality < 50)
                {
                    if (this.items[i].name == 'Aged Brie') 
                    {
                        this.items[i].quality=  (this.items[i].sellIn > 0) ?  Math.min(this.items[i].quality + 1, 50): // increase by 1
                        Math.min(this.items[i].quality + 2, 50); // increase by 2 if outdated
                    } 
                    else if (this.items[i].name == 'Conjured Mana Cake') 
                    {
                        this.items[i].quality=  (this.items[i].sellIn > 0) ?  Math.max(this.items[i].quality - 2, 0): // degrade by 2
                        Math.max(this.items[i].quality - 4, 0); // degrade by 4 if outdated
                    }
                    else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert')
                    {
                        if (this.items[i].sellIn >= 11) 
                        {
                            this.items[i].quality = Math.min(this.items[i].quality + 1, 50); // increases by 1
                        }
                        else if (this.items[i].sellIn <= 10 && this.items[i].sellIn >= 6) 
                        {
                            this.items[i].quality = Math.min(this.items[i].quality + 2, 50); // increases by 2 when there are 10 days or less
                        }
                        else if (this.items[i].sellIn < 6 && this.items[i].sellIn > 0) 
                        {
                            this.items[i].quality = Math.min(this.items[i].quality + 3, 50); // increases by 3 when there are 5 days o less
                        } 
                        else
                        {
                            this.items[i].quality = 0; // drops to 0 after the concert
                        }
                    }
                    else 
                    {
                        this.items[i].quality=  (this.items[i].sellIn > 0) ?  Math.max(this.items[i].quality - 1, 0): // degrade by 1
                        Math.max(this.items[i].quality - 2, 0); // degrade by 2 if outdated
                    } 

                }               
        
                this.items[i].sellIn -= 1;
            } 
        }
        return this.items;
    }



}
