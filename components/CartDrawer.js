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
import styles from "../styles/Cart.module.scss";

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
        className={styles.productbtn}
      >
        Add to Cart
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent className="drawerContent">
          <DrawerCloseButton className={styles.cartCloseBtn} />
          <DrawerHeader className={styles.cartHeaderText}>
            YOUR CART
          </DrawerHeader>

          <DrawerBody>
            <div className={styles.cartSection}>
              {cart.length === 0 ? (
                <h1 className={styles.cartEmptyText}>Your Cart is Empty!</h1>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className={styles.cartItemContainer}>
                      <div className={styles.cartItemDescription}>
                        <h5>{item.title}</h5>
                        <span>Dry | 35-45</span>
                        <p>One time purchase of Two Month Supply</p>
                      </div>
                      <div className={styles.itemImageContainer}>
                        <div className={styles.itemButtonsContainer}>
                          <button
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            onClick={() => dispatch(incrementQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>

                        <div className={styles.itemPriceContainer}>
                          <p>${item.quantity * item.price}</p>
                          <img
                            className={styles.itemPriceContainerImg}
                            src={item.image_url}
                            alt={item.title}
                          />
                        </div>

                        <button
                          className={styles.itemCloseButton}
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </DrawerBody>

          <DrawerFooter className={styles.cartDrawerFooter}>
            <div className={styles.itemSubtotal}>
              <span>Subtotal</span> <span>${getTotalPrice()}</span>
            </div>
            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
