export function replaceLineBreakWithBR(input: string): string {
  return input.replaceAll('\n', '<br>');
}
