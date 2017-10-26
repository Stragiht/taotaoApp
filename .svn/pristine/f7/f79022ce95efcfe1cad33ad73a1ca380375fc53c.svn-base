export default {
  checkPhone (str) {
    let pattern = /0?(13|14|15|18)[0-9]{9}/
    return pattern.test(str)
  },
  checkInteger (str) {
    let pattern = /[1-9]\d*/
    return pattern.test(str)
  },
  checkPersonId (str) {
    let pattern = /\d{17}[\d|x]|\d{15}/
    return pattern.test(str)
  },
  checkEmail (str) {
    let pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
    return pattern.test(str)
  },
  getUUID () {
    function S4 () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() +
      S4() + S4())
  },
  checkPrice (str) {
    let pattern = /^(\d|[1-9]\d*){1}(\.\d{1,2})?$/
    return pattern.test(str)
  },
  // 并集 a[1,2,3], b [1,2,5,4] 结果 a[1,2,3], b [1,2,5,4]
  getArrUnionSet  (arr1, arr2) {
    let a = new Set(arr1)
    let b = new Set(arr2)
    let unionSet = new Set([...a, ...b])
    return Array.from(unionSet)
  },
  // 交集 a[1,2,3], b [1,2,5,4] 结果  [1, 2]
  getArrIntersection (arr1, arr2) {
    let a = new Set(arr1)
    let b = new Set(arr2)
    let intersectionSet = new Set([...a].filter(x => b.has(x)))
    return Array.from(intersectionSet)
  },
  // 差集 a[1,2,3], b [1,2,5,4]  结果 [5, 4]
  getArrDiffSet (arr1, arr2) {
    let a = new Set(arr1)
    let b = new Set(arr2)
    let differenceABSet = new Set([...b].filter(x => !a.has(x)))
    return Array.from(differenceABSet)
  },
  // 非空字符串
  isNotEmptyStr (str) {
    return str !== undefined && str !== null &&
      ((str + '').replace(/(^\s+)|(\s+$)/g, '')) !== ''
  },
  // 空字符串
  isEmptyStr (str) {
    return !this.isNotEmptyStr(str)
  },
  // 判断是否是数字
  isNumber (str) {
    return this.isNotEmptyStr(str) && isNaN(str) === false
  },
  // 移动端分页  current_page 当前页，page_count 每页数量 total 总数量
  bulidPage (data) {
    if (this.isNotEmptyStr(data) && data.data.length > 0) {
      return (data.current_page - 1) * data.page_count + data.data.length < data.total
    }
    return false
  },
  isNotEmptyObject (obj) {
    for (let t in obj) {
      return true
    }
    return false
  },
  isEmptyObject (obj) {
    return !this.isNotEmptyObject(obj)
  }
}
