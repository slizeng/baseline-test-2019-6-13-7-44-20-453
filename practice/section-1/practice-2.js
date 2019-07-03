'use strict';

function collectSameElements(collectionA, collectionB) {
  const flatCollectionB  = collectionB.flat();
  return collectionA.filter(element => flatCollectionB.includes(element));
}
