export default class Popup {
    constructor() {
        this.init();
    }

    init() {
        /* myLib */
        (function () {
            window.myLib = {};

            window.myLib.body = document.querySelector("body");

            window.myLib.closestAttr = function (item, attr) {
                var node = item;

                while (node) {
                    var attrValue = node.getAttribute(attr);
                    if (attrValue) {
                        return attrValue;
                    }

                    node = node.parentElement;
                }

                return null;
            };

            window.myLib.closestItemByClass = function (item, className) {
                var node = item;

                while (node) {
                    if (node.classList.contains(className)) {
                        return node;
                    }

                    node = node.parentElement;
                }

                return null;
            };

            window.myLib.toggleScroll = function () {
                myLib.body.classList.toggle("no-scroll");
            };
        })();

        /* myLib */
        /* popup */
        (function () {
            var showPopup = function (target) {
                target.classList.add("is-active");
            };

            var closePopup = function (target) {
                target.classList.remove("is-active");
            };

            myLib.body.addEventListener("click", function (e) {
                var target = e.target;
                var popupClass = myLib.closestAttr(target, "data-popup");

                if (popupClass === null) {
                    return;
                }

                e.preventDefault();
                var popup = document.querySelector("." + popupClass);

                if (popup) {
                    showPopup(popup);
                    myLib.toggleScroll();
                }
            });

            myLib.body.addEventListener("click", function (e) {
                var target = e.target;

                if (target.classList.contains("popup-close") || target.classList.contains("popup__inner")) {
                    var popup = myLib.closestItemByClass(target, "popup");

                    closePopup(popup);
                    myLib.toggleScroll();
                }
            });

            myLib.body.addEventListener("keydown", function (e) {
                if (e.keyCode !== 27) {
                    return;
                }

                var popup = document.querySelector(".popup.is-active");

                if (popup) {
                    closePopup(popup);
                    myLib.toggleScroll();
                }
            });
        })();
        /* popup */
    }
}
