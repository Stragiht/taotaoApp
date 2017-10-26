
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
export default {
  userPower,
  css,
  inputFocus
}
