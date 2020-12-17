class Bundle {
    constructor(Drink, AdditionalNoodle, Price){
        this.Drink = Drink;
        this.AdditionalNoodle = AdditionalNoodle;
        this.Price = Price;
    }
}

class BundleCreator {
}

class BundleA extends Bundle {
    constructor(Drink, AdditionalNoodle, Bread, Noodle, Egg){
        super(Drink, AdditionalNoodle)
        this.Bread = Bread;
        this.Noodle = Noodle;
        this.Egg = Egg;
    }
}

class BundleACreator extends BundleCreator {
    constructor(){
        CreateBundleA = function(){
            return new BundleA(Drink, AdditionalNoodle, Bread, Noodle, Egg);
        }
    }
}

class BundleB extends Bundle {
    constructor(Drink, AdditionalNoodle, Bread, Egg, Bean){
        super(Drink, AdditionalNoodle)
        this.Meat = Meat
        this.Bread = Bread
        this.Egg = Egg;
        this.Bean = Bean
    }
}

class BundleBCreator extends BundleCreator {
    constructor(){
        CreateBundleB = function(Drink, AdditionalNoodle, Bread, Egg, Bean){
            return new BundleB(Drink, AdditionalNoodle, Bread, Egg, Bean)
        }
    }
}

class BundleC extends Bundle {
    constructor(Drink, AdditionalNoodle, Bread, Egg, Meat1, Meat2, Noodle){
        super(Drink, AdditionalNoodle);
        this.Bread = Bread;
        this.Egg = Egg;
        this.Meat1 = Meat1;
        this.Meat2 = Meat2;
        this.Noodle = Noodle;
    }
}

class BundleCCreator extends BundleCreator {
    constructor(){
        CreateBundleC = function(Drink, AdditionalNoodle, Bread, Egg, Meat1, Meat2, Noodle){
            return new BundleC(Drink, AdditionalNoodle, Bread, Egg, Meat1, Meat2, Noodle);

        }
    }
}

class BundleD extends Bundle {
    constructor(Drink, AdditionalNoodle, MeatInSetD1, MeatInSetD2){
        super(Drink, AdditionalNoodle);
        this.MeatInSetD1 = MeatInSetD1;
        this.MeatInSetD2 = MeatInSetD2;
    }
}

class BundleDCreator extends BundleCreator {
    constructor(){
        CreateBundleD = function(Drink, AdditionalNoodle, MeatInSetD1, MeatInSetD2){
            return new BundleD(Drink, AdditionalNoodle, MeatInSetD1, MeatInSetD2);
        }
    }
}

class BundleE extends Bundle {
    constructor(Drink, AdditionalNoodle, MeatInSandwich1, MeatInSandwich2){
        super(Drink, AdditionalNoodle);
        this.MeatInSandwich1 = MeatInSandwich1;
        this.MeatInSandwich2 = MeatInSandwich2;
    }
}

class BundleECreator extends BundleCreator {
    constructor(){
        CreateBundlE = function(Drink, AdditionalNoodle, MeatInSandwich1, MeatInSandwich2){
            return new BundleE(Drink, AdditionalNoodle, MeatInSandwich1, MeatInSandwich2);
        }
    }
}

class BundleF extends Bundle {
    constructor(Drink, AdditionalNoodle, NoodleInSetF, MeatInSetF){
        super(Drink, AdditionalNoodle);
        this.NoodleInSetF = NoodleInSetF;
        this.MeatInSetF = MeatInSetF;
    }
}

class BundleFCreator extends BundleCreator {
    constructor(Drink, AdditionalNoodle, NoodleInSetF, MeatInSetF){
        return new BundleF(Drink, AdditionalNoodle, NoodleInSetF, MeatInSetF);
    }
}

class ItemInBundle {
    constructor(Name, PriceChange){
        this.Name = Name;
        this.PriceChange = PriceChange;
    }
}

class ItemInBundleCreator {
    constructor(){
        CreateItem = function(Name, PriceChange){
            return new ItemInBundle(Name, PriceChange)
        }
    }
}

class ItemOptions {
    constructor(Label, ItemOptions){
        this.Label = Label;
        this.ItemOptions = ItemOptions;
    }
}



