/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});


/*!
 * Grid.js
 * Thank you Mary Lou
 * From Codrops, Tympanus
 */

var Grid = (function() {
	
	
			
    var $grid = $('#grid'),
        $items = $grid.children('li'),
        current = -1,
        previewPos = -1,
        scrollExtra = 0,
        marginExpanded = 14,
        $window = $( window ),
        $body = $('html, body'),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        support = Modernizr.csstransitions,
        settings = {
            minHeight: 200,
            speed: 350,
            easing: 'ease'
        };

    function init(config) {
        settings = $.extend(true, {}, settings, config);
        saveItemInfo(true);
        initEvents();

    }

    function saveItemInfo(saveheight) {
        $items.each(function() {
            var $item = $(this);
            $item.data('offsetTop', $item.offset().top);
            if (saveheight) {
                $item.data('height', $item.height());
            }
        });
    }

    function initEvents() {
        $items.on('click', '.close', function() {
            hidePreview();
            return false;
        }).children('a').on('click', function(e) {

            var $item = $(this).parent();
            current === $item.index() ? hidePreview() : showPreview($item);
            return false;

        });
        $("#portfolio").click(function(e) {
            if ($(e.target).closest("#grid").length > 0) {
                return false;
            }
            hidePreview();
        });
        
        
    }

    function showPreview($item) {
        var preview = $.data(this, 'preview'),
            // item´s offset top
            position = $item.data('offsetTop');

        scrollExtra = 0;

        if (typeof preview != 'undefined') {

            // not in the same row
            if (previewPos !== position) {
                if (position > previewPos) {
                    scrollExtra = preview.height;
                }
                hidePreview();
            } else {
                preview.close();
                setTimeout($.proxy(function() {
	                
                	preview.update($item);
	                preview = $.data(this, 'preview', new Preview($item));
	                preview.open();
	                
	            }, this), 300);
                return false;
            }
        }

        previewPos = position;
        preview = $.data(this, 'preview', new Preview($item));
        preview.open();
    }

    function hidePreview() {
        current = -1;
        var preview = $.data(this, 'preview');
        preview.close();
        $.removeData(this, 'preview');
    }

    function Preview($item) {
        this.$item = $item;
        this.expandedIdx = this.$item.index();
        this.create();
        this.update();
    }

    function flexi() {
        $('.slider').flexslider();
    }

    Preview.prototype = {
        create: function() {
            this.$details = $('<div class="text col span_4"></div>');
            //this.$loading = $( '<div class="loading"></div>' );
            this.$slider = $('<div class="slider col span_8"></div>');
            this.$closePreview = $('<div class="row"><div class="col span_12 close"><a class="button">close</a></div></div>');
            this.$content = $('<div class="row"></div>').append(this.$slider, this.$details);
            this.$previewInner = $('<div class="expander-inner"></div>').append(this.$content, this.$closePreview);
            this.$previewEl = $('<div class="expander"></div>').append(this.$previewInner);
            this.$item.append(this.getEl());
            if (support) {
                this.setTransition();
            }
        },
        
        update: function($item) {
            if ($item) {
                this.$item = $item;
            }

            if (current !== -1) {
                var $currentItem = $items.eq(current);
                $currentItem.removeClass('expanded');
                this.$item.addClass('expanded');
                this.positionPreview();
            }

            current = this.$item.index();

            var $itemEl = this.$item.children('a'),
                eldata = {
                    images: $itemEl.data('images'),
                    details: $itemEl.data('details')
                };

            this.$details.html(eldata.details);
            this.$slider.html(eldata.images);

        },
        open: function() {
	        this.$slider.imagesLoaded()
			  .done( $.proxy(function() {
			    this.setHeights();
                this.positionPreview();
			  },this))
			  .progress( function( instance, image ) {
			    var result = image.isLoaded ? 'loaded' : 'broken';
			    console.log( 'image is ' + result + ' for ' + image.img.src );
			  });
            

        },
        close: function() {

            var self = this,
                onEndFn = function() {
                    if (support) {
                        $(this).off(transEndEventName);
                    }
                    self.$item.removeClass('expanded');
                    self.$previewEl.remove();
                };

            setTimeout($.proxy(function() {

                this.$previewEl.css('height', 0);
                var $expandedItem = $items.eq(this.expandedIdx);
                $expandedItem.css('height', $expandedItem.data('height')).on(transEndEventName, onEndFn);
                $body.animate({
                    scrollTop: this.$item.data('offsetTop') - 14
                }, settings.speed);
                if (!support) {
                    onEndFn.call();
                }
            }, this), 25);

            return false;

        },
        calcHeight: function() {

            var heightPreview = $('.expander-inner').height() + marginExpanded + 28,
                itemHeight = heightPreview;
            console.log(itemHeight);

            if (heightPreview < settings.minHeight) {
                heightPreview = settings.minHeight;
                itemHeight = settings.minHeight + this.$item.data('height') + marginExpanded;

            }

            this.height = heightPreview;
            this.itemHeight = itemHeight + this.$item.data('height') + marginExpanded;

        },
        setHeights: function() {

            var self = this,
                onEndFn = function() {
                    if (support) {
                        self.$item.off(transEndEventName);
                    }
                    self.$item.addClass('expanded');
                };
			this.calcHeight();
			this.$previewEl.css('height', this.height);
            this.$item.css('height', this.itemHeight).on(transEndEventName, onEndFn);

            if (!support) {
                onEndFn.call();
            }

        },
        positionPreview: function() {
            var position = this.$item.data('offsetTop') - 14,
                previewOffsetT = this.$previewEl.offset().top - scrollExtra,
                scrollVal = position;

            $body.animate({
                scrollTop: scrollVal
            }, settings.speed);

        },
        setTransition: function() {
            this.$previewEl.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
            this.$item.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
        },
        getEl: function() {
            return this.$previewEl;
        }
    }

    return {
        init: init
    };

})();

