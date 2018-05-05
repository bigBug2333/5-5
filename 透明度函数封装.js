function animate(element, obj, fn) {
    //开启定时器,先清除
    clearInterval(element.timeId);
    //假设所有人的动画都完成

    element.timeId = setInterval(function () {
      var flag = true;

      for (var k in obj) {
        var attr = k; 
        var target = obj[k];
        if (attr === "opacity") {

          var current = window.getComputedStyle(element)[attr];
          current = parseFloat(current);
          //让current和target都扩大1000倍
          current = current * 1000;
          target = target * 1000;

          //2. 计算step, 保证step最少都是1px
          var step = (target - current) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);

          //3. 在current的基础上增加step
          current += step;

          //设置透明度的时候，缩小1000倍
          element.style[attr] = current/1000;

          //4. 如果到达了终点，需要清除定时器
          if (current != target) {
            flag = false;
          }


        } else {
          //1. 获取元素当前样式
          var current = window.getComputedStyle(element)[attr];
          current = parseInt(current);

          //2. 计算step, 保证step最少都是1px
          var step = (target - current) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);

          //3. 在current的基础上增加step
          current += step;
          element.style[attr] = current + "px";

          //4. 如果到达了终点，需要清除定时器
          if (current != target) {
            flag = false;
          }
        }
      }
      if (flag) {
        clearInterval(element.timeId);
        fn && fn();//fn存在，才调用fn
      }

    }, 15);
}
}