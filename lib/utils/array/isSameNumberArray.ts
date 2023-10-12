export const isSameNumberArray = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) return false;

  const sortedArr1 = [...arr1].sort();
  const sortedArr2 = [...arr2].sort();
  return sortedArr1.every((value, index) => value === sortedArr2[index]);
}
