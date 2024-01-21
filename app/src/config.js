
const API_KEY = 'ee08f27a3amshe4b7703cfae9005p112d7fjsnde80a7a8bc8b'

module.exports = {
    API_KEY: API_KEY
}


const ingredientsArray = [
    "5 spice powder",
    "acorn squash",
    "adobo sauce",
    "agave nectar",
    "ahi tuna",
    "alfredo pasta sauce",
    "almond extract",
    "almond flour",
    "almond milk",
    "almonds",
    "amaretto",
    "ancho chiles",
    "anchovies",
    "andouille sausage",
    "angel food cake mix",
    "angel hair pasta",
    "angostura bitters",
    "apple",
    "apple butter spread",
    "apple cider",
    "apple juice",
    "apple pie spice",
    "apricot preserves",
    "apricots",
    "arborio rice",
    "arrowroot powder",
    "artichoke heart quarters",
    "artichokes",
    "arugula",
    "asafoetida",
    "asafoetida powder",
    "asiago cheese",
    "asian pear",
    "asparagus spears",
    "avocado",
    "avocado oil",
    "baby bell peppers",
    "baby bok choy",
    "baby carrots",
    "baby corn",
    "baby spinach leaves",
    "baby-back ribs",
    "bacon",
    "bacon fat",
    "baguette",
    "baking bar",
    "baking powder",
    "baking soda",
    "balsamic glaze",
    "balsamic vinegar",
    "bamboo shoots",
    "banana",
    "basmati rice",
    "bay leaves",
    "bbq sauce",
    "beans",
    "beef",
    "beef brisket",
    "beef broth",
    "beef chuck roast",
    "beef stock",
    "beef tenderloin",
    "beer",
    "beets",
    "bell pepper",
    "berries",
    "biscuit mix",
    "biscuits",
    "bittersweet chocolate",
    "black bean sauce",
    "black beans",
    "black olives",
    "black pepper",
    "black sesame seeds",
    "blackberries",
    "blanched almonds",
    "blood orange",
    "blue cheese",
    "blueberries",
    "bok choy",
    "boneless skinless chicken breast",
    "bourbon",
    "brandy",
    "bread",
    "bread flour",
    "breakfast links",
    "brie",
    "broccoli",
    "broccoli florets",
    "brown rice",
    "brown rice flour",
    "brown sugar",
    "brownie mix",
    "brussel sprouts",
    "bulgur",
    "butter",
    "butterhead lettuce",
    "buttermilk",
    "butternut squash",
    "butterscotch chips",
    "cabbage",
    "caesar dressing",
    "cajun seasoning",
    "cake flour",
    "candy canes",
    "candy coating",
    "candy melts",
    "canned black beans",
    "canned diced tomatoes",
    "canned garbanzo beans",
    "canned green chiles",
    "canned kidney beans",
    "canned mushrooms",
    "canned pinto beans",
    "canned red kidney beans",
    "canned tomatoes",
    "canned tuna",
    "canned white beans",
    "canned white cannellini beans",
    "cannellini beans",
    "cantaloupe",
    "capers",
    "caramel sauce",
    "caramels",
    "caraway seed",
    "cardamom",
    "cardamom pods",
    "carp",
    "carrots",
    "cat fish filets",
    "cauliflower",
    "cauliflower florets",
    "cauliflower rice",
    "celery",
    "celery ribs",
    "celery root",
    "celery salt",
    "celery seed",
    "cereal",
    "champagne",
    "chana dal",
    "cheddar",
    "cheese",
    "cheese curds",
    "cheese dip",
    "cheese soup",
    "cheese tortellini",
    "cherry",
    "cherry pie filling",
    "cherry tomatoes",
    "chestnuts",
    "chia seeds",
    "chicken base",
    "chicken bouillon",
    "chicken bouillon granules",
    "chicken breasts",
    "chicken broth",
    "chicken drumsticks",
    "chicken legs",
    "chicken pieces",
    "chicken sausage",
    "chicken stock",
    "chicken tenders",
    "chicken thighs",
    "chicken wings",
    "chickpea flour",
    "chickpeas",
    "chiles",
    "chili paste",
    "chili peppers",
    "chili powder",
    "chili sauce",
    "chipotle chiles in adobo",
    "chipotle chilies",
    "chipotle peppers in adobo",
    "chive & onion cream cheese spread",
    "chocolate",
    "chocolate chips",
    "chocolate chunks",
    "chocolate instant pudding mix",
    "chocolate sandwich cookies",
    "chocolate syrup",
    "chocolate wafer cookies",
    "chorizo sausage",
    "cider vinegar",
    "cilantro",
    "cilantro leaves",
    "cilantro pesto",
    "cinnamon roll",
    "cinnamon stick",
    "cinnamon sugar",
    "cinnamon swirl bread",
    "clam juice",
    "clams",
    "clotted cream",
    "coarse salt",
    "coarsely ground pepper",
    "cocoa nibs",
    "cocoa powder",
    "coconut",
    "coconut aminos",
    "coconut butter",
    "coconut cream",
    "coconut extract",
    "coconut flour",
    "coconut milk",
    "coconut oil",
    "coconut water",
    "cod",
    "coffee",
    "cognac",
    "cointreau",
    "coke",
    "cola",
    "cold butter",
    "cold water",
    "collard greens",
    "color food green",
    "compote",
    "compound chocolate",
    "confectioners sugar",
    "cooked bacon",
    "cooked ham",
    "cooked long-grain rice",
    "cooked pasta",
    "cooked polenta",
    "cooked quinoa",
    "cooked wild rice",
    "cookies",
    "coriander",
    "coriander leaf",
    "coriander leaves",
    "coriander powder",
    "corn",
    "corn bread",
    "corn chips",
    "corn chowder",
    "corn flakes cereal",
    "corn flour",
    "corn grits",
    "corn kernel-style corn",
    "corn niblets",
    "corn oil",
    "corn on the cob",
    "corn tortillas",
    "cornbread mix",
    "corned beef",
    "cornish hens",
    "cornmeal",
    "cornstarch",
    "cotija cheese",
    "cottage cheese",
    "country bread",
    "courgettes",
    "couscous",
    "cow pea",
    "crabmeat",
    "cracked pepper",
    "cranberries",
    "cranberry juice",
    "cream",
    "cream cheese",
    "cream cheese spread",
    "cream of celery soup",
    "cream of chicken soup",
    "cream of coconut",
    "cream of mushroom soup",
    "cream of tartar",
    "creamed corn",
    "creamy peanut butter",
    "cremini mushrooms",
    "crème fraîche",
    "crisp rice cereal",
    "croutons",
    "crystallized ginger",
    "cucumber",
    "cumin",
    "cumin powder",
    "cumin seed",
    "cupcakes",
    "currants",
    "curry leaves",
    "curry paste",
    "curry powder",
    "dark brown sugar",
    "dark chocolate",
    "dark chocolate bar",
    "dark chocolate candy bars",
    "dark chocolate chips",
    "dark rum",
    "dark sesame oil",
    "dashi",
    "dates",
    "deep dish pie crust",
    "deli ham",
    "deli turkey",
    "dessert oats",
    "dessert wine",
    "diced ham",
    "diet pop",
    "dijon mustard",
    "dill",
    "dill pickles",
    "hot water",
    "italian seasoning",
    "jamaican jerk season",
    "jicama",
    "kaffir lime leaves",
    "lean ground meat",
    "lean ground turkey",
    "light butter",
    "light chocolate syrup",
    "light corn syrup",
    "light cream cheese",
    "light mayonnaise",
    "light olive oil",
    "light soy sauce",
    "lime",
    "lime juice",
    "lime peel",
    "lime wedges",
    "lime zest",
    "linguine",
    "liquid smoke",
    "liquid stevia",
    "live lobster",
    "long-grain rice",
    "low fat buttermilk",
    "low fat milk",
    "low fat plain yogurt",
    "low fat ricotta cheese",
    "low fat sour cream",
    "low sodium chicken broth",
    "low sodium soy sauce",
    "low-sodium beef broth",
    "low-sodium chicken stock",
    "low-sodium soy sauce",
    "low-sodium vegetable broth",
    "low-sodium vegetable stock",
    "lower sodium beef broth",
    "lump crab",
    "m&m candies",
    "macadamia nuts",
    "macaroni and cheese mix",
    "malt drink mix",
    "mandarin orange segments",
    "mandarin oranges",
    "mango",
    "mango chutney",
    "maple syrup",
    "maraschino cherries",
    "maraschino cherry juice",
    "margarine",
    "marinara sauce",
    "marjoram",
    "marsala wine",
    "marshmallow fluff",
    "marshmallow",
    "marshmallow bits",
    "matcha tea",
    "mayonnaise",
    "meat",
    "meatballs",
    "medjool dates",
    "mexican cheese blend",
    "mexican crema",
    "mexican oregano",
    "milk",
    "milk chocolate chips",
    "mint chutney",
    "mint extract",
    "mint leaves",
    "mint sprigs",
    "miracle whip",
    "mirin",
    "mixed vegetables",
    "molasses",
    "monterey jack cheese",
    "mushroom",
    "mussels",
    "mustard",
    "mustard seeds",
    "napa cabbage",
    "navel oranges",
    "nestle toll house",
    "new potatoes",
    "non-fat greek yogurt",
    "nonfat cool whip",
    "nonfat milk",
    "noodles",
    "northern beans",
    "nut butter",
    "nut meal",
    "nutmeg",
    "nutritional yeast",
    "oatmeal",
    "old bay seasoning",
    "olive oil",
    "onion",
    "onion powder",
    "orange",
    "orange bell pepper",
    "orange juice",
    "orange juice concentrate",
    "orange liqueur",
    "orange marmalade",
    "orange oil",
    "orange peel",
    "orange zest",
    "oregano",
    "oreo cookies",
    "orzo pasta",
    "oysters",
    "palm sugar",
    "palmiers",
    'pancetta',
    'paneer',
    'panko',
    'papaya',
    'paprika',
    'parmigiano reggiano',
    'parsley',
    'parsley flakes',
    'parsnip',
    'part-skim mozzarella cheese',
    'pasta',
    'pasta salad mix',
    'pasta sauce',
    'pastry flour',
    'peach',
    'peanut butter',
    'peanut butter chips',
    'peanut butter cups',
    'peanut oil',
    'peanuts',
    'pear liqueur',
    'pearl barley',
    'pearl onions',
    'peas',
    'pecan',
    'pecan pieces',
    'pecorino',
    'penne',
    'peperoncino',
    'pepper jack cheese',
    'peppercorns',
    'peppermint baking chips',
    'peppermint extract',
    'pepperoni',
    'peppers',
    'pesto',
    'pickle relish',
    'pickles',
    'pico de gallo',
    'pie crust',
    'pimento stuffed olives',
    'pimientos',
    'pine nuts',
    'pineapple',
    'pineapple chunks',
    'pineapple in juice',
    'pineapple juice',
    'pink himalayan salt',
    'pinto beans',
    'pistachios',
    'pita',
    'pizza crust',
    'pizza mix',
    'plain greek yogurt',
    'plain nonfat yogurt',
    'plain yogurt',
    'plantain',
    'plum',
    'plum tomatoes',
    'poblano peppers',
    'polenta',
    'polish sausage',
    'pomegranate juice',
    'pomegranate molasses',
    'pomegranate seeds',
    'popcorn',
    'poppy seeds',
    'pork',
    'Pork & Beans',
    'pork belly',
    'pork butt',
    'pork chops',
    'pork links',
    'pork loin chops',
    'pork loin roast',
    'pork roast',
    'pork shoulder',
    'pork tenderloin',
    'port',
    'portabella mushrooms',
    'pot roast',
    'potato chips',
    'potato starch',
    'potatoes',
    'poultry seasoning',
    'powdered sugar',
    'pretzel sandwiches',
    'processed american cheese',
    'prosciutto',
    'provolone cheese',
    'prunes',
    'puff pastry',
    'pumpkin',
    'pumpkin pie filling',
    'pumpkin pie spice',
    'pumpkin puree',
    'pumpkin seeds',
    'queso fresco',
    'quick cooking oats',
    'quinoa',
    'quinoa flour',
    'radicchio',
    'radishes',
    'raisins',
    'rajma masala',
    'ramen noodles',
    'ranch dressing',
    'ranch dressing mix',
    'raspberries',
    'raspberry jam',
    'raw cashews',
    'raw shrimp',
    'ready-to-serve Asian fried rice',
    'real bacon recipe pieces',
    'red apples',
    'red bell peppers',
    'red cabbage',
    'red chilli',
    'red delicious apples',
    'red food coloring',
    'red grapefruit juice',
    'red grapes',
    'red kidney beans',
    'red lentils',
    'red onion',
    'red pepper flakes',
    'red pepper powder',
    'red potatoes',
    'red velvet cookie',
    'red wine',
    'red wine vinegar',
    'reduced fat shredded cheddar cheese',
    'refried beans',
    'refrigerated crescent rolls',
    'refrigerated pizza dough',
    'refrigerated sugar cookie dough',
    'rhubarb',
    'rib tips',
    'rice',
    'rice flour',
    'rice krispies cereal',
    'rice milk',
    'rice noodles',
    'rice paper',
    'rice syrup',
    'rice vinegar',
    'rice wine',
    'ricotta salata',
    'ritz crackers',
    'roast beef',
    'roasted chicken',
    'roasted nuts',
    'roasted peanuts',
    'roasted red peppers',
    'roma tomatoes',
    'romaine lettuce',
    'root vegetables',
    'rosemary',
    'rotini pasta',
    'rotisserie chicken',
    'round steak',
    'rub',
    'rum extract',
    'runny honey',
    'russet potatoes',
    'rutabaga',
    'rye bread',
    'rye meal',
    'saffron threads',
    'sage',
    'sage leaves',
    'salad dressing',
    'salami',
    'salmon fillet',
    'salsa',
    'salsa verde',
    'salt',
    'salt and pepper',
    'salted butter',
    'saltine crackers',
    'sandwich bun',
    'sauerkraut',
    'sausage',
    'sausage links',
    'scotch bonnet chili',
    'sea salt',
    'sea scallops',
    'seasoned bread crumbs',
    'seasoned rice vinegar',
    'seasoned salt',
    'seasoning',
    'seasoning blend',
    'seeds',
    'self-rising flour',
    'semi sweet chocolate chips',
    'serrano chile',
    'sesame oil',
    'sesame seed hamburger buns',
    'sesame seeds',
    'shallot',
    'sharp cheddar cheese',
    'sheeps milk cheese',
    'shells',
    'sherry',
    'sherry',
    'sherry vinegar',
    'shiitake mushroom caps',
    'short grain rice',
    'short pasta',
    'short ribs',
    'shortbread cookies',
    'shortcrust pastry',
    'shortening',
    'shredded cheddar cheese',
    'shredded cheese',
    'shredded chicken',
    'shredded coconut',
    'shredded mexican cheese blend',
    'shredded mexican cheese blend',
    'shredded mozzarella',
    'silken tofu',
    'sirloin steak',
    'skim milk ricotta',
    'skim vanilla greek yogurt',
    'skin-on bone-in chicken leg quarters',
    'skinless boneless chicken breast halves',
    'skinless boneless chicken thighs',
    'skinned black gram',
    'slaw dressing',
    'slaw mix',
    'slivered almonds',
    'smoked paprika',
    'smoked salmon',
    'smoked sausage',
    'smooth peanut butter',
    'snapper fillets',
    'snow peas',
    'soda water',
    'sour cream',
    'sourdough bowl',
    'sourdough bread',
    'soy milk',
    'soy protein powder',
    'soy sauce',
    'spaghetti',
    'spaghetti squash',
    'sparkling wine',
    'spelt flour',
    'spicy brown mustard',
    'spinach',
    'sprite',
    'sprouts',
    'squash',
    'sriracha sauce',
    'steaks',
    'steel cut oats',
    'stevia',
    'stew meat',
    'stew vegetables',
    'stock',
    'store-bought phyllo',
    'stout',
    'strawberries',
    'strawberry jam',
    'strawberry jello',
    'stuffing',
    'stuffing mix',
    'sub rolls',
    'sugar',
    'sugar snap peas',
    'sugar syrup',
    'sukrin sweetener',
    'summer savory',
    'summer squash',
    'sunflower oil',
    'sunflower seeds',
    'sweet chilli sauce',
    'sweet onion',
    'sweet paprika',
    'sweet pickle juice',
    'sweet pickle relish',
    'sweet potato',
    'sweet tea',
    'sweetened coconut',
    'sweetened condensed milk',
    'sweetened shredded coconut',
    'swiss chard',
    'swiss cheese',
    'taco seasoning mix',
    'taco shells',
    'tahini',
    'tamari',
    'tapioca flour',
    'tarragon',
    'tart apple',
    'tea bags',
    'tequila',
    'teriyaki sauce',
    'thai basil',
    'thai chiles',
    'thai red curry paste',
    'thick-cut bacon',
    'tilapia fillets',
    'toast',
    'toffee bits',
    'tofu',
    'tomatillos',
    'tomato juice',
    'tomato paste',
    'tomato puree',
    'tomato sauce',
    'tomato soup',
    'tomatoes',
    'top blade steak',
    'top round steak',
    'Top Sirloin',
    'tortilla',
    'tortilla chips',
    'triple sec',
    'truffle oil',
    'tuna',
    'turbinado sugar',
    'turkey',
    'turkey breast',
    'turkey kielbasa',
    'turmeric',
    'turnips',
    'unbleached flour',
    'unsalted butter',
    'unsmoked back bacon',
    'unsweetened applesauce',
    'unsweetened coconut milk',
    'unsweetened shredded coconut',
    'vanilla bean',
    'vanilla bean paste',
    'vanilla essence',
    'vanilla extract',
    'vanilla frosting',
    'vanilla instant pudding mix',
    'vanilla protein powder',
    'vanilla wafers',
    'vanilla yogurt',
    'vegan cheese',
    'vegan chocolate chips',
    'vegan margarine',
    'vegetable broth',
    'vegetable oil',
    'vegetarian bacon',
    'vermouth',
    'vinaigrette',
    'vinegar',
    'vodka',
    'walnuts',
    'water',
    'water chestnuts',
    'water-packed tuna',
    'watercress',
    'watermelon chunks',
    'wheat bran',
    'wheat germ',
    'whipped cream',
    'whipped topping',
    'whipping cream',
    'whiskey',
    'white balsamic vinegar',
    'white bread',
    'white cake mix',
    'white cheddar',
    'white chocolate',
    'white chocolate chips',
    'white onion',
    'white pepper',
    'white whole wheat flour',
    'white wine',
    'white wine vinegar',
    'whole allspice berries',
    'whole chicken',
    'whole coriander seeds',
    'whole cranberry sauce',
    'whole kernel corn',
    'whole star anise',
    'whole wheat bread',
    'whole wheat flour',
    'whole wheat tortillas',
    'whole-grain mustard',
    'wine',
    'wine vinegar',
    'winter squash',
    'won ton wraps',
    'worcestershire sauce',
    'wraps',
    'xanthan gum',
    'yeast',
    'yellow bell pepper',
    'yellow cake mix',
    'yellow onion',
    'yogurt',
    'yukon gold potato'
    ];

module.exports = ingredientsArray;
    
