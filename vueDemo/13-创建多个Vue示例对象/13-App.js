/*实例化vue对象*/
var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "app one的内容"
    },
    methods: {},
    computed: {
        greet: function () {
            return "hello app one"
        }
    }
});
var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "app two的内容"
    },
    methods: {
        changeTitle: function () {
            one.title = "已经改名称了";
        }
    },
    computed: {
        greet: function () {
            return "hello app two"
        }
    }
});

two.title = "app2的title也发生变化了";
/**
 * el:element 需要获取的元素，一定是html中的根容器元素。通过vue容器对Dom进行操作
 * data:用于数据存储。本质上是个对象。存储 k-v。
 * methods:用于存储各种方法。
 * data-binding:给属性绑定对应的直。
 * */
