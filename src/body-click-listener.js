module.exports = function createBodyClickListener (fn) {
  let isListening = false

  /* === public api ========================================== */
  return {
    get isListening() {
      return isListening
    },

    start(cb) {
      window.addEventListener('click', _onclick)
      window.addEventListener('keyup', _onescape)
      isListening = true
      if (typeof cb === 'function') cb()
    },

    stop(cb) {
      window.removeEventListener('click', _onclick)
      window.removeEventListener('keyup', _onescape)
      isListening = false
      if (typeof cb === 'function') cb()
    }
  }

  /* === private helpers ===================================== */
  function _onclick (e) {
    if (!e.target.tagName !== 'BODY') {
      e.preventDefault()
    }
    if (typeof fn === 'function') fn(e)
    stop()
  }

  function _onescape (e) {
    if (e.keyCode === 27) _onclick(e)
  }
}
