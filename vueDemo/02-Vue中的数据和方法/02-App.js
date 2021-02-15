/*实例化vue对象*/
new Vue({
    el: "#vue-app",
    data: {
        name: "ProSayJ",
        job: "软件开发工程师",
    },
    methods: {
        helloWorld: function (time) {
            /*方法中使用对应的数据使用this.*/
            return time + "好：" + " " + this.name;
        }
    }
});
/**
 * el:element 需要获取的元素，一定是html中的根容器元素。通过vue容器对Dom进行操作
 * data:用于数据存储。本质上是个对象。存储 k-v。
 * methods:用于存储各种方法
 * */
