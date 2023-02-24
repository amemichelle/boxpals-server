/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      id: 31,
      name: "matcha keycaps (old version)",
      img_src:
        "https://cdn.shopify.com/s/files/1/0588/4228/4186/products/green4copy_47223073-d596-4f9e-aaee-149993e8266e.jpg?v=1674018153&width=1946",
      item_link: "https://osumekeys.com/products/matcha-r1",
      price: 75.0,
      specifications: "standard",
      order_id: 12,
      user_id: 1,
    },

    {
      id: 32,
      name: "matcha novelty kit",
      img_src:
        "https://cdn.shopify.com/s/files/1/0588/4228/4186/products/matcha_batch2_novs_nl-01.jpg?v=1674026615&width=1946",
      item_link: "https://osumekeys.com/products/matcha-novelty-kit",
      price: 20.0,
      specifications: "none",
      order_id: 12,
      user_id: 1,
    },

    {
      id: 33,
      name: "sakura keycaps",
      img_src:
        "https://cdn.shopify.com/s/files/1/0588/4228/4186/products/sakura1_bbed5a47-ddc6-4471-bb60-0d669ede449d.jpg?v=1653355342&width=1946",
      item_link: "https://osumekeys.com/products/sakura",
      price: 95.0,
      specifications: "standard with novelty kit",
      order_id: 12,
      user_id: 2,
    },

    {
      id: 34,
      name: "Cherry Bullet - 3rd Mini Album [Cherry Dash] (Random Ver.)",
      img_src:
        "https://www.ktown4u.com/goods_files/SH0164/goods_images/000092/GD00091139.default.1.jpg",
      item_link: "https://www.ktown4u.com/iteminfo?goods_no=91139",
      price: 13.93,
      specifications: "none",
      order_id: 11,
      user_id: 1,
    },

    {
      id: 35,
      name: "FIFTY FIFTY - The 1st Single Album [The Beginning: Cupid] (NERD Ver.)",
      img_src:
        "https://www.ktown4u.com/goods_files/SH0164/goods_images/000092/GD00091172.default.1.jpg",
      item_link: "https://www.ktown4u.com/iteminfo?goods_no=91172",
      price: 14.53,
      specifications: "none",
      order_id: 11,
      user_id: 1,
    },

    {
      id: 36,
      name: "NMIXX - 1ST EP [expérgo] (Random Ver.)",
      img_src:
        "https://www.ktown4u.com/goods_files/SH0164/goods_images/000091/GD00090733.default.1.jpg",
      item_link: "https://www.ktown4u.com/iteminfo?goods_no=91118",
      price: 12.57,
      specifications: "none",
      order_id: 11,
      user_id: 1,
    },

    {
      id: 37,
      name: "THE BOYZ - 8th MINI ALBUM [BE AWAKE] (PLATFORM Ver.) (REACH Ver.)",
      img_src:
        "https://www.ktown4u.com/goods_files/SH0164/goods_images/000091/GD00090682.default.1.png",
      item_link: "https://www.ktown4u.com/iteminfo?goods_no=90682",
      price: 11.29,
      specifications: "none",
      order_id: 11,
      user_id: 3,
    },

    {
      id: 38,
      name: "PENTAGON - Mini Album Vol.12 [IN:VITE U] (Nouveau Ver.)",
      img_src:
        "https://www.ktown4u.com/goods_files/SH0164/goods_images/000072/GD00071804.default.1.png",
      item_link: "https://www.ktown4u.com/iteminfo?goods_no=71804",
      price: 14.53,
      specifications: "none",
      order_id: 11,
      user_id: 3,
    },

    {
      id: 39,
      name: "Beauty of Joseon - Relief Sun",
      img_src:
        "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/81/834/L_g0162883481_000.jpg",
      item_link:
        "https://www.yesstyle.com/en/beauty-of-joseon-relief-sun-50ml/info.html/pid.1107744417?rco=25GCAD&utm_term=25GCAD&utm_medium=LinkShare&mcg=influencer",
      price: 19.33,
      specifications: "50ml",
      order_id: 13,
      user_id: 3,
    },

    {
      id: 40,
      name: "romand - Glasting Water Tint - 8 Colors",
      img_src:
        "https://d1flfk77wl2xk4.cloudfront.net/Assets/61/329/XXL_p0120532961.jpg",
      item_link:
        "https://www.yesstyle.com/en/romand-glasting-water-tint-8-colors/info.html/pid.1086575382?rco=25GCAD&utm_term=25GCAD&utm_medium=LinkShare&mcg=influencer",
      price: 10.12,
      specifications: "#04 Vintage Ocean",
      order_id: 13,
      user_id: 3,
    },

    {
      id: 41,
      name: "Kongpow - Long-Sleeve Plain Ruched Shirt",
      img_src:
        "https://d1flfk77wl2xk4.cloudfront.net/Assets/28/388/XXL_p0190438828.jpg",
      item_link:
        "https://www.yesstyle.com/en/kongpow-long-sleeve-plain-ruched-shirt/info.html/pid.1120405074?rco=25GCAD&utm_term=25GCAD&utm_medium=LinkShare&mcg=influencer",
      price: 24.97,
      specifications: "White - One/Size",
      order_id: 13,
      user_id: 2,
    },

    {
      id: 42,
      name: "Kongpow - Long-Sleeve Plain Ruched Shirt",
      img_src:
        "https://d1flfk77wl2xk4.cloudfront.net/Assets/78/405/XXL_p0153140578.jpg",
      item_link:
        "https://www.yesstyle.com/en/sosana-floral-print-lettuce-edge-crop-halter-neck-top/info.html/pid.1103118790?rco=25GCAD&utm_term=25GCAD&utm_medium=LinkShare&mcg=influencer",
      price: 9.59,
      specifications: "Yellow - L",
      order_id: 13,
      user_id: 2,
    },
  ]);
};
