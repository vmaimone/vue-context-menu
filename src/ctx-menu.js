import createBodyClickListener from './body-click-listener'

const EVENT_LIST = ['click', 'contextmenu', 'keydown']

export default {
  name: 'context-menu',
  props: {
    ctxVisible: {
      type: Boolean,
      twoWay: true
    },
    ctxData: {
      type: Object,
      twoWay: true
    },
    id: {
      type: String,
      default: 'default-ctx'
    }
  },
  data() {
    return {
      ctxTop: 0,
      ctxLeft: 0,
      bodyClickListener: createBodyClickListener((e) => {
        this.resetCtx()
        this.removeEvents()
      })
    }
  },
  methods: {
    resetCtx(cb) {
      let data = Object.assign({}, this.ctxData || {})
      if (typeof cb === 'function') {
        cb(data)
      }
      this.ctxData = {}
      this.ctxVisible = false
    },

    removeEvents() {
      EVENT_LIST.forEach(key => {
        this.$el.removeEventListener(key, this.listener)
      })
    },

    addEvents() {
      EVENT_LIST.forEach(key => {
        this.$el.addEventListener(key, this.listener)
      })
    },

    listener(e) {
      this.resetCtx()
      e.stopPropagation()
      e.preventDefault()
      this.removeEvents()
    },

    setPositionFromEvent(e) {
      const { pageX, pageY } = e
      this.ctxTop = pageY - (document.body.scrollTop)
      this.ctxLeft = pageX
    },

    open(e, data) {
      this.ctxVisible = false
      this.ctxData = data
      this.setPositionFromEvent(e)
      this.addEvents()
      this.ctxVisible = true
      this.$el.setAttribute('tab-index', -1)
      this.bodyClickListener.start()
      return this
    }
  },
  watch: {
    ctxVisible(newVal, oldVal) {
      if (oldVal === true && newVal === false) {
        this.bodyClickListener.stop(() => console.log('closed context menu'))
      }
    }
  },
  computed: {
    ctxStyle() {
      return {
        'display': this.ctxVisible ? 'block' : 'none',
        'top': (this.ctxTop || 0) + 'px',
        'left': (this.ctxLeft || 0) + 'px'
      }
    }
  }
}
