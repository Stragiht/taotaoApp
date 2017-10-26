import Vue from 'vue'
export default {
  Message (mesage, deep) {
    let promise = new Promise(function (resolve) {
      let MyModal = Vue.extend({})
      let modal = new MyModal({
        data: {
          show: true,
          mesage: mesage,
          deep: deep || 0
        },
        template: ' <div class="error-tip-warp" :style="{ display: show ? \'block\' : \'none\' }" >\n' +
        '            <div class="err-bg"></div>\n' +
        '            <div class="errot-tip-content">\n' +
        '                <div class="err-describe">\n' +
        '                    <span>{{mesage}}</span>\n' +
        '                </div>\n' +
        '                <div class="error-btn-ok" @click="ok">好</div>\n' +
        '            </div>\n' +
        '        </div>',
        methods: {
          ok: function () {
            resolve(this.mesage)
            this.show = false
          }
        },
        watch: {
          'show': function (val) {
            console.log(val)
            if (val === false) {
              this.$destroy()
              document.getElementById('app').removeChild(this.$el)
            }
          }
        }
      })
      // 或者，在文档之外渲染并且随后挂载
      let component = modal.$mount()
      document.getElementById('app').appendChild(component.$el)
    })
    return promise
  },
  Toaster (mesage, time, deep) {
    let promise = new Promise(function (resolve) {
      let MyModal = Vue.extend({})
      let modal = new MyModal({
        data: {
          show: true,
          mesage: mesage,
          deep: deep || 0,
          time: time || 2000
        },
        template: ' <div class="success-tips-warp" :style="{ display: show ? \'block\' : \'none\' }" >\n' +
        '            <div class="success-bg"></div>\n' +
        '            <div class="success-tips"><span>{{mesage}}</span></div>\n' +
        '        </div>',
        mounted () {
          setTimeout(() => {
            this.show = false
          }, this.time)
        },
        watch: {
          'show': function (val) {
            if (val === false) {
              this.$destroy()
              document.getElementById('app').removeChild(this.$el)
            }
          }
        }
      })
      // 或者，在文档之外渲染并且随后挂载
      let component = modal.$mount()
      document.getElementById('app').appendChild(component.$el)
    })
    return promise
  }
}
