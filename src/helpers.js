/**
 *
 * @param {*} items an array of items.
 * @returns randomly selected item from array of items.
 */

const choice = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
};

/**
 *
 * @param {*} items array of items.
 * @param {*} item item to be searched for in items.
 * @returns array of items after removing the searched item if found, or returns undefined.
 */
const remove = (items, item) => {
  const itemIndex = items.indexOf(item);

  if (itemIndex === -1) {
    return undefined;
  }

  return items.filter((item, index) => index !== itemIndex);
};

export { choice, remove };
