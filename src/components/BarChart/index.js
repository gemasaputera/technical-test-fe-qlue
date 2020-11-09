import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Title, ChartContainer, CardChartContainer } from './barChartElements';

function BarChart({ data, isLoading, title }) {
    const [dataChart, setDataChart] = useState(data);
    useEffect(()=>{
        if (data.length!==0) {
            data.map((item)=>{
                if (item.mass === 'unknown') item.mass = 0;
                if (item.height === 'unknown') item.height = 0;
                item.mass = parseInt(item.mass);
                item.height = parseInt(item.height);
                return item;
            })
            setDataChart(data)
        } else {
            setDataChart([])
        }
    }, [data]);
  return (
    <CardChartContainer>
        <Title>{title}</Title>
        <ChartContainer>
            {dataChart.length!==0&&!isLoading&&<ResponsiveBar
                data={dataChart}
                keys={[ 'mass', 'height' ]}
                indexBy="name"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                groupMode="grouped"
                valueScale={{ type: 'linear' }}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 30,
                    legend: 'Name',
                    legendPosition: 'middle',
                    legendOffset: 40
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Mass & Height',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />}
            {isLoading&&<p>Loading Chart</p>}
            {dataChart.length===0&&<p>Belum ada data yang tersedia.</p>}
        </ChartContainer>
    </CardChartContainer>
  )
}

export default BarChart
