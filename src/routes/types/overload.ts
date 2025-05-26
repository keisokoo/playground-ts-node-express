function fn(a: string): number;
function fn(a: number, b: number): string;
// 실제 구현부는 마지막에 하나만
function fn(a: string | number, b?: number): number | string | null {
  if (typeof a === "string") {
    return a.length;
  }
  if (typeof a === "number" && typeof b === "number") {
    return `${a},${b}`;
  }
  return null;
}
