var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_3, 
                style: style_building_3,
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_building_2.setVisible(true);lyr_building_3.setVisible(true);lyr_highway_4.setVisible(true);lyr_highway_5.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_building_2,lyr_building_3,lyr_highway_4,lyr_highway_5];
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'building:part': 'building:part', });
lyr_building_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tourism': 'tourism', 'addr:street': 'addr:street', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'waterway': 'waterway', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'location': 'location', 'gas_insulated': 'gas_insulated', 'frequency': 'frequency', 'branch': 'branch', 'building:levels': 'building:levels', 'name:ru': 'name:ru', 'amenity': 'amenity', 'shop': 'shop', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ford': 'ford', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'crossing': 'crossing', 'name:ru': 'name:ru', 'name': 'name', 'motorcar': 'motorcar', 'foot': 'foot', 'bicycle': 'bicycle', 'railway': 'railway', 'tower:type': 'tower:type', 'power': 'power', 'material': 'material', 'barrier': 'barrier', 'access': 'access', });
lyr_highway_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'description': 'description', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'oneway': 'oneway', 'tunnel': 'tunnel', 'man_made': 'man_made', 'smoothness': 'smoothness', 'railway': 'railway', 'ref': 'ref', 'old_ref': 'old_ref', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'lanes': 'lanes', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', 'service': 'service', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:postcode': '', 'addr:city': '', 'building:part': '', });
lyr_building_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tourism': '', 'addr:street': '', 'religion': '', 'training': '', 'sport': '', 'leisure': '', 'waterway': '', 'voltage': '', 'substation': '', 'power': '', 'operator': '', 'location': '', 'gas_insulated': '', 'frequency': '', 'branch': '', 'building:levels': '', 'name:ru': '', 'amenity': '', 'shop': '', 'type': '', 'name': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'address': '', });
lyr_highway_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'ford': '', 'bench': '', 'public_transport': '', 'bus': '', 'crossing': '', 'name:ru': '', 'name': '', 'motorcar': '', 'foot': '', 'bicycle': '', 'railway': '', 'tower:type': '', 'power': '', 'material': '', 'barrier': '', 'access': '', });
lyr_highway_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tracktype': '', 'description': '', 'footway': '', 'ford': '', 'depth': '', 'oneway': '', 'tunnel': '', 'man_made': '', 'smoothness': '', 'railway': '', 'ref': '', 'old_ref': '', 'name:etymology:wikidata': '', 'name': '', 'lanes': '', 'bicycle': '', 'access': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', 'service': '', 'surface': '', 'layer': '', 'bridge': '', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'building:part': 'no label', });
lyr_building_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'waterway': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'location': 'no label', 'gas_insulated': 'no label', 'frequency': 'no label', 'branch': 'no label', 'building:levels': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'shop': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ford': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'crossing': 'no label', 'name:ru': 'no label', 'name': 'no label', 'motorcar': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'railway': 'no label', 'tower:type': 'no label', 'power': 'no label', 'material': 'no label', 'barrier': 'no label', 'access': 'no label', });
lyr_highway_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'description': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'oneway': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'lanes': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', 'service': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', });
lyr_highway_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});