// src/utils/menu.js
import menus from "./*.json";

export const getMenuById = async (id) => {
  const data = menus[id];
  if (!data) throw new Error(`No menu found for restaurant ${id}`);
  return data;
};
