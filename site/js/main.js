(function detectIe() {
    var ie = 0;
    try { ie = navigator.userAgent.match( /(MSIE |Trident.*rv[ :])([0-9]+)/ )[ 2 ]; }
    catch(e){}
    if (ie !== 0) document.getElementsByTagName("html")[0].className += " ie v" + ie;
 }());