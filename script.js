// 设置当前年份
(function setCurrentYear() {
  var yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

// 处理按钮和微信浮层逻辑
document.addEventListener("DOMContentLoaded", function () {
  var whatsappButton = document.getElementById("whatsappButton");
  var wechatButton = document.getElementById("wechatButton");
  var overlay = document.getElementById("wechatOverlay");
  var overlayCloseBtn = document.getElementById("overlayCloseBtn");

  // TODO: 将下面的链接替换为你的真实 WhatsApp 群链接
  var whatsappLink = "https://chat.whatsapp.com/BCy4XpF7Fvq5lFeeZPg8gw";

  if (whatsappButton) {
    whatsappButton.addEventListener("click", function () {
      console.log("点击WhatsApp按钮");
      window.open(whatsappLink, "_blank");
    });
  }

  function openOverlay() {
    if (overlay) {
      overlay.classList.add("active");
    }
  }

  function closeOverlay() {
    if (overlay) {
      overlay.classList.remove("active");
    }
  }

  if (wechatButton) {
    wechatButton.addEventListener("click", function () {
      openOverlay();
    });
  }

  if (overlayCloseBtn) {
    overlayCloseBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      closeOverlay();
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function (event) {
      // 只有点击浮层外部（即 overlay 自身，而不是内部内容）时才关闭
      if (event.target === overlay) {
        closeOverlay();
      }
    });
  }
});

