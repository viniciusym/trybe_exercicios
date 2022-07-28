type filterCallback<Z> = (itemOfArray: Z, index?: number, array?: Array<Z>) => boolean;

const myFilter = <T>(array: Array<T>, callback: filterCallback<T>): Array<T> => {
  const filteredArray: Array<T> = [];
  for(const item of array) {
    const validation: Boolean = callback(item);
    if(validation) filteredArray.push(item);
  }
  return filteredArray;
};

export default myFilter;