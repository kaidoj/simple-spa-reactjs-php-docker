/**
 * Caclulate limit if window height bigger than default height
 * @param {int} limit 
 */
export const calculateLimit = (limit) => {
  const heightLimit = 600;
  console.log(window.innerHeight);
  if (window.innerHeight > heightLimit) {
    return limit * Math.ceil(window.innerHeight / heightLimit);
  }

  return limit;
}