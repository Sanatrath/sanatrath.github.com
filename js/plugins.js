//dribbble half court shot plugin
var hcs = new HalfCourtShot({ jersey: "alistairtweedie", shots: 1, goal: "dribbble" });

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

//map
//load map
function initialize() {
        var myLatlng = new google.maps.LatLng(55.495587,-4.614214);
        var mapOptions = {
          zoom: 11,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          mapTypeControl: false,
          mapTypeControlOptions: {
               style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
               position: google.maps.ControlPosition.BOTTOM_CENTER
          },
          panControl: false,
          panControlOptions: {
               position: google.maps.ControlPosition.TOP_RIGHT
          },
          zoomControl: true,
          zoomControlOptions: {
               style: google.maps.ZoomControlStyle.LARGE,
               position: google.maps.ControlPosition.TOP_RIGHT
          },
          scaleControl: false,
          scaleControlOptions: {
               position: google.maps.ControlPosition.TOP_LEFT
          },
          streetViewControl: false,
          streetViewControlOptions: {
               position: google.maps.ControlPosition.LEFT_TOP
          }
        
        }

        var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

        var contentString = '';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Here I am!'
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
      }

