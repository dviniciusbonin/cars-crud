export function toNumber(value: string): number {
    const result = Number(value.replace(".", "").replace(".", "").replace(",", ""));

    return result;
}