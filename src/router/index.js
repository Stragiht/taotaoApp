import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Common = (resolve) => {
  import('@/components/Common').then((module) => {
    resolve(module)
  })
}
const MyInfor = (resolve) => {
  import('@/my/myInfor').then((module) => {
    resolve(module)
  })
}

const ReceiveMoney = (resolve) => {
  import('@/my/ReceiveMoney').then((module) => {
    resolve(module)
  })
}
const ComWallet = (resolve) => {
  import('@/my/ComWallet').then((module) => {
    resolve(module)
  })
}

const SetAmmount = (resolve) => {
  import('@/my/setAmmount').then((module) => {
    resolve(module)
  })
}
// 企业钱包余额
const WalletBalance = (resolve) => {
  import('@/my/WalletBalance').then((module) => {
    resolve(module)
  })
}
const IncomeExpenditure = (resolve) => {
  import('@/my/incomeExpenditure').then((module) => {
    resolve(module)
  })
}
// 银行列表
const bankList = (resolve) => {
  import('@/my/bankList').then((module) => {
    resolve(module)
  })
}
// 绑定银行卡
const AddBank = (resolve) => {
  import('@/my/addBank').then((module) => {
    resolve(module)
  })
}

// 绑定银行卡
const ChangePhone = (resolve) => {
  import('@/my/changePhone').then((module) => {
    resolve(module)
  })
}
// 提现
const Withdraw = (resolve) => {
  import('@/my/withdraw').then((module) => {
    resolve(module)
  })
}
// 提现
const Setting = (resolve) => {
  import('@/system/setting').then((module) => {
    resolve(module)
  })
}
// 登录
const Login = (resolve) => {
  import('@/system/login').then((module) => {
    resolve(module)
  })
}
// 忘记密码
const ForgetPsw = (resolve) => {
  import('@/system/forgetPsw').then((module) => {
    resolve(module)
  })
}
// 修改密码
const ChangePsw = (resolve) => {
  import('@/system/changePsw').then((module) => {
    resolve(module)
  })
}
// 重置密码
const ResetPsw = (resolve) => {
  import('@/system/resetPsw').then((module) => {
    resolve(module)
  })
}
// 安全中心
const SafeCenter = (resolve) => {
  import('@/system/safeCenter').then((module) => {
    resolve(module)
  })
}
// 修改手机号
const CheckId = (resolve) => {
  import('@/system/checkId').then((module) => {
    resolve(module)
  })
}
// 设置新手机号
const SetNewPhone = (resolve) => {
  import('@/system/setNewPhone').then((module) => {
    resolve(module)
  })
}
// 退出
const LoginOut = (resolve) => {
  import('@/system/loginOut').then((module) => {
    resolve(module)
  })
}
// 意见反馈
const Suggestion = (resolve) => {
  import('@/system/suggestion').then((module) => {
    resolve(module)
  })
}
// 消息中心
const MessageList = (resolve) => {
  import('@/message/messageList').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/my/myInfor'
    },
    {
      path: '/common',
      component: Common,
      children: [
        {
          path: '/my/myInfor',
          component: MyInfor,
          name: '我的'
        },
        {
          path: '/my/receiveMoney',
          component: ReceiveMoney,
          name: '收钱'
        },
        {
          path: '/my/ComWallet',
          component: ComWallet,
          name: '钱包列表'
        },
        {
          path: '/my/setAmmount',
          component: SetAmmount,
          name: '设置金额'
        },
        {
          path: '/my/walletBalance',
          component: WalletBalance,
          name: '企业钱包'
        },
        {
          path: '/my/incomeExpenditure',
          component: IncomeExpenditure,
          name: '收支明细'
        },
        {
          path: '/my/bankList',
          component: bankList,
          name: '银行列表'
        },
        {
          path: '/my/addBank',
          component: AddBank,
          name: '绑定银行卡'
        },
        {
          path: '/my/changePhone',
          component: ChangePhone,
          name: '更换验证手机-提现'
        },
        {
          path: '/my/withdraw',
          component: Withdraw,
          name: '提现'
        },
        {
          path: '/system/setting',
          component: Setting,
          name: '设置'
        },
        {
          path: '/system/login',
          component: Login,
          name: '登录'
        },
        {
          path: '/system/forgetPsw',
          component: ForgetPsw,
          name: '忘记密码'
        },
        {
          path: '/system/changePsw',
          component: ChangePsw,
          name: '修改密码'
        },
        {
          path: '/system/safeCenter',
          component: SafeCenter,
          name: '安全中心'
        },
        {
          path: '/system/resetPsw',
          component: ResetPsw,
          name: '重置密码'
        },
        {
          path: '/system/checkId',
          component: CheckId,
          name: '验证身份'
        },
        {
          path: '/system/setNewPhone',
          component: SetNewPhone,
          name: '设置新手机'
        },
        {
          path: '/system/loginOut',
          component: LoginOut,
          name: '退出账号'
        },
        {
          path: '/system/suggestion',
          component: Suggestion,
          name: '意见反馈'
        },
        {
          path: '/message/messageList',
          component: MessageList,
          name: '消息中心'
        }
      ]
    }
  ]
})
