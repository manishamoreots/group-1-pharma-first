import React from "react";
import { Card, Rating, Image, Button, Icon } from "semantic-ui-react";
import "./category-grid.css";

const CategoryGrid = () => {
  const CategoryCardDetails = [
    // categoryId1 start from here {diabetics}
    {
      id: 1,
      categoryId: 1,
      itemName:
        "Virgo Healthcare Protivir Diet- Nutritional Supplement for Diabetic",
      itemPrice: "2333",
      rating: "4.3",
      ratingPoints: "352 ratings",
      netQuantity: "Tin for 400gm powder",
      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/zl35i9inmpsoj2tmga2a.jpg",
    },
    {
      id: 2,
      categoryId: 1,
      itemName: "PentaSure DM Diabetes Care Powder Creamy Vanilla & Cinnamon",
      itemPrice: "2333",
      rating: "4.5",
      ratingPoints: "1052 ratings",

      netQuantity: "Tin for 400gm powder",
      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/akatbzesklvi4vtyro1g.jpg",
    },
    {
      id: 3,
      categoryId: 1,
      itemName: "PentaSure DM Diabetes Care Powder Creamy Vanilla & Cinnamon",
      itemPrice: "2333",
      rating: "4.4",
      ratingPoints: "522 ratings",

      netQuantity: "Tin for 400gm powder",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/akatbzesklvi4vtyro1g.jpg",
    },
    {
      id: 4,
      categoryId: 1,
      itemName: "Protinex Diabetes Care Vanilla",
      itemPrice: "585",
      ratingPoints: "302 ratings",

      netQuantity: "packet for 350gm powder",
      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/xg9w5mk9wvijr6hky8fx.jpg",
    },
    {
      id: 5,
      categoryId: 1,
      itemName:
        "Dr Morepen Gluco One BG 03 Blood Glucose Test Strip (Only Strips)",
      itemPrice: "607",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/eds6ghegqiwdxfbzgeeq.jpg",
    },
    {
      id: 7,
      categoryId: 1,
      itemName:
        "Tata 1mg Diabetes Care Combo Pack for Blood Sugar & Cholestrol Management",
      itemPrice: "652",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/uca5jm0uqfqpjoyydzh0.jpg",
    },
    {
      id: 8,
      categoryId: 1,
      itemName: "Sugar Free Green Stevia Pellets",
      itemPrice: "182",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/uca5jm0uqfqpjoyydzh0.jpg",
    },
    {
      id: 9,
      categoryId: 1,
      itemName:
        "Baidyanath Basant Kusumakar Ras (S.C.M.Yu) with Gold, Silver & Pearl Maintains Blood Glucose Level",
      itemPrice: "2359",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/dru5ne9rnikqsgayenyy.png",
    },
    {
      id: 10,
      categoryId: 1,
      itemName: "D-Protin Powder Chocolate",
      itemPrice: "506",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/dru5ne9rnikqsgayenyy.png",
    },
    // categoryId2 start from here {cardiac}
    {
      id: 11,
      categoryId: 2,
      itemName: "Tata 1mg CoQ 10 (Coenzyme 10) Capsules for Heart Health",
      itemPrice: "644",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/dj9v8xuxcpfoseulq96n.jpg",
    },
    {
      id: 12,
      categoryId: 2,
      itemName: "Omron HEM 7124-IN BP Monitor",
      itemPrice: "1940",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/ss1kepn3xokqa6kywtkq.jpg",
    },
    {
      id: 13,
      categoryId: 2,
      itemName:
        "Carbamide Forte Cold Pressed Flaxseed Oil 1000mg with Omega 3,6 & 9 825mg Softgel Capsule",
      itemPrice: "499",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/nhqfb8zmstolcbamt82x.jpg",
    },
    {
      id: 14,
      categoryId: 2,
      itemName: "Jubilant Nutrihance UB Gold 150mg of CoQ10 Veg Softgel Caps",
      itemPrice: "540",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/va0s2aabkymu9fiwbevo.jpg",
    },
    {
      id: 15,
      categoryId: 2,
      itemName:
        "Orange Packets 1000mg Natural Vitamin C & Zinc Effervescent Tablet (15 Each) Orange",
      itemPrice: "667",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/rtfodjibnc07hakswqsb.jpg",
    },
    {
      id: 16,
      categoryId: 2,
      itemName:
        "Carbamide Forte Cold Pressed Flaxseed Oil 1250mg Softgel Capsule",
      itemPrice: "349",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/xx0zp8n7relw30sh0jeu.jpg",
    },
    {
      id: 17,
      categoryId: 2,
      itemName: "Vitaminnica Neuro Force Veg Capsule",
      itemPrice: "959",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/8eef2b9bfc8e43618f3df2d384903949.jpg",
    },
    {
      id: 18,
      categoryId: 2,
      itemName: "Zingavita Omega 3 Fish Oil 1000mg Soft Gelatin Capsule",
      itemPrice: "249",
      Image:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/ivxygrk9z7qhpegk3zkd.jpg",
    },
    {
      id: 19,
      categoryId: 2,
      itemName: "Jubilant Nutrihance UB Gold 150mg of CoQ10 Veg Softgel Caps",
      itemPrice: "1085",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/ubd4j4r7oxr4lehax28k.jpg",
    },
    {
      id: 20,
      categoryId: 2,
      itemName: "Argipreg Granules",
      itemPrice: "1085",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/o42s0ximi17m0gfzv13s.jpg",
    },

    // categoryId3 will starts from here {Stomach care}
    {
      id: 21,
      categoryId: 3,
      itemName: "Softovac-O Orange Powder",
      itemPrice: "134",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/vawxkyegilcudfeiifzs.png",
    },
    {
      id: 22,
      categoryId: 3,
      itemName: "WOW Life Science Probiotics Vegetarian Capsules",
      itemPrice: "639",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/366edc098ac8498a91f672852d3c16d4.jpg",
    },
    {
      id: 23,
      categoryId: 3,
      itemName: "Kayam Tablet",
      itemPrice: "107",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/ejpoyifxqkviv9mcvyoh.jpg",
    },
    {
      id: 24,
      categoryId: 3,
      itemName:
        "Panchamrit Triphala Effervescent Tablet with Goodness of Triphala, Fennel & Prebiotics Lime",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/52023e21fc0e4731905d48009096022c.jpg",
    },
    {
      id: 25,
      categoryId: 3,
      itemName: "Gynoveda Anasid Fast Relief Acidity Syrup (200ml Each) Rose",
      itemPrice: "299",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/f87703ead5904671aca37455f380036b.jpg",
    },
    {
      id: 26,
      categoryId: 2,
      itemName: "Zandu Nityam Churna",
      itemPrice: "88",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/wv7eescusjzqm9oxjiht.jpg",
    },
    {
      id: 27,
      categoryId: 3,
      itemName: "Digene Acidity & Gas Relief Tablet Mint",
      itemPrice: "19",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/n1t9q5dstymk2xdknbd7.jpg",
    },
    {
      id: 28,
      categoryId: 3,
      itemName: "Polycrol Antacid Gel Mint Xpress Relief Sugar-Free",
      itemPrice: "180",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/rl7y3bg1y4g1ziib92cc.jpg",
    },
    {
      id: 29,
      categoryId: 3,
      itemName: "Dabur Hajmola Regular",
      itemPrice: "55",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/bxbeojn9xappfjrircbb.jpg",
    },
    {
      id: 30,
      categoryId: 3,
      itemName: "Cremaffin Constipation Relief Liquid Mixed Fruit",
      itemPrice: "279",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/fifua5s1kcpidqpikgbd.jpg",
    },
    // categoryId4 will starts from here {Liver Care}
    {
      id: 31,
      categoryId: 4,
      itemName:
        "Tata 1mg Milk Thistle Veg Capsule for Liver Detox, 70% Silymarin with Dandelion & Ginger, Supports Liver Detox & Prevents Fatty Liver",
      itemPrice: "426",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/2b1dea512d474ab48100f1969cb9f6e8.jpg",
    },
    {
      id: 32,
      categoryId: 4,
      itemName: "Himalaya Liv. 52 Tablet",
      itemPrice: "141",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/m4pgzop080oaibzxwxtc.jpg",
    },
    {
      id: 33,
      categoryId: 4,
      itemName:
        "Zeroharm Sciences Vegan Omega-DHA Algae Based Vegan Capsule for Brain, Heart, Joint and Muscle Support",
      itemPrice: "871",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/hml2wpvmk5faa0vrms4k.jpg",
    },
    {
      id: 34,
      categoryId: 4,
      itemName: "Dr. Biswas Good Health Capsule",
      itemPrice: "210",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/sp0ulunikdslhjepd5gr.jpg",
    },
    {
      id: 35,
      categoryId: 4,
      itemName: "Himalaya Liv.52 Syrup",
      itemPrice: "210",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/z4x6mnuiyhfdjhb0qf3w.jpg",
    },
    {
      id: 36,
      categoryId: 4,
      itemName: "SBL Liv T Tonic",
      itemPrice: "130",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/syzqdci2dlkskg6a7swm.jpg",
    },
    {
      id: 37,
      categoryId: 4,
      itemName: "Humming Herbs The Detox",
      itemPrice: "435",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/788188b0b96f4a8d90bc429156b8fac9.jpg",
    },
    {
      id: 38,
      categoryId: 4,
      itemName: "Aimil Amlycure DS Syrup",
      itemPrice: "258",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/qc3fu8vdrms4az0wfjhe.jpg",
    },
    {
      id: 39,
      categoryId: 4,
      itemName: "Dhootapapeshwar Arogyavardhini Bati",
      itemPrice: "325",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/ojyohfyqi9bd8hl72kod.jpg",
    },
    {
      id: 40,
      categoryId: 4,
      itemName: "Bakson's Biocombination 7 Tablet",
      itemPrice: "557",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/dgbwegdi582n5g7pv9mm.jpg",
    },
    // categoryID:5 starts here {Bone Joint muscles}
    {
      id: 41,
      categoryId: 5,
      itemName:
        "Tata 1mg Calcium + Vitamin D3, Zinc, Magnesium and Alfalfa Tablet, Joint Support, Bones Health, Immunity & Energy Support",
      itemPrice: "277",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/gc3u9gfc331wtsipnljl.jpg",
    },
    {
      id: 42,
      categoryId: 5,
      itemName: "Tata 1mg Vitamin D3 Capsule",
      itemPrice: "277",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/d3fe87a68c7c4b27a0061dea72209a76.jpg",
    },
    {
      id: 43,
      categoryId: 5,
      itemName:
        "Tata 1mg Senior 50+ Multivitamin & Multimineral Veg Tablet with Zinc, Vitamin C, Calcium and Vitamin D, Supports Immunity, Strength & Overall Health",
      itemPrice: "397",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/klpj2khvaphkvpqmchui.jpg",
    },
    {
      id: 44,
      categoryId: 5,
      itemName: "Flexiqule Capsule, Strength & Overall Health",
      itemPrice: "397",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/ysgxiaa0janhe8vg7vx5.png",
    },
    {
      id: 45,
      categoryId: 5,
      itemName: "Iron Lifters Glutamine Powder",
      itemPrice: "1540",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/faxrfoyl373kic256ucc.jpg",
    },
    {
      id: 46,
      categoryId: 5,
      itemName: "Dr Ortho Knee Cap",
      itemPrice: "299",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/pbt0c9o6a1lmmbznusnl.jpg",
    },
    {
      id: 47,
      categoryId: 5,
      itemName:
        "Blackmores Shine Power D3 Capsule for Healthy Teeth, Stronger Bones & Boosted Immunity",
      itemPrice: "1007",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/nq89kt3btuq60dlkvleq.jpg",
    },
    {
      id: 48,
      categoryId: 5,
      itemName: "OneLife 100% Plant Protein Powder Mocha",
      itemPrice: "1534",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/sv8bsieatprm3fg2cgyi.jpg",
    },
    {
      id: 49,
      categoryId: 5,
      itemName: "Jiva Pain Calm Oil",
      itemPrice: "199",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/zmsryggcuruy3gwxwztm.jpg",
    },
    {
      id: 50,
      categoryId: 5,
      itemName: "Hiral Health Boheal Tablet",
      itemPrice: "329",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/a6b00a115352473eb3998c0e7266866a.jpg",
    },

    // categoryId:6 starts here eye { eye care}
    {
      id: 51,
      categoryId: 6,
      itemName:
        "Zingavita Sharp Eye Multivitamin Gummies for Kids (with Essential Eye Vitamins) Strawberry Mix",
      itemPrice: "249",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/gt6ij71dfd3k9egrfia3.jpg",
    },
    {
      id: 52,
      categoryId: 6,
      itemName: "Lubistar 1% Eye Drop",
      itemPrice: "128",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/hp7slixc8rawaogqodid.jpg",
    },
    {
      id: 53,
      categoryId: 6,
      itemName: "Itone Eye Drop",
      itemPrice: "55",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/xn0n7khy5vzfnqkxwfn8.jpg",
    },
    {
      id: 54,
      categoryId: 6,
      itemName: "Himalaya Ophthacare Eye Drop",
      itemPrice: "69",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/bwajzknm1li1zhcb7vii.jpg",
    },
    {
      id: 55,
      categoryId: 6,
      itemName: "Zingavita Omega 3 Fish Oil 1000mg Soft Gelatin Capsule",
      itemPrice: "249",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/ivxygrk9z7qhpegk3zkd.jpg",
    },
    {
      id: 56,
      categoryId: 6,
      itemName: "I-Site AF Capsule",
      itemPrice: "229",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/uc8kjna18khpskowgxnx.jpg",
    },
    {
      id: 57,
      categoryId: 6,
      itemName: "Renu Fresh Solution",
      itemPrice: "608",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/mwsb8nuqe6178r1clzlp.jpg",
    },
    {
      id: 58,
      categoryId: 6,
      itemName: "Lutivit NF Soft Gelatin Capsule",
      itemPrice: "190",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/iylaaw0ytq3kisjgx7oc.jpg",
    },
    {
      id: 59,
      categoryId: 6,
      itemName: "Dr. Reckeweg R78 Eye Care Drop",
      itemPrice: "251",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/rj8njkvga0vodhv42dev.jpg",
    },
    {
      id: 60,
      categoryId: 6,
      itemName: "Wellman 70+ Health Supplement for Men Tablet",
      itemPrice: "356",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/ychrjptrenqpfjo4dzvj.jpg",
    },

    // categoryID:7 starts here {Kidney}
    {
      id: 61,
      categoryId: 7,
      itemName: "Nepro HP Powder Vanilla Toffee",
      itemPrice: "1020",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/wuxk6kilycwu0swrc9yp.jpg",
    },
    {
      id: 62,
      categoryId: 7,
      itemName: "Himalaya Cystone Tablet",
      itemPrice: "152",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/ky7nvrfdcdgh6nlen7do.jpg",
    },
    {
      id: 63,
      categoryId: 7,
      itemName: "Lobun Forte Capsule",
      itemPrice: "849",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/paibgfydhxnssgqltrfe.jpg",
    },
    {
      id: 64,
      categoryId: 7,
      itemName: "Swisse Ultiboost High Strength Cranberry 25000mg Capsule",
      itemPrice: "961",
      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/kokziptrbu8pgg86xpye.jpg",
    },
    {
      id: 65,
      categoryId: 7,
      itemName: "Dabur Chandraprabha Vati",
      itemPrice: "127",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/sx5dxobxchlrntmrk5v4.jpg",
    },
    {
      id: 66,
      categoryId: 7,
      itemName: "Patanjali Divya Shudh Shilajeet (R.T.)",
      itemPrice: "110",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/u3eysaqfuaccqagtzj6b.jpg",
    },
    {
      id: 67,
      categoryId: 7,
      itemName: "SBL Arsenicum Album Dilution 30 CH",
      itemPrice: "86",
      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/ergrpppp0crrivsypqj9.png",
    },
    {
      id: 68,
      categoryId: 7,
      itemName: "Baidyanath (Nagpur) Gokshuradi Guggulu",
      itemPrice: "135",
      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/bh1b6s1osxtc1wcbwiao.jpg",
    },
    {
      id: 69,
      categoryId: 7,
      itemName: "Patanjali Divya Renogrit Tablet",
      itemPrice: "240",
      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/18f454f5-64ae-4614-893b-29f0cf178a53.jpeg",
    },
    {
      id: 70,
      categoryId: 7,
      itemName: "Baidyanath Prostaid Tablet",
      itemPrice: "161",
      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/ztpqqvclfqgcjzwuls1t.jpg",
    },

    //categoryID:8 starts here {Pain relief}
    {
      id: 71,
      categoryId: 8,
      itemName: "Volini Pain Relief Gel",
      itemPrice: "206",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/635fd23716e84269a9fce803978b4f14.jpg",
    },
    {
      id: 72,
      categoryId: 8,
      itemName: "Volini Spray",
      itemPrice: "272",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/2f1dda5112d048f2baf1b99506b72059.jpg",
    },
    {
      id: 73,
      categoryId: 8,
      itemName:
        "Moov Pain Relief Cream for Back Pain, Joint Pain, Knee Pain, Muscle Pain",
      itemPrice: "68",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/pzgaxs8vjyhuguiwmv5f.jpg",
    },
    {
      id: 74,
      categoryId: 8,
      itemName: "Saridon Headache Relief Tablet",
      itemPrice: "39",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/s0dcfx0trz6lf9zczab4.jpg",
    },
    {
      id: 75,
      categoryId: 8,
      itemName: "Healthtokri Electric Rechargeable Heating Gel Warm Bag",
      itemPrice: "251",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/rnel0jwng6x8y3lmn5kf.png",
    },
    {
      id: 76,
      categoryId: 8,
      itemName: "Dr Ortho an Ayurvedic Medicine Oil",
      itemPrice: "236",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/qjz8l72piinjwwynexks.png",
    },
    {
      id: 77,
      categoryId: 8,
      itemName: "Iodex Ultra Gel",
      itemPrice: "124",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/hwouityfgkycdkbbwsiy.jpg",
    },
    {
      id: 78,
      categoryId: 8,
      itemName: "Volini Maxx Gel",
      itemPrice: "139",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/94abe074ec3e44098d5875c81f70b434.jpg",
    },
    {
      id: 79,
      categoryId: 8,
      itemName: "Disprin Regular 325mg Effervescent Tablet",
      itemPrice: "13",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/yhl9lmgxhj1pfbtnc0ts.jpg",
    },
    {
      id: 80,
      categoryId: 8,
      itemName: "Dhootapapeshwar Swamala",
      itemPrice: "1155",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/nc1hvrzxl4mexlttinrs.png",
    },
    //categoryID:9 starts here {Respiratory care}

    {
      id: 81,
      categoryId: 9,
      itemName: "Otrivin Oxy Fast Relief Adult Nasal Spray",
      itemPrice: "85",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/uaerylojm65fdh0o0dfo.jpg",
    },
    {
      id: 82,
      categoryId: 9,
      itemName:
        "Tata 1mg 3 Ply Surgical Mask with Meltblown Filter and Nose Pin 50 Mask Light Blue",
      itemPrice: "392",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/2b18a9de0355455681ec4bb004f1b21b.jpg",
    },
    {
      id: 83,
      categoryId: 9,
      itemName: "2baconil 21mg Nicotine Transdermal Patch Step 1",
      itemPrice: "825",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/aa019eea99e44f148597400b045cc144.jpg",
    },
    {
      id: 84,
      categoryId: 9,
      itemName: "Dr Morepen PO 14 Pulse Oximeter",
      itemPrice: "1266",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/o291ovg9uecjswn7wz1b.jpg",
    },
    {
      id: 85,
      categoryId: 9,
      itemName: "Vicks Inhaler",
      itemPrice: "56",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/l21qw4sgwgrjrwrwgajw.jpg",
    },
    {
      id: 86,
      categoryId: 9,
      itemName: "Omron CMS50N Contec Pulse Oximeter",
      itemPrice: "132",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/dk4bsseilzpnfr953q7e.png",
    },
    {
      id: 87,
      categoryId: 9,
      itemName: "Dr Morepen VP 06 Breathe Free Vaporizer",
      itemPrice: "275",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/hlhlwmjbwpzgzb5s6ijx.jpg",
    },
    {
      id: 88,
      categoryId: 9,
      itemName: "Patanjali Divya Swasari Pravahi",
      itemPrice: "80",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/tzwco67hdrnqeldtok5p.jpg",
    },
    {
      id: 89,
      categoryId: 9,
      itemName: "Cofsils Lozenges Orange",
      itemPrice: "26",

      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/vku1bgimm9wicwhrhbma.jpg",
    },
    {
      id: 90,
      categoryId: 9,
      itemName: "Dabur Honitus Herbal Cough Remedy",
      itemPrice: "197",
      itemImage:
        "https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/umtjm9jqy8dblfr3cqnm.jpg",
    },
  ];

  return (
    <>
      <div className="services-gallery">
        {CategoryCardDetails.map((item, index) => {
          return (
            <div className="cart-item">
              <Card>
                <Image
                  style={{
                    height: "50%",
                    width: "50%",
                    padding: "5%",
                  }}
                  src={item.itemImage}
                />
                <Card.Description style={{ justifyContent: "left" }}>
                  {item.itemName}
                </Card.Description>
                <Card.Meta>
                  <span>{item.netQuantity}</span>
                </Card.Meta>
                <div className="btn-container">
                  <Button
                    size="ui compact button"
                    style={{ backgroundColor: "limegreen", color: "white" }}
                    width="50%"
                  >
                    {item.rating}
                    <span className="rating">
                      <Rating className="ui rating" />
                    </span>
                  </Button>
                  <Card.Meta
                    style={{ justifyContent: "center", marginTop: "2%",marginLeft:"5%" }}
                  >
                    {item.ratingPoints}
                  </Card.Meta>
                </div>
                <div className="cart-bottom">
                  <Card.Description>
                    <Icon className="rupee sign" />
                    {item.itemPrice}
                  </Card.Description>
                  <div className="add-btn" style={{color:"tomato"}}>ADD</div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CategoryGrid;
