class Student {
  private _enrolment: string;
  private _name: string;
  private _testScores: [number, number, number, number];
  private _assignmentScores: [number, number];

  constructor(
    enrolment: string,
    name: string,
    testScores: [number, number, number, number],
    assignmentScores: [number, number],
  ) {
    this._assignmentScores = assignmentScores;
    this._enrolment = enrolment;
    this._name = name;
    this._testScores = testScores;
  };

  testScoresSum(): number {
    const scoresSum = this._testScores.reduce((a, b) => a + b, 0);
    return scoresSum;
  }

  testScoresAvarage(): number {
    const avarage = this._testScores.reduce((a, b) => a + b, 0) / this._testScores.length;

    return avarage;
  }
}