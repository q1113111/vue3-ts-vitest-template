import BaseBtn from '../BaseBtn.vue'
import { it, describe, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

describe('BaseBtn components', () => {
  it('spacing is px-6 from large', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        size: 'large'
      }
    })
    expect(wrapper.vm.spacing).toBe('px-6')
  })

  it('spacing is px-5 from default', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        size: 'default'
      }
    })
    expect(wrapper.vm.spacing).toBe('px-5')
  })

  it('spacing is px-3 from small', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        size: 'small'
      }
    })
    expect(wrapper.vm.spacing).toBe('px-3')
  })
  it('spacing is px-3 from small', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        size: 'small'
      }
    })
    expect(wrapper.vm.spacing).toBe('px-3')
  })
  it('btnColor is bg-teal-600 hover:bg-teal-800 from primary', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.vm.btnColor).toBe('bg-teal-600 hover:bg-teal-800')
  })
  it('btnColor is bg-teal-600 hover:bg-teal-800 from primary', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.vm.btnColor).toBe('bg-teal-600 hover:bg-teal-800')
  })
  it('btnColor is bg-teal-600 hover:bg-teal-800 from primary', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.vm.btnColor).toBe('bg-teal-600 hover:bg-teal-800')
  })
  it('btnColor is g-sky-600 hover:bg-sky-800 from secondary', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        type: 'secondary'
      }
    })
    expect(wrapper.vm.btnColor).toBe('bg-sky-600 hover:bg-sky-800')
  })
  it('btnColor is bg-rose-600 hover:bg-rose-800 from error', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        type: 'error'
      }
    })
    expect(wrapper.vm.btnColor).toBe('bg-rose-600 hover:bg-rose-800')
  })
  it('btnColor is text-black hover:bg-neutral-400 hover:text-white from default', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        type: 'default'
      }
    })
    expect(wrapper.vm.btnColor).toBe('text-black hover:bg-neutral-400 hover:text-white')
  })
  it('btnColor is bg-neutral-400 text-neutral-700 pointer-events-none from disable', () => {
    const wrapper:VueWrapper<any> = mount(BaseBtn, {
      props: {
        type: 'disable'
      }
    })
    expect(wrapper.vm.btnColor).toBe('bg-neutral-400 text-neutral-700 pointer-events-none')
  })
})
