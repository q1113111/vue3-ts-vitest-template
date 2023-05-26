import DetailTable from '../DetailTable.vue'
import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('DetailTable components', () => {
  it('tableData is propsData', () => {
    const wrapper = mount(DetailTable, {
      props: {
        tableData: {
          title: 'Attributes',
          theadArr: ['Name'],
          list: [
            { item: ['height', '按鈕高度', 'string', 'class', 'h-10'] }
          ]
        }
      }
    })
    expect(wrapper.find('h1').text()).toBe('Attributes')
    expect(wrapper.find('th').text()).toContain('Name')
    expect(wrapper.findAll('td')).toHaveLength(5)
  })
})
