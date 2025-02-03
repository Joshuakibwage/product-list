import Button from "./Button"

 

const ProductCard = ({image, name, category, price}) => {
  return (
    <div className="rounded-lg overflow-hidden relative ">
        <img 
            src={image.desktop} 
            alt="dessert" 
            height={80}
            width={200}
            className="overflow-hidden"
        />
        <Button 
            label="Add to Cart"
            iconURL="src/assets/images/icon-add-to-cart.svg"
            className=""
        />
        <div className="mt-10 leading-normal">
            <h1 className="text-sm text-rose-500">{category}</h1>
            <p className="font-bold">{name}</p>
            <p className="font-bold text-red-400">$ {price}</p>
        </div>
    </div>
  )
}

export default ProductCard