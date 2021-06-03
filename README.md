# vite-scaffold-template

基于 vite 的项目模板

集成项目必备的基建

> 开箱即用

## Feature

- ts
- vuex
- vue-router
- e2e
  - cypress
- test unit
  - jest + vtu + @testing-library/vue
- eslint + prettier
- verify git commit message
- CI
- alias
- mock api - msw

## 测试

- .test 后缀的为  单元测试
- .spec 后缀的为 e2e 测试和 component test 测试

e2e 的可以放到 tests/e2e 中
component test 的测试可以和组件.vue 放到一起
单元测试可以放到 tests/unit 或者和具体的逻辑文件放到一起

## cypress 的使用

因为 cypress 的 expect 和 jest 的 expect 是冲突的

现在的解决方案是使用 [local-cypress](https://github.com/bahmutov/local-cypress) 来解决
