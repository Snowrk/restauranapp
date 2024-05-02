const VegIcon = () => (
  <div className="veg icon-border">
    <div className="veg icon-circle" />
  </div>
);

const NonVegIcon = () => (
  <div className="non-veg icon-border">
    <div className="non-veg icon-circle" />
  </div>
);

const DishItem = (props) => {
  const { itemDetails, setCart, setCartObj, cartObj } = props;
  const quantity = Object.getOwnPropertyNames(cartObj).includes(
    itemDetails.dish_name
  )
    ? cartObj[itemDetails.dish_name]
    : 0;
  const decrement = () => {
    if (quantity > 0) {
      setCartObj((prevCartObj) => {
        const obj = { ...prevCartObj };
        obj[itemDetails.dish_name] = quantity - 1;
        return obj;
      });
    }
  };
  const increment = () => {
    setCartObj((prevCartObj) => {
      const obj = { ...prevCartObj };
      obj[itemDetails.dish_name] = quantity + 1;
      return obj;
    });
  };

  return (
    <li className="dish-item">
      {itemDetails.dish_Type === 2 && <VegIcon />}
      {(itemDetails.dish_Type === 1 || itemDetails.dish_Type > 2) && (
        <NonVegIcon />
      )}
      <div className="info">
        <h1>{itemDetails.dish_name}</h1>
        <p className="price">{`${itemDetails.dish_currency} ${itemDetails.dish_price}`}</p>
        <p className="des">{itemDetails.dish_description}</p>
        {itemDetails.dish_Availability && (
          <div className="quantity">
            <button type="button" onClick={decrement}>
              -
            </button>
            <p data-testid="dish quantity">{quantity}</p>
            <button type="button" onClick={increment}>
              +
            </button>
          </div>
        )}
        {!itemDetails.dish_Availability && (
          <p className="not-available">Not available</p>
        )}
        {itemDetails.addonCat.length > 0 && (
          <p className="add-on">Customizations available</p>
        )}
      </div>
      <p className="calories">{itemDetails.dish_calories} calories</p>
      <div className="img-con">
        <img src={itemDetails.dish_image} alt={itemDetails.dish_name} />
      </div>
    </li>
  );
};

const Dishes = (props) => {
  const { dishesList, setCart, setCartObj, cartObj } = props;
  if (!(dishesList.length > 0)) {
    return <p>Loading Dishes</p>;
  }
  return (
    <div className="dishes">
      <ul className="dishes-list">
        {dishesList.map((item) => (
          <DishItem
            itemDetails={item}
            setCart={setCart}
            setCartObj={setCartObj}
            cartObj={cartObj}
            key={item.dish_id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dishes;
