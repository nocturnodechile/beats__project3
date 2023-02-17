let myMap;

const init = () => {
	myMap = new ymaps.Map("map", {
		center: [55.750880, 37.592199],
		zoom: 14,
		controls: []
	});

	const coords = [
		[55.742139, 37.581747],
		[55.749043, 37.598960],
		[55.758734, 37.582817],
		[55.758734, 37.612138],
	];

	const myCollection = new ymaps.GeoObjectCollection({}, {
		draggable: false,
		iconLayout: 'default#image',
		iconImageHref: './img/marker.svg',
		iconImageSize: [58, 73],
		iconImageOffset: [-29, -73]
		});

		coords.forEach(coord => {
		myCollection.add(new ymaps.Placemark(coord));
		})
		
		myMap.geoObjects.add(myCollection);

		myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);