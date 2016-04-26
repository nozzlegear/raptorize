/// <reference path="./typings/browser.d.ts" />
var Raptorize = (function () {
    function Raptorize(element) {
        this.element = element;
        this.locked = false;
        if (!element) {
            throw "You must pass a click-triggering element to Raptorize constructor.";
        }
        element.addEventListener("click", this.fire.bind(this));
        this.createElements();
        this.raptorImage = document.getElementById("raptor-image");
        this.raptorAudio = document.getElementById("raptor-audio");
    }
    Raptorize.prototype.createElements = function () {
        var image = document.createElement("img");
        image.id = "raptor-image";
        image.style.display = "none";
        image.style.position = "fixed";
        image.style.bottom = "-700px";
        image.style.right = "0";
        image.src = "https://cdn.rawgit.com/nozzlegear/raptorize/master/raptor.png";
        var audio = document.createElement("audio");
        audio.id = "raptor-audio";
        audio.preload = "auto";
        var mp3 = document.createElement("source");
        mp3.src = "https://cdn.rawgit.com/nozzlegear/raptorize/master/raptor-sound.mp3";
        var ogg = document.createElement("source");
        ogg.src = "https://cdn.rawgit.com/nozzlegear/raptorize/master/raptor-sound.ogg";
        audio.appendChild(mp3);
        audio.appendChild(ogg);
        document.body.appendChild(image);
        document.body.appendChild(audio);
    };
    Raptorize.prototype.fire = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.locked) {
            return;
        }
        this.locked = true;
        this.raptorAudio.play();
        var raptor = $('#elRaptor').css({
            "position": "fixed",
            "bottom": "-700px",
            "right": "0",
            "display": "block"
        });
        raptor.animate({
            "bottom": "0"
        }, function () {
            raptor.animate({
                "bottom": "-130px"
            }, 100, function () {
                var offset = ((raptor.position().left) + 400);
                raptor.delay(300).animate({
                    "right": offset
                }, 2200, function () {
                    raptor = $('#elRaptor').css({
                        "bottom": "-700px",
                        "right": "0"
                    });
                    _this.locked = false;
                });
            });
        });
    };
    return Raptorize;
}());
