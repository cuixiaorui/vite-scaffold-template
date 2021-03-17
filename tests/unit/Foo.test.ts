// import Foo from '../../src/components/Foo.vue'
import Foo from '@/components/Foo.vue'
import { render } from '@testing-library/vue'
it('snapshot', () => {
  const { container } = render(Foo)
  expect(container).toMatchSnapshot()
})
