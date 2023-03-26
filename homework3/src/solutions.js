module.exports = {
  /**
   * Returns an empty object without prototype. There is object creation type that creates object without prototype
   */
  createPrototypelessObject() {
    let newObject = {}
    Object.setPrototypeOf(newObject, null)
    return newObject
  },

  /**
   * Returns an object with prototype set to given `proto`.
   * @param {Object} proto Prototype object
   */
  createObjectWithPrototype(proto) {
    let newObject = Object.create(proto);
    return newObject
  },

  /**
   * Returns an object with `value` property set to the given `value` and `getValue` method.
   * Be careful, if `value` changes, `getValue` should return changed `value`.
   * @param {any} value
   */
  createObjectWithMethod(value) {
    const object = {
      "value": value,
      getValue: function () {
        return this.value
      }
    }
    return object
  },

  /**
   * Returns an object with the `getValue` and `setValue` methods, 
   * having `value` hidden from the outside.
   */
  createEncapsulatedObject() {
    const object = (function() {
      let value = undefined
      const getValue = function() {
        return value
      }
      const setValue = function(newValue) {
        value = newValue
        return null
      }
      return {
        setValue,
        getValue
      }
    })()
    return object
  },

  /**
   * Returns the shallow copy of the given `obj`. HINT: This **operator** will be used later.
   * @param {Object} obj
   */
  shallowCopy(obj) {
    let shallow = {...obj}
    return shallow
  },

  /**
   * Returns the deep copy of the given `obj`.
   * @param {Object} obj
   */
  deepCopy(obj) {
    let deep = JSON.parse(JSON.stringify(obj))
    return deep
  },

  /**
   * Returns an array containing 2 elements which are
   * loosely equal, but strictly unequal.
   */
  looselyTrue() {
    const array = [5, '5']
    return array
  },

  /**
   * Returns a string that is loosely equal to boolean `true`. This one is tricky :)
   */
  stringLooselyEqualToTrue() {
    let str = "1"
    return str
  },

  /**
   * Returns correct sum of a and b.
   */
  safeSum(a, b) {
    let aa = parseFloat(a)
    let bb = parseFloat(b)

    return aa+bb
  },

  /**
   * Returns formatted string for the given date.
   * Format should be `{day}-{month}-{fullYear}` (all numbers).
   * @param {Date} date
   */
  formatDate(date) {
    const dateString = date.toString()
    const dateArray = dateString.split(" ")
    switch (dateArray[1]) {
      case "Jan":
        dateArray[1] = "1"
        break;
      case "Feb":
        dateArray[1] = "2"
        break;
      case "Mar":
        dateArray[1] = "3"
        break;
      case "Apr":
        dateArray[1] = "4"
        break;
      case "May":
        dateArray[1] = "5"
        break;
      case "Jun":
        dateArray[1] = "6"
        break;
      case "Jul":
        dateArray[1] = "7"
        break;
      case "Aug":
        dateArray[1] = "8"
        break;
      case "Sep":
        dateArray[1] = "9"
        break;
      case "Oct":
        dateArray[1] = "10"
        break;
      case "Nov":
        dateArray[1] = "11"
        break;
      case "Dec":
        dateArray[1] = "12"
        break;
    }

    const dateFinal = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[3]
    return dateFinal
  },

  /**
   * Sorts the given `numberArray` in ascending order.
   * Use array `.sort` method. Sort is done in place so there is no need to return anything.
   * @param {number[]} numberArray
   */
  sortNumberArray(numberArray) {
    numberArray.sort((a, b) => a - b)
  },

  /**
   * Multiplies all the elements in the array by 2 _in place_
   * (edits the given array) and returns it.
   * @param {number[]} numberArray
   */
  multiplyArrayByTwo(numberArray) {
    for(let i = 0; i < numberArray.length; i++) {
      numberArray[i] *= 2
    }
    return numberArray
  },

  /**
   * Multiplies all the elements in the array by 2 and returns them
   * in a new array.
   * @param numberArray
   */
  multiplyArrayByTwoNew(numberArray) {
    let newNumberArray = []
    for(let i = 0; i < numberArray.length; i++) {
      newNumberArray[i] = numberArray[i] * 2
    }
    return newNumberArray
  },

  /**
   *
   * EXTRA CREDIT TASK:
   *
   * Create two classes: `Person` and `Programmer`. `Programmer` class extends `Person`.
   * Person class has `name` property (set via constructor) and `getName` method (calls `callGetName` with name`).
   * Programmer class has `language` property provided to constructor (and `name` inherited from `Person`) and `getLanguage` method (calls `callGetLanguage` with `language`)
   * Return object with created classes, `return { Person, Programmer }`.
   *
   * NOTE: class methods should use `bind`, function expression syntax won't work here because code isn't transpiled.
   *
   * @param {Function} callGetName
   * @param {Function} callGetLanguage
   */

  
  
  classInheritance(callGetName, callGetLanguage) {
    class Person {
      name = undefined

      constructor (name) {
        this.name = name;
      }

      getName() {
        return callGetName(this.name)
      }
    }

    class Programmer extends Person {
      language = undefined

      constructor (name, language) {
        super(name)
        this.language = language
      }

      getLanguage() {
        return callGetLanguage(this.language)
      }
    }

    return { Person, Programmer }
  },

  /**
   * EXTRA CREDIT TASK:
   *
   * **This is variant of probably most common "big firm" interview question with closures.**
   *
   * This task has more easier solutions (e.g. using `let` instead of `var`), but desired solutions included Closures.
   *
   * Call the `consumer` function once every second three times giving it loop iterator as argument.
   * Use the provided for loop, do not change for loop, but feel free to modify setTimeout.
   * @param {Function} consumer
   */
  timeoutIncrement(consumer) {
    for (var i = 1; i <= 3; i += 1) {
      (function(i) {
        setTimeout(function(){
          /* your function goes here, or instead of this function */
          consumer(i)
        }, 1000)
      })(i)
    }
  },
}
