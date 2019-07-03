'use strict';

function collectSameElements(collectionA, objectB) {
  const flatObjectBValues = Object.values(objectB).flat();
  return collectionA.filter(element => flatObjectBValues.includes(element));
}
