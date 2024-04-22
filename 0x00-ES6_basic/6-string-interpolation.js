export default function getSanFranciscoDeescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gpd: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income country in the united States\
, with a per capita personal income of ${budget.income}. As of 2015, San Francisco \
proper had a GDP of ${budget.gpd}, and a GDP per capita of ${budget.capita}.`;
}
