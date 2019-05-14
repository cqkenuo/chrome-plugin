(function () {
  window.onload = function () {
    // 判断必须是在知乎问题页面
    if (!document.URL.includes('www.zhihu.com/question')) {
      return
    }
    // 展开文章
    var nodeList = document.querySelectorAll(
      '.RichContent.is-collapsed.RichContent--unescapable'
    )
    nodeList.forEach(item => {
      item.innerHTML = item.querySelector('span').innerHTML
      item.setAttribute('class', item.getAttribute('class') + ' ztext')
    })

    // 加载全部图片（默认延迟加载）
    var spanList = document.querySelectorAll('figure > span')
    spanList.forEach(span => {
      var lazyImg = span.querySelector('.VagueImage')
      var src = lazyImg.dataset.src
      span.innerHTML = `<img class="origin_image" src="${src}"/>`
    })

    // 删除推荐
    removeItem(document.querySelector('.Card.RelatedReadings'))
    removeItem(document.querySelector('.Card.HotQuestions'))
    // 删除在 APP 打开
    removeItem(document.querySelector('.OpenInAppButton.OpenInApp.is-shown'))
  }

  function removeItem (item) {
    if (item == null) {
      return
    }
    var parent = item.parentElement

    parent.removeChild(item)
  }
})()