const MenuItem = (props) => {
  const { menuName, current, setList } = props;
  return (
    <li className="menu-item">
      <button
        className="menu-btn"
        type="button"
        data-active={menuName === current}
        onClick={() => setList(menuName)}
      >
        {menuName}
      </button>
    </li>
  );
};

const Menu = (props) => {
  const { menuList, dishesList, setDishesList } = props;
  if (menuList.length === 0 || dishesList.length === 0) {
    return <p>Loading Menu</p>;
  }
  const current = menuList.find(
    (item) => item.category_dishes[0].dish_name === dishesList[0].dish_name
  ).menu_category;
  const setList = (val) => {
    const idx = menuList.findIndex((item) => item.menu_category === val);
    setDishesList(menuList[idx].category_dishes);
  };
  return (
    <nav className="menu">
      <ul className="menu-list">
        {menuList.map((item) => (
          <MenuItem
            menuName={item.menu_category}
            key={item.menu_category_id}
            setList={setList}
            current={current}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
