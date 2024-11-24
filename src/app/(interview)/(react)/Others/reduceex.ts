const complexArray = [
  {
    country: 'UA',
    population: 10000000,

    states: [
      {
        name: 'State1A',
        capital: 'Capital1A',
        cities: [
          {
            name: 'City1A1',
            population: 500000,
          },
          {
            name: 'City1A2',
            population: 300000,
          },
        ],
      },
      {
        name: 'State1B',
        capital: 'Capital1B',
        cities: [
          {
            name: 'City1B1',
            population: 700000,
          },
          {
            name: 'City1B2',
            population: 400000,
          },
        ],
      },
    ],
  },
  {
    country: 'India',
    population: 8000000,
    states: [
      {
        name: 'State2A',
        capital: 'Capital2A',
        cities: [
          {
            name: 'City2A1',
            population: 600000,
          },
          {
            name: 'City2A2',
            population: 400000,
          },
        ],
      },
      {
        name: 'State2B',
        capital: 'Capital2B',
        cities: [
          {
            name: 'City2B1',
            population: 900000,
          },
          {
            name: 'City2B2',
            population: 300000,
          },
        ],
      },
    ],
  },
];

// console.log(complexArray);

//popation >500000

// Filter the array based on population (> 500,000)

// const tem = []
// const filteredArray = complexArray?.map(item => {
//     item?.states?.map(item=>{
//         item?.cities?.map(item=>{
//           if (item.population>400000){
//              tem.push(item)
//           }
//         })
//     })
// });
// console.log(filteredArray);
// console.log(tem);

const result = complexArray.reduce(
  (acc, temp) => {
    // Check if country's population is greater than 500,000
    if (temp.population > 500000) {
      // Filter and transform cities
      console.log(temp?.states?.cities?.population);
      const filteredCities = temp.cities
        ?.filter((city) => city.population > 500000)
        .map((city) => ({ cityName: city.name, population: city.population }));

      // Filter and transform states
      const filteredStates = temp.states
        .filter((state) =>
          state.cities.some((city) => city.population > 500000)
        )
        .map((state) => ({
          stateName: state.name,
          capital: state.capital,
          cities: state.cities
            .filter((city) => city.population > 500000)
            .map((city) => ({
              cityName: city.name,
              population: city.population,
            })),
        }));

      // Add the country data to the accumulator
      acc.countries.push({
        countryName: temp.country,
        population: temp.population,
        cities: filteredCities,
        states: filteredStates,
      });

      // Increment the count
      acc.count++;
    }

    return acc;
  },
  { count: 0, countries: [] }
);

console.log(result);

var originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

var returnArr = originalArray

  .filter((s) => s > 4)
  .sort((a, b) => a - b)
  .map((item) => {
    return item
    //return item > 1;
  })
  .reduce((acc, curr) => {
    return (acc + curr)
  }, 0);
console.log(returnArr);

const add = () => {
  console.log('add');
};

export default add;

