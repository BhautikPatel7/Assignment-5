var range = document.getElementById('range');

noUiSlider.create(range, {
    start: [20, 80], // Handle start position
    step: 10, // Slider moves in increments of '10'
    margin: 20, // Handles must be more than '20' apart
    connect: true, // Display a colored bar between the handles
    direction: 'ltr', // Put '0' at the left of the slider
    orientation: 'horizontal', // Orient the slider horizontally
    behaviour: 'tap-drag', // Move handle on tap, bar is draggable
    range: { // Slider can select '0' to '100'
        'min': 0,
        'max': 100
    }
});

var valueInput = document.getElementById('value-input'),
    valueSpan = document.getElementById('value-span');

// When the slider value changes, update the input and span
range.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        valueInput.value = values[handle];
    } else {
        valueSpan.innerHTML = values[handle];
    }
});

// When the input changes, set the slider value
valueInput.addEventListener('change', function () {
    range.noUiSlider.set([null, this.value]);
});