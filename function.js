const suffixes = [
    [63, "vigintillion"],
    [60, "novemdecillion"],
    [57, "octodecillion"],
    [54, "septendecillion"],
    [51, "sexdecillion"],
    [48, "quindecillion"],
    [45, "quattuordecillion"],
    [42, "tredecillion"],
    [39, "duodecillion"],
    [36, "undecillion"],
    [33, "decillion"],
    [30, "nonillion"],
    [27, "octillion"],
    [24, "septillion"],
    [21, "sextillion"],
    [18, "quintillion"],
    [15, "quadrillion"],
    [12, "trillion"],
    [9, "billion"],
    [6, "million"],
    [3, "thousand"]
];

function toNumberNotationWithWords(number, decimalsToKeep = -1) {
    for (let [power, suffix] of suffixes) {
        if (number >= Math.pow(10, power)) {
            let result = number / Math.pow(10, power);

            return decimalsToKeep >= 0
                ? result.toFixed(decimalsToKeep) + {suffix}
                : result + suffix;
        }
    }
    
    return input
}
