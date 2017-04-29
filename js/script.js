function externalScripts() {
        var scripts = [
            "https://code.jquery.com/jquery-3.2.1.js"
        ];
        var src;
        var script;
        var pendingScripts = [];
        var firstScript = document.scripts[0];
        while ((src = scripts.shift())) {
            if ("async" in firstScript) {
                script = document.createElement("script");
                script.async = false;
                script.src = src;
                document.head.appendChild(script);
            } 
        } 
    }
function flicker() {
    document.documentElement.className += " flicker";
    var css = '.flicker  {display:none; }';
    var head = document.getElementsByTagName('head')[0];
        function addflicker(css) {
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(css));
            head.appendChild(s);
        }
        addflicker(css);
        if(document.body !== null) {
            document.documentElement.classList.remove('flicker');
        }

}
flicker();
externalScripts();

(function(andRedEyelikeHAYS, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeHAYS = {
    init: function() {
        this.pageCss();
     
        
        
    },//init

    pageCss: function() {
        console.info('%c pageCss \u221a','background:blue;color:white;');
        var mainCss = '.product form .qv-snippet { height: 72px; }  .product  {max-height:581px !important; }';
        var head = document.getElementsByTagName('head')[0];
        function addcss(css) {
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(css));
            head.appendChild(s);
        }
        addcss(mainCss);
    },//pageCss
    
}; 

(function() {
    try {
        SL.andRedEyelikeHAYS.init();
    }
      	catch(err) { console.log('%c found error: ' + err,'color:white;background:red;'); } 
    })();
}.call(window.andRedEyelikeHAYS || {}));