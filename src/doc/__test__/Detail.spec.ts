import Detail from '../Detail.vue'
import BaseBtn from '@/doc/components/DbaseBtn.vue'
import Icon from '@/doc/components/DIcon.vue'
import { it, describe, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'

describe('Detail components', () => {
  it('is components change', async () => {
    const wrapper:VueWrapper<any> = mount(Detail)
    const btn1 = wrapper.findAll('button')[0]
    const btn2 = wrapper.findAll('button')[1]
    await btn1.trigger('click')
    expect(wrapper.vm.components).toBe(BaseBtn)

    await btn2.trigger('click')
    expect(wrapper.vm.components).toBe(Icon)
  })
})
