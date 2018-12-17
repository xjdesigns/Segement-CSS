export function percentAsVal (val, max, percent) {
  const valToStep = getPercentOfMax(max, percent)
  const value =  val / valToStep
  return Math.floor(value * 10)
}

export function getPercentOfMax (max, percent) {
  return max * (percent / 100)
}
