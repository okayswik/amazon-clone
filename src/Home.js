import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.net-a-porter.com/content/images/cms/ycm/resource/blob/479570/60cc0fe28320413808bda17586241067/desktop-data.jpg/w1500_q80.jpg"
          alt=""
        />
        <div className="home__row">
          <div className="home__hero">
            <h1 className="headline_hero">Best Sellers</h1>
            <figure>
              <img
                className="hero__image"
                src=" https://vistaalegre.com/pt/content/images/thumbs/0009953_us-best-sellers.jpeg"
              />
            </figure>
          </div>
          <div className="home__hero">
            <h1 className="headline_hero">New Arrivals</h1>
            <figure>
              <img
                className="hero__image"
                src="https://di2ponv0v5otw.cloudfront.net/posts/2017/03/02/58b8b2b37f0a051e8b01c8e8/m_5cc9cca49ed36dea26ddc092.jpg"
              />
            </figure>
          </div>
          <div className="home__hero">
            <h1 className="headline_hero">On Sale</h1>
            <figure>
              <img
                className="hero__image"
                src="https://cdn.shopify.com/s/files/1/0101/9127/4031/collections/Women_s_Sale_-_Women_s_Clothing_Sale_600x600_crop_center.jpg?v=1580426259"
              />
            </figure>
          </div>
        </div>

        <div className="section_hero">
          <div className="section.header">
            <h1 className="section_headline">Shop Now</h1>
            <p className="paragraph">
              Get ahead of the style curve with our latest arrivals. Snap up the
              sought-after pieces our most stylish women love to wear.
            </p>
          </div>
        </div>

        <div className="home__row">
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            title="Sita don"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        <div className="home__row">
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            title="Sita don"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            title="Sita don"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        <div className="home__row">
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        {/* <div className="home__row"></div>
        <Product
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        <Product
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        /> */}
      </div>
    </div>
  );
}

export default Home;
