import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

// describe('Gilded Rose', function () {

//     it('Aged Brie Quality increases by 1 as its Sellin value approaches when there are 5 days ', function() {
//         const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(46);
//     });
    
//     it('Aged Brie Quality increases by 1 as its Sellin value approaches when there are 10 days', function() {
//         const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(46);
//     });
//     it('Aged Brie Quality increases by 1 as its Sellin value apporaches ', function() {
//         const gildedRose = new GildedRose([ new Item('Aged Brie', 15, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(46);
//     });

//     it('Aged Brie Quality increases by 2 as its Sellin value less than 0 ', function() {
//         const gildedRose = new GildedRose([ new Item('Aged Brie', -1, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(47);
//     });
//     it('Aged Brie Quality increases by 2 as its Sellin value equal to 0 ', function() {
//         const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(47);
//     });
    
//     it('Backstage passes  Quality increases by 1 as its SellIn value approaches', function() {
//         const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(46);
//     });

//     it('Backstage passes Quality increases by 2 when there are 10 days', function() {
//         const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(47);
//     });
//     it('Backstage passes Quality increases by 1 when there are 11 days', function() {
//         const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(46);
//     });

//     it('Backstage passes Quality increases by 2 when there are 6 days', function() {
//         const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(47);
//     });

//     it('Backstage passes Quality increases by 3 when there are 5 days', function() {
//         const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(48);
//     });

//     it('Backstage passes Quality drops to 0 after the concert', function() {
//         const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(0);
//     });
//     it('Backstage passes Quality drops to 0 after the concert', function() {
//         const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(0);
//     });

//     it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 1 when there are 5 days ', function() {
//         const gildedRose = new GildedRose([ new Item('Foo', 5, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(44);
//     });

//     it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 1 when there are 10 days ', function() {
//         const gildedRose = new GildedRose([ new Item('Foo', 10, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(44);
//     });
//     it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 1 as its Sellin value approaches', function() {
//         const gildedRose = new GildedRose([ new Item('Foo', 15, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(44);
//     });

//     it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 2 when it passes the Sellin date ', function() {
//         const gildedRose = new GildedRose([ new Item('Foo', -1, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(43);
//     });

//     it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 2 when it"s Sellin date is 0', function() {
//         const gildedRose = new GildedRose([ new Item('Foo', 0, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(43);
//     });

//     it('For any item "Foo" which is not sulphurus Sellin value reduces to 1', function() {
//         const gildedRose = new GildedRose([ new Item('Foo', 15, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].sellIn).to.equal(14);
//     });
//     it('For any item "Backstage" which is not sulphurus Sellin value reduces to 1 ', function() {
//         const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].sellIn).to.equal(5);
//     });
//     it('For any item "Aged Bria" which is not sulphurus Sellin value reduces to 1 ', function() {
//         const gildedRose = new GildedRose([ new Item('Aged Brie', 6, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].sellIn).to.equal(5);
//     });
//     it('For Sulphurus Sellin value Should be same ', function() {
//         const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 6, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].sellIn).to.equal(6);
//     });

//     it('Conjured Mana Cake degrade twice as fast as a normal item.', function() {
//         const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 6, 45) ]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).to.equal(43);
//     });  
// });
describe('Golden Master Test', function () {

    describe('Backstage passes to a TAFKAL80ETC concert tests', function () {

        const backStagePassesName = "Backstage passes to a TAFKAL80ETC concert";

        it('quality less than 50, quality should increase by 1', function () {
            const gildedRose = new GildedRose([ new Item(backStagePassesName, 12, 0) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(backStagePassesName);
            expect(items[0].quality).to.equal(1);
        });

        it('quality less than 50, 5 < sellIn < 11, quality should increase by 2', function () {
            const gildedRose = new GildedRose([ new Item(backStagePassesName, 6, 0) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(backStagePassesName);
            expect(items[0].quality).to.equal(2);
        });

        it('quality less than 50, sellIn < 6, quality should increase by 3', function () {
            const gildedRose = new GildedRose([ new Item(backStagePassesName, 5, 0) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(backStagePassesName);
            expect(items[0].quality).to.equal(3);
        });

        it('quality is 49, sellIn < 6, quality should increase by 1', function () {
            const gildedRose = new GildedRose([ new Item(backStagePassesName, 5, 49) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(backStagePassesName);
            expect(items[0].quality).to.equal(50);
        });

        it('quality less than 50, sellIn < 1, sellIn should be -1, quality should be 0', function () {
            const gildedRose = new GildedRose([ new Item(backStagePassesName, 0, 0) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(backStagePassesName);
            expect(items[0].sellIn).to.equal(-1);
            expect(items[0].quality).to.equal(0);
        });
    });

    describe('Aged Brie tests', function () {

        const agedBrieName = "Aged Brie";

        it('quality less than 50, quality should increase by 1', function () {
            const gildedRose = new GildedRose([ new Item(agedBrieName, 12, 0) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(agedBrieName);
            expect(items[0].quality).to.equal(1);
        });

        it('quality > 50, quality should not change', function () {
            const gildedRose = new GildedRose([ new Item(agedBrieName, 12, 50) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(agedBrieName);
            expect(items[0].quality).to.equal(50);
        });

        it('quality less than 50, sellIn < 1, quality should increase by 2', function () {
            const gildedRose = new GildedRose([ new Item(agedBrieName, 0, 0) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(agedBrieName);
            expect(items[0].quality).to.equal(2);
        });

        it('quality > 50, sellIn < 1, quality should not change', function () {
            const gildedRose = new GildedRose([ new Item(agedBrieName, 0, 50) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(agedBrieName);
            expect(items[0].quality).to.equal(50);
        });
    });

    describe('Sulfuras, Hand of Ragnaros tests', function () {

        const handOfRagnarosName = "Sulfuras, Hand of Ragnaros";

        it('does not change', function () {
            const gildedRose = new GildedRose([ new Item(handOfRagnarosName, 12, 5) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(handOfRagnarosName);
            expect(items[0].quality).to.equal(5);
            expect(items[0].sellIn).to.equal(12);
        });

        it('does not change, even with low values', function () {
            const gildedRose = new GildedRose([ new Item(handOfRagnarosName, -1, 5) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(handOfRagnarosName);
            expect(items[0].quality).to.equal(5);
            expect(items[0].sellIn).to.equal(-1);
        });
    });

    describe('Others tests', function () {

        const otherName = "Other";

        it('0 < quality < 50, quality should decrease by 1', function () {
            const gildedRose = new GildedRose([ new Item(otherName, 12, 2) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(otherName);
            expect(items[0].quality).to.equal(1);
            expect(items[0].sellIn).to.equal(11);
        });

        it('sellIn < 0, quality > 0, should decrease by 1', function () {
            const gildedRose = new GildedRose([ new Item(otherName, -1, 2) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(otherName);
            expect(items[0].quality).to.equal(0);
            expect(items[0].sellIn).to.equal(-2);
        });

        it('sellIn < 0, quality < 0, should not change', function () {
            const gildedRose = new GildedRose([ new Item(otherName, -1, -2) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal(otherName);
            expect(items[0].quality).to.equal(-2);
            expect(items[0].sellIn).to.equal(-2);
        });
    });


    describe('My tests',function(){
            it('Aged Brie Quality increases by 1 as its Sellin value approaches when there are 5 days ', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(46);
    });
    
    it('Aged Brie Quality increases by 1 as its Sellin value approaches when there are 10 days', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(46);
    });
    it('Aged Brie Quality increases by 1 as its Sellin value apporaches ', function() {
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
    it('Backstage passes Quality increases by 1 when there are 11 days', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(46);
    });

    it('Backstage passes Quality increases by 2 when there are 6 days', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 45) ]);
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

    it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 1 when there are 5 days ', function() {
        const gildedRose = new GildedRose([ new Item('Foo', 5, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(44);
    });

    it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 1 when there are 10 days ', function() {
        const gildedRose = new GildedRose([ new Item('Foo', 10, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(44);
    });
    it('For any Product -> Foo other than Aged Brie,Sulphurus,BackStage Quality Decreases by 1 as its Sellin value approaches', function() {
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

    it('Conjured Mana Cake degrade twice as fast as a normal item.', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 6, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(43);
    });
    });

});
