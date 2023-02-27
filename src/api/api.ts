const URL = 'https://api.exchangerate.host/latest'

type Rates = {
  [key: string]: number
}

export const getRate = (from: string):Promise<Rates> => {
  return fetch(`${URL}base=${from}`).then((response) => response.json())
  .then((data) => data.rates)
}
