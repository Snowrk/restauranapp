import { IoCartOutline } from "react-icons/io5";

const Header = (props) => {
  const { restaurant, cart } = props;
  const restaurantName = restaurant.restaurant_name;
  return (
    <div className="header-container">
      <h1>{restaurantName}</h1>
      <p className="myorders">My Orders</p>
      <div className="cart">
        <IoCartOutline className="icon-size" />
        <div className="no-of-items-in-cart">{cart}</div>
      </div>
    </div>
  );
};

export default Header;
