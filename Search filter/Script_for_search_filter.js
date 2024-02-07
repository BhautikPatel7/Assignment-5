$(document).ready(function () {
    $(function () {
        var availableTags = [
            "India",
            "Germany",
            "Japan",
            "Brazil",
            "Canada",
            "United Kingdom",
            "Italy",
            "France",
            "South Korea",
            "Australia",
            "Russia",
            "Mexico",
            "China",
            "Spain",
            "Indonesia",
            "Nigeria",
            "Saudi Arabia",
            "Turkey",
            "Egypt",
            "Vietnam",
            "Iran",
            "Philippines",
            "Thailand",
            "Poland",
            "Argentina",
            "Ukraine",
            "South Africa",
            "Colombia",
            "Netherlands",
            "Bangladesh"
        ];
        $("#textbox").autocomplete({
            source: availableTags
        });
    });

});