import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('Aged Brie Quality increases by 1 as its Sellin value approaches less than 6 ', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(46);
    });

    it('Aged Brie Quality increases by 1 as its Sellin value approaches less than 11 ', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(46);
    });
    it('Aged Brie Quality increases by 1 as its Sellin value greater than 15 ', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 15, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(46);
    });

    it('Aged Brie Quality increases by 2 as its Sellin value less than 0 ', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -1, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(47);
    });
    it('Aged Brie Quality increases by 2 as its Sellin value equal to 0 ', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(47);
    });
    
    it('Backstage passes  Quality increases by 1 as its SellIn value approaches', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(46);
    });

    it('Backstage passes Quality increases by 2 when there are 10 days', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(47);
    });

    it('Backstage passes Quality increases by 3 when there are 5 days', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(48);
    });

    it('Backstage passes Quality drops to 0 after the concert', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });
    it('Backstage passes Quality drops to 0 after the concert', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 1 as its Sellin value approaches less than 6 ', function() {
        const gildedRose = new GildedRose([ new Item('Foo', 5, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(44);
    });

    it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 1 as its Sellin value approaches less than 11 ', function() {
        const gildedRose = new GildedRose([ new Item('Foo', 10, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(44);
    });
    it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 1 as its Sellin value approaches greater than 11 ', function() {
        const gildedRose = new GildedRose([ new Item('Foo', 15, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(44);
    });

    it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 2 when it passes the Sellin date ', function() {
        const gildedRose = new GildedRose([ new Item('Foo', -1, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(43);
    });

    it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 2 when it"s Sellin date is 0', function() {
        const gildedRose = new GildedRose([ new Item('Foo', 0, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(43);
    });

    it('For any item "Foo" which is not sulphurus Sellin value reduces to 1', function() {
        const gildedRose = new GildedRose([ new Item('Foo', 15, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(14);
    });
    it('For any item "Backstage" which is not sulphurus Sellin value reduces to 1 ', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(5);
    });
    it('For any item "Aged Bria" which is not sulphurus Sellin value reduces to 1 ', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 6, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(5);
    });
    it('For Sulphurus Sellin value Should be same ', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 6, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(6);
    });

});
