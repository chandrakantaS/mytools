function flatten(arr) {
      var newArr = [];

      arr.forEach(function(item) {
         if (Array.isArray(item)) {
            flatten(item).forEach(function(i) {
               newArr.push(i);
            })
         } else {
            newArr.push(item);
         }
      });

      return newArr;

   }
