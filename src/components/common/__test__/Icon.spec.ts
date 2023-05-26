import Icon from '../Icon.vue'
import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'

describe('Icon component', () => {
  it('renders the correct size', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test',
        size: 'w-8 h-8'
      }
    })
    expect(wrapper.find('svg').attributes('class')).toContain('w-8 h-8')
  })

  it('renders the correct color', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test',
        color: 'text-red-500'
      }
    })
    expect(wrapper.find('svg').attributes('class')).toContain('text-red-500')
  })

  it('renders the correct iconClass', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test',
        iconClass: 'text-red-500'
      }
    })
    expect(wrapper.find('svg').attributes('class')).toContain('text-red-500')
  })

  it('disables the icon with a custom color when disable prop is true and disableColor prop is set', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test',
        disable: true,
        disableColor: 'text-gray-500'
      }
    })
    expect(wrapper.find('svg').attributes('class')).toContain('text-gray-500')
  })
})
