const genId = (function* genId() {
  yield 1
  yield 1
  yield 1
  yield 2
})()

export default {
  fetch: id => ({
    id: genId.next().value,
    firstName: 'Jan',
    lastName: 'Kowalski',
  }),
}
