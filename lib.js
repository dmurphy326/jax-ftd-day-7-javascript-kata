/*
  TODO: Implement empty function bodies according to their requirements
*/

'use strict'

function createGrowthModel (lengthToWingspan, leavesEatenToWeight) {
  return {
    lengthToWingspan,
    leavesEatenToWeight
  }
}

/**
 * Given an array of growth models, this function finds their average and returns
 * this result as a new growth model object
 *
 * @param growthModels [Array<GrowthModel>] the growth models to average.
 *                                          If empty or undefined, return
 *                                          an undefined growth model
 *
 * @return a GrowthModel object
 */
function averageGrowthModel (growthModels) {
  // TODO: implement using Array.prototype.reduce()

  const arrayLength = growthModels.length

  if (arrayLength === 0) {
    return undefined
  } else {
    let initial = 0
    const lenToWingspan = growthModels.reduce((previous, current) => {
      previous += current.lengthToWingspan
      return previous
    }, initial)

    const lvsEtnToWeight = growthModels.reduce((previous, current) => previous + current.leavesEatenToWeight
    , initial)

    return createGrowthModel((lenToWingspan / arrayLength), lvsEtnToWeight / arrayLength)
  }
}

module.exports = {
  createGrowthModel,
  averageGrowthModel
}
