import './style.css'

const svg = {
  loading: 'M16.116 30.285c-3.037 0-5.977-0.973-8.45-2.827-3.021-2.258-4.983-5.569-5.521-9.31s0.414-7.466 2.677-10.488c4.682-6.246 13.562-7.515 19.803-2.844 2.618 1.962 4.483 4.784 5.257 7.956 0.134 0.543-0.199 1.091-0.742 1.22s-1.091-0.199-1.22-0.742c-0.661-2.715-2.263-5.139-4.505-6.821-5.349-3.999-12.966-2.908-16.97 2.44-1.941 2.591-2.758 5.784-2.295 8.988s2.139 6.042 4.73 7.983c5.354 4.010 12.966 2.919 16.976-2.435 1.048-1.403 1.769-2.973 2.134-4.666 0.118-0.543 0.661-0.892 1.199-0.774 0.543 0.118 0.892 0.656 0.774 1.199-0.43 1.984-1.269 3.817-2.494 5.451-2.263 3.021-5.574 4.983-9.316 5.521-0.677 0.102-1.36 0.151-2.037 0.151z',
  success: 'M16 2.062c-7.685 0-13.938 6.253-13.938 13.938s6.252 13.938 13.938 13.938 13.938-6.252 13.938-13.938c0-7.685-6.252-13.938-13.938-13.938zM22.726 13.701l-8.007 8.094c-0.002 0.002-0.006 0.003-0.008 0.006-0.003 0.002-0.003 0.006-0.006 0.008-0.064 0.062-0.143 0.1-0.217 0.142-0.037 0.021-0.067 0.053-0.106 0.068-0.12 0.048-0.247 0.073-0.374 0.073-0.128 0-0.257-0.025-0.378-0.075-0.040-0.017-0.072-0.051-0.11-0.072-0.074-0.042-0.151-0.079-0.215-0.142-0.002-0.002-0.003-0.006-0.005-0.008-0.002-0.003-0.006-0.003-0.008-0.006l-3.938-4.047c-0.385-0.396-0.376-1.029 0.020-1.414 0.396-0.384 1.028-0.377 1.414 0.020l3.227 3.316 7.29-7.37c0.388-0.393 1.022-0.397 1.414-0.008s0.395 1.022 0.007 1.415z',
  error: 'M16 2c-7.719 0-14 6.28-14 14s6.28 14 14 14c7.719 0 14-6.28 14-14s-6.28-14-14-14zM21.711 20.312c0.39 0.392 0.389 1.024-0.002 1.414-0.195 0.194-0.45 0.292-0.706 0.292-0.257 0-0.513-0.098-0.708-0.294l-4.3-4.313-4.314 4.268c-0.195 0.192-0.449 0.289-0.703 0.289-0.258 0-0.515-0.099-0.711-0.297-0.388-0.393-0.385-1.025 0.008-1.414l4.309-4.262-4.293-4.307c-0.39-0.391-0.389-1.024 0.002-1.414 0.391-0.391 1.023-0.389 1.414 0.002l4.299 4.312 4.314-4.268c0.392-0.389 1.026-0.385 1.414 0.008s0.385 1.026-0.008 1.414l-4.309 4.262 4.294 4.308z',
  warning: 'M16 2.062c-7.686 0-13.938 6.252-13.938 13.938s6.252 13.938 13.938 13.938 13.938-6.252 13.938-13.938-6.252-13.938-13.938-13.938zM17 23c0 0.553-0.447 1-1 1s-1-0.447-1-1v-9c0-0.553 0.447-1 1-1s1 0.447 1 1v9zM16 11c-0.828 0-1.5-0.673-1.5-1.5 0-0.829 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0.827-0.672 1.5-1.5 1.5z'
}

function getSVG (type) {
  return `<svg class="mu2-icon mu2-icon-${type}" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="${svg[type]}"></path></svg>`
}

/**
 * 缓存定时器
 * @type {Object}
 */
let timer = null

/**
 * Toast 元素
 * @type {Element}
 */
let toastElement = null

/**
 * 新建 toast
 *
 * @param {String} title - 标题
 * @param {String} type - 类型
 * @param {Number} duration - 时长
 */
function create (title, type = 'text', duration = 1.5) {
  // 元素不存在，需要新建
  if (!toastElement) {
    toastElement = document.createElement('div')
    document.body.appendChild(toastElement)
  }

  toastElement.className = `mu2-toaster mu2-toaster-${type} mu2-toaster-enter`
  toastElement.innerHTML = ''

  let html

  switch (type) {
    case 'success':
    case 'error':
    case 'loading':
    case 'warning':
      html = `<div class="mu2-toaster-icon">${getSVG(type)}</div><div class="mu2-toaster-content">${title}</div>`
      break

    default:
      html = `<div class="mu2-toaster-content">${title}</div>`
  }

  // 更新 toast
  toastElement.innerHTML = html

  // 定时器
  updateTimeEvent(duration)
}

function updateTimeEvent (duration) {
  if (duration > 0) {
    // 清除旧的定时器
    timer && clearTimeout(timer)

    // 缓存新的定时器
    timer = setTimeout(function () {
      dismiss()
    }, 1000 * duration)
  }
}

function show (title, duration) {
  create(title, 'text', duration)
}

function success (title, duration) {
  create(title, 'success', duration)
}

function error (title, duration) {
  create(title, 'error', duration)
}

function loading (title, duration = 7200) {
  create(title, 'loading', duration)
}

function warning (title, duration) {
  create(title, 'warning', duration)
}

function dismiss () {
  // 删除 toast 元素
  toastElement && toastElement.parentNode.removeChild(toastElement)
  toastElement = null

  // 重置定时器
  timer && clearTimeout(timer)
  timer = null
}

let toast = {
  show,
  dismiss,
  success,
  error,
  warning,
  loading
}

export default toast
