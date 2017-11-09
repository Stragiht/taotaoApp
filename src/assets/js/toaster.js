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
        template: ' <div class="error-tip-warp" v-if="show" >\n' +
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
          show: false,
          mesage: mesage,
          deep: deep || 0,
          time: time || 1500
        },
        template: ' <div class="success-tips-warp" >\n' +
        '                  <div class="success-bg"></div>\n' +
        '                 <transition name="fadeinfor">\n' +
        '                     <div class="success-tips"  v-if="show"><span>{{mesage}}</span></div>\n' +
        '                 </transition>\n' +
        '                  </div>\n' +
        '               </div>',
        mounted () {
          setTimeout(() => {
            this.show = true
          }, 20)
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
  },
  Alert (option,callback) {
    let promise = new Promise(function (resolve) {
      let MyModal = Vue.extend({})
      let modal = new MyModal({
            data: {
              show: false,
              title: option.title ? option.title : '温馨提示',
              message: option.message ? option.message : '操作不正确',
              deep: option.deep ? option.deep : 0,
              time: option.time ? option.time : 2000
            },
            template: '<div class="alert">\n' +
            '                <transition name="fadeAlert">\n' +
            '                    <div class="content" v-if="show">\n' +
            '                        <p class="title">{{title}}</p>\n' +
            '                        <p class="infor-text border-1px">\n' +
            '                            {{message}}\n' +
            '                        </p>\n' +
            '                        <p class="ok" @click="shutModal">\n' +
            '                            确定\n' +
            '                        </p>\n' +
            '                    </div>\n' +
            '                </transition>\n' +
            '            </div>',
            mounted () {
              setTimeout(() => {
                this.show = true
              }, 20)
            },
            methods: {
              shutModal () {
                if(typeof callback ==='function'){
                  callback();
                }
                this.show = false
              }
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
