
const userPower = {
  bind: function (el, binding) {
   //  el.style.color = binding.value.color
   // el.style.fontSize = '20px'
    console.log(binding)
    if (binding.value === 10001) {
      el.style.display = 'none'
    }
  }
}
const inputFocus = {
  bind: function (el, binding) {
    el.onfocus = function () {
      el.style.borderBottom = '1px solid red'
    }
    el.onblur = function () {
      el.style.borderBottom = '1px solid #e9f1f6'
    }
  }
}

const css = {
  // 钩子函数 ,el就是当前元素存在即调用
  inserted (el, binding) {
    // el绑定的元素本身
    // binding就是css指令里面的的对象元素
    let styleobj = binding.value
    let arr = []
    for (let key in styleobj) {
      arr.push(key + ':' + styleobj[key])
    }
    arr = arr.join(';')
    el.style.cssText = arr
  },
  bind (el, binding) {
    // 指令绑定在元素上时候执行，只执行一次
  }
}
const setmoney ={
  inserted (el, binding) {
    el.onkeyup =function () {
      if(el.value !==''&& el.value.substr(0,1) === '.'){
        el.value="";
      }
      el.value = el.value.replace(/^0*(0\.|[1-9])/, '$1');//解决 粘贴不生效
      el.value = el.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
      el.value = el.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
      el.value = el.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
      el.value = el.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
      if(el.value.indexOf(".")< 0 && el.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        if(el.value.substr(0,1) == '0' && el.value.length === 2){
          obj.value= obj.value.substr(1,obj.value.length);
        }
      }
    }


  }
}
export default {
  userPower,
  css,
  inputFocus,
  setmoney
}
