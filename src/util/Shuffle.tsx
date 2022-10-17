export function shuffleArray<T>(arr: any[]) {
  return arr.sort((a, b) => 0.5 - Math.random());
}
