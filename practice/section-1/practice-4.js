'use strict';

function collectSameElements(collectionA, objectB) {
  const keys = collectionA.map(object => object.key);
  return keys.filter(element => objectB.value.includes(element));
}
