import React, { useState } from 'react';

import styles from './Products.module.css';

const WORKSHOP = 'workshop';

const Products =  () => {
  const [products] = useState([
    {
      category: WORKSHOP,
      name: 'The "Real" Wedding II',
      cost: 1250.0,
      about: 'Build your skills and portfolio with the Chinese Bridal Portraiture class with James Brown.',
      description:
        'Celebrate diversity with classic, natural light bridal portraits with a Chinese model in traditional wedding attire and headdresses from the new East Meets West collection. With hair and makeup by the legendary Chiali Meng Artistry and floral details by the botanical genius, Camille Panzarello. ',
      image:
        'https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1600286777822-IPCIWZEMVLH9UK93TO57/ke17ZwdGBToddI8pDm48kO6t_FIigFZlD-2ukJs68NZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdQnRCmyfmE32mt8hf8jTbpNOvskeoRv-ygqK_y0NLe3pygZMNSAPtQr-kV0SxGO-A/Jen_BTS_Studio-1-Jen_Huang-205353_0031.jpg?format=500w',
    },
    {
      category: WORKSHOP,
      name: 'Bridal Portraiture',
      cost: 750.0,
      about: 'Build your skills and portfolio with the Chinese Bridal Portraiture class with James Brown.',
      description:
        'Celebrate diversity with classic, natural light bridal portraits with a Chinese model in traditional wedding attire and headdresses from the new East Meets West collection. With hair and makeup by the legendary Chiali Meng Artistry and floral details by the botanical genius, Camille Panzarello. ',
      image:
        'https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1606278441334-KAGR4X3Z4Y5E486B3HCD/ke17ZwdGBToddI8pDm48kNQ0Dds4OaVwXKz4lIliiXZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0rQeu_A0VlcGJEiWdfSJ_zX7AkVwxbMIAYVxku088aqE12hBAAPy02Op6r73ckLiPQ/Beautiful-Wedding-Makeup-Jen-Huang-Photo-88-371103_0011.jpg?format=500w',
    },
    {
      category: WORKSHOP,
      name: 'Natural Engagement',
      cost: 750.0,
      about: 'Build your skills and portfolio with the Chinese Bridal Portraiture class with James Brown.',
      description:
        'Celebrate diversity with classic, natural light bridal portraits with a Chinese model in traditional wedding attire and headdresses from the new East Meets West collection. With hair and makeup by the legendary Chiali Meng Artistry and floral details by the botanical genius, Camille Panzarello. ',
      image:
        'https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1600290492349-L6U29KOMAYET1LO5JEIJ/ke17ZwdGBToddI8pDm48kGDhYzKEs-g3IW1vEZk4IP57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lqfkVpRp1g_2L-WsTQRP4KxYMVT_2jf6Ixn4lDglP4s9BJebir6FMbnuZFo76Jo4Q/image-asset.jpeg?format=500w',
    },
    {
      category: WORKSHOP,
      name: 'Chinese Bridal Portraiture',
      cost: 950.0,
      about: 'Build your skills and portfolio with the Chinese Bridal Portraiture class with James Brown.',
      description:
        'Celebrate diversity with classic, natural light bridal portraits with a Chinese model in traditional wedding attire and headdresses from the new East Meets West collection. With hair and makeup by the legendary Chiali Meng Artistry and floral details by the botanical genius, Camille Panzarello. ',
      image:
        'https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1614800042581-E2PJF26W3N8E2SREAULL/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/Refined-Film-Jen-Huang-Photo-49-398477_024.jpg?format=300w',
    },
  ]);


  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState(WORKSHOP);

  const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
  };

  return (
    <div className={styles.productsPage}>
      <h1>WORKSHOPS</h1>
      <div className={styles.products}>
        {getProductsInCategory().map((product, idx) => (
          <div className={styles.product} key={idx}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className={styles.productsCost}>${product.cost}</p>
            <p>{product.about}</p>
            <p className={styles.description}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;