/**
 * VARDHAN RESTAURANT - QR Digital Menu & Ordering System
 * Fast, Responsive, Vanilla JS Architecture
 */

// Comprehensive Menu Database
const MENU_DATA = [
  // 1. POPULAR / SIGNATURE (Referenced in Top Section)
  {
    id: "pop-cb",
    name: "Chicken Biryani",
    category: "rice-biryani",
    price: 240,
    isVeg: false,
    description: "Aromatic Dum-cooked Basmati rice layered with juicy chicken, caramelized onions, boiled egg & secret royal spices.",
    image: "images/chicken_biryani.jpg",
    isPopular: true,
    badge: "Bestseller ⭐"
  },
  {
    id: "pop-pbm",
    name: "Paneer Butter Masala",
    category: "veg-main-course",
    price: 220,
    isVeg: true,
    description: "Cubes of fresh cottage cheese simmered in a rich, buttery tomato gravy with aromatic kasturi methi.",
    image: "images/paneer_butter_masala.jpg",
    isPopular: true,
    badge: "Chef's Choice 👨‍🍳"
  },
  {
    id: "pop-pt",
    name: "Paneer Tikka (8 PC)",
    category: "veg-starters",
    price: 250,
    isVeg: true,
    description: "Fresh cottage cheese marinated with royal tandoori spices and char-grilled with crunchy bell peppers & onions.",
    image: "images/paneer_tikka.jpg",
    isPopular: true,
    badge: "Top Rated ⭐"
  },
  {
    id: "pop-rbc",
    name: "Reshmi Butter Chicken (4PC)",
    category: "non-veg-main-course",
    price: 350,
    isVeg: false,
    description: "Melt-in-mouth chicken cooked in silky smooth buttery makhani gravy enriched with fresh cream and cashews.",
    image: "images/butter_chicken.jpg",
    isPopular: true,
    badge: "Must Try 🔥"
  },
  {
    id: "pop-ct",
    name: "Chicken Tikka (8 PC)",
    category: "non-veg-starters",
    price: 270,
    isVeg: false,
    description: "Boneless tender chicken marinated in Kashmiri spices and yogurt, slow-roasted in clay tandoor.",
    image: "images/chicken_tikka.jpg",
    isPopular: true,
    badge: "Crowd Favorite"
  },
  {
    id: "pop-vb",
    name: "Veg Biryani",
    category: "rice-biryani",
    price: 180,
    isVeg: true,
    description: "Fragrant long-grain basmati rice layered with garden fresh vegetables, paneer cubes, cashews & saffron.",
    image: "images/veg_biryani.jpg",
    isPopular: true,
    badge: "Popular"
  },

  // 2. TEA & COFFEE
  { id: "tc-1", name: "Tea", category: "tea-coffee", price: 20, isVeg: true, description: "Authentic Indian spiced kadak chai freshly brewed." },
  { id: "tc-2", name: "Coffee", category: "tea-coffee", price: 30, isVeg: true, description: "Freshly brewed hot aromatic Indian coffee with milk." },
  { id: "tc-3", name: "Cold Coffee", category: "tea-coffee", price: 100, isVeg: true, description: "Creamy blended chilled coffee served refreshing." },
  { id: "tc-4", name: "Pepsi / Mirinda", category: "tea-coffee", price: 25, isVeg: true, description: "Chilled bottled soft drink." },
  { id: "tc-5", name: "Fresh Lemon Soda", category: "tea-coffee", price: 40, isVeg: true, description: "Sparkling soda with freshly squeezed lime and chatpata masala (Sweet / Salted)." },
  { id: "tc-6", name: "Mineral Water", category: "tea-coffee", price: 20, isVeg: true, description: "Packaged purified drinking water (1L)." },

  // 3. SOUP
  { id: "sp-1", name: "Tomato Soup", category: "soup", price: 110, isVeg: true, description: "Velvety spiced tomato broth served with crispy golden bread croutons." },
  {
    id: "sp-2",
    name: "Hot & Sour Soup",
    category: "soup",
    price: 100,
    dualPrice: "₹100 / ₹130",
    variants: [{ name: "Veg", price: 100 }, { name: "Non-Veg", price: 130 }],
    isVeg: true,
    description: "Tangy and spicy broth loaded with shredded vegetables or tender chicken."
  },
  {
    id: "sp-3",
    name: "Manchow Soup",
    category: "soup",
    price: 100,
    dualPrice: "₹100 / ₹130",
    variants: [{ name: "Veg", price: 100 }, { name: "Non-Veg", price: 130 }],
    isVeg: true,
    description: "Classic Indo-Chinese garlic coriander soup served with crispy fried noodles."
  },
  {
    id: "sp-4",
    name: "Lemon Coriander Soup",
    category: "soup",
    price: 100,
    dualPrice: "₹100 / ₹120",
    variants: [{ name: "Veg", price: 100 }, { name: "Non-Veg", price: 120 }],
    isVeg: true,
    description: "Light, healthy and refreshing clear soup flavored with fresh lemon juice and green coriander."
  },
  { id: "sp-5", name: "Sweet Corn Soup", category: "soup", price: 140, isVeg: true, description: "Mild, creamy soup packed with tender sweet corn kernels and delicate spices." },

  // 4. VEG SNACKS
  { id: "vsnk-1", name: "Veg Pakoda", category: "snacks-veg", price: 120, isVeg: true, description: "Crispy assorted mixed vegetable fritters spiced with carom seeds and green chilies." },
  { id: "vsnk-2", name: "Onion Chitta Pakoda", category: "snacks-veg", price: 110, isVeg: true, description: "Crunchy golden brown onion fritters fried to perfection." },
  { id: "vsnk-3", name: "Paneer Pakoda", category: "snacks-veg", price: 140, isVeg: true, description: "Succulent paneer slices dipped in seasoned gram flour batter and fried." },
  { id: "vsnk-4", name: "French Fry", category: "snacks-veg", price: 120, isVeg: true, description: "Crispy salted potato fries served with tomato ketchup." },
  { id: "vsnk-5", name: "Chiju Pakoda", category: "snacks-veg", price: 150, isVeg: true, description: "Delicious cheese-stuffed crispy fried golden pakodas." },
  { id: "vsnk-6", name: "Govi Pakoda", category: "snacks-veg", price: 120, isVeg: true, description: "Fresh cauliflower florets seasoned with aromatic spices and fried crisp." },

  // 5. NON-VEG SNACKS
  { id: "nvsnk-1", name: "Chicken Pakoda", category: "snacks-non-veg", price: 160, isVeg: false, description: "Juicy marinated boneless chicken chunks fried crisp in spiced batter." },
  { id: "nvsnk-2", name: "Egg Pakoda", category: "snacks-non-veg", price: 130, isVeg: false, description: "Boiled egg halves coated in flavorful besan batter and fried golden." },

  // 6. RICE & BIRYANI
  { id: "rb-1", name: "Steam Rice", category: "rice-biryani", price: 80, isVeg: true, description: "Fluffy steamed long grain basmati rice." },
  { id: "rb-2", name: "Jeera Rice", category: "rice-biryani", price: 100, isVeg: true, description: "Fragrant basmati rice tempered with roasted cumin seeds and desi ghee." },
  { id: "rb-3", name: "Peas Pulao", category: "rice-biryani", price: 150, isVeg: true, description: "Mildly spiced basmati rice tossed with sweet green peas and aromatic herbs." },
  { id: "rb-4", name: "Veg Pulao", category: "rice-biryani", price: 180, isVeg: true, description: "Basmati rice cooked with garden fresh diced vegetables and whole spices." },
  { id: "rb-5", name: "Veg Biryani", category: "rice-biryani", price: 180, isVeg: true, description: "Traditional layered veg dum biryani served with raita.", image: "images/veg_biryani.jpg" },
  { id: "rb-6", name: "Masala Rice", category: "rice-biryani", price: 140, isVeg: true, description: "Spiced flavorful rice tempered with onions, tomatoes and Indian masalas." },
  { id: "rb-7", name: "Veg Hyderabadi Biryani", category: "rice-biryani", price: 180, isVeg: true, description: "Spicy Hyderabadi style dum biryani infused with mint, coriander and fried onions." },
  { id: "rb-8", name: "Paneer Hyderabadi Biryani", category: "rice-biryani", price: 200, isVeg: true, description: "Rich dum biryani loaded with marinated soft paneer cubes in fiery Hyderabadi spices." },
  { id: "rb-9", name: "Lemon Rice", category: "rice-biryani", price: 150, isVeg: true, description: "Zesty rice tempered with mustard seeds, curry leaves, peanuts and fresh lemon juice." },
  { id: "rb-10", name: "Shanghai Rice Veg", category: "rice-biryani", price: 150, isVeg: true, description: "Indo-Chinese wok tossed rice with vegetables, garlic and Shanghai sauces." },
  { id: "rb-11", name: "Shanghai Rice Non Veg", category: "rice-biryani", price: 180, isVeg: false, description: "Wok-fried Shanghai rice loaded with shredded egg and juicy chicken pieces." },
  { id: "rb-12", name: "Schezwan Rice Veg", category: "rice-biryani", price: 160, isVeg: true, description: "Spicy fried rice tossed in homemade fiery Schezwan chili garlic sauce." },
  { id: "rb-13", name: "Schezwan Rice Non Veg", category: "rice-biryani", price: 190, isVeg: false, description: "Spicy Schezwan rice with chicken bits, egg and crunchy scallions." },
  { id: "rb-14", name: "Fried Rice Veg", category: "rice-biryani", price: 150, isVeg: true, description: "Classic Indo-Chinese fried rice with finely chopped carrots, beans and spring onion." },
  { id: "rb-15", name: "Fried Rice Non Veg", category: "rice-biryani", price: 190, isVeg: false, description: "Classic Chinese fried rice loaded with chicken chunks and scrambled egg." },
  { id: "rb-16", name: "Chicken Biryani", category: "rice-biryani", price: 240, isVeg: false, description: "Handwritten menu special: rich chicken dum biryani with fragrant basmati rice and egg.", image: "images/chicken_biryani.jpg" },
  { id: "rb-17", name: "Chicken Hydrabadi Biryani", category: "rice-biryani", price: 260, isVeg: false, description: "Handwritten menu special: authentic spicy Nizami style Hyderabadi chicken dum biryani." },
  { id: "rb-18", name: "Egg Fried Rice", category: "rice-biryani", price: 180, isVeg: false, description: "Wok tossed basmati rice with fluffy scrambled eggs, spring onions and light soy." },

  // 7. NOODLES
  { id: "nd-1", name: "Hakka Noodles Veg", category: "noodles", price: 110, isVeg: true, description: "Classic wok-tossed noodles with shredded cabbage, capsicum, carrots & onion." },
  { id: "nd-2", name: "Hakka Noodles Non Veg", category: "noodles", price: 150, isVeg: false, description: "Tossed noodles with tender chicken pieces, egg and fresh crunchy vegetables." },
  { id: "nd-3", name: "Schezwan Noodles Veg", category: "noodles", price: 140, isVeg: true, description: "Spicy noodles tossed in bold garlic-chili Schezwan paste." },
  {
    id: "nd-4",
    name: "American Chopsy",
    category: "noodles",
    price: 160,
    dualPrice: "₹160 / ₹180",
    variants: [{ name: "Veg", price: 160 }, { name: "Non-Veg", price: 180 }],
    isVeg: true,
    description: "Crispy fried noodles topped with sweet & sour vegetable or chicken glaze."
  },
  { id: "nd-5", name: "Schezwan Noodles Non Veg", category: "noodles", price: 170, isVeg: false, description: "Fiery Schezwan noodles loaded with chicken chunks, egg and scallions." },

  // 8. BREAD
  { id: "br-1", name: "Plan Tandoori Roti", category: "bread", price: 15, isVeg: true, description: "Whole wheat bread freshly baked in clay tandoor." },
  { id: "br-2", name: "Stap Nan", category: "bread", price: 50, isVeg: true, description: "Soft tandoor-baked naan bread stuffed with spiced filling." },
  { id: "br-3", name: "Butter Tandoori Roti", category: "bread", price: 35, isVeg: true, description: "Crisp tandoori roti glazed generously with fresh melting butter." },
  { id: "br-4", name: "Naan Plan", category: "bread", price: 35, isVeg: true, description: "Traditional soft leavened refined flour flatbread." },
  { id: "br-5", name: "Butter Naan", category: "bread", price: 45, isVeg: true, description: "Soft fluffy tandoori naan brushed with rich dairy butter." },
  { id: "br-6", name: "Naan (Garlic)", category: "bread", price: 55, isVeg: true, description: "Aromatic naan topped with minced roasted garlic and fresh coriander." },
  { id: "br-7", name: "Lachha Paratha", category: "bread", price: 55, isVeg: true, description: "Multi-layered flaky crispy whole wheat paratha baked in tandoor." },
  { id: "br-8", name: "Ajwain Paratha", category: "bread", price: 50, isVeg: true, description: "Crispy layered paratha flavored with fragrant carom seeds." },
  { id: "br-9", name: "Aloo Paratha", category: "bread", price: 55, isVeg: true, description: "Whole wheat bread generously stuffed with spiced mashed potatoes." },
  { id: "br-10", name: "Masala Kulcha", category: "bread", price: 55, isVeg: true, description: "Fluffy leavened bread stuffed with chatpata onion-potato masala." },
  { id: "br-11", name: "Paneer Kulcha", category: "bread", price: 70, isVeg: true, description: "Handwritten menu price: stuffed with finely grated seasoned fresh paneer." },

  // 9. VEG STARTERS
  { id: "vst-1", name: "Paneer Tikka (8 PC)", category: "veg-starters", price: 250, isVeg: true, description: "8 pcs fresh cottage cheese marinated in tandoori yogurt marinade, skewered with bell peppers.", image: "images/paneer_tikka.jpg" },
  { id: "vst-2", name: "Hariyali Paneer", category: "veg-starters", price: 235, isVeg: true, description: "Paneer cubes marinated in vibrant green mint, spinach and coriander paste." },
  { id: "vst-3", name: "Papdi Paneer", category: "veg-starters", price: 280, isVeg: true, description: "Crisp seasoned paneer delicacy crafted with crunchy coating and spices." },
  { id: "vst-4", name: "Hara Bhara Kabab", category: "veg-starters", price: 200, isVeg: true, description: "Pan-fried spinach, green pea and potato patties spiced with herbs." },
  { id: "vst-5", name: "Paneer Kabab Platter", category: "veg-starters", price: 310, isVeg: true, description: "Assorted tandoori paneer kebabs served sizzling with chutneys." },
  { id: "vst-6", name: "Paneer Achari Tikka", category: "veg-starters", price: 240, isVeg: true, description: "Paneer skewers marinated in tangy pickling spices and mustard oil." },
  { id: "vst-7", name: "Tandoori Aloo", category: "veg-starters", price: 180, isVeg: true, description: "Scooped baby potatoes stuffed with herbs, marinated in tandoori paste." },
  { id: "vst-8", name: "Mushroom Chilly", category: "veg-starters", price: 240, isVeg: true, description: "Fresh button mushrooms tossed with green chilies, capsicum and spicy glaze." },

  // 10. VEG MAIN COURSE (Indian Main Course Veg + Additional Veg Items)
  { id: "vmc-1", name: "Aloo Jeera", category: "veg-main-course", price: 120, isVeg: true, description: "Diced potatoes sautéed with cumin seeds, turmeric and green coriander." },
  { id: "vmc-2", name: "Aloo Gobhi Matar", category: "veg-main-course", price: 150, isVeg: true, description: "Home-style comforting curry of potatoes, cauliflower florets and green peas." },
  { id: "vmc-3", name: "Mix Vegetable", category: "veg-main-course", price: 160, isVeg: true, description: "Seasonal mixed garden vegetables cooked in aromatic spiced onion-tomato gravy." },
  { id: "vmc-4", name: "Kadai Vegetable", category: "veg-main-course", price: 215, isVeg: true, description: "Mixed vegetables tossed with bell peppers and freshly ground kadai coriander masala." },
  { id: "vmc-5", name: "Mushroom Masala", category: "veg-main-course", price: 240, isVeg: true, description: "Juicy button mushrooms simmered in a spiced semi-dry onion gravy." },
  { id: "vmc-6", name: "Vegetable Kofta", category: "veg-main-course", price: 220, isVeg: true, description: "Deep-fried veggie dumplings served in creamy aromatic cashew-onion sauce." },
  { id: "vmc-7", name: "Vardhan Special Veg", category: "veg-main-course", price: 270, isVeg: true, description: "Chef's signature royal preparation with exotic vegetables and rich dry-fruit gravy." },
  { id: "vmc-8", name: "Paneer Butter Masala", category: "veg-main-course", price: 220, isVeg: true, description: "Cottage cheese cubes simmered in velvety smooth buttery tomato makhani.", image: "images/paneer_butter_masala.jpg" },
  { id: "vmc-9", name: "Kadai Paneer", category: "veg-main-course", price: 250, isVeg: true, description: "Paneer tossed with crunchy capsicum and onions in freshly ground kadai spices." },
  { id: "vmc-10", name: "Methi Paneer", category: "veg-main-course", price: 200, isVeg: true, description: "Fresh paneer cooked with fragrant fenugreek leaves in rich sauce." },
  { id: "vmc-11", name: "Paneer Chatpata", category: "veg-main-course", price: 210, isVeg: true, description: "Tangy and spicy paneer curry with pungent mustard seeds and spices." },
  { id: "vmc-12", name: "Paneer Tikka Masala (8PC)", category: "veg-main-course", price: 270, isVeg: true, description: "8 pcs tandoor-roasted paneer tikka finished in spiced rich masala gravy." },
  { id: "vmc-13", name: "Palak Paneer", category: "veg-main-course", price: 200, isVeg: true, description: "Soft paneer cubes in smooth, garlic-tempered fresh spinach purée." },
  { id: "vmc-14", name: "Malai Kofta (2 PC)", category: "veg-main-course", price: 280, isVeg: true, description: "2 pcs melt-in-mouth paneer-khoya dumplings served in royal shahi kaju gravy." },
  { id: "vmc-15", name: "Dal Makhani", category: "veg-main-course", price: 170, isVeg: true, description: "Black lentils slow-cooked overnight with butter, cream and tomatoes." },
  { id: "vmc-16", name: "Yellow Dal Tadka", category: "veg-main-course", price: 130, isVeg: true, description: "Yellow arhar lentils tempered with desi ghee, cumin, garlic and dry red chilies." },
  { id: "vmc-17", name: "Yellow Dal Fry", category: "veg-main-course", price: 110, isVeg: true, description: "Comforting yellow dal cooked with sauteed onions and tomatoes." },
  { id: "vmc-18", name: "Black Dal Tadka", category: "veg-main-course", price: 160, isVeg: true, description: "Flavorful black lentils tempered with garlic and cumin." },
  { id: "vmc-19", name: "Paneer Pasinda", category: "veg-main-course", price: 260, isVeg: true, description: "Stuffed paneer sandwiches shallow fried and served in velvety nut gravy." },
  { id: "vmc-20", name: "Paneer Handi (10PC)", category: "veg-main-course", price: 290, isVeg: true, description: "10 pcs paneer cooked in a traditional handi with rich aromatic brown gravy." },
  { id: "vmc-21", name: "Paneer Lababdar (10PC)", category: "veg-main-course", price: 280, isVeg: true, description: "10 pcs paneer simmered in creamy onion tomato gravy with grated paneer." },
  { id: "vmc-22", name: "Paneer Lajabab (10PC)", category: "veg-main-course", price: 280, isVeg: true, description: "10 pcs exquisite paneer in chef's special spiced creamy reduction." },
  { id: "vmc-23", name: "Paneer Do Pyaza (10PC)", category: "veg-main-course", price: 240, isVeg: true, description: "10 pcs paneer prepared with double caramelized onions in thick masala." },
  { id: "vmc-24", name: "Veg Patiala", category: "veg-main-course", price: 200, isVeg: true, description: "Punjab Patiala style rich spiced vegetable preparation with papad crust." },
  { id: "vmc-25", name: "Paneer Patiala", category: "veg-main-course", price: 250, isVeg: true, description: "Stuffed paneer rolls served over flavorful spiced North Indian gravy." },
  { id: "vmc-26", name: "Paneer Hyderabadi Masala", category: "veg-main-course", price: 195, isVeg: true, description: "Spicy paneer curry cooked with mint, coriander and Hyderabadi spices." },
  { id: "vmc-27", name: "Paneer Tawa Masala (10PC)", category: "veg-main-course", price: 250, isVeg: true, description: "10 pcs paneer seared on high-heat tawa with chunky onion-tomato masala." },
  { id: "vmc-28", name: "Mushroom Handi", category: "veg-main-course", price: 280, isVeg: true, description: "Button mushrooms simmered in traditional clay handi spices." },
  { id: "vmc-29", name: "Mushroom Kadhai", category: "veg-main-course", price: 300, isVeg: true, description: "Fresh mushrooms cooked with whole coriander and bell peppers in a wok." },
  { id: "vmc-30", name: "Veg Handi", category: "veg-main-course", price: 200, isVeg: true, description: "Assorted vegetables cooked handi style in rich creamy brown sauce." },
  { id: "vmc-31", name: "Paneer Matar", category: "veg-main-course", price: 220, isVeg: true, description: "Classic combination of soft paneer and sweet green peas in spiced gravy." },
  { id: "vmc-32", name: "Mushroom Do Pyaza", category: "veg-main-course", price: 280, isVeg: true, description: "Mushrooms sautéed with plentiful pearl onions in thick spicy gravy." },
  { id: "vmc-33", name: "Paneer Kolhapuri", category: "veg-main-course", price: 280, isVeg: true, description: "Fiery Maharashtrian style paneer curry infused with Kolhapuri red chilies." },
  { id: "vmc-34", name: "CH Dehati (Full)", category: "veg-main-course", price: 780, isVeg: false, description: "Traditional rustic village-style whole chicken prepared in clay handi (Full Portion)." },
  { id: "vmc-35", name: "CH Dehati (Half)", category: "veg-main-course", price: 400, isVeg: false, description: "Traditional rustic village-style chicken prepared in clay handi (Half Portion)." },

  // 11. NON-VEG MAIN COURSE
  { id: "nvmc-1", name: "Egg Curry (Full) 4 PC", category: "non-veg-main-course", price: 150, isVeg: false, description: "4 boiled eggs simmered in rich homestyle onion tomato gravy." },
  { id: "nvmc-2", name: "Egg Curry (Half) 2 PC", category: "non-veg-main-course", price: 120, isVeg: false, description: "2 boiled eggs in spiced curry." },
  { id: "nvmc-3", name: "Chicken Butter Masala (F 4PC)", category: "non-veg-main-course", price: 350, isVeg: false, description: "4 pcs chicken cooked in creamy tomato butter makhani gravy (Full).", image: "images/butter_chicken.jpg" },
  { id: "nvmc-4", name: "Chicken Butter Masala (H 2PC)", category: "non-veg-main-course", price: 220, isVeg: false, description: "2 pcs chicken in rich butter makhani gravy (Half)." },
  { id: "nvmc-5", name: "Chicken Masala (F 4PC)", category: "non-veg-main-course", price: 310, isVeg: false, description: "4 pcs chicken cooked in thick traditional spicy onion-tomato gravy (Full)." },
  { id: "nvmc-6", name: "Chicken Masala (H 2PC)", category: "non-veg-main-course", price: 220, isVeg: false, description: "2 pcs chicken in traditional spicy gravy (Half)." },
  { id: "nvmc-7", name: "Chicken Kadhai (F 4PC)", category: "non-veg-main-course", price: 320, isVeg: false, description: "4 pcs chicken tossed with capsicum, onion and freshly ground kadhai spices (Full)." },
  { id: "nvmc-8", name: "Chicken Kadhai (H 2PC)", category: "non-veg-main-course", price: 240, isVeg: false, description: "2 pcs chicken kadhai with bell peppers (Half)." },
  { id: "nvmc-9", name: "Chicken Do Pyaza (F 4PC)", category: "non-veg-main-course", price: 320, isVeg: false, description: "4 pcs chicken prepared with lavish onions and whole garam masala (Full)." },
  { id: "nvmc-10", name: "Chicken Do Pyaza (H 2PC)", category: "non-veg-main-course", price: 200, isVeg: false, description: "2 pcs chicken do pyaza (Half)." },
  { id: "nvmc-11", name: "Chicken Patiala (6PC Bolss)", category: "non-veg-main-course", price: 380, isVeg: false, description: "6 pcs boneless chicken cooked in authentic rich Patiala royal curry." },
  { id: "nvmc-12", name: "Chicken Rara (2 PC)", category: "non-veg-main-course", price: 300, isVeg: false, description: "2 pcs succulent chicken cooked with spiced minced chicken keema gravy." },
  { id: "nvmc-13", name: "Chicken Bhartinda Kema", category: "non-veg-main-course", price: 320, isVeg: false, description: "Spiced minced chicken cooked Punjabi dhaba style with robust herbs." },
  { id: "nvmc-14", name: "Chicken Lababdar", category: "non-veg-main-course", price: 320, isVeg: false, description: "Chicken cooked in a smooth, mildly spiced tomato cream gravy." },
  { id: "nvmc-15", name: "Chicken Tikka Masala (6PC)", category: "non-veg-main-course", price: 330, isVeg: false, description: "6 pcs clay oven roasted chicken tikka finished in spicy rich masala." },
  { id: "nvmc-16", name: "Chicken Bharta", category: "non-veg-main-course", price: 280, isVeg: false, description: "Shredded chicken cooked in creamy, spiced egg-infused gravy." },
  { id: "nvmc-17", name: "Methi Chicken (4PC)", category: "non-veg-main-course", price: 380, isVeg: false, description: "4 pcs tender chicken cooked with fresh fenugreek leaves in rich sauce." },
  { id: "nvmc-18", name: "Reshmi Butter Chicken (4PC)", category: "non-veg-main-course", price: 350, isVeg: false, description: "4 pcs silky reshmi chicken in luscious sweet-tangy butter makhani." },
  { id: "nvmc-19", name: "Chicken Handi (Full) 8 PC", category: "non-veg-main-course", price: 620, isVeg: false, description: "8 pcs chicken slow cooked in clay handi with royal spices (Full)." },
  { id: "nvmc-20", name: "Chicken Handi (Half) 4 PC", category: "non-veg-main-course", price: 400, isVeg: false, description: "4 pcs chicken cooked in clay handi (Half)." },
  { id: "nvmc-21", name: "Vardhan Chicken", category: "non-veg-main-course", price: 370, isVeg: false, description: "Our chef's signature house specialty chicken curry with secret spices." },
  { id: "nvmc-22", name: "Murg Punjabi Masala", category: "non-veg-main-course", price: 370, isVeg: false, description: "Spicy North Indian chicken curry simmered with whole spices and ghee." },
  { id: "nvmc-23", name: "Fish Fry (4 PC)", category: "non-veg-main-course", price: 200, isVeg: false, description: "4 pcs fresh river fish marinated in spices and shallow pan-fried." },
  { id: "nvmc-24", name: "Fish Gravy (4 PC)", category: "non-veg-main-course", price: 250, isVeg: false, description: "4 pcs tender fish simmered in traditional spiced mustard-tomato curry." },
  { id: "nvmc-25", name: "Mutton Curry (6 PC)", category: "non-veg-main-course", price: 600, isVeg: false, description: "6 pcs tender goat meat slow-cooked in aromatic homestyle curry." },
  { id: "nvmc-26", name: "Mutton Masala (6 PC)", category: "non-veg-main-course", price: 650, isVeg: false, description: "6 pcs succulent mutton in thick spiced onion and garlic gravy." },
  { id: "nvmc-27", name: "Mutton Rogan Josh (6 PC)", category: "non-veg-main-course", price: 700, isVeg: false, description: "6 pcs Kashmiri delicacy cooked with rattan jot, saffron and fennel." },
  { id: "nvmc-28", name: "Mutton Handi (6 PC)", category: "non-veg-main-course", price: 750, isVeg: false, description: "6 pcs premium mutton simmered in clay handi on low heat." },
  { id: "nvmc-29", name: "Chicken Mughlai", category: "non-veg-main-course", price: 350, isVeg: false, description: "Rich royal chicken cooked with egg ribbons, cream and dry fruits." },
  { id: "nvmc-30", name: "CH Musulum (Full) 8 PC", category: "non-veg-main-course", price: 750, isVeg: false, description: "Royal Murgh Musallam: 8 pcs chicken in extravagant Mughlai gravy with boiled eggs (Full)." },
  { id: "nvmc-31", name: "CH Musulum (Half) 4 PC", category: "non-veg-main-course", price: 410, isVeg: false, description: "Royal Murgh Musallam: 4 pcs chicken in rich Mughlai gravy (Half)." },

  // 12. NON-VEG STARTERS
  { id: "nvst-1", name: "Anda Kabad", category: "non-veg-starters", price: 150, isVeg: false, description: "Spiced egg kabab patties roasted over charcoal." },
  { id: "nvst-2", name: "Tandoori Murg (Full)", category: "non-veg-starters", price: 650, isVeg: false, description: "Whole chicken marinated in yogurt and tandoori spices, char-roasted in tandoor." },
  { id: "nvst-3", name: "Tandoori Murg (Half)", category: "non-veg-starters", price: 350, isVeg: false, description: "Half roasted tandoori chicken served with mint chutney and onion rings." },
  { id: "nvst-4", name: "Murga Afghani Kabab", category: "non-veg-starters", price: 370, isVeg: false, description: "Mild, creamy chicken skewers marinated in cashew paste and cheese." },
  { id: "nvst-5", name: "Chicken Tikka (8 PC)", category: "non-veg-starters", price: 270, isVeg: false, description: "8 pcs tender boneless chicken roasted with spicy tandoori marinade.", image: "images/chicken_tikka.jpg" },
  { id: "nvst-6", name: "Kali Mirch Kabab", category: "non-veg-starters", price: 270, isVeg: false, description: "Succulent chicken kababs flavored with freshly crushed black peppercorns." },
  { id: "nvst-7", name: "Chicken Lashuni Tikka (8 PC)", category: "non-veg-starters", price: 350, isVeg: false, description: "8 pcs chicken tikka infused with roasted garlic paste and mustard oil." },
  { id: "nvst-8", name: "Murgh Malai Tikka (8 PC)", category: "non-veg-starters", price: 350, isVeg: false, description: "8 pcs melt-in-mouth chicken cubes marinated in heavy cream and cardamoms." },
  { id: "nvst-9", name: "Chicken Hariyali Kabab (8 PC)", category: "non-veg-starters", price: 350, isVeg: false, description: "8 pcs chicken cubes marinated in fresh mint, coriander and green chilies." },
  { id: "nvst-10", name: "Chicken Kabab Platter", category: "non-veg-starters", price: 350, isVeg: false, description: "Assorted tandoori chicken kebabs served on a sizzling platter." },
  { id: "nvst-11", name: "Chicken Seekh Kabab (8 PC)", category: "non-veg-starters", price: 350, isVeg: false, description: "8 pcs minced chicken skewers seasoned with herbs and roasted in clay oven." },
  { id: "nvst-12", name: "Chicken Afghani Tikka (8 PC)", category: "non-veg-starters", price: 350, isVeg: false, description: "8 pcs chicken in velvety cashew and rich cream marinade." },
  { id: "nvst-13", name: "Chicken Reshmi Kabab (8 PC)", category: "non-veg-starters", price: 350, isVeg: false, description: "8 pcs ultra tender chicken kababs grilled with egg and subtle spices." },

  // 13. VEG CHINESE
  { id: "vc-1", name: "Chilly Potato", category: "veg-chinese", price: 140, isVeg: true, description: "Crispy fried potato fingers tossed in spicy chili garlic soy sauce." },
  { id: "vc-2", name: "Chilli Paneer (10PC)", category: "veg-chinese", price: 200, isVeg: true, description: "10 pcs crisp paneer cubes tossed with capsicum, onion and green chilies." },
  { id: "vc-3", name: "Chilli Mushroom", category: "veg-chinese", price: 230, isVeg: true, description: "Crispy fried mushrooms tossed in a zesty Indo-Chinese spicy gravy." },
  { id: "vc-4", name: "Crispy Chilli Baby Corn", category: "veg-chinese", price: 220, isVeg: true, description: "Crisp fried baby corn tossed with sweet chili garlic seasoning." },
  { id: "vc-5", name: "Crispy Chilli Vegetables", category: "veg-chinese", price: 160, isVeg: true, description: "Assorted crunchy vegetables tossed in spicy Schezwan sauce." },
  { id: "vc-6", name: "Chinese Whel", category: "veg-chinese", price: 170, isVeg: true, description: "Crispy fried noodles mixed with fresh salad and sweet spicy dressing." },
  { id: "vc-7", name: "Veg Spring Roll", category: "veg-chinese", price: 280, isVeg: true, description: "Crispy rolled pastry sheets stuffed with stir-fried seasoned vegetables." },
  { id: "vc-8", name: "Veg Manchurian (10PC)", category: "veg-chinese", price: 180, isVeg: true, description: "10 pcs vegetable dumplings in savory garlic soy Manchurian sauce." },
  { id: "vc-9", name: "Gobi Manchurian", category: "veg-chinese", price: 180, isVeg: true, description: "Crispy fried cauliflower florets tossed in tangy Manchurian glaze." },
  { id: "vc-10", name: "Paneer Rantan", category: "veg-chinese", price: 240, isVeg: true, description: "Crispy wonton wrappers stuffed with spiced paneer filling." },
  { id: "vc-11", name: "Veg Welton", category: "veg-chinese", price: 250, isVeg: true, description: "Indo-Chinese style crispy vegetable wonton pockets." },
  { id: "vc-12", name: "Paneer Singer", category: "veg-chinese", price: 230, isVeg: true, description: "Golden crispy finger-cut paneer seasoned with spicy Chinese dips." },
  { id: "vc-13", name: "Paneer Garlic", category: "veg-chinese", price: 240, isVeg: true, description: "Paneer sautéed with extra roasted garlic, spring onions and dark soy." },
  { id: "vc-14", name: "Paneer Crispy", category: "veg-chinese", price: 235, isVeg: true, description: "Crunchy batter-coated paneer tossed with sesame and chilies." },
  { id: "vc-15", name: "Paneer Coriandar", category: "veg-chinese", price: 250, isVeg: true, description: "Cottage cheese wok-tossed with fresh coriander leaves and green chilies." },
  { id: "vc-16", name: "Paneer 65", category: "veg-chinese", price: 240, isVeg: true, description: "Spicy South Indian style deep-fried paneer tempered with curry leaves & yogurt." },
  { id: "vc-17", name: "Paneer Coriandar (SPL)", category: "veg-chinese", price: 250, isVeg: true, description: "Menu special fresh coriander spiced crispy paneer stir-fry." },

  // 14. NON-VEG CHINESE
  { id: "nvc-1", name: "Egg Chilli", category: "non-veg-chinese", price: 170, isVeg: false, description: "Batter-fried boiled egg chunks tossed with onions, peppers and chili sauce." },
  { id: "nvc-2", name: "Chicken Chilli (8PC)", category: "non-veg-chinese", price: 225, isVeg: false, description: "8 pcs crispy chicken tossed with green chilies, onions and soy sauce." },
  { id: "nvc-3", name: "Chicken Manchurian (8PC)", category: "non-veg-chinese", price: 225, isVeg: false, description: "8 pcs chicken dumplings or pieces in savory ginger garlic Manchurian sauce." },
  { id: "nvc-4", name: "Chicken Schezwan (8PC)", category: "non-veg-chinese", price: 230, isVeg: false, description: "8 pcs chicken tossed in fiery homemade red Schezwan chili paste." },
  { id: "nvc-5", name: "Chicken Garur Ginger", category: "non-veg-chinese", price: 230, isVeg: false, description: "Juicy chicken stir-fried with fragrant julienned ginger and scallions." },
  { id: "nvc-6", name: "Lemon Chicken (8PC)", category: "non-veg-chinese", price: 230, isVeg: false, description: "8 pcs chicken cooked in sweet and tangy zesty lemon glaze." },
  { id: "nvc-7", name: "Chicken Lollipop (6PC)", category: "non-veg-chinese", price: 270, isVeg: false, description: "6 pcs frenched chicken winglets coated in spicy red batter and fried crisp." },
  { id: "nvc-8", name: "Crunchy Fry Chicken", category: "non-veg-chinese", price: 300, isVeg: false, description: "Ultra-crispy deep fried spiced chicken bites." },
  { id: "nvc-9", name: "Chicken Rantan", category: "non-veg-chinese", price: 250, isVeg: false, description: "Crisp fried wontons stuffed with savory minced chicken filling." },
  { id: "nvc-10", name: "Chicken (65) (8PC)", category: "non-veg-chinese", price: 240, isVeg: false, description: "8 pcs fiery chicken fried and tossed with curry leaves, mustard seeds and yogurt." },
  { id: "nvc-11", name: "Non Veg Spring Roll", category: "non-veg-chinese", price: 280, isVeg: false, description: "Crispy rolls packed with shredded chicken, egg and stir-fried vegetables." },

  // 15. RAITA & SALAD
  { id: "rs-1", name: "Freess Green Salad", category: "raita-salad", price: 50, isVeg: true, description: "Fresh slices of cucumbers, carrots, tomatoes, onions and green chilies with lemon." },
  { id: "rs-2", name: "Cucumber Salad", category: "raita-salad", price: 30, isVeg: true, description: "Crisp sliced cucumbers with chaat masala." },
  { id: "rs-3", name: "Papad Roasted", category: "raita-salad", price: 20, isVeg: true, description: "Crisp roasted urad dal papad." },
  { id: "rs-4", name: "Papad Fried", category: "raita-salad", price: 25, isVeg: true, description: "Golden deep-fried crunchy papad." },
  { id: "rs-5", name: "Veg Raita", category: "raita-salad", price: 80, isVeg: true, description: "Chilled whipped curd with finely chopped tomatoes, onions and roasted cumin." },
  { id: "rs-6", name: "Bondi Raita", category: "raita-salad", price: 80, isVeg: true, description: "Crispy spiced gram flour pearls soaked in chilled seasoned yogurt." },
  { id: "rs-7", name: "Plane Dahi", category: "raita-salad", price: 50, isVeg: true, description: "Fresh homestyle creamy set curd." },
  { id: "rs-8", name: "Masala Papad", category: "raita-salad", price: 50, isVeg: true, description: "Crispy papad topped with spicy onion, tomato, coriander and chaat masala." },
  { id: "rs-9", name: "Onion Salad", category: "raita-salad", price: 40, isVeg: true, description: "Thinly sliced red onion rings tossed with lemon juice and chaat masala." },

  // 16. BEVERAGES
  { id: "bev-1", name: "Masala Cold Drinks", category: "beverages", price: 70, isVeg: true, description: "Spiced chilled fizzy beverage with black salt, cumin and lemon." },
  { id: "bev-2", name: "Lassi", category: "beverages", price: 80, isVeg: true, description: "Traditional sweet creamy Punjabi yogurt cooler topped with malai." },
  { id: "bev-3", name: "Lassi SPL", category: "beverages", price: 100, isVeg: true, description: "Special royal thick lassi loaded with dry fruits, saffron and cream." },
  { id: "bev-4", name: "Hot Milk", category: "beverages", price: 50, isVeg: true, description: "Warm sweetened full-cream milk with a dash of cardamom." },
  { id: "bev-5", name: "Nembu Water", category: "beverages", price: 50, isVeg: true, description: "Refreshing sweet and salted freshly squeezed lemonade." },

  // 17. DESSERTS
  { id: "dst-1", name: "Vanilla Ice-Cream", category: "desserts", price: 60, isVeg: true, description: "Smooth and creamy classic vanilla ice cream scoop." },
  { id: "dst-2", name: "Gulab Jamun (2 PC)", category: "desserts", price: 40, isVeg: true, description: "2 pcs warm golden fried khoya dumplings soaked in fragrant saffron sugar syrup." },
  { id: "dst-3", name: "Rasgulla (2 PC)", category: "desserts", price: 40, isVeg: true, description: "2 pcs spongy cottage cheese balls soaked in light sugar syrup." },
  { id: "dst-4", name: "Strawberry", category: "desserts", price: 80, isVeg: true, description: "Chilled strawberry dessert scoop." }
];

// Categories definition
const CATEGORIES = [
  { id: "popular", name: "⭐ Popular", icon: "⭐" },
  { id: "tea-coffee", name: "Tea & Coffee", icon: "☕" },
  { id: "soup", name: "Soup", icon: "🍲" },
  { id: "snacks-veg", name: "Veg Snacks", icon: "🥦" },
  { id: "snacks-non-veg", name: "Non-Veg Snacks", icon: "🍗" },
  { id: "rice-biryani", name: "Rice & Biryani", icon: "🍚" },
  { id: "noodles", name: "Noodles", icon: "🍜" },
  { id: "bread", name: "Bread", icon: "🫓" },
  { id: "veg-starters", name: "Veg Starters", icon: "🧀" },
  { id: "veg-main-course", name: "Veg Main Course", icon: "🥘" },
  { id: "non-veg-main-course", name: "Non-Veg Main Course", icon: "🍗" },
  { id: "non-veg-starters", name: "Non-Veg Starters", icon: "🍗" },
  { id: "veg-chinese", name: "Veg Chinese", icon: "🥦" },
  { id: "non-veg-chinese", name: "Non-Veg Chinese", icon: "🍗" },
  { id: "raita-salad", name: "Raita & Salad", icon: "🥗" },
  { id: "beverages", name: "Beverages", icon: "🥤" },
  { id: "desserts", name: "Desserts", icon: "🍨" }
];

// Global State
const state = {
  cart: {}, // { [itemId]: { item, quantity, selectedVariant } }
  tableNumber: null,
  activeDietFilter: "all", // "all", "veg", "non-veg"
  searchQuery: "",
  activeCategory: "popular"
};

// DOM References
let dom = {};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  cacheDomElements();
  parseTableFromUrl();
  renderCategoryPills();
  renderMenu();
  attachEventListeners();
  setupScrollSpy();
  updateCartUI();
});

function cacheDomElements() {
  dom = {
    categoryBar: document.getElementById("categoryBar"),
    menuContainer: document.getElementById("menuContainer"),
    popularContainer: document.getElementById("popularItemsContainer"),
    searchInput: document.getElementById("searchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    filterBtns: document.querySelectorAll(".diet-filter-btn"),
    floatingCartBar: document.getElementById("floatingCartBar"),
    floatingCartCount: document.getElementById("floatingCartCount"),
    floatingCartTotal: document.getElementById("floatingCartTotal"),
    cartDrawer: document.getElementById("cartDrawer"),
    cartBackdrop: document.getElementById("cartBackdrop"),
    cartCloseBtn: document.getElementById("cartCloseBtn"),
    cartItemsList: document.getElementById("cartItemsList"),
    cartSubtotal: document.getElementById("cartSubtotal"),
    cartGrandTotal: document.getElementById("cartGrandTotal"),
    cartTotalItemsHeader: document.getElementById("cartTotalItemsHeader"),
    cartEmptyState: document.getElementById("cartEmptyState"),
    cartFooter: document.getElementById("cartFooter"),
    orderCookingNotes: document.getElementById("orderCookingNotes"),
    placeOrderBtn: document.getElementById("placeOrderBtn"),
    orderConfirmationModal: document.getElementById("orderConfirmationModal"),
    orderModalBackdrop: document.getElementById("orderModalBackdrop"),
    orderModalCloseBtn: document.getElementById("orderModalCloseBtn"),
    orderSummaryContent: document.getElementById("orderSummaryContent"),
    orderTableInput: document.getElementById("orderTableInput"),
    orderCustomerName: document.getElementById("orderCustomerName"),
    orderCustomerPhone: document.getElementById("orderCustomerPhone"),
    finalConfirmOrderBtn: document.getElementById("finalConfirmOrderBtn"),
    whatsappOrderBtn: document.getElementById("whatsappOrderBtn"),
    toast: document.getElementById("toast"),
    callModal: document.getElementById("callModal"),
    callModalBackdrop: document.getElementById("callModalBackdrop"),
    callModalCloseBtn: document.getElementById("callModalCloseBtn"),
    callActionBtn: document.getElementById("callActionBtn"),
    locationModal: document.getElementById("locationModal"),
    locationModalBackdrop: document.getElementById("locationModalBackdrop"),
    locationModalCloseBtn: document.getElementById("locationModalCloseBtn"),
    locationActionBtn: document.getElementById("locationActionBtn"),
    headerTableBadge: document.getElementById("headerTableBadge"),
    tableSelectorModal: document.getElementById("tableSelectorModal"),
    tableSelectorBackdrop: document.getElementById("tableSelectorBackdrop"),
    tableSelectorCloseBtn: document.getElementById("tableSelectorCloseBtn"),
    tableGrid: document.getElementById("tableGrid"),
    qrToolModal: document.getElementById("qrToolModal"),
    qrToolBackdrop: document.getElementById("qrToolBackdrop"),
    qrToolCloseBtn: document.getElementById("qrToolCloseBtn"),
    qrToolBtn: document.getElementById("qrToolBtn"),
    qrTableSelect: document.getElementById("qrTableSelect"),
    qrCodeDisplay: document.getElementById("qrCodeDisplay"),
    qrUrlDisplay: document.getElementById("qrUrlDisplay")
  };
}

// Table Number from URL: ?table=5 or ?t=5
function parseTableFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const tableParam = urlParams.get("table") || urlParams.get("t");
  
  if (tableParam && !isNaN(parseInt(tableParam))) {
    state.tableNumber = parseInt(tableParam);
    localStorage.setItem("vardhan_table_number", state.tableNumber);
  } else {
    const saved = localStorage.getItem("vardhan_table_number");
    if (saved && !isNaN(parseInt(saved))) {
      state.tableNumber = parseInt(saved);
    }
  }
  
  updateTableBadge();
}

function setTableNumber(tableNum) {
  state.tableNumber = tableNum;
  if (tableNum) {
    localStorage.setItem("vardhan_table_number", tableNum);
  } else {
    localStorage.removeItem("vardhan_table_number");
  }
  updateTableBadge();
  closeModal(dom.tableSelectorModal, dom.tableSelectorBackdrop);
  showToast(`Table set to Table ${tableNum}`);
}

function updateTableBadge() {
  if (dom.headerTableBadge) {
    if (state.tableNumber) {
      dom.headerTableBadge.innerHTML = `<span>Table</span> <strong>#${state.tableNumber}</strong>`;
      dom.headerTableBadge.classList.add("active");
    } else {
      dom.headerTableBadge.innerHTML = `<span>Select</span> <strong>Table</strong>`;
      dom.headerTableBadge.classList.remove("active");
    }
  }
  if (dom.orderTableInput) {
    dom.orderTableInput.value = state.tableNumber ? `Table ${state.tableNumber}` : "";
  }
}

// Category Pills Rendering
function renderCategoryPills() {
  if (!dom.categoryBar) return;
  
  dom.categoryBar.innerHTML = CATEGORIES.map(cat => `
    <button class="category-pill ${cat.id === state.activeCategory ? 'active' : ''}" 
            data-category="${cat.id}" 
            id="pill-${cat.id}"
            aria-label="Scroll to ${cat.name}">
      <span class="pill-icon">${cat.icon}</span>
      <span class="pill-name">${cat.name}</span>
    </button>
  `).join("");
}

// Render Menu & Popular Section
function renderMenu() {
  renderPopularItems();
  renderAllCategorySections();
}

function renderPopularItems() {
  if (!dom.popularContainer) return;
  const popularItems = MENU_DATA.filter(item => item.isPopular);
  
  dom.popularContainer.innerHTML = popularItems.map(item => createPopularCardHtml(item)).join("");
}

function createPopularCardHtml(item) {
  const inCartQty = state.cart[item.id] ? state.cart[item.id].quantity : 0;
  
  return `
    <div class="popular-card" data-item-id="${item.id}">
      <div class="popular-img-wrapper">
        <img src="${item.image || 'images/chicken_biryani.jpg'}" 
             alt="${item.name}" 
             class="popular-img" 
             loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=80'" />
        ${item.badge ? `<span class="popular-badge">${item.badge}</span>` : ''}
        <span class="diet-icon ${item.isVeg ? 'veg' : 'non-veg'}" title="${item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}">
          <span class="diet-dot"></span>
        </span>
      </div>
      <div class="popular-content">
        <h4 class="popular-title">${item.name}</h4>
        <p class="popular-desc">${item.description || ''}</p>
        <div class="popular-bottom">
          <div class="popular-price">₹${item.price}</div>
          <div class="item-action-area" data-action-id="${item.id}">
            ${renderAddOrStepperButton(item, inCartQty)}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAllCategorySections() {
  if (!dom.menuContainer) return;
  
  const query = state.searchQuery.trim().toLowerCase();
  const diet = state.activeDietFilter;
  
  // Exclude "popular" from main flow since it is pinned at top
  const normalCategories = CATEGORIES.filter(c => c.id !== "popular");
  
  let totalVisibleItems = 0;
  let sectionsHtml = "";

  normalCategories.forEach(cat => {
    let items = MENU_DATA.filter(item => item.category === cat.id);
    
    // Apply Dietary filter
    if (diet === "veg") {
      items = items.filter(item => item.isVeg);
    } else if (diet === "non-veg") {
      items = items.filter(item => !item.isVeg);
    }
    
    // Apply Search query
    if (query) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        (item.description && item.description.toLowerCase().includes(query)) ||
        cat.name.toLowerCase().includes(query)
      );
    }

    if (items.length > 0) {
      totalVisibleItems += items.length;
      sectionsHtml += `
        <section class="menu-section" id="section-${cat.id}" data-category-id="${cat.id}">
          <div class="section-header">
            <h3 class="section-title">
              <span class="section-icon">${cat.icon}</span>
              ${cat.name}
            </h3>
            <span class="section-count">${items.length} ${items.length === 1 ? 'item' : 'items'}</span>
          </div>
          <div class="menu-grid">
            ${items.map(item => createDishCardHtml(item)).join("")}
          </div>
        </section>
      `;
    }
  });

  if (totalVisibleItems === 0) {
    dom.menuContainer.innerHTML = `
      <div class="no-results-state">
        <div class="no-results-icon">🔍</div>
        <h3>No dishes found</h3>
        <p>No matching items found for "${state.searchQuery}". Try searching for Paneer, Biryani, Roti, Chicken, or Clear filters.</p>
        <button class="btn btn-outline" id="resetFiltersBtn">Reset Filters & Search</button>
      </div>
    `;
    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.searchQuery = "";
        state.activeDietFilter = "all";
        dom.searchInput.value = "";
        dom.clearSearchBtn.classList.remove("visible");
        dom.filterBtns.forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
        renderMenu();
      });
    }
  } else {
    dom.menuContainer.innerHTML = sectionsHtml;
  }
}

function createDishCardHtml(item) {
  const inCartQty = state.cart[item.id] ? state.cart[item.id].quantity : 0;
  const hasImage = Boolean(item.image);
  
  return `
    <div class="dish-card ${hasImage ? 'has-dish-img' : 'no-dish-img'}" data-item-id="${item.id}" id="dish-${item.id}">
      <div class="dish-info">
        <div class="dish-header-row">
          <span class="diet-icon ${item.isVeg ? 'veg' : 'non-veg'}" title="${item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}">
            <span class="diet-dot"></span>
          </span>
          ${item.badge ? `<span class="dish-tag">${item.badge}</span>` : ''}
        </div>
        <h4 class="dish-name">${highlightMatch(item.name, state.searchQuery)}</h4>
        <div class="dish-price-row">
          <span class="dish-price">₹${item.price}</span>
          ${item.dualPrice ? `<span class="dual-price-badge">${item.dualPrice}</span>` : ''}
        </div>
        ${item.description ? `<p class="dish-desc">${highlightMatch(item.description, state.searchQuery)}</p>` : ''}
      </div>

      <div class="dish-action-side">
        ${hasImage ? `
          <div class="dish-img-container">
            <img src="${item.image}" alt="${item.name}" class="dish-thumbnail" loading="lazy" />
          </div>
        ` : ''}
        <div class="item-action-area" data-action-id="${item.id}">
          ${renderAddOrStepperButton(item, inCartQty)}
        </div>
      </div>
    </div>
  `;
}

function renderAddOrStepperButton(item, qty) {
  if (qty > 0) {
    return `
      <div class="stepper-control">
        <button class="stepper-btn minus" onclick="updateItemQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
        <span class="stepper-value">${qty}</span>
        <button class="stepper-btn plus" onclick="updateItemQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
      </div>
    `;
  }
  return `
    <button class="btn-add-item" onclick="addItemToCart('${item.id}')" aria-label="Add ${item.name} to cart">
      <span>ADD</span>
      <span class="plus-icon">+</span>
    </button>
  `;
}

function highlightMatch(text, query) {
  if (!query || !text) return text;
  const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
  return text.replace(regex, `<mark class="highlight">$1</mark>`);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// CART MANAGEMENT
function addItemToCart(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  if (state.cart[itemId]) {
    state.cart[itemId].quantity += 1;
  } else {
    state.cart[itemId] = {
      item: item,
      quantity: 1
    };
  }

  showToast(`Added 1x ${item.name} to cart!`);
  updateCartUI();
  refreshItemCards(itemId);
  bounceFloatingCart();
}

function updateItemQuantity(itemId, delta) {
  if (!state.cart[itemId]) return;

  state.cart[itemId].quantity += delta;
  const item = state.cart[itemId].item;

  if (state.cart[itemId].quantity <= 0) {
    delete state.cart[itemId];
    showToast(`Removed ${item.name} from cart`);
  }

  updateCartUI();
  refreshItemCards(itemId);
}

function removeItemCompletely(itemId) {
  if (state.cart[itemId]) {
    const name = state.cart[itemId].item.name;
    delete state.cart[itemId];
    showToast(`Removed ${name}`);
    updateCartUI();
    refreshItemCards(itemId);
  }
}

function refreshItemCards(itemId) {
  const qty = state.cart[itemId] ? state.cart[itemId].quantity : 0;
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  const actionContainers = document.querySelectorAll(`[data-action-id="${itemId}"]`);
  actionContainers.forEach(el => {
    el.innerHTML = renderAddOrStepperButton(item, qty);
  });
}

function getCartCalculations() {
  let totalItems = 0;
  let subtotal = 0;

  Object.values(state.cart).forEach(entry => {
    totalItems += entry.quantity;
    subtotal += entry.quantity * entry.item.price;
  });

  return { totalItems, subtotal, grandTotal: subtotal };
}

function updateCartUI() {
  const { totalItems, subtotal, grandTotal } = getCartCalculations();

  // Floating Cart Bar at bottom
  if (dom.floatingCartBar) {
    if (totalItems > 0) {
      dom.floatingCartBar.classList.add("visible");
      dom.floatingCartCount.textContent = `${totalItems} ${totalItems === 1 ? 'ITEM' : 'ITEMS'}`;
      dom.floatingCartTotal.textContent = `₹${subtotal}`;
    } else {
      dom.floatingCartBar.classList.remove("visible");
    }
  }

  // Header quick cart count
  const headerCartBadge = document.getElementById("headerCartBadge");
  if (headerCartBadge) {
    headerCartBadge.textContent = totalItems;
    headerCartBadge.style.display = totalItems > 0 ? "inline-flex" : "none";
  }

  // Cart Drawer Content
  if (dom.cartDrawer) {
    dom.cartTotalItemsHeader.textContent = `(${totalItems})`;
    
    if (totalItems === 0) {
      dom.cartEmptyState.style.display = "flex";
      dom.cartItemsList.innerHTML = "";
      dom.cartFooter.style.display = "none";
    } else {
      dom.cartEmptyState.style.display = "none";
      dom.cartFooter.style.display = "block";
      
      dom.cartItemsList.innerHTML = Object.values(state.cart).map(entry => {
        const item = entry.item;
        const lineTotal = entry.quantity * item.price;
        
        return `
          <div class="cart-item-row" data-item-id="${item.id}">
            <div class="cart-item-info">
              <div class="cart-item-header">
                <span class="diet-icon ${item.isVeg ? 'veg' : 'non-veg'}">
                  <span class="diet-dot"></span>
                </span>
                <h5 class="cart-item-title">${item.name}</h5>
              </div>
              <div class="cart-item-unit-price">₹${item.price} each</div>
            </div>
            
            <div class="cart-item-controls">
              <div class="stepper-control small">
                <button class="stepper-btn minus" onclick="updateItemQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                <span class="stepper-value">${entry.quantity}</span>
                <button class="stepper-btn plus" onclick="updateItemQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
              <div class="cart-item-line-total">₹${lineTotal}</div>
              <button class="cart-item-remove-btn" onclick="removeItemCompletely('${item.id}')" title="Remove item" aria-label="Remove item">✕</button>
            </div>
          </div>
        `;
      }).join("");

      dom.cartSubtotal.textContent = `₹${subtotal}`;
      dom.cartGrandTotal.textContent = `₹${grandTotal}`;
    }
  }
}

function bounceFloatingCart() {
  if (dom.floatingCartBar) {
    dom.floatingCartBar.classList.add("bounce");
    setTimeout(() => dom.floatingCartBar.classList.remove("bounce"), 400);
  }
}

// ORDER & CHECKOUT FLOW
function openCartDrawer() {
  dom.cartDrawer.classList.add("open");
  dom.cartBackdrop.classList.add("visible");
  document.body.classList.add("no-scroll");
}

function closeCartDrawer() {
  dom.cartDrawer.classList.remove("open");
  dom.cartBackdrop.classList.remove("visible");
  document.body.classList.remove("no-scroll");
}

function proceedToOrderModal() {
  const { totalItems, subtotal } = getCartCalculations();
  if (totalItems === 0) {
    showToast("Please add items to your cart first!");
    return;
  }

  // Prepopulate Order confirmation fields
  if (state.tableNumber) {
    dom.orderTableInput.value = `Table ${state.tableNumber}`;
  } else {
    dom.orderTableInput.value = "";
  }

  const notes = dom.orderCookingNotes ? dom.orderCookingNotes.value.trim() : "";

  let itemsSummaryHtml = Object.values(state.cart).map(entry => `
    <div class="order-summary-row">
      <div class="order-summary-left">
        <span class="diet-icon ${entry.item.isVeg ? 'veg' : 'non-veg'}"><span class="diet-dot"></span></span>
        <span class="order-summary-name">${entry.item.name}</span>
        <span class="order-summary-qty">× ${entry.quantity}</span>
      </div>
      <div class="order-summary-price">₹${entry.quantity * entry.item.price}</div>
    </div>
  `).join("");

  if (notes) {
    itemsSummaryHtml += `
      <div class="order-notes-preview">
        <strong>Special Instructions:</strong> "${notes}"
      </div>
    `;
  }

  dom.orderSummaryContent.innerHTML = `
    <div class="order-items-box">
      ${itemsSummaryHtml}
    </div>
    <div class="order-total-banner">
      <span>Total Bill Amount:</span>
      <strong>₹${subtotal}</strong>
    </div>
  `;

  closeCartDrawer();
  openModal(dom.orderConfirmationModal, dom.orderModalBackdrop);
}

function submitFinalOrder() {
  const tableVal = dom.orderTableInput.value.trim();
  const customerName = dom.orderCustomerName.value.trim() || "Guest Customer";
  const customerPhone = dom.orderCustomerPhone.value.trim();
  const notes = dom.orderCookingNotes ? dom.orderCookingNotes.value.trim() : "";
  const { totalItems, subtotal } = getCartCalculations();

  if (!tableVal) {
    dom.orderTableInput.focus();
    dom.orderTableInput.classList.add("input-error");
    showToast("⚠️ Please enter or select your Table Number");
    setTimeout(() => dom.orderTableInput.classList.remove("input-error"), 2000);
    return;
  }

  // Extract table digits if customer typed "Table 5" or "5"
  const digits = tableVal.replace(/\D/g, "");
  if (digits) {
    setTableNumber(parseInt(digits));
  }

  // Generate Order ID & Order payload
  const orderId = `VR-${Math.floor(1000 + Math.random() * 9000)}`;
  const orderTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const orderReceipt = `
    <div class="success-order-screen">
      <div class="success-icon-badge">✅</div>
      <h3>Order Placed Successfully!</h3>
      <p class="order-subtext">Sent directly to the Vardhan Restaurant Kitchen 👨‍🍳</p>
      
      <div class="receipt-card">
        <div class="receipt-header">
          <strong>VARDHAN RESTAURANT</strong>
          <span>Order ID: #${orderId} • ${orderTimestamp}</span>
          <span class="receipt-table-highlight">${tableVal.toUpperCase()}</span>
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-items">
          ${Object.values(state.cart).map(entry => `
            <div class="receipt-row">
              <span>${entry.quantity}x ${entry.item.name}</span>
              <strong>₹${entry.quantity * entry.item.price}</strong>
            </div>
          `).join("")}
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-total-row">
          <span>Total Paid / Payable:</span>
          <strong class="receipt-grand-price">₹${subtotal}</strong>
        </div>
        ${customerName ? `<div class="receipt-customer">Customer: ${customerName} ${customerPhone ? `(${customerPhone})` : ''}</div>` : ''}
        ${notes ? `<div class="receipt-notes">Kitchen Note: ${notes}</div>` : ''}
      </div>

      <div class="order-action-btns">
        <button class="btn btn-whatsapp" onclick="shareOrderViaWhatsApp('${orderId}', '${tableVal}', '${customerName}', '${customerPhone}', '${notes}', ${subtotal})">
          <span>📲 Send to Restaurant WhatsApp</span>
        </button>
        <button class="btn btn-primary" onclick="resetAfterOrder()">
          <span>Done / Order More</span>
        </button>
      </div>
    </div>
  `;

  dom.orderSummaryContent.innerHTML = orderReceipt;
  dom.finalConfirmOrderBtn.style.display = "none";
  if (dom.whatsappOrderBtn) dom.whatsappOrderBtn.style.display = "none";
  showToast("🎉 Order Sent to Kitchen!");
}

function shareOrderViaWhatsApp(orderId, table, name, phone, notes, total) {
  let text = `*🍽️ NEW ORDER - VARDHAN RESTAURANT*\n`;
  text += `*Order ID:* #${orderId}\n`;
  text += `*📍 ${table.toUpperCase()}*\n`;
  text += `*Customer:* ${name || 'Guest'}${phone ? ` (${phone})` : ''}\n\n`;
  text += `*ITEMS ORDERED:*\n`;

  Object.values(state.cart).forEach(entry => {
    text += `▪️ ${entry.quantity}x ${entry.item.name} = ₹${entry.quantity * entry.item.price}\n`;
  });

  text += `\n*💰 Total Amount: ₹${total}*\n`;
  if (notes) {
    text += `*📝 Note:* ${notes}\n`;
  }
  text += `\n_Placed via Vardhan QR Digital Menu_`;

  const phoneNum = "919523499925"; // Primary restaurant whatsapp
  const waUrl = `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");
}

function resetAfterOrder() {
  state.cart = {};
  if (dom.orderCookingNotes) dom.orderCookingNotes.value = "";
  if (dom.orderCustomerName) dom.orderCustomerName.value = "";
  if (dom.orderCustomerPhone) dom.orderCustomerPhone.value = "";
  
  dom.finalConfirmOrderBtn.style.display = "flex";
  closeModal(dom.orderConfirmationModal, dom.orderModalBackdrop);
  updateCartUI();
  renderMenu();
}

// TOAST NOTIFICATIONS
let toastTimeout;
function showToast(message) {
  if (!dom.toast) return;
  dom.toast.textContent = message;
  dom.toast.classList.add("show");
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    dom.toast.classList.remove("show");
  }, 2200);
}

// MODAL CONTROLS
function openModal(modalEl, backdropEl) {
  if (modalEl && backdropEl) {
    modalEl.classList.add("open");
    backdropEl.classList.add("visible");
    document.body.classList.add("no-scroll");
  }
}

function closeModal(modalEl, backdropEl) {
  if (modalEl && backdropEl) {
    modalEl.classList.remove("open");
    backdropEl.classList.remove("visible");
    document.body.classList.remove("no-scroll");
  }
}

// EVENT LISTENERS
function attachEventListeners() {
  // Category Pill Clicks
  if (dom.categoryBar) {
    dom.categoryBar.addEventListener("click", (e) => {
      const pill = e.target.closest(".category-pill");
      if (!pill) return;
      
      const categoryId = pill.dataset.category;
      state.activeCategory = categoryId;
      
      // Update pill classes
      document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      
      // Scroll to category
      if (categoryId === "popular") {
        const popularElem = document.getElementById("popularSection");
        if (popularElem) {
          popularElem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        const sectionElem = document.getElementById(`section-${categoryId}`);
        if (sectionElem) {
          const headerOffset = 130;
          const elementPosition = sectionElem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  }

  // Live Search
  if (dom.searchInput) {
    dom.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (dom.clearSearchBtn) {
        dom.clearSearchBtn.classList.toggle("visible", state.searchQuery.length > 0);
      }
      renderAllCategorySections();
    });
  }

  if (dom.clearSearchBtn) {
    dom.clearSearchBtn.addEventListener("click", () => {
      state.searchQuery = "";
      dom.searchInput.value = "";
      dom.clearSearchBtn.classList.remove("visible");
      renderAllCategorySections();
      dom.searchInput.focus();
    });
  }

  // Dietary Filters
  dom.filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      dom.filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeDietFilter = btn.dataset.filter;
      renderAllCategorySections();
    });
  });

  // Cart open/close
  if (dom.floatingCartBar) {
    dom.floatingCartBar.addEventListener("click", openCartDrawer);
  }
  const headerCartBtn = document.getElementById("headerCartBtn");
  if (headerCartBtn) {
    headerCartBtn.addEventListener("click", openCartDrawer);
  }
  if (dom.cartCloseBtn) {
    dom.cartCloseBtn.addEventListener("click", closeCartDrawer);
  }
  if (dom.cartBackdrop) {
    dom.cartBackdrop.addEventListener("click", closeCartDrawer);
  }

  // Place Order from Drawer
  if (dom.placeOrderBtn) {
    dom.placeOrderBtn.addEventListener("click", proceedToOrderModal);
  }

  // Final Order Modal
  if (dom.orderModalCloseBtn) {
    dom.orderModalCloseBtn.addEventListener("click", () => closeModal(dom.orderConfirmationModal, dom.orderModalBackdrop));
  }
  if (dom.orderModalBackdrop) {
    dom.orderModalBackdrop.addEventListener("click", () => closeModal(dom.orderConfirmationModal, dom.orderModalBackdrop));
  }
  if (dom.finalConfirmOrderBtn) {
    dom.finalConfirmOrderBtn.addEventListener("click", submitFinalOrder);
  }

  // Call Modal
  if (dom.callActionBtn) {
    dom.callActionBtn.addEventListener("click", () => openModal(dom.callModal, dom.callModalBackdrop));
  }
  if (dom.callModalCloseBtn) {
    dom.callModalCloseBtn.addEventListener("click", () => closeModal(dom.callModal, dom.callModalBackdrop));
  }
  if (dom.callModalBackdrop) {
    dom.callModalBackdrop.addEventListener("click", () => closeModal(dom.callModal, dom.callModalBackdrop));
  }

  // Location Modal
  if (dom.locationActionBtn) {
    dom.locationActionBtn.addEventListener("click", () => openModal(dom.locationModal, dom.locationModalBackdrop));
  }
  if (dom.locationModalCloseBtn) {
    dom.locationModalCloseBtn.addEventListener("click", () => closeModal(dom.locationModal, dom.locationModalBackdrop));
  }
  if (dom.locationModalBackdrop) {
    dom.locationModalBackdrop.addEventListener("click", () => closeModal(dom.locationModal, dom.locationModalBackdrop));
  }

  // Table Selector Modal
  if (dom.headerTableBadge) {
    dom.headerTableBadge.addEventListener("click", () => {
      renderTablePickerGrid();
      openModal(dom.tableSelectorModal, dom.tableSelectorBackdrop);
    });
  }
  if (dom.tableSelectorCloseBtn) {
    dom.tableSelectorCloseBtn.addEventListener("click", () => closeModal(dom.tableSelectorModal, dom.tableSelectorBackdrop));
  }
  if (dom.tableSelectorBackdrop) {
    dom.tableSelectorBackdrop.addEventListener("click", () => closeModal(dom.tableSelectorModal, dom.tableSelectorBackdrop));
  }

  // QR Code Tool Modal
  if (dom.qrToolBtn) {
    dom.qrToolBtn.addEventListener("click", () => {
      populateQrModal();
      openModal(dom.qrToolModal, dom.qrToolBackdrop);
    });
  }
  if (dom.qrToolCloseBtn) {
    dom.qrToolCloseBtn.addEventListener("click", () => closeModal(dom.qrToolModal, dom.qrToolBackdrop));
  }
  if (dom.qrToolBackdrop) {
    dom.qrToolBackdrop.addEventListener("click", () => closeModal(dom.qrToolModal, dom.qrToolBackdrop));
  }
  if (dom.qrTableSelect) {
    dom.qrTableSelect.addEventListener("change", (e) => {
      updateQrCodePreview(parseInt(e.target.value));
    });
  }
}

// Table Grid Picker (Tables 1 to 24)
function renderTablePickerGrid() {
  if (!dom.tableGrid) return;
  const totalTables = 24;
  let html = "";
  
  for (let i = 1; i <= totalTables; i++) {
    const isSelected = state.tableNumber === i;
    html += `
      <button class="table-pick-btn ${isSelected ? 'selected' : ''}" onclick="setTableNumber(${i})">
        <span class="t-num">${i}</span>
        <span class="t-label">Table</span>
      </button>
    `;
  }
  dom.tableGrid.innerHTML = html;
}

// QR Code Preview Tool
function populateQrModal() {
  if (!dom.qrTableSelect) return;
  
  let options = "";
  for (let i = 1; i <= 24; i++) {
    options += `<option value="${i}" ${state.tableNumber === i ? 'selected' : ''}>Table #${i}</option>`;
  }
  dom.qrTableSelect.innerHTML = options;
  updateQrCodePreview(state.tableNumber || 1);
}

function updateQrCodePreview(tableNum) {
  const currentBaseUrl = window.location.origin + window.location.pathname;
  const targetUrl = `${currentBaseUrl}?table=${tableNum}`;
  
  if (dom.qrUrlDisplay) {
    dom.qrUrlDisplay.textContent = targetUrl;
  }
  
  // Use quick Google Charts QR generator or Canvas SVG for instant crisp QR
  if (dom.qrCodeDisplay) {
    const encoded = encodeURIComponent(targetUrl);
    dom.qrCodeDisplay.innerHTML = `
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}&color=0F4C3A" 
           alt="Table ${tableNum} QR Code" 
           class="generated-qr-img" />
      <div class="qr-table-tag">TABLE ${tableNum}</div>
    `;
  }
}

// ScrollSpy for Active Category Pill
function setupScrollSpy() {
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".menu-section");
    const popularSection = document.getElementById("popularSection");
    const scrollPos = window.scrollY + 160;

    if (popularSection && scrollPos < popularSection.offsetTop + popularSection.offsetHeight) {
      highlightActivePill("popular");
      return;
    }

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.dataset.categoryId;

      if (scrollPos >= top && scrollPos < top + height) {
        highlightActivePill(id);
      }
    });
  }, { passive: true });
}

function highlightActivePill(catId) {
  const pills = document.querySelectorAll(".category-pill");
  pills.forEach(p => {
    const isActive = p.dataset.category === catId;
    p.classList.toggle("active", isActive);
    if (isActive && dom.categoryBar) {
      p.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });
}
