// define interface for Hero and Shop objects
interface Hero {
  items: string[];
  gold: number;
}

interface Shop {
  item: string;
  price: number;
}

// assign interface/type to the function definition properly
function buyItem(hero: Hero, shop: Shop): Hero {
  if (hero.gold >= shop.price) {
    hero.items.push(shop.item);
    hero.gold -= shop.price;
  }
  return hero;
}

// Test cases: assign proper type/interface to all objects
const hero1: Hero = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop1: Shop = {
  item: "armor",
  price: 20,
};

const hero2: Hero = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop2: Shop = {
  item: "legendary armor",
  price: 200,
};

console.log(buyItem(hero1, shop1)); 
// Output: { items: ["sword", "potion", "armor"], gold: 30 }

console.log(buyItem(hero2, shop2)); 
// Output: { items: ["sword", "potion"], gold: 50 }

module.exports = buyItem;

/*รหัสนศ. 660610791

ชื่อ-นามสกุล : รัฟฟาน วันอิดริส*/