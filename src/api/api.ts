 const KEY = '41f519c3acd7443fb125a657a3d69c34'
const KEY1 = 'c1e4329d5bf643cb8ffa100cbaac7f75'
const URL = 'https://exchange-rates.abstractapi.com/v1/live/?api_key='

export const getRate = (from: string, to: string) => {
  return fetch(
    `${URL}${KEY}&base=${from}&target=${to}`
  ).then((response) => response.json())
}
export const getRates = (from: string, to: String[]) => {
  return fetch(
    `${URL}${KEY}&base=${from}&target=${[...to]
      .filter((item) => item !== from)
      .join(',')}`
  ).then((response) => response.json())
}
export const getRateToDollar = (to: string) => {
  return fetch(
    `${URL}${KEY1}&base=USD&target=${to}`
  ).then((response) => response.json())
}