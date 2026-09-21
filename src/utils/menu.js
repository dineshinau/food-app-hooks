import menu51510 from "./51510.json";
import menu242282 from "./242282.json";
import menu467579 from "./467579.json";
import menu8620 from "./8620.json";

const menus = {
  51510: menu51510,
  242282: menu242282,
  467579: menu467579,
  8620: menu8620,
};

// async so your component code looks like a real API call
export const getMenuById = async (id) => {
  const data = menus[id];
  if (!data) throw new Error(`No menu found for restaurant ${id}`);
  return data;
};
