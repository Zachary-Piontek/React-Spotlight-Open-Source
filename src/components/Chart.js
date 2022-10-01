import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from 'victory';


const McDonalds = [
  { quarter: 1, earnings: 5 },
  { quarter: 2, earnings: 3 },
  { quarter: 3, earnings: 7 },
  { quarter: 4, earnings: 2 }
];
  
const BurgerKing = [
  { quarter: 1, earnings: 1 },
  { quarter: 2, earnings: 6 },
  { quarter: 3, earnings: 7 },
  { quarter: 4, earnings: 8 }
];
  
const Hardees = [
  { quarter: 1, earnings: 3 },
  { quarter: 2, earnings: 4 },
  { quarter: 3, earnings: 5 },
  { quarter: 4, earnings: 6 }
];
  
const KFC = [
  { quarter: 1, earnings: 9 },
  { quarter: 2, earnings: 8 },
  { quarter: 3, earnings: 7 },
  { quarter: 4, earnings: 6 }
];
  
export default function Charts() {
  
  return (
    <VictoryChart
      domainPadding={40}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`$${x / 1000}k`)}
      />
      <VictoryStack
        colorScale={'warm'}
      >
        <VictoryBar
          data={McDonalds}
          x="quarter"
          y="earnings"
        />
        <VictoryBar
          data={BurgerKing}
          x="quarter"
          y="earnings"
        />
        <VictoryBar
          data={Hardees}
          x="quarter"
          y="earnings"
        />
        <VictoryBar
          data={KFC}
          x="quarter"
          y="earnings"
        />
      </VictoryStack>
    </VictoryChart>
  );
}
