let allProducts = [
    {
      id: 1,
      title: "ஸ்ட்ராபெர்ரி",
      title_en: "Strawberry",
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSmZOZ-Y24ulcmnmhZomdika4_pkXzYoqZgU1jqOSyRJTANexU3N36sdqW2KKQUurCJsjSDNuiuOrwD-54",
      price: 10000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 2,
      title: "வெங்காயம்",
      title_en: "Onion",
      image: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-27092,resizemode-75,msid-102435400/industry/cons-products/food/after-tomato-onion-prices-inch-up-amid-lower-sowing.jpg",
      price: 13000,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 3,
      title: "தக்காளி",
      title_en: "Tomato",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Tomato.png",
      price: 15000,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 4,
      title: "கத்திரிக்காய்",
      title_en: "Eggplant",
      image: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRIuGuFjSqoSBtDalqJW3tzNuTYGqb72lY6ivkzPIy4XVXQaQFg23Pj-XRZLV9fc72k",
      price: 12500,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 5,
      title: "ப்ரோக்கோலி",
      title_en: "Broccoli",
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQZrP_28uDRPTZXvZrK5jTfI5qOHfWcV0-nezjzt1Jz5C9oP7LvNJN_JNjJp8hRwbeg8vonNSlrW8E3iCM",
      price: 8500,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 7,
      title: "கேரட்",
      title_en: "Carrot",
      image: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg",
      price: 12000,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 8,
      title: "காலிஃபிளவர்",
      title_en: "Cauliflower",
      image: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS2hJHaVPSmTiwiu84OuzyqZCgX61ZQbryhqBZS2onGlLkc4i7-sMh144215KOm9zZTUw7M7h5Woqt4HskXxtQ",
      price: 8000,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 9,
      title: "வெள்ளரிக்காய்",
      title_en: "Cucumber",
      image: "https://m.media-amazon.com/images/I/71xkI-PIE5L.jpg",
      price: 4000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 10,
      title: "பூண்டு",
      title_en: "Garlic",
      image: "https://m.media-amazon.com/images/I/51BSNgiBDqL._AC_UF1000,1000_QL80_.jpg",
      price: 16500,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 11,
      title: "இனிப்பு மிளகு",
      title_en: "Sweet pepper",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Green-Yellow-Red-Pepper-2009.jpg",
      price: 7000,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 12,
      title: "கீரை",
      title_en: "Lettuce",
      image: "https://www.stylecraze.com/wp-content/uploads/2013/07/16-Best-Benefits-Of-Lettuce-For-Skin-Hair-And-Health.jpg",
      price: 18000,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 13,
      title: "சிவப்பு மிளகு",
      title_en: "Red pepper",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZsQ3XwU6oYn-QwbomcCR-MuqKZlufqMhdr7vE4-c-CWJBKIr8JGMdvPq-FeEyf983Lrk&usqp=CAU",
      price: 20000,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 14,
      title: "தர்பூசணி",
      title_en: "Watermelon",
      image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQbPzz2wLi_pF2n6HXmmpyoPdG7VwCtSY--OejTKqGtMJJVLvkM8zA_QIv3t7S2Ve6S7KVuSRNQ75HWetY",
      price: 8000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 15,
      title: "காளான்",
      title_en: "Mushroom",
      image: "https://e7.pngegg.com/pngimages/419/186/png-clipart-chopped-mushrooms-edible-mushroom-oyster-mushroom-common-mushroom-fungus-mushroom-food-photography.png",
      price: 25000,
      category:"காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 16,
      title: "வாழை",
      title_en: "Banana",
      image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/bananas.jpg?quality=82&strip=1",
      price: 47000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 17,
      title: "பூசணி",
      title_en: "Pumpkin",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Pumpkin-sliced-open-f2b8dde.jpg",
      price: 13500,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 18,
      title: "அன்னாசி",
      title_en: "Pineapple",
      image: "https://healthybuddha.in/image/cache/catalog/Pineapple2-500x515.jpg",
      price: 25500,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 19,
      title: "பாதாம்",
      title_en: "Almonds",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/almonds-9e25ce7.jpg",
      price: 55000,
      category: "பருப்பு வகைகள்",
      category_en: "Nuts"
    },
    {
      id: 20,
      title: "ஆப்பிள்",
      title_en: "Apple",
      image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg",
      price: 12500,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 21,
      title: "Hazelnut",
      title_en: "Hazelnut",
      image: "https://www.greendna.in/cdn/shop/products/hnut_648x.jpg?v=1567521689",
      price: 45000,
      category: "பருப்பு வகைகள்",
      category_en: "Nuts"
    },
    {
      id: 22,
      title: "பிஸ்தா",
      title_en: "Pistachio",
      image: "https://images.dinamani.com/uploads/user/imagelibrary/2016/9/8/original/pistachio.jpg",
      price: 150000,
      category: "பருப்பு வகைகள்",
      category_en: "Nuts"
    },
    {
      id: 23,
      title: "ஆரஞ்சு",
      title_en: "Orange",
      image: "https://img.freepik.com/premium-photo/orange-crop-isolated_90839-212.jpg?w=2000",
      price: 12000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 24,
      title: "சூரியகாந்தி விதை",
      title_en: "Sunflower seed",
      image: "https://static.langimg.com/thumb/75426300/samayam-tamil-75426300.jpg?width=540&resizemode=3",
      price: 40000,
      category: "பருப்பு வகைகள்",
      category_en: "Nuts"
    },
    {
      id: 25,
      title: "வால்நட்",
      title_en: "Walnut",
      image: "https://img.freepik.com/free-photo/fresh-walnut_144627-16135.jpg",
      price: 50000,
      category: "பருப்பு வகைகள்",
      category_en: "Nuts"
    },
    {
      id: 26,
      title: "செர்ரி",
      title_en: "Cherry",
      image: "https://www.bigbasket.com/media/uploads/p/l/40217762_3-fresho-cherry.jpg",
      price: 60000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 27,
      title: "அத்தி",
      title_en: "Fig",
      image: "https://kashmirsalesmart.com/wp-content/uploads/2020/10/kashmiri-dry-fig.png",
      price: 55000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 28,
      title: "பச்சை பட்டாணி",
      title_en: "Green Peas",
      image: "https://gumlet.vikatan.com/vikatan%2F2019-05%2F09e91cf8-3ab0-4c69-80d1-ae132a8152e7%2F82708_thumb.jpg?auto=format%2Ccompress&w=1200",
      price: 30000,
      category: "பீன்ஸ்",
      category_en: "Beans"
    },
    {
      id: 29,
      title: "கிவி",
      title_en: "Kiwi",
      image: "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
      price: 20000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 30,
      title: "பச்சை பீன்ஸ்",
      title_en: "Green beans",
      image: "https://pesutamizhapesu.com/storage/2022/05/bean-1.jpg",
      price: 17000,
      category: "பீன்ஸ்",
      category_en: "Beans"
    },
    {
      id: 31,
      title: "சிவப்பு பீன்ஸ்",
      title_en: "Red beans",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kidney-beans-8496667.jpg",
      price: 22000,
      category: "பீன்ஸ்",
      category_en: "Beans"
    },
    {
      id: 32,
      title: "திராட்சை",
      title_en: "Grape",
      image: "https://img.freepik.com/premium-vector/isolated-dark-grape-with-green-leaf_317810-1956.jpg?w=2000",
      price: 24000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 33,
      title: "எலுமிச்சை",
      title_en: "Lemon",
      image: "https://www.starhealth.in/blog/wp-content/uploads/2022/07/Picture-of-lemons-cut-in-halves.jpg",
      price: 55000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 34,
      title: "பாகற்காய்",
      title_en: "Cantaloupe",
      image: "https://media.webdunia.com/_media/ta/img/article/2018-12/27/full/1545890806-2649.jpg",
      price: 8000,
      category: "பழங்கள்",
      category_en: "Fruit"
    },
    {
      id: 35,
      title: "பருப்பு",
      title_en: "Lentils",
      image: "https://nannilamorganics.com/wp-content/uploads/2021/12/bengal-gram.jpg",
      price: 13000,
      category: "பீன்ஸ்",
      category_en: "Beans"
    },
    {
      id: 36,
      title: "முள்ளங்கி",
      title_en: "Radish",
      image: "https://image1.jdomni.in/product/21082021/05/5E/0D/ACA3C15C1ACC6814C4D6722844_1629546907952.jpg?fit=around|500:500",
      price: 4000,
      category: "காய்கறி",
      category_en: "Vegetables"
    },
    {
      id: 37,
      title: "சோளம்",
      title_en: "Corn",
      image: "https://images.dinamani.com/uploads/user/imagelibrary/2020/10/13/original/mn8.jpg",
      price: 12000,
      category: "காய்கறி",
      category_en: "Vegetables"
    }
  ];
  
  export default allProducts;