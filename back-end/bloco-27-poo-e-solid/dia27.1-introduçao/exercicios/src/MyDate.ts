const  Months = [
  "January","February","March","April","May","June","July","August","September","October","November","December"
]

class MyDate {
  private _day: number = 1;
  private _month: number = 1;
  private _year: number = 1900;

  constructor(day: number, month: number, year: number) {
    const dateString = `${year}-${month}-${day}`;
    const date = new Date(dateString);
    if(!date.getDay()) return;

    this._day = day;
    this._month = month;
    this._year = year;
  }

  public get day() : number {
    return this._day;
  }

  public get month() : number {
    return this._month;
  }

  public get year() : number {
    return this._year;
  }
  

  public getMonthName(): string {
    return Months[this._month - 1];
  }

  public isLapYear(): boolean {
    const case1 = this._year % 4;
    const case2 = this._year % 100;
    const case3 = this._year % 400;
    if(case1 === 0 && case2 !== 0) {
      return true;
    }
    if(case1 === 0 && case2 === 0 && case3 === 0) {
      return true;
    }

    return false;
  }

  public compare(dateToCompareObj: MyDate): number | undefined {
    const dateString = `${this._year}-${this._month}-${this._day}`;
    const dateToCompareString = `${dateToCompareObj.year}-${dateToCompareObj.month}-${dateToCompareObj.day}`;
    const dateToCompare = new Date(dateToCompareString);
    const date = new Date(dateString);
    if(date === dateToCompare) return 0;
    if(date > dateToCompare) return 1;
    if(date < dateToCompare) return -1;
  }
}