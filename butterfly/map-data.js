var map = L.map('map').setView([35.429741,143.413327], 5);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {//http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
	maxZoom: 18,
	attribution: 'Data from <a href="http://www.jlect.com">JLect.com</a> | Map &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(map);

var data = JSON.parse('{"type": "FeatureCollection","features": [{"type": "Feature","properties": {"marker-color": "#fd0000","marker-size": "medium","marker-symbol": "","data": "chocho, chuchu, tsutsu","region": "Kyushu (Kagoshima)"},"geometry": {"type": "Point","coordinates": [130.55156707763672,31.59637527998742]}},{"type": "Feature","properties": {"marker-color": "#ff80c0","marker-size": "medium","marker-symbol": "","data": "chō","region": "Honshu (Standard)"},"geometry": {"type": "Point","coordinates": [139.757080078125,35.69299463209881]}},{"type": "Feature","properties": {"marker-color": "#000080","marker-size": "medium","marker-symbol": "","data": "heiru, heirume","region": "Kanto (Hachijo)"},"geometry": {"type": "Point","coordinates": [139.79827880859375,33.10534697199519]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "chonma, chonpa","region": "North (Yamagata)"},"geometry": {"type": "Point","coordinates": [140.196533203125,38.55246141354153]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "choppa","region": "Kanto (Tochigi)"},"geometry": {"type": "Point","coordinates": [139.82574462890625,36.70365959719456]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "haberu, hābērū","region": "Ryukyu (Okinawa)"},"geometry": {"type": "Point","coordinates": [127.69065856933594,26.208430648684686]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "small","marker-symbol": "","data": "haberu, haberyō (archaisms?)","region": "Kyushu (Miyazaki)"},"geometry": {"type": "Point","coordinates": [131.44317626953125,31.884554393746278]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "habira","region": "Ryukyu (Okinoerabu)"},"geometry": {"type": "Point","coordinates": [128.61419677734375,27.371767300523047]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "papiru","region": "Ryukyu (Yonaguni)"},"geometry": {"type": "Point","coordinates": [128.419189453125,27.044449217654016]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "hapira","region": "Ryukyu (Yaeyama: Kohama)"},"geometry": {"type": "Point","coordinates": [123.97796630859375,24.34209190699893]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "pabiru","region": "Ryukyu (Yaeyama: Hatoma)"},"geometry": {"type": "Point","coordinates": [123.81866455078125,24.474650249010416]}},{"type": "Feature","properties": {"marker-color": "#00ff00","marker-size": "medium","marker-symbol": "","data": "kakabe","region": "North (Iwate: Morioka)"},"geometry": {"type": "Point","coordinates": [141.26014709472656,39.74626606218367]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "pabiɿ","region": "Ryukyu (Miyako)"},"geometry": {"type": "Point","coordinates": [125.30387878417969,24.78237074929868]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "papiru","region": "Ryukyu (Yaeyama)"},"geometry": {"type": "Point","coordinates": [123.83033752441408,24.339589469425167]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "papiru","region": "Ryukyu (Tarama-Minna)"},"geometry": {"type": "Point","coordinates": [124.69551086425781,24.66012232531977]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "papiru","region": "Ryukyu (Tarama-Minna)"},"geometry": {"type": "Point","coordinates": [124.69413757324219,24.75306702526595]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "habiru","region": "Ryukyu (Yonaguni)"},"geometry": {"type": "Point","coordinates": [122.99880981445311,24.457150524185852]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "fabiraa","region": "Ryukyu (Amami: Kikai)"},"geometry": {"type": "Point","coordinates": [129.97100830078125,28.318888915773826]}},{"type": "Feature","properties": {"marker-color": "#00ff00","marker-size": "medium","marker-symbol": "","data": "kakkabe","region": "North (Iwate: Kuji)"},"geometry": {"type": "Point","coordinates": [141.82250976562497,40.17257757632168]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "papïru","region": "Ryukyu (Yaeyama: Hateruma)"},"geometry": {"type": "Point","coordinates": [123.78295898437501,24.059004491031178]}},{"type": "Feature","properties": {"marker-color": "#ffff00","marker-size": "medium","marker-symbol": "","data": "terakko","region": "North (Aomori: Tsugaru)"},"geometry": {"type": "Point","coordinates": [140.3448486328125,40.82316279497129]}},{"type": "Feature","properties": {"marker-color": "#ff0000","marker-size": "small","marker-symbol": "","data": "chocho","region": "North (Aomori: Tsugaru)"},"geometry": {"type": "Point","coordinates": [140.37231445312497,40.82212357516945]}},{"type": "Feature","properties": {"marker-color": "#ff8080","marker-size": "medium","marker-symbol": "","data": "chochobe, chochobekko, chochoma","region": "Kanto (Tochigi: Sano)"},"geometry": {"type": "Point","coordinates": [139.581298828125,36.30848550829368]}},{"type": "Feature","properties": {"marker-color": "#ff8080","marker-size": "medium","marker-symbol": "","data": "chochoke","region": "Kyushu (Kumamoto: Misato)"},"geometry": {"type": "Point","coordinates": [130.8753204345703,32.60872440078541]}},{"type": "Feature","properties": {"marker-color": "#ff0000","marker-size": "small","marker-symbol": "","data": "chōchō","region": "Ryukyu (Miyako)"},"geometry": {"type": "Point","coordinates": [125.32928466796875,24.779253660568546]}},{"type": "Feature","properties": {"marker-color": "#ff0000","marker-size": "small","marker-symbol": "","data": "chōchō, chōcho","region": "Honshu (Standard)"},"geometry": {"type": "Point","coordinates": [139.75982666015625,35.689648586960935]}},{"type": "Feature","properties": {"marker-color": "#ff0000","marker-size": "medium","marker-symbol": "","data": "chūchū","region": "Kyushu (Nagasaki: Hasami)"},"geometry": {"type": "Point","coordinates": [129.9016571044922,33.131226295431865]}},{"type": "Feature","properties": {"marker-color": "#00ffff","marker-size": "medium","marker-symbol": "","data": "tabērū","region": "Ryukyu (Kunigami: Nakijin)"},"geometry": {"type": "Point","coordinates": [127.9632568359375,26.68243493286188]}},{"type": "Feature","properties": {"marker-color": "#ffff00","marker-size": "medium","marker-symbol": "","data": "tebirako, tebirakko, tenbirakko","region": "North (Iwate)"},"geometry": {"type": "Point","coordinates": [141.624755859375,39.774769485295465]}},{"type": "Feature","properties": {"marker-color": "#800080","marker-size": "small","marker-symbol": "","data": "ayahabira","region": "Ryukyu (Amami: Kikai)"},"geometry": {"type": "Point","coordinates": [129.95040893554688,28.310426020475724]}},{"type": "Feature","properties": {"marker-color": "#800080","marker-size": "medium","marker-symbol": "","data": "ayahabura","region": "Ryukyu (Amami)"},"geometry": {"type": "Point","coordinates": [129.39971923828125,28.30921698045776]}},{"type": "Feature","properties": {"marker-color": "#ff8080","marker-size": "medium","marker-symbol": "","data": "chochobekko, chōchobakko, chōchōbakko","region": "Kanto (Saitama)"},"geometry": {"type": "Point","coordinates": [139.6465301513672,35.91018621631767]}},{"type": "Feature","properties": {"marker-color": "#ff8080","marker-size": "medium","marker-symbol": "","data": "chōchōbakko","region": "Kanto (Saitama: Kawagoe)"},"geometry": {"type": "Point","coordinates": [139.48104858398438,35.906293141498736]}},{"type": "Feature","properties": {"marker-color": "#ff8080","marker-size": "medium","marker-symbol": "","data": "chōchobekko","region": "Kanto (Tochigi: Ashikaga)"},"geometry": {"type": "Point","coordinates": [139.4439697265625,36.33504067209607]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "chōma","region": "North (Miyagi)"},"geometry": {"type": "Point","coordinates": [140.77880859374997,38.37611542403604]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "chōman","region": "North (Yamagata: Mogami)"},"geometry": {"type": "Point","coordinates": [140.52886962890622,38.76050866911149]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "chonma","region": "North (Yamagata: Ookura)"},"geometry": {"type": "Point","coordinates": [140.19481658935547,38.62706326550212]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "chōma","region": "North (Fukushima: Aizu)"},"geometry": {"type": "Point","coordinates":[139.91912841796875,37.48248679787437]}},{"type":"Feature","properties":{"marker-color":"#ff8000","marker-size":"medium","marker-symbol":"","data":"chōma","region":"North (Fukushima: Sōma)"},"geometry":{"type":"Point","coordinates":[140.91476440429688,37.792422407988575]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "chonma, choppa, choppame, choppakkō","region": "Kanto (Ibaraki)"},"geometry": {"type": "Point","coordinates": [140.4052734375,36.379279167407965]}},{"type": "Feature","properties": {"marker-color": "#ff0000","marker-size": "medium","marker-symbol": "","data": "chōcho","region": "North (Hokkaido)"},"geometry": {"type": "Point","coordinates": [  141.317138671875,  43.06487470411881]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "chōko","region": "Shikoku (Tokushima)"},"geometry": {"type": "Point","coordinates": [134.52484130859375,34.050383783683415]}},{"type": "Feature","properties": {"marker-color": "#ff0000","marker-size": "medium","marker-symbol": "","data": "chocho","region": "Kanto (Kanagawa)"},"geometry": {"type": "Point","coordinates": [139.55795288085938,35.44724605551148]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "small","marker-symbol": "","data": "chōman","region": "Kanto (Saitama)"},"geometry": {"type": "Point","coordinates": [139.6465301513672,35.909073928771534]}},{"type": "Feature","properties": {"marker-color": "#ff8080","marker-size": "small","marker-symbol": "","data": "chōchōbako, chōchōbakko, chōchōbanko, chōchōme, chōchonme","region":"Kanto (Kanagawa)"},"geometry": {"type": "Point","coordinates": [139.55795288085938,35.4458476042228]}},{"type": "Feature","properties": {"marker-color": "#ff8080","marker-size": "medium","marker-symbol": "","data": "chōchobakko","region": "Kanto (Chiba)"},"geometry": {"type": "Point","coordinates": [140.11825561523438,35.60483530498859]}},{"type": "Feature","properties": {"marker-color": "#ff8080","marker-size": "medium","marker-symbol": "","data": "chōchobakko, chōchobekko","region": "Kanto (Gunma)"},"geometry": {"type": "Point","coordinates": [139.11163330078125,36.36269267819595]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "small","marker-symbol": "","data": "chōman","region": "Kanto (Chiba)"},"geometry": {"type": "Point","coordinates": [140.11962890625,35.594785665487244]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "chōmanbo","region": "Kanto (Tochigi)"},"geometry": {"type": "Point","coordinates": [139.48516845703125,36.25756282630298]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "chonki","region": "Kanto (Ibaraki: Ishioka)"},"geometry": {"type": "Point","coordinates": [140.28785705566406,36.186104434556036]}},{"type": "Feature","properties": {"marker-color": "#ff8000","marker-size": "medium","marker-symbol": "","data": "chōko","region": "Chugoku (Tottori)"},"geometry": {"type": "Point","coordinates": [134.22821044921875,35.49981018711523]}},{"type": "Feature","properties": {"marker-color": "#800080","marker-size": "medium","marker-symbol": "","data": "ayahabiru","region": "Ryukyu (Tokunoshima)"},"geometry": {"type": "Point","coordinates": [128.94378662109372,27.754038315679356]}},{"type": "Feature","properties": {"marker-color": "#ff0000","marker-size": "medium","marker-symbol": "","data": "chōcho","region": "Kyushu (Tokara: Takarajima)"},"geometry": {"type": "Point","coordinates": [129.2069435119629,29.1427160858766]}},{"type": "Feature","properties": {"marker-color": "#ff0000","marker-size": "medium","marker-symbol": "","data": "chōcho","region": "Kyushu (Kagoshima: Ei)"},"geometry": {"type": "Point","coordinates": [130.49779415130615,31.241022070353754]}},{"type": "Feature","properties": {"marker-color": "#0000ff","marker-size": "medium","marker-symbol": "","data": "habī","region": "Kyushu (Tokara)"},"geometry": {"type": "Point","coordinates": [129.70458984375,29.621221113784504]}},{"type": "Feature","properties": {"marker-color": "#ff0000","marker-size": "medium","marker-symbol": "","data": "tsūtsū, chūchū","region": "Kyushu (Kagoshima: Koshikijima)"},"geometry": {"type": "Point","coordinates": [129.73960876464844,31.722326680224338]}},{"type": "Feature","properties": {"marker-color": "#ff80c0","marker-size": "small","marker-symbol": "","data": "tsū, chū","region": "Kyushu (Kagoshima: Koshikijima)"},"geometry": {"type": "Point","coordinates": [129.73960876464844,31.71940630930742]}}]}');

var geoJson;

geoJson = L.geoJson(
	data,
	{
		pointToLayer: function(feature, latlng) {
			var circleRadius = 7;
			if (feature.properties['marker-size'] == 'small')
				circleRadius = 4;
			return new L.CircleMarker(latlng, {
				radius: circleRadius,
				fillColor: feature.properties['marker-color'],
				color: "#000",
				weight: 1,
				opacity: 1,
				fillOpacity: 1
			}).bindPopup('Word: <b>' + feature.properties.data + '</b><br>Region: <b>' + feature.properties.region + '</b>');
		},
	}
).addTo(map);


/* Legend Box Control*/
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend'),
		labels = ['<div id="legend-toggle">[collapse]</div>',
				  '<h2><b>Legend</b></h2>',
				  '<p>Click on the dots for individual details.</p>',
				  '<div id="legend-info"><div class="legend-color"><i style="background:#ff80c0"></i></div><div class="legend-entry">chō<br><span class="legend-spacer">Middle Chinese <em>*dep</em> "butterfly" → Old Japanese <em>*tepu</em></span></div>',
				  '<div class="legend-color"><i style="background:#ff8000"></i></div><div class="legend-entry">chō + X (chōma, chonma, chonpa, choppa, etc.)<br><span class="legend-spacer">From <em>chō</em> "butterfly", <em>n</em> (?), <em>ma~pa</em> (?), <em>me</em> (mushi) "critter", <em>kō</em> (ko) "diminutive suffix"</span></div>',
				  '<div class="legend-color"><i style="background:#ff0000"></i></div><div class="legend-entry">chōchō, chōcho, chocho, chūchū, etc.<br><span class="legend-spacer">Reduplication of <em>chō</em></span></div>',
				  '<div class="legend-color"><i style="background:#ff8080"></i></div><div class="legend-entry">chōchō + X (chōchōbakko, chochobekko, chochoma, etc.)<br><span class="legend-spacer">From <em>chōchō</em> "butterfly", <em>bekko~bakko</em> (herako~hirako "butterfly"), <em>ma</em> (?), <em>ko</em> "diminutive suffix", <em>ke</em> (?)</span></div>',
				  '<div class="legend-color"><i style="background:#000080"></i></div><div class="legend-entry">heiru, heirume<br><span class="legend-spacer">Old Japanese <em>*pipiru</em> "silkworm moth", Old Ryukyuan <em>*paperu~*papero</em> "butterfly". Suffixed with <em>me</em> (mushi) "critter"</span></div>',
				  '<div class="legend-color"><i style="background:#0000ff"></i></div><div class="legend-entry">haberu, pabiru, etc.<br><span class="legend-spacer">Old Japanese <em>*pipiru</em> "silkworm moth", Old Ryukyuan <em>*paperu~*papero</em> "butterfly"</span></div>',
				  '<div class="legend-color"><i style="background:#800080"></i></div><div class="legend-entry">ayahabira, ayahabura, etc.<br><span class="legend-spacer">From <em>aya</em> "pattern" + haberu "butterfly"</span></div>',
				  '<div class="legend-color"><i style="background:#ffff00"></i></div><div class="legend-entry">tebirako, tebirakko, tenbirakko, terakko<br><span class="legend-spacer">Unknown. Seemingly related to <em>te no hira</em> "palm (of the hands)" + <em>ko</em> "diminutive suffix"</span></div>',
				  '<div class="legend-color"><i style="background:#00ffff"></i></div><div class="legend-entry">tabērū<br><span class="legend-spacer">Unknown. Possibly of the same origin as the above. See also <em>haberu</em>.</span></div>',
				  '<div class="legend-color"><i style="background:#00ff00"></i></div><div class="legend-entry">kakabe, kakkabe<br><span class="legend-spacer">Unknown. Generally means "moth", but also used for butterflies.</span></div>* Note: Unmapped areas are most likely to use one of the first four forms.</div>',
				  '<div id="legend-scroll"><div id="legend-scrolldown">[↓]</div>',
				  '<div id="legend-scrollup">[↑]</div></div>'];

	div.innerHTML = labels.join('');
	return div;
};

legend.addTo(map);


/* Handle the toggle button */
var toggle_button = document.getElementById('legend-toggle');

toggle_button.addEventListener('click', function() {
    var legend_div = document.getElementById('legend-info');
	if (legend_div.style.display && legend_div.style.display == 'none') {
		legend_div.style.display = 'block';
		document.getElementById('legend-scroll').style.display = 'block';
		toggle_button.innerHTML = '[collapse]';
	} else {
		legend_div.style.display = 'none';
		document.getElementById('legend-scroll').style.display = 'none';
		toggle_button.innerHTML = '[expand]';
	}
}, false);

/* Add handler to disable dragging while interacting with legend */
// Disable dragging when user's cursor enters the element
legend.getContainer().addEventListener('mouseover', function () {
	map.dragging.disable();
	map.scrollWheelZoom.disable();
});

// Re-enable dragging when user's cursor leaves the element
legend.getContainer().addEventListener('mouseout', function () {
	map.dragging.enable();
	map.scrollWheelZoom.enable();
});

/* Handle our scroll buttons */
var scrollup = document.getElementById("legend-scrollup");
var scrolldown = document.getElementById("legend-scrolldown");

scrollup.addEventListener('click', function() { 
    document.getElementById("legend-info").scrollTop -= 100;
}, false);

scrolldown.addEventListener('click', function() {
    document.getElementById("legend-info").scrollTop += 100;
}, false);
