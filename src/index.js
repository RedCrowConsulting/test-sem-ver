/**
 * tiny function that removes the spaces from a string
 * @param { string } string - string with spaces
 * @return { string } output string without spaces
 */
export function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
}
