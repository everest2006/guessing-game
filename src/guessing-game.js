class GuessingGame {
    constructor() {
        this.MinValueOfRange = null;
        this.MaxValueOfRange = null;
        this.Candidate = null;
    }
    setRange(min, max) {
        this.MinValueOfRange = min;
        this.MaxValueOfRange = max;
    }
    guess() {
        this.Candidate = Math.ceil((this.MaxValueOfRange-this.MinValueOfRange)/2)+this.MinValueOfRange;
        return this.Candidate;
    }
    lower() {
        this.MaxValueOfRange = this.Candidate;
    }
    greater() {
        this.MinValueOfRange = this.Candidate;
    }
}
module.exports = GuessingGame;
