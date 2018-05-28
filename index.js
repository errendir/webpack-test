const loadA = () => {
  return import(/* webpackChunkName: a */ "./a")
}

const loadB = () => {
  return import(/* webpackChunkName: b */ "./b")
}