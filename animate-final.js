/**
 * Created by HUCC on 2018/5/2.
 */
function animate(element, obj, fn) {
    //寮€鍚畾鏃跺櫒,鍏堟竻闄�
    clearInterval(element.timeId);
    //鍋囪鎵€鏈変汉鐨勫姩鐢婚兘瀹屾垚
  
    element.timeId = setInterval(function () {
      var flag = true;
  
      for (var k in obj) {
        var attr = k;
        var target = obj[k];
        if(attr === "zIndex") {
          //澶勭悊zIndex
          element.style.zIndex = target;
        } else if (attr === "opacity") {
  
          //1. 鑾峰彇鍒板綋鍓嶇殑opacity
          var current = window.getComputedStyle(element).opacity;
  
          //闇€瑕佹妸target鍜宑urrent鎵╁ぇ1000鍊�
          current *= 1000;
          target *= 1000;
  
          //2. 璁＄畻step
          var step = (target - current) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
  
          //3. 鍦ㄥ師鏉ョ殑鍩虹涓婂姞涓妔tep
          current += step;
          element.style.opacity = current/1000;
  
          //4. 濡傛灉娌″埌缁堢偣锛岄渶瑕佹妸flag鏀规垚false
          if(target != current) {
            flag = false;
          }
  
        } else {
          //1. 鑾峰彇鍏冪礌褰撳墠鏍峰紡
          var current = window.getComputedStyle(element)[attr];
          current = parseInt(current);
  
          //2. 璁＄畻step, 淇濊瘉step鏈€灏戦兘鏄�1px
          var step = (target - current) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
  
          //3. 鍦╟urrent鐨勫熀纭€涓婂鍔爏tep
          current += step;
          element.style[attr] = current + "px";
  
          //4. 濡傛灉鍒拌揪浜嗙粓鐐癸紝闇€瑕佹竻闄ゅ畾鏃跺櫒
          if (current != target) {
            flag = false;
          }
        }
      }
      if (flag) {
        clearInterval(element.timeId);
        fn && fn();//fn瀛樺湪锛屾墠璋冪敤fn
      }
  
    }, 15);
  }