import HelloWorld from '../../src/components/HelloWorld.vue'
import { foo } from './foo'
it('1+1', () => {
  console.log(HelloWorld)
  expect(foo()).toBe('foo')
  expect(2).toBe(2)
})
