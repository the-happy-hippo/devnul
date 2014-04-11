
/**
 * Module dependencies.
 */

var jade = require('jade');

var options = {
    pretty: true,
    locals: {
        users: {
            tj: { age: 23, email: 'tj@vision-media.ca', isA: 'human' },
            tobi: { age: 1, email: 'tobi@is-amazing.com', isA: 'ferret' }
        }
    }
};

function stresc(s) {
  var r = '';
  for(var i=0;i<s.length;i++) {
    var h=s.charCodeAt(i).toString(16);
    while(h.length<4) h='0'+h;
    r += '\\u' + h;
  }
  return r;
}
console.log(stresc('ABC'));
console.log('---------------------------------------');

function shft(txt,offs){if(offs<0)offs+=txt.length;return(txt+txt).substring(offs,offs+txt.length);}
console.log(shft('0123456789', 0));
console.log(shft('0123456789', 2));
console.log(shft('0123456789', -2));
console.log('---------------------------------------');

var jade = require('jade');

var fn = jade.compile('p AAA', options);

var html = fn(options.locals);
console.log(html);
console.log('---------------------------------------');

html = jade.renderFile('test.jade', options);
console.log(html);
console.log('---------------------------------------');

var path = __dirname + '/test.jade'
  str = require('fs').readFileSync(path, 'utf8');
console.log(str);
console.log('---------------------------------------');

function aaaa() {
  i = 1;
}


