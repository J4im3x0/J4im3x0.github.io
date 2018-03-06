var writeLine = function (target, beforeMessage, message, interval, element, index) {
    if (index == null) index = 0;
    if (index < message.length) {
        var div = document.querySelector(target);
        var count = countElements(div);
        var element = element != null ? element : document.createElement("div");
        element.setAttribute("id", "line" + (count));
        var m = (message[index] == " ") ? message[index] + message[index += 1] : message[index];
        element.innerText += (index == 0) ? beforeMessage + m : m;
        div.appendChild(element);
        setTimeout(function () {
            writeLine(target, beforeMessage, message, interval, element, index + 1);
        }, interval);
    }
}
var writeArray = function (target, beforeMessage, message, interval) {
    var previousTime = 0;
    message.forEach(function (value, key) {
          setTimeout(function () {
              writeLine(target, beforeMessage, value, interval);
          }, previousTime);
          previousTime += value.length * interval;
    });
}

var countElements = function (parent, getChildrensChildren) {
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for (var i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType != 3) {
            if (getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i], true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}

var monArray = [
    "Welcome to Jaimexo.me",
    "Twitter: @J4im3x0",
];

writeArray(".text", "root@jaimexo.me:~# ", monArray, 40);
