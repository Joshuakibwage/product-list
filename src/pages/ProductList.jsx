import { useState } from "react"
import Cart from "../components/Cart"
import ProductCard from "../components/ProductCard"
import cards from "../utilities/data.json"

const ProductList = () => {
//state that manages the state if the cart
  const [cart, setCart] = useState([]);

  //function to add to cart
  const addToCart = (item) => {

  }

  return (
    <section className="w-[90%] mx-auto lg:flex ">

      <div className=" w-[100%] lg:w-[70%]">
        <div className="w-[100%] mt-12">
            <h1 className="font-extrabold text-3xl ml-16">Desserts</h1>
        </div>

        <div className="w-[100%] pt-8 flex flex-wrap gap-8 justify-center bg-rose-100">

          {cards.map((card, index) => (
        
            <ProductCard 
              key={index}
              {...card}
              className="hover:scale-110"
            />
          ))}
        </div>
      </div>
      <aside className="mx-auto bg-white w-[90%] sm:w-[50%] md:[80%] lg:w-[30%] lg:mt-12 rounded-md">

          <Cart

          />
      </aside>
    </section>
  )
}

export default ProductList