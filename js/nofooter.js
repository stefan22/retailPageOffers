(function(andRedEyelikeHAYS, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeHAYS = {
    init: function() {
        //this.pgCssDesktop();
        this.pgCssMobile();
        this.addTabcss();
        this.moveEles();
        this.doList();
        this.doGrid();
     
       
        
    },//init

    pgCssDesktop: function() {
        console.info('%c pgCssMobile \u221a','background:blue;color:white;');
        var mainCss = '#grid {width:100%;padding:0; } .responsive-component-body {margin-top:30px;} #browse_footer {margin-top:0;} .linea {margin-top:0;border-top: 1px dotted rgba(211, 210, 210, 0.25);width:90%;margin-left:20px;} .component1 a {color:#d3d2d2;} div#netotiate-hub-container {background-color:#231f20;} .component2 a {color:#d3d2d2;} .component3 a {color:#d3d2d2;} div#qfoot.logo.quidfoot a svg.main-logo {fill:white; margin-left:0;} #quidtext {font-size:14px; color:#fff; margin:1em 0 0 0; letter-spacing:1px; text-align:center;} #qfoot {padding:30px 0; margin:0 auto; text-align:center; background-color:#4f4c4c;} .responsive-component-body1 {margin-top:10px;} .hov:hover {background-color:red;} .joman {margin-right:-106px;} .joman:hover {margin-right:0px !important;} .cotton::after{content: "Shop online";}.cotton{padding:8.5px 12px;font-size:12px;line-height:1;background:blue;color:white;text-align:centered; position:absolute; top:0; left:0;} .retailer-cashback-list {width:100%;padding:0;} ';
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
        var mobcss = '@media screen and (max-device-width:480px) {.linea {display:none;} .component1 a {color:#d3d2d2;} .component2 a {color:#d3d2d2;} .component3 a {color:#d3d2d2;} div.search-container {margin-left:0;} div.search-container .search input[type=search] {width:58%;} .search-container .search .nav-search-submit {border-left:1px solid #1d7bce; width:36px;} .search-container .search {width:96%;} h1 {font-size:28px;} .retailer-cashback-list .cashback-details .cashback-description {font-size:17px;} h2 {font-size:22px;} p.big {font-size:17px;} .display-ad-placement .display-ad-placement__container {background-color:#f1f1f1;} .icon-white-expand {width:20px; height:20px;} .icon-white-expand-bg {width:28px; height:28px;} div.display-ad-placement.display-ad-placement--horizontal > div.container {padding-left:10px;} .display-ad-placement--horizontal .display-ad-placement_small {display:block; height:55px;}  .promotion-nav-container {display:none;}  }';
        var head1 = document.getElementsByTagName('head')[0];
        function addMobcss(css) {
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(css));
            head1.appendChild(s);
        }
        addMobcss(mobcss);

    },//pgCssMobile

    addTabcss: function() {
            console.info('%c pgCssMobile \u221a','background:blue;color:white;');
            var tabcss = '@media screen and (max-device-width:780px) {div.afs_ads {display:inherit !important;} #netotiate-hub-container {display:none;}  }';

            var head2 = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head2.appendChild(s);
            }
        addcss(tabcss);

            
    },//addTabcss

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
        var rem2 = document.querySelectorAll('.col-sm-12.col-md-9')[2];
        // children[4];
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
        
        var cas = document.querySelectorAll('.cashback-items')[0].children;
       
        // for (var i=0; i < cas.length; i++) {
        //     cas[i].classList.add('cotton');
        //     //cas[i].children[2].children[1].classList.add('joman');

        // }







    },//doList



   
    

    
    
}; 




(function() {
    try {
        
        SL.andRedEyelikeHAYS.init();
    }
        catch(err) { console.log('%c found error: ' + err,'color:white;background:red;'); } 
    })();
}.call(window.andRedEyelikeHAYS || {}));