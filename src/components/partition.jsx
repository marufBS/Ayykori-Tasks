import { Allotment } from 'allotment';
import 'allotment/dist/style.css';

const Partition = ({ partition, verticalSplit, horizontalSplit, removePartition }) => {
    const { id, color, splitDirection, children } = partition;

    return (
        <div
            className="w-full h-full"
            style={{ backgroundColor: color }}
        >
            {!children.length && (
                <div className='flex gap-3 justify-center items-center h-full p-2'>
                    <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded shadow transition ease-in-out delay-80' onClick={() => verticalSplit(id)}>V</button>
                    <button className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded shadow transition ease-in-out delay-80' onClick={() => horizontalSplit(id)}>H</button>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow transition ease-in-out delay-80' onClick={() => removePartition(id)}>-</button>
                </div>
            )}

            {children.length > 0 && (
                <Allotment vertical={splitDirection === 'V'}>
                    {children.map((child) => (
                        <Allotment.Pane key={child.id}>
                            <Partition
                                partition={child}
                                verticalSplit={verticalSplit}
                                horizontalSplit={horizontalSplit}
                                removePartition={removePartition}
                            />
                        </Allotment.Pane>
                    ))}
                </Allotment>
            )}
        </div>
    );
};

export default Partition;
