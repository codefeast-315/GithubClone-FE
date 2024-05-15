import React from 'react';
import HeatMap from '@uiw/react-heat-map';

const value = [
    { date: '2016/01/11', count: 2 },
    { date: '2016/01/12', count: 20 },
    { date: '2016/01/13', count: 10 },
    ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
    { date: '2016/04/11', count: 2 },
    { date: '2016/05/01', count: 5 },
    { date: '2016/05/02', count: 5 },
    { date: '2016/05/04', count: 11 },
];

const HeatMapProfile = () => {
    return (
        <div>
            <h4
                style={{ color: 'gray' }}
            >Recent Contribution:</h4>
            <HeatMap className='HeatMapProfile'
                style={{ maxWidth: '700px', height: '200px', color: 'white' }}
                value={value}
                weekLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                startDate={new Date('2016/01/01')}
                rectSize={15}
                space={3}
                rectProps={{
                    rx: 2.5
                }}
                panelColors={{
                    0: '#171b23',
                    2: '#d48462',
                    4: '#016d33',
                    10: '#26a641',
                    20: '#38d352',
                    30: '#38d352',
                }}
            />
        </div>
    )
};

export default HeatMapProfile