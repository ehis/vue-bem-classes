// @ts-check

import createBemNaming from "@bem/sdk.naming.entity";

/**
 * @param {string|Object} options
 */
function createBemClass(options) {
  const customNaming = createBemNaming(options);

  /**
   * @typedef BemEntityName
   * @property {string} block - Block name.
   * @property {string} [elem] - Element name.
   * @property {string|Object} [mod] - Modifier name or object with name and value.
   * @property {string} mod.name - Modifier name.
   * @property {string|boolean} [mod.val] - Modifier value.
   */

  /**
   * @param {BemEntityName[]} entities - Arguments of BemEntities
   */
  function bemClass(...entities) {
    return entities.reduce((acc, entity) => {
      const value = customNaming.stringify(entity);

      return {
        ...acc,
        [value]: true
      };
    }, {});
  }

  return bemClass;
}

export default createBemClass;
