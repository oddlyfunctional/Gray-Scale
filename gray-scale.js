function toGrayScale(element, css_attribute) {
    if (window.getComputedStyle) {
        var compStyle = window.getComputedStyle (element, null);
        try {
            var value = compStyle.getPropertyCSSValue(css_attribute).cssText;
            if (value.match(/rgb/) == null) return;
            if (css_attribute == "background-image") {
                var colors = value.match(/rgb\((\d+),(?: )(\d+),(?: )(\d+)\)/gi);
                for (var i = 0; i < colors.length; i++) {
                    var aux = {}
                    aux["rgb"] = colors[i];
                    var components = /rgb\((\d+),(?: )(\d+),(?: )(\d+)\)/i.exec(aux["rgb"]);
                    aux["r"] = parseFloat(components[1]);
                    aux["g"] = parseFloat(components[2]);
                    aux["b"] = parseFloat(components[3]);
                    colors[i] = aux;
                }
            } else {
                var colors = /rgb\((\d+),(?: )(\d+),(?: )(\d+)\)/i.exec(value);
                var aux = {}
                aux["rgb"] = colors[0];
                aux["r"] = parseFloat(colors[1]);
                aux["g"] = parseFloat(colors[2]);
                aux["b"] = parseFloat(colors[3]);
                colors = [aux];
            }

            for (var i = 0; i < colors.length; i++) {
                var color = colors[i];
                var r = parseFloat(color["r"]);
                var g = parseFloat(color["g"]);
                var b = parseFloat(color["b"]);
                var gray = parseInt(r * 0.21 + g * 0.72 + b * 0.07);
                value = value.replace(color["rgb"], color["rgb"].replace(/(\d+)/g,gray));
            }
            element.style.cssText = css_attribute + ":" + value + "!important";

        } catch (e) {
            console.log(e);
        }
    } else {
        alert ("Your browser does not support the getComputedStyle method, therefore it can't use this extension.");
    }
}

function elementToGrayScale(element) {
    toGrayScale(element,"color");
    toGrayScale(element,"background-color");
    toGrayScale(element,"background-image");
    for (var i = 0; i < element.children.length; i++) {
        var child = element.children[i];
        elementToGrayScale(child);
    }
}

