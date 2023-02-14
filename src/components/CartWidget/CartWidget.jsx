import { Link } from "react-router-dom";
const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <Link className="navLink" to={"/Cart"}><button className="btnCarrito-light"><i class="fa-solid fa-cart-shopping"></i></button></Link> 
            <p className="cantCarrito">{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
