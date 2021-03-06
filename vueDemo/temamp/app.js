//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        name: "ProSayJ",
        age: 31,
        job: "软件开发工程师",
        website: "http://www.baidu.com",
        wabsiteTag: "<a href='http://www.baidu.com' target='_blank'>百度一下</a>",
        x: 0,
        y: 0,
        userName: "",
        userName2: "",
        a: 0,
        b: 0,
        changeColor: false,
        changeLength: false
    },
    methods: {
        helloWorld: function (time) {
            return time + "好：" + " " + this.name;
        },
        add: function (inc) {
            //console.log("==>>>>" + inc);
            if (inc != null) {
                this.age += inc;
            } else {
                this.age++;
            }
        },

        subtract: function (dec) {
            //console.log("==>>>>" + des);
            if (dec != null) {
                this.age -= dec;
            } else {
                this.age--;
            }
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
        },
        alertMsg: function () {
            alert("你正在输入信息");
        },
        userNameBind: function () {
            this.userName = this.$refs.userName.value;
        },
        addToA: function () {
            console.log("addToA 执行");
            return this.a + this.age;
        },
        addToB: function () {
            console.log("addToB 执行");
            return this.b + this.age;
        }
    },
    computed: {
        addToA_C: function () {
            console.log("Computed addToA 执行");
            return this.a + this.age;
        },
        addToB_C: function () {
            console.log("Computed addToB 执行");
            return this.b + this.age;
        },
        compClasses: function () {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});
/**
 * el:element 需要获取的元素，一定是html中的根容器元素
 * data:用于数据存储
 * methods:用于存储各种方法
 * data-binding:给属性绑定对应的直
 * */
