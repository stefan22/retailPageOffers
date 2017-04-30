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
        this.pgCssDesktop();
        this.pgCssMobile();
        this.moveEles();
        this.doList();
        this.doGrid();
        this.newFoot();
        this.quidFoot();
     
        
     
        
        
    },//init

    pgCssDesktop: function() {
        console.info('%c pgCssMobile \u221a','background:blue;color:white;');
        var mainCss = '#grid {width:100%;padding:0; } .responsive-component-body {margin-top:30px;} #browse_footer {margin-top:0;} .linea {margin-top:0;border-top: 1px dotted rgba(211, 210, 210, 0.25);} .component1 a {color:#d3d2d2;} div#netotiate-hub-container {background-color:#231f20;} .component2 a {color:#d3d2d2;} .component3 a {color:#d3d2d2;} div#qfoot.logo.quidfoot a svg.main-logo {fill:white; margin-left:0;} #quidtext {font-size:14px; color:#fff; margin:1em 0 0 0; letter-spacing:1px; text-align:center;} #qfoot {padding:30px 0; margin:0 auto; text-align:center; background-color:#4f4c4c;} ';
        var head = document.getElementsByTagName('head')[0];
        function addcss(css) {
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(css));
            head.appendChild(s);
        }
        addcss(mainCss);
    },//pgCssDesktop

    pgCssMobile: function() {
        console.info('%c pgCssMobile \u221a','background:blue;color:white;');
        var mobcss = '@media screen and (max-device-width:480px) {.linea {display:none;} .component1 a {color:#d3d2d2;} .component2 a {color:#d3d2d2;} .component3 a {color:#d3d2d2;} div.search-container {margin-left:0;} div.search-container .search input[type=search] {width:58%;} .search-container .search .nav-search-submit {border-left:1px solid #1d7bce; width:36px;} .search-container .search {width:96%;} h1 {font-size:28px;} .retailer-cashback-list .cashback-details .cashback-description {font-size:17px;} h2 {font-size:22px;} p.big {font-size:17px;} .display-ad-placement .display-ad-placement__container {background-color:#f1f1f1;} .icon-white-expand {width:20px; height:20px;} .icon-white-expand-bg {width:28px; height:28px;} div.display-ad-placement.display-ad-placement--horizontal > div.container {padding-left:10px;}  }';
        var head1 = document.getElementsByTagName('head')[0];
        function addMobcss(css) {
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(css));
            head1.appendChild(s);
        }
        addMobcss(mobcss);

    },//pgCssMobile

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
        console.info('%c newFoot \u221a','background:blue;color:white;');
        var newfo = document.createElement('div');
        newfo.id = "newfoot";
        newfo.className = "row";
        newfo.innerHTML = ' <div class="col-xs-12 col-sm-4 col-md-3"> <div class="component"> <div class="responsive-component-title"> <h5 class="hidden-xs">Categories</h5> <div data-toggle="collapse" data-target="#browse_footer" class="visible-xs"> <h5>Browse Quidco<span class="icon-white-expand-bg"><i class="icon-white-expand"></i></span></h5> </div></div><div id="browse_footer" class="responsive-component-body hidden-xs"> <ul class="list-unstyled"> <li><a href="/entertainment/">Entertainment</a></li><li><a href="/fashion/">Fashion</a></li><li><a href="/electricals/">Electricals</a></li><li><a href="/insurance-finance/">Insurance &amp; Finance</a></li><li><a href="/insurance-finance/">Insurance &amp; Finance</a></li><li><a href="/utilities/">Utilities</a></li><li><a href="/travel/">Travel</a></li></ul> </div></div></div><div class="col-xs-12 col-sm-4 col-md-3"> <div class="component1"> <div id="support_footer" class="responsive-component-body hidden-xs"> <ul class="list-unstyled"> <li><a href="/department-stores/" style="outline: 0px;">Department Stores</a></li><li><a href="/home-diy/">Home &amp; DIY</a></li><li><a href="/toys-gifts/">Toys &amp; Gifts</a></li><li><a href="/health-beauty/">Health &amp; Beauty</a></li><li><a href="/health-beauty/">Health &amp; Beauty</a></li><li><a href="/parent-kids/">Parent &amp; Kids</a></li></ul> </div></div></div><div class="col-xs-12 col-sm-4 col-md-3"> <div class="component2"> <div id="company_footer" class="responsive-component-body hidden-xs"> <ul class="list-unstyled"> <li><a href="/sport-fitness/" target="_blank" style="outline: 0px;">Sports &amp; Fitness</a></li><li><a href="/office-business/" target="_blank">Office &amp; Business</a></li><li><a href="/auction-selling/">Action &amp; Selling</a></li><li><a href="/pets/" target="_blank">Pets</a></li><li><a href="/pets/" target="_blank">Pets</a></li><li><a href="/cars/">Cars</a></li><li><a href="/charity/" target="_blank">Charity</a></li></ul> </div></div></div><div class="col-xs-12 col-sm-4 col-md-3"> <div class="component3"> <div id="company_footer" class="responsive-component-body hidden-xs"> <ul class="list-unstyled"> <li><a href="/drink/" target="_blank">Food &amp; Drink</a></li><li><a href="/luxury/" target="_blank">Luxury</a></li><li><a href="/telecoms/">Telecoms</a></li><li><a href="/cycling/" target="_blank">Cycling</a></li><li><a href="/cycling/" target="_blank">Cycling</a></li></ul> </div></div></div><hr class="linea" /> ';

        //handle
        var foot = document.getElementById('footer').children[0].children[0];
        //append
        foot.parentElement.insertBefore(newfo,foot);
        //removing discover
        var disco = document.getElementsByClassName('discover-icon')[0];
        disco.parentElement.removeChild(disco);


    },//newFoot

    quidFoot: function() {
        console.info('%c quidFoot \u221a','background:blue;color:white;');
        var div = document.createElement('div');
        div.className = "row";
        div.innerHTML = ' <div id="qfoot" class="logo quidfoot"> <a href="/" style="outline: 0px;"> <svg class="main-logo"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-logo"></use> </svg> </a><p id="quidtext">Rewarding shopping everyday!</p></div> ';

        var contar = document.querySelectorAll('.container')[12];
        var par = contar.parentElement;
        par.insertBefore(div,contar);


    }//quidFoot
    
}; 

(function() {
    try {
        SL.andRedEyelikeHAYS.init();
    }
        catch(err) { console.log('%c found error: ' + err,'color:white;background:red;'); } 
    })();
}.call(window.andRedEyelikeHAYS || {}));