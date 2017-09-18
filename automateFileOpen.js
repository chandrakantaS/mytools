var chokidar = require('chokidar');
var moment = require('moment')();
var cp = require('child_process');
var args = process.argv.slice(2);
var fs = require('fs');
//console.log(, args)

var dirToWatch = args[0] || '';
var time = moment.format().split(':')[0].replace('T', '-');

openNewFile(dirToWatch + time);

function openNewFile(pathToWatch) {

   console.log(time)


   var watcher = chokidar.watch(
      pathToWatch,
      {ignored: false, persistent: true}
   );

   console.log('Watcing files in ' + dirToWatch + time)

   ///^((?!Sessions).)*$/

   var p

   watcher.on('add', function(path) {
      if (p) {
         p.kill();
      }
      if (moment.format().split(':')[0].replace('T', '-') !== time) {
         time = moment.format().split(':')[0].replace('T', '-');
         openNewFile(dirToWatch + time);
         return
      }
      if (/_40_/.test(path)) {

         temp = path
         console.log('Open: ' + path);
         var exec = cp.exec;
         p = exec('notepad ' + path)
      }


   });
}
