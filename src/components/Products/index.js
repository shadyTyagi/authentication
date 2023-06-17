// Write your JS code here
import Header from '../Header'
import './index.css'

const Product = () => (
  <>
    <Header />
    <div className="product-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        className="products"
        alt="products"
      />
    </div>
  </>
)

export default Product
