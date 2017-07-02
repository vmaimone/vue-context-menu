const test = require('tape')
const { mount } = require('avoriaz')
const CtxMenu = require('../src/index.js')

test('an installation method exists', t => {
  t.plan(1)
  t.is(typeof CtxMenu.install, 'function', 'has an install method')
})

test('element has ctx-menu-container class', t => {
  t.plan(1)
  const component = mount(CtxMenu)
  t.ok(component.hasClass('ctx-menu-container'))
})

test('element contains ul.ctx-menu', t => {
  t.plan(2)
  const component = mount(CtxMenu)
  const list = component.find('ul.ctx-menu')
  t.equal(list.length, 1, 'single ul element')
  t.ok(list[0].hasClass('ctx-menu'))
})
