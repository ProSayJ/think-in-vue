/*实例化vue对象*/
new Vue({
    el: "#vue-app",
    data: {
        name: "ProSayJ",
        age: 31,
        x: 0,
        y: 0
    },
    methods: {
        add: function (inc) {
            //console.log("==>>>>" + inc);
            this.age += inc;
        },
        subtract: function (dec) {
            //console.log("==>>>>" + des);
            this.age -= dec;
        },
        updateXY: function (event) {
            //console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMoving: function (event) {
            event.stopPropagation();
        },
        alert: function () {
            alert("hello world");
        }
    }
});
/**
 * el:element 需要获取的元素，一定是html中的根容器元素。通过vue容器对Dom进行操作
 * data:用于数据存储。本质上是个对象。存储 k-v。
 * methods:用于存储各种方法。
 * data-binding:给属性绑定对应的直。
 * */
