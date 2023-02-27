import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
const CartWidget = ({cantCarrito}) => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
            <Link className="navLink" to={"/Cart"}>
                <button className="btnCarrito-light"><i class="fa-solid fa-cart-shopping"></i></button>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span> }
            </Link> 
        </>
    );
}

export default CartWidget;
