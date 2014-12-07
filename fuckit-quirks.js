FuckIt.quirksMode.API = {

  'undefined' : function(){ return 'defined' },
  'null'      : function(){ return {} },
  'boolean'   : function(val){ return !val },
  'regexp'    : function(){ return /./g },
  'function'  : function(){ return function(){} },

  'string' : [
    function empty(){ return '' },
    function upper(s){ return s.toUpperCase() },
    function lower(s){ return s.toLowerCase() }
  ],

  'number' : [
    function random100(){ return Math.random()*100 | 0 },
    function negate(n){ return -1 * n },
    function infinity(){ return Infinity }
  ],

  'date' : [
    function addDays(date){
      var days = Math.random() * 31 | 0;
      return new Date(+date + days * 24 * 60 * 60 * 1000);
    }
  ],

  'object' : [
    function deleteRandomProperty(o){
      var keys = Object.keys(o);
      if(keys.length){
        var prop = keys[keys.length * Math.random() | 0];
        delete o[prop];
      }
      return o;
    }
  ],

  'array' : [
    function wackyLength(a){
      a.length = Math.random() * 1000 | 0;
      return a;
    }
  ]
};