var GrayScale = new function() {

    this.debug = false;

    this.method = "luminosity";
    this.METHODS = ["luminosity","average","lightness"];
    this.executeMethod = function(r,g,b) {
        if (this.METHODS.indexOf(this.method) == -1) { throw "Invalid method: '"+this.method+"'"; }
        switch (this.method) {
            case "luminosity":
                return parseInt(r * 0.21 + g * 0.72 + b * 0.07);
                break;
            case "average":
                return parseInt((r + g + b) / 3);
                break;
            case "lightness":
                return parseInt((Math.max(r, g, b) + Math.min(r, g, b)) / 2);
                break;
        }
    }

    this.propertyToGrayScale = function(element, css_attribute) {
        if (window.getComputedStyle) {
            var compStyle = window.getComputedStyle (element, null);
            var value = compStyle.getPropertyCSSValue(css_attribute).cssText;
            if (value.match(/rgb[^a]/) == null) return;
            var colors = value.match(/rgb\((\d+),\s?(\d+),\s?(\d+)\)/gi);
            for (var i = 0, len = colors.length; i < len; i++) {
                var aux = {}
                aux["rgb"] = colors[i];
                var components = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/i.exec(aux["rgb"]);
                aux["r"] = parseFloat(components[1]);
                aux["g"] = parseFloat(components[2]);
                aux["b"] = parseFloat(components[3]);
                colors[i] = aux;
            }

            for (var i = 0, len = colors.length; i < len; i++) {
                var color = colors[i];
                var r = parseFloat(color["r"]);
                var g = parseFloat(color["g"]);
                var b = parseFloat(color["b"]);
                var gray = this.executeMethod(r,g,b);
                value = value.replace(color["rgb"], color["rgb"].replace(/(\d+)/g,gray));
            }
            element.style.cssText = element.style.cssText+ css_attribute + ":" + value + "!important;";
        } else {
            throw "Your browser does not support the getComputedStyle method, therefore it can't use this extension.";
        }
    }

    this.applyGrayScaleToProperties = function(element) {
        this.propertyToGrayScale(element,"color");
        this.propertyToGrayScale(element,"background-color");
        this.propertyToGrayScale(element,"background-image");
        this.propertyToGrayScale(element,"border-top-color");
        this.propertyToGrayScale(element,"border-right-color");
        this.propertyToGrayScale(element,"border-bottom-color");
        this.propertyToGrayScale(element,"border-left-color");
    }

    this.elementToGrayScale = function(element) {
        try {
            if (this.debug) {
              var time = Date.now();
            }
            var children = [element];
            for (var i = 0, len = 1; i < len; i++) {
                var child = children[i];
                this.applyGrayScaleToProperties(child);
                children = children.concat(Array.prototype.slice.call(child.children));
                len += child.children.length;
            }
            if (this.debug) {
              console.log("Time elapsed: " + (Date.now() - time)/1000 + " seconds");
            }
        } catch (e) {
            alert(e);
        }
    }
}

