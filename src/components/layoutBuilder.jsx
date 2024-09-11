import React, { useState } from 'react';
import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import Partition from './partition';
import { getRandomColor,splitPartition,removePartition  } from '../utils/layoutBuilder.utils';

const LayoutBuilder = () => {
    const [partitions, setPartitions] = useState([{ id: 1, color: getRandomColor(), splitDirection: null, children: [] }]);

    const handleSplitVertical = (id) => {
        setPartitions((prevPartitions) =>
            splitPartition(prevPartitions, id, 'V')
        );
    };

    const handleSplitHorizontal = (id) => {
        setPartitions((prevPartitions) =>
            splitPartition(prevPartitions, id, 'H')
        );
    };

    const handleRemovePartition = (id) => {
        setPartitions((prevPartitions) =>
            removePartition(prevPartitions, id)
        );
    };

    return (
        <div className='flex h-screen'>
            <Allotment>
                {partitions.map((partition) => (
                    <Allotment.Pane key={partition.id}>
                        <Partition
                            partition={partition}
                            handleSplitVertical={handleSplitVertical}
                            handleSplitHorizontal={handleSplitHorizontal}
                            handleRemovePartition={handleRemovePartition}
                        />
                    </Allotment.Pane>
                ))}
            </Allotment>
        </div>
    );
};

export default LayoutBuilder;
