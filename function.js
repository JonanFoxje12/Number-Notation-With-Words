function toNumberNotationWithWords(number, decimalsToKeep = -1) {
  let result
  if (number >= Math.pow(10, 63)) {
      result = number / Math.pow(10, 63)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " vigintillion"
      } else {
          return result + " vigintillion" 
      }
  } else if (number >= Math.pow(10, 60)) {
      result = number / Math.pow(10, 60)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " novemdecillion"
      } else {
          return result + " novemdecillion" 
      }
  } else if (number >= Math.pow(10, 57)) {
      result = number / Math.pow(10, 57)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " octodecillion"
      } else {
          return result + " octodecillion" 
      }
  } else if (number >= Math.pow(10, 54)) {
      result = number / Math.pow(10, 54)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " septendecillion"
      } else {
          return result + " septendecillion" 
      }
  } else if (number >= Math.pow(10, 51)) {
      result = number / Math.pow(10, 51)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " sexdecillion"
      } else {
          return result + " sexdecillion" 
      }
  } else if (number >= Math.pow(10, 48)) {
      result = number / Math.pow(10, 48)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " quindecillion"
      } else {
          return result + " quindecillion" 
      }
  } else if (number >= Math.pow(10, 45)) {
      result = number / Math.pow(10, 45)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " quattuordecillion"
      } else {
          return result + " quattuordecillion" 
      }
  } else if (number >= Math.pow(10, 42)) {
      result = number / Math.pow(10, 42)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " tredecillion"
      } else {
          return result + " tredecillion" 
      }
  } else if (number >= Math.pow(10, 39)) {
      result = number / Math.pow(10, 39)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " duodecillion"
      } else {
          return result + " duodecillion" 
      }
  } else if (number >= Math.pow(10, 36)) {
      result = number / Math.pow(10, 36)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " undecillion"
      } else {
          return result + " undecillion" 
      }
  } else if (number >= Math.pow(10, 33)) {
      result = number / Math.pow(10, 33)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " decillion"
      } else {
          return result + " decillion" 
      }
  } else if (number >= Math.pow(10, 30)) {
      result = number / Math.pow(10, 30)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " nonillion"
      } else {
          return result + " nonillion" 
      }
  } else if (number >= Math.pow(10, 27)) {
      result = number / Math.pow(10, 27)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " octillion"
      } else {
          return result + " octillion" 
      }
  } else if (number >= Math.pow(10, 24)) {
      result = number / Math.pow(10, 24)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " septillion"
      } else {
          return result + " septillion" 
      }
  } else if (number >= Math.pow(10, 21)) {
      result = number / Math.pow(10, 21)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " sextillion"
      } else {
          return result + " sextillion" 
      }
  } else if (number >= Math.pow(10, 18)) {
      result = number / Math.pow(10, 18)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " quintillion"
      } else {
          return result + " quintillion" 
      }
  } else if (number >= Math.pow(10, 15)) {
      result = number / Math.pow(10, 15)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " quadrillion"
      } else {
          return result + " quadrillion" 
      }
  } else if (number >= Math.pow(10, 12)) {
      result = number / Math.pow(10, 12)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " trillion"
      } else {
          return result + " trillion" 
      }
  } else if (number >= Math.pow(10, 9)) {
      result = number / Math.pow(10, 9)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " billion"
      } else {
          return result + " billion" 
      }
  } else if (number >= Math.pow(10, 6)) {
      result = number / Math.pow(10, 6)
      if (decimalsToKeep >= 0) {
          return result.toFixed(decimalsToKeep) + " million"
      } else {
          return result + " million" 
      }
  } else {
      return number
  }
}
