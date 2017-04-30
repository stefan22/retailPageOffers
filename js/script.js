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
        this.newFoot();
     
        
        
    },//init

    pageCss: function() {
        console.info('%c pageCss \u221a','background:blue;color:white;');
        var mainCss = '#grid {width:100%;padding:0; } .responsive-component-body {margin-top:30px;} #browse_footer {margin-top:0;} .linea {margin-top:0;border-top: 1px dotted rgba(211, 210, 210, 0.25);} .component1 a {color:#d3d2d2;}.component2 a {color:#d3d2d2;} .component3 a {color:#d3d2d2;} } @media screen and (max-device-width:480px) {.linea {display:none;} .component1 a {color:#d3d2d2;} .component2 a {color:#d3d2d2;} .component3 a {color:#d3d2d2;} }';
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
        var h = document.querySelectorAll('.col-sm-12.col-md-9')[0].
        children[2].children[0].textContent = "Boots offers & cashback";

    },//doGrid

    doList: function() {
        console.info('%c doList \u221a','background:blue;color:white;');
        var banr = document.querySelector('.retailer-card--intro-panel.retailer-card--intro-panel-flipped.card-auto-height');
        banr.parentElement.removeChild(banr);
        //lower right banner
        var more = document.getElementById('retailer-template');
        var ban = more.children[1].children[0].children[0].children[0].children[0].children[0];
        ban.parentElement.removeChild(ban);
        //get rid of expires
        var exp = document.querySelectorAll('.cashback-expires');
        for (var i=0; i< exp.length; i++) {
             //set exp display to none
             exp[i].style.display = 'none';
        }//goes thrgh list to set styling

    },//doList

    newFoot: function() {
        var newfo = document.createElement('div');
        newfo.id = "newfoot";
        newfo.className = "row";
        newfo.innerHTML = ' <div class="col-xs-12 col-sm-4 col-md-3"> <div class="component"> <div class="responsive-component-title"> <h5 class="hidden-xs">Categories</h5> <div data-toggle="collapse" data-target="#browse_footer" class="visible-xs"> <h5>Browse Quidco<span class="icon-white-expand-bg"><i class="icon-white-expand"></i></span></h5> </div></div><div id="browse_footer" class="responsive-component-body hidden-xs"> <ul class="list-unstyled"> <li><a href="/a-z/">Entertainment</a></li><li><a href="/newest/">Fashion</a></li><li><a href="/faster-paying-retailers/">Electricals</a></li><li><a href="/faster-paying-retailers/">Insurance &amp; Finance</a></li><li><a href="/faster-paying-retailers/">Insurance &amp; Finance</a></li><li><a href="/faster-paying-retailers/">Utilities</a></li><li><a href="/faster-paying-retailers/">Travel</a></li></ul> </div></div></div><div class="col-xs-12 col-sm-4 col-md-3"> <div class="component1"> <div id="support_footer" class="responsive-component-body hidden-xs"> <ul class="list-unstyled"> <li><a href="/help/all/" style="outline: 0px;">Department Stores</a></li><li><a href="/help/">Home &amp; DIY</a></li><li><a href="/new-enquiry/">Toys &amp; Gifts</a></li><li><a href="/highest-cashback-guarantee/">Health &amp; Beauty</a></li><li><a href="/accessibility/">Health &amp; Beauty</a></li><li><a href="/highest-cashback-guarantee/">Parent &amp; Kids</a></li></ul> </div></div></div><div class="col-xs-12 col-sm-4 col-md-3"> <div class="component2"> <div id="company_footer" class="responsive-component-body hidden-xs"> <ul class="list-unstyled"> <li><a href="/how-it-works/" target="_blank" style="outline: 0px;">Sports &amp; Fitness</a></li><li><a href="https://www.maplesyrupmedia.com/what-we-do/" target="_blank">Office &amp; Business</a></li><li><a href="/promote/">Action &amp; Selling</a></li><li><a href="/discover/media-centre/" target="_blank">Pets</a></li><li><a href="https://www.maplesyrupmedia.com/careers/" target="_blank">Pets</a></li><li><a href="/sitemap/">Cars</a></li><li><a href="http://www.maplenerds.com/blog/" target="_blank">Charity</a></li></ul> </div></div></div><div class="col-xs-12 col-sm-4 col-md-3"> <div class="component3"> <div id="company_footer" class="responsive-component-body hidden-xs"> <ul class="list-unstyled"> <li><a href="/how-it-works/" target="_blank">Food &amp; Drink</a></li><li><a href="https://www.maplesyrupmedia.com/what-we-do/" target="_blank">Luxury</a></li><li><a href="/promote/">Telecoms</a></li><li><a href="/discover/media-centre/" target="_blank">Cycling</a></li><li><a href="https://www.maplesyrupmedia.com/careers/" target="_blank">Cycling</a></li></ul> </div></div></div><hr class="linea" /> ';

        //handle
        var foot = document.getElementById('footer').children[0].children[0];
        //append
        foot.parentElement.insertBefore(newfo,foot);


    }//newFoot

    
}; 

(function() {
    try {
        SL.andRedEyelikeHAYS.init();
    }
        catch(err) { console.log('%c found error: ' + err,'color:white;background:red;'); } 
    })();
}.call(window.andRedEyelikeHAYS || {}));