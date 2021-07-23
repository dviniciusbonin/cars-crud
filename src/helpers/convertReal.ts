export function convertReal(value: number): String {

    const convert = (value: any) => 'R$ ' + (value / 100).toFixed(2).replace('.', ',').split('').reverse().map((v, i) => i > 5 && (i + 6) % 3 === 0 ? `${v}.` : v).reverse().join('')

    const result = convert(value);
    console.log(result)
    return result;
}