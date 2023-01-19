
const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button className="btnCarrito"><i class="fa-solid fa-cart-shopping"></i></button>
            <p className="cantCarrito">{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
