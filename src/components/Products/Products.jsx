import { Link } from "react-router-dom";
import Product from "./Product";
const Products = () => {
  return (
    <div className='mb-32'>
        <div className='text-center mb-20 mt-32'>
        <p>--- Sip & Savor ---</p>
        <h1 className='text-[35px]'>Our Popular Products</h1>
        <Link to="/addCoffee">
        <button className='bg-[#b8915e] text-[#fff] text-2xl p-2 rounded-[5px] border-[1px] border-solid border-[#331A15] hover:bg-transparent hover:text-black'>Add Coffee <i class="fa-solid fa-mug-hot"></i></button>
        </Link>
        </div>
        {/* products  */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 max-w-[80%] mx-auto">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    </div>
  )
}

export default Products