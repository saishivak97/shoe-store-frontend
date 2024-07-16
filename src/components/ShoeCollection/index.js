import "./index.css";

const shoeImages = [
  "./images/1.jpeg",
  "./images/2.jpeg",
  "./images/3.jpeg",
  "./images/4.jpeg",
  "./images/5.jpeg",
  "./images/6.jpeg",
  "./images/7.jpeg",
  "./images/8.jpeg",
  "./images/9.jpeg",
  "./images/10.jpeg",
];

function ShoeCollection() {
  return (
    <div>
      <div className="shoe-section">
        <div>
          <h1 className="title">STEP INTO STYLE, COMFORT. </h1>
          <p className="shoe-container-description">
            Welcome to Shoe Haven—your go-to for stylish, comfortable footwear.
            Explore our collection of men’s shoes, from elegant dress shoes to
            casual sneakers, in vibrant colors and premium materials. Find the
            perfect pair to elevate your style and comfort today!
          </p>
          <div>
            <button className="shop-container-button">Shop Now</button>
            <button className="shop-container-transparent-button">
              Shop Now
            </button>
          </div>
        </div>
        <div>
          <img
            className="shoe-main-image"
            src="./images/main-image2.jpeg"
            alt="images"
          />
        </div>
      </div>
      <div>
        <ul className="shoe-list-container">
          {shoeImages.map((eachImg,index) => (
            <li className={`shoe-each-item-${index+1}`}>
              <img className="shoe-images" src={eachImg} alt="images" />
              <p className="shoe-price-heading">GoLander-ver-{index+1}.0</p>
              <p className="shoe-price">Price:{((index+1)*400-1)}rs</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoeCollection;
