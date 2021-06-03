import Foo from './Foo.vue'
import { mount } from '@cypress/vue'
import { cy } from 'local-cypress'

describe('Foo', () => {
  it('first test', () => {
    mount(Foo)

    cy.contains('login').click()
  })
})
