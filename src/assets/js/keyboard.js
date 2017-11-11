const brand = navigator.userAgent.indexOf('Android')
if (brand > -1) {
  const maxHeight = document.body.clientHeight
  window.addEventListener('resize', function () {
    const presentHeight = document.body.clientHeight
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
      if (presentHeight < maxHeight) {
        document.getElementById('footer').style.display = 'none'
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
          document.scrollIntoView(true)
        }, 20)
      } else {
        document.getElementById('footer').style.display = 'flex'
      }
    }
  })
}
