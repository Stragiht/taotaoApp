import Vue from 'vue'
import Router from 'vue-router'
import Http from './../api/login.class'
import Fn from './../api/function.class'
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
// 充值
const Recharge = (resolve) => {
  import('@/my/recharge').then((module) => {
    resolve(module)
  })
}
// 充值
const Login = (resolve) => {
  import('@/system/login').then((module) => {
    resolve(module)
  })
}
const router = new Router({
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
          path: '/my/recharge',
          component: Recharge,
          name: '充值'
        },
        {
          path: '/system/login',
          component: Login,
          name: '登录'
        }
      ]
    }
  ]
})
//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {

  next()
})
export default router