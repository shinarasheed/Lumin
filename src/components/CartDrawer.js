import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  addToCart,
} from "../redux/cart.slice";

export default function CartDrawer({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <>
      <button
        onClick={() => {
          dispatch(addToCart(product));
          onOpen();
        }}
        className="product-btn"
      >
        Add to Cart
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="modalHeader">YOUR CART</DrawerHeader>

          <DrawerBody>
            <div className="cartSection">
              {cart.length === 0 ? (
                <h1 className="cartEmptyText">Your Cart is Empty!</h1>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="cartItemContainer">
                      <div className="cartItemDescription">
                        <h5>{item.title}</h5>
                        <span>Dry | 35-45</span>
                        <p>One time purchase of Two Month Supply</p>
                      </div>
                      <div className="itemImageContainer" style={{}}>
                        <div className="itemButtonsContainer">
                          <button
                            style={{ marginRight: "1rem" }}
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            -
                          </button>
                          <p style={{ marginRight: "1rem" }}>{item.quantity}</p>
                          <button
                            onClick={() => dispatch(incrementQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>

                        <div className="itemPriceContainer">
                          <p>${item.quantity * item.price}</p>
                          <img src={item.image_url} alt={item.title} />
                        </div>

                        <button
                          className="itemCloseButton"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </DrawerBody>

          <DrawerFooter className="cartDrawerFooter">
            <div className="itemSubtotal">
              <span>Subtotal</span> <span>${getTotalPrice()}</span>
            </div>
            <button className="product-btn">Proceed to Checkout</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
