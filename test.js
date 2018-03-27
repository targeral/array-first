'use strict'

const should = require('should')
const first = require('./')

describe('first', () => {
  it('should throw an error if the value passed is not an array:', () => {
    (function () {
      first()
    }).should.throw('array-first expects an array as the first argument.')
  })

  it('should return the first element in the array:', () => {
    first(['a', 'b', 'c', 'd', 'e', 'f']).should.eql('a')
    first(['a', 'b', 'c', 'd', 'e', 'f'], 1).should.eql('a')
  })

  it('should the first n elements of the array', () => {
    first(['a', 'b', 'c', 'd', 'e', 'f'], 3).should.eql(['a', 'b', 'c'])
  })
})
