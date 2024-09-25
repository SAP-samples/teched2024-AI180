export function replaceLineBreakWithBR(input: string): string {
  return input.replaceAll('\n', '<br>');
}

export function replaceSpaceWithNBSP(input: string): string {
  return input.replaceAll(' ', '&nbsp;&nbsp;');
}
