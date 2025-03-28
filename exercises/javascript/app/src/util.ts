/**
 * Converts line breaks in a string to HTML <br> tags.
 * This is useful for preserving line breaks when displaying text in HTML.
 * @param input - The string to process.
 * @returns The input string with line breaks replaced by <br> tags, or an empty string if input is null or undefined.
 */
export function convertLineBreaksToHtml(input: string | null | undefined): string {
  if (input == null) {
    return '';
  }
  return input.replace(/(\r\n|\n|\r)/g, '<br>');
}
