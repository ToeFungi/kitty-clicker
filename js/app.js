let counter, milkAdd, stringAdd, catnipAdd, isPulsing;

$(".cat img").click(addToCounter);

init();

function init() {
	counter = 0;
	milkAdd = 0;
	stringAdd = 0;
	catnipAdd = 0;
	isPulsing = false;
}

function addToCounter(value) {
	value && Number.isInteger(value) ? counter += value : counter++;
	$(".counter").html(counter);
	if (!isPulsing) {
		isPulsing = true;
		pulse();
	}
}

function removeFromCounter(value) {
	counter = counter - value;
	$(".counter").html(counter);
}

function addPower(evt) {
	let cost = evt.attributes.price.value;
	let type = evt.attributes.power.value;

	if (counter < cost) return false;
	removeFromCounter(cost);
	
	switch (type) {
		case 'milk':
			if (milkAdd === 0) initInterval(milkAdd);	
			milkAdd += 1;
			break;
		case 'string':
			if (stringAdd === 0) initInterval(stringAdd);
			stringAdd += 25;
			break;
		case 'catnip':
			if (catnipAdd === 0) initInterval(catnipAdd);
			catnipAdd += 100;
			break;
		default:
			return false;
	}
}

function initInterval(type) {
	setInterval(() => {
		addToCounter(this.milkAdd);
	}, 1000);
}

function pulse(back) {
	$(".cat img").animate({
        width: (back) ? $(".cat img").width() + 20 : $(".cat img").width() - 20            
    }, 700);

	$('.cat').animate({          
        'font-size': (back) ? '100px' : '140px',
    }, 700, function() {
    	pulse(!back)
    });
}