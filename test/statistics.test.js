/**
 * Tests for the statistics program.
 *
 * @author Simon Palm
 * @version 1.0.0
 */


import { maximum, mean, median, minimum, mode, range , standardDeviation, descriptiveStatistics } from '../src/statistics.js'
import { expect } from 'chai'

/* eslint-env mocha */

describe('statistics', () => {
  // ------------------------------------------------------------------ maximum
  describe('#maximum()', () => {
    // exceptions
    it('Passing anything but an array should throw TypeError with the message \'The passed argument is not an array.\'', () => {
      expect(() => {
        maximum(1)
        maximum('not an array')
        maximum(false)
        maximum(undefined)
        maximum({})
        maximum(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it('Passing an empty array should throw Error with the message \'The passed array contains no elements.\'', () => {
      expect(() => {
        maximum([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it('Passing an array of not just numbers should throw TypeError with the message \'The passed array contains not just numbers.\'', () => {
      expect(() => {
        maximum([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      const arg = [4, 2, 6, 1, 3, 7, 5, 3]
      const res = maximum(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive values should find and return the largest positive value', () => {
      expect(maximum([2, 5, 1, 1, 5, 5, 2, 2, 2, 2])).to.eql(5)
    })

    it('Passing an array of negative values should find and return the least negative value', () => {
      expect(maximum([-42, -84, -2, -3])).to.eql(-2)
    })
  })

  // ------------------------------------------------------------------ mean
  describe('#mean()', () => {
    // exceptions
    it('Passing anything but an array should throw TypeError with the message \'The passed argument is not an array.\'', () => {
      expect(() => {
        mean(1)
        mean('not an array')
        mean(false)
        mean(undefined)
        mean({})
        mean(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it('Passing an empty array should throw Error with the message \'The passed array contains no elements.\'', () => {
      expect(() => {
        mean([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it('Passing an array of not just numbers should throw TypeError with the message \'The passed array contains not just numbers.\'', () => {
      expect(() => {
        mean([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      const arg = [4, 2, 6, 1, 3, 7, 5, 3]
      const res = mean(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive and negative values should calculate and return the average value', () => {
      expect(mean([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2])).to.eql(1.5)
    })

    it('Passing an array of negative values should calculate and return the average value', () => {
      expect(mean([-42, -84, -2, -3])).to.eql(-32.75)
    })
  })

  // ------------------------------------------------------------------ median
  describe('#median()', () => {
    // exceptions
    it('Passing anything but an array should throw TypeError with the message \'The passed argument is not an array.\'', () => {
      expect(() => {
        median(1)
        median('not an array')
        median(false)
        median(undefined)
        median({})
        median(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it('Passing an empty array should throw Error with the message \'The passed array contains no elements.\'', () => {
      expect(() => {
        median([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it('Passing an array of not just numbers should throw TypeError with the message \'The passed array contains not just numbers.\'', () => {
      expect(() => {
        median([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      const arg = [4, 2, 6, 1, 3, 7, 5, 3]
      const res = median(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive values should calculate and return the median value', () => {
      expect(median([4, 2, 6, 1, 3, 7, 5, 3])).to.eql(3.5)
    })

    it('Passing an array of positive and negative values should calculate and return the median value', () => {
      expect(median([4, 2, 6, -1, 3, 5, 3])).to.eql(3)
    })
  })

  // ------------------------------------------------------------------ minimum
  describe('#minimum()', () => {
    // exceptions
    it('Passing anything but an array should throw TypeError with the message \'The passed argument is not an array.\'', () => {
      expect(() => {
        minimum(1)
        minimum('not an array')
        minimum(false)
        minimum(undefined)
        minimum({})
        minimum(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it('Passing an empty array should throw Error with the message \'The passed array contains no elements.\'', () => {
      expect(() => {
        minimum([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it('Passing an array of not just numbers should throw TypeError with the message \'The passed array contains not just numbers.\'', () => {
      expect(() => {
        minimum([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      const arg = [4, 2, 6, 1, 3, 7, 5, 3]
      const res = minimum(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive values should find and return the smallest positive value', () => {
      expect(minimum([2, 5, 1, 1, 5, 5, 2, 2, 2, 2])).to.eql(1)
    })

    it('Passing an array of negative values should find and return the most negative value', () => {
      expect(minimum([-42, -84, -2, -3])).to.eql(-84)
    })
  })

  // ------------------------------------------------------------------ mode
  describe('#mode()', () => {
    // exceptions
    it('Passing anything but an array should throw TypeError with the message \'The passed argument is not an array.\'', () => {
      expect(() => {
        mode(1)
        mode('not an array')
        mode(false)
        mode(undefined)
        mode({})
        mode(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it('Passing an empty array should throw Error with the message \'The passed array contains no elements.\'', () => {
      expect(() => {
        mode([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it('Passing an array of not just numbers should throw TypeError with the message \'The passed array contains not just numbers.\'', () => {
      expect(() => {
        mode([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning an array', () => {
      const arg = [4, 2, 6, 1, 3, 7, 5, 3]
      const res = mode(arg)
      expect(res).to.be.an('array')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of values where a negative value appears as often as a positive value should return an ordered array of both values', () => {
      expect(mode([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2])).to.eql([-2, 5])
    })

    it('Passing an array of values where two positive values appears as often should return an ordered array of both values', () => {
      expect(mode([5, 1, 1, 5, 5, 1])).to.eql([1, 5])
    })

    it('Passing an array of values where one positive value appears most often should return an array of that value', () => {
      expect(mode([5, 1, 5, 1, 5])).to.eql([5])
    })

    it('Passing an array of values where one positive floating-point value appears most often should return an array of that value', () => {
      expect(mode([5.3, 5.3, 1.9, 1.9, 5.3])).to.eql([5.3])
    })

    it('Passing an array of values where a negative value appears as often as some positive values should return an ordered array of the values', () => {
      expect(mode([3, 5, 2, -5, 9, 2, -5, 5, 10, 4, 1, 0, -1, 9, 0])).to.eql([-5, 0, 2, 5, 9])
    })

    it('Passing an array of one value should return a new array of the value', () => {
      const arr = [42]
      expect(mode(arr)).to.eql([42])
      expect(mode(arr)).not.to.equal(arr)
    })
  })

  // ------------------------------------------------------------------ range
  describe('#range()', () => {
    // exceptions
    it('Passing anything but an array should throw TypeError with the message \'The passed argument is not an array.\'', () => {
      expect(() => {
        range(1)
        range('not an array')
        range(false)
        range(undefined)
        range({})
        range(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it('Passing an empty array should throw Error with the message \'The passed array contains no elements.\'', () => {
      expect(() => {
        range([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it('Passing an array of not just numbers should throw TypeError with the message \'The passed array contains not just numbers.\'', () => {
      expect(() => {
        range([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      const arg = [4, 2, 6, 1, 3, 7, 5, 3]
      const res = range(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive and negative values should calculate and return the difference between the lowest and highest values', () => {
      expect(range([2, 5, 1, 1, 5, 5, 2, 2, -2, 2])).to.eql(7)
    })

    it('Passing an array of negative values should calculate and return the difference between the lowest and highest values', () => {
      expect(range([-42, -84, -2, -3])).to.eql(82)
    })
  })

  // ------------------------------------------------------------------ standardDeviation
  describe('#standardDeviation()', () => {
    // exceptions
    it('Passing anything but an array should throw TypeError with the message \'The passed argument is not an array.\'', () => {
      expect(() => {
        standardDeviation(1)
        standardDeviation('not an array')
        standardDeviation(false)
        standardDeviation(undefined)
        standardDeviation({})
        standardDeviation(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it('Passing an empty array should throw Error with the message \'The passed array contains no elements.\'', () => {
      expect(() => {
        standardDeviation([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it('Passing an array of not just numbers should throw TypeError with the message \'The passed array contains not just numbers.\'', () => {
      expect(() => {
        standardDeviation([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning a number', () => {
      const arg = [4, 2, 6, 1, 3, 7, 5, 3]
      const res = standardDeviation(arg)
      expect(res).to.be.an('number')
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('Passing an array of positive spread values should calculate and return a high standard deviation', () => {
      expect(standardDeviation([1, 4, 3, 15, 72, 41, 30, 27, 72, 8, 42, 36, 33, 46, 44]).toFixed(1)).to.eql('21.9')
    })

    it('Passing an array of positive close values should calculate and return a low standard deviation', () => {
      expect(standardDeviation([30, 31, 33, 34, 35, 34, 28, 34, 33, 34, 36, 35, 32, 31, 32]).toFixed(1)).to.eql('2.1')
    })
  })

  // ------------------------------------------------------------------ descriptiveStatistics
  describe('#descriptiveStatistics()', () => {
    // exceptions
    it('Passing anything but an array should throw TypeError with the message \'The passed argument is not an array.\'', () => {
      expect(() => {
        descriptiveStatistics(1)
        descriptiveStatistics('not an array')
        descriptiveStatistics(false)
        descriptiveStatistics(undefined)
        descriptiveStatistics({})
        descriptiveStatistics(null)
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed argument is not an array.')
    })

    it('Passing an empty array should throw Error with the message \'The passed array contains no elements.\'', () => {
      expect(() => {
        descriptiveStatistics([])
      }).to.throw(Error).and
        .to.have.property('message', 'The passed array contains no elements.')
    })

    it('Passing an array of not just numbers should throw TypeError with the message \'The passed array contains not just numbers.\'', () => {
      expect(() => {
        descriptiveStatistics([1, 2, 3, '4'])
      }).to.throw(TypeError).and
        .to.have.property('message', 'The passed array contains not just numbers.')
    })

    // no effect on the argument
    it('Passing an array with numbers should not modify the passed array returning an object', () => {
      const arg = [4, 2, 6, 1, 3, 7, 5, 3]
      const res = descriptiveStatistics(arg)
      expect(res).to.be.an('object') // .that.includes({ maximum: 7 })
      expect(arg).to.eql([4, 2, 6, 1, 3, 7, 5, 3])
    })

    // return value
    it('descriptiveStatistics([42]) should return {maximum: 42, mean: 42, median: 42, minimum: 42, mode: [42], range: 0, standardDeviation: 0}', () => {
      expect(descriptiveStatistics([42])).to.eql({
        maximum: 42,
        mean: 42,
        median: 42,
        minimum: 42,
        mode: [42],
        range: 0,
        standardDeviation: 0
      })
    })

    it('descriptiveStatistics([4, 2, 6, 1, 3, 7, 5, 3]) should return {max: 7, mean: 3.875, median: 3.5, min: 1, mode: [3], range: 6, standardDeviation: 1.899835519196333}', () => {
      expect(descriptiveStatistics([4, 2, 6, 1, 3, 7, 5, 3])).to.eql({
        maximum: 7,
        mean: 3.875,
        median: 3.5,
        minimum: 1,
        mode: [3],
        range: 6,
        standardDeviation: 1.899835519196333
      })
    })
  })
})
