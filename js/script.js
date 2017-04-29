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
        this.moveEles();
        this.doList();
        this.doGrid();
     
        
        
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

    moveEles: function() {
        console.info('%c moveEles \u221a','background:blue;color:white;');
        //two total
        var all = document.querySelectorAll('.col-sm-12.col-md-9');
        //list clone
        var list = all[0].children[3].cloneNode(true);
        list.id = "list";
        list.className += " col-xs-12 col-sm-12 col-md-9";
        //grid clone
        var grid = all[1].cloneNode(true);
        grid.id = "grid";
        grid.className += " retailer-cashback-list retailer-cashback-list--online";
        //both parents
        var retpar = document.getElementById('retailer-template');
        //list target
        var listTarget = retpar.children[0].children[0].children[3];
        //grid target
        var gridTarget = retpar.children[1].children[0].children[0].children[0].children[1].children[0];
        //append clone list
        listTarget.parentElement.insertBefore(grid,listTarget);
        //append clone grid
        gridTarget.parentElement.insertBefore(list,gridTarget);

        //undesires
        var rem = document.querySelectorAll('.col-sm-12.col-md-9');
        rem[3].parentElement.removeChild(rem[3]);
        var rem2 = document.querySelectorAll('.col-sm-12.col-md-9')[0].
        children[4];
        rem2.parentElement.removeChild(rem2);




    },//movePrep

     doGrid: function() {
        console.info('%c doGrid \u221a','background:blue;color:white;');

    },//doGrid

    doList: function() {
        console.info('%c doList \u221a','background:blue;color:white;');

    }//doList


    
}; 

(function() {
    try {
        SL.andRedEyelikeHAYS.init();
    }
      	catch(err) { console.log('%c found error: ' + err,'color:white;background:red;'); } 
    })();
}.call(window.andRedEyelikeHAYS || {}));