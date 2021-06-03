import Bar from './Bar.vue'
import { mount } from '@cypress/vue'
import { cy } from 'local-cypress'

describe('Foo', () => {
  it('first test', () => {
    mount(Bar)

    cy.contains('bar')
  })
})
