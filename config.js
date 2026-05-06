const disableSetup = false;
const disableLdCfg = false;
var topBarCenterText = `WX1EJC - FN41JX - .js`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["f3de21", "WX SATS", "satellite.js"],
  
  ["2196F3", "WX STATION 1", "https://www.wunderground.com/dashboard/pws/KMANORTO9", "1.0"],
  [
    "2196F3",
    "WX STATION 2",
    "https://www.wunderground.com/dashboard/pws/KMANORTO48",
    "1",
  ],
  ["2196F3", "AIR QUALITY", "https://www.airgradient.com/map?zoom=12&long=-71.16&lat=42.00&meas=rco2&wind_layer=false&map_theme=light&org=ag&embedded=false", "1"],
  [
    "2196F3",
    "LIGHTNING", "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  ["2196F3", "WATCH/WARN", "https://www.weather.gov/", "1"],

["2196F3", "HAMCLOCK", "http://71.232.208.223:8081/live.html", "1"],

["2196F3", "LIVE QUAKES", "https://stationview.raspberryshake.org/#/?net=AM&sta=R75B1&lat=41.99099&lon=288.83499&zoom=7.000", "1"],

      ["2196F3", "EAST-TIMELAPSE", "HTTPS://IPTIMELAPSE.COM/WEBCAMS/NORTON/INTRADAY_NORTON.MP4", "1"],

["2196F3", "SWL", "https://www.short-wave.info/index.php?language=english", "1"],


["2196F3", "HYDROMET", "https://HYDROMET.WEEBLY.COM", "1"],

  [
    "2196F3",
    "RADAR",
    "https://tropicalglobe.com/radar_database/?lat=41.092&lon=-73.265&zoom=4",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=41.9957&lon=-71.161&zoom=5",
    "1",
    "R",
  ],
[
    "2196F3",
    "WINDY",
    "https://embed.windy.com/embed2.html?lat=41.99&lon=-71.16&width=900&detailLat=41.99&detailLon=-71.16&height=600&zoom=8&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1",
    "1",
    "R"
],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-71.16,41.99,3000",
    "1",
    "R",
  ],
[
        "2196F3",
    "SKYVIEW",
    "https://clearoutside.com/forecast/41.97/-71.19",
    "1",
    "R",
  ],
    [
        "2196F3",
    "STELLARIUM",
    "https://stellarium-web.org/",
    "1",
    "R",
  ],
[
        "2196F3",
    "SPACE WX",
    "https://www.swpc.noaa.gov/",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  [["Radar CONUS", "Radar Small"], "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
 [
    "WEST SKY",
    "https://iptimelapse.com/webcams/norton/westcam.jpg",
  ],  
  [
    "LOCAL RADAR (inverted)",
    "invert|https://radar.weather.gov/ridge/standard/KBOX_loop.gif",
  ],
  [
    "CRITTER CAM",
    "https://iptimelapse.com/webcams/norton/snowcam.jpg",
  ],
  [
    "SATELLITE CANADA",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif",
  ],
  [
    "SATELLITE NORTHEAST",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/ne/EXTENT3/GOES16-NE-EXTENT3-600x600.gif",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "MOONLIGHT",
    "https://www.timeanddate.com/scripts/sunmap.php?obj=moon&iso=now",
  ],
  ["SUNLIGHT", "https://www.timeanddate.com/scripts/sunmap.php?obj=sunmap&iso=now"],
  [
    "LIVE LOGAN AIRPORT",
    "iframe|https://globe.adsbexchange.com/?airport=BOS",
  ],
  ["LIVE SUN", "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_0193.jpg"],
  ["LIVE HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  10400,10700,10900,10800
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  ["https://www.amsat.org/feed/", 60],           // Example RSS feed, refresh every 60 minutes
  ["https://daily.hamweekly.com/atom.xml", 120], // Example Atom feed, refresh every 120 minutes
  ];
