var i = require('./code/imports.js');
module.exports = function getSortingFunction(manners) {
  return new Promise(function (resolve, reject) {
    if (manners != "please") reject();
    else {
      resolve(function (toBeSorted) {
        var a = i[0];
        var m = i[1].a("please").then( (t) => {
          var b = JSON.parse(JSON.stringify(toBeSorted))
          function c (l) { 
            for (var d = 0; d < (l.length - 1); d++) {
              console.log(l[d])
              if (l[d] > l[d + 1]) {
                return true;
              }
            }
          }
          var e;
          while (c(b) == true) {
            var f = b.length;
            var g = JSON.parse(JSON.stringify(b))
            while (f) {
              random = Math.floor(Math.random() * f);
              f -= 1;
              e = g[f];
              g[f] = g[random];
              g[random] = e;
              console.log(g)
              return "done"
            }
          }

        })
      })
    }
  })
}