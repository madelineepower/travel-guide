"use strict";

app.factory("guideFactory", function($q, $http){

  let getBooks = () => {
    return $q((resolve,reject) => {
      $http.get('data/guides.json')
      .then((itemObject) => {
        let itemCollection = itemObject.data;
        let bookCollection = itemCollection.guides;
        console.log("bookCollection", bookCollection);
        resolve(bookCollection);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };
  return {getBooks};
});
