cc.Class({
    extends: cc.Component,

    properties: {
        damage : 2,
        health : 100,
        lastTime : "",
        Type: ""
    }, 

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: '你好，世界！'
    },

    // use this for initialization
    onLoad: function () {
        // this.label.string = this.text;
        this.testA();


        this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            console.log('Mouse down');
        });
    },

    // called every frame
    update: function (dt) {

    },

    onTextClicked: function(event, customEventData) {
        var node  = event.target;
        var button = node.getComponent(cc.Button);
        cc.log("aaaaa", customEventData);
    },



    testA: function() {
        console.log("sssss");
    }

});
