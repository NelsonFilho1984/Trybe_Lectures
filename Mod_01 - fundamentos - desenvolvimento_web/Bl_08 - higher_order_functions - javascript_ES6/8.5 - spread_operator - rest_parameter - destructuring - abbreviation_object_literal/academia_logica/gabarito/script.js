const { cities, states, regions } = require('../data/data.js');

/**
 * Dado um arquivo com dados de regiões, estados e cidades, crie uma função
 *  (mapCities)
 * que retorna um objeto no qual as chaves são as siglas das regiões 
 * (N, NE, CW, SE e S) e os valores
 * são arrays compostos por objetos com o nome da cidade e o nome do estado.
 * {
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ]
}
 */

// let citiesWithRegion = { N: [{}]}

const mapCities = () => {
  return regions.reduce((acum, regiao) => {
    if (!cities.some((c) => c.region == regiao.short)) return acum;
    acum[regiao.short] = cities.filter((c) => c.region === regiao.short)
      .map((c) => ({
        city: c.name,
        state: states.find((s) => s.short === c.state).name,
      }));
    return acum;
  }, {});
}

console.log(mapCities());