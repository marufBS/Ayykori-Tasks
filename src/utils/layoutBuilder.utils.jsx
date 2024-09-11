export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const splitPartition = (partitions, id, direction) => {
    return partitions.map((partition) => {
        if (partition.id === id) {
            const newPartition1 = {
                id: Date.now(),
                color: partition.color,
                splitDirection: null,
                children: [],
            };
            const newPartition2 = {
                id: Date.now() + 1,
                color: getRandomColor(),
                splitDirection: null,
                children: [],
            };
            return {
                ...partition,
                splitDirection: direction,
                children: [newPartition1, newPartition2],
            };
        }
        if (partition.children.length > 0) {
            return {
                ...partition,
                children: splitPartition(partition.children, id, direction),
            };
        }
        return partition;
    });
};

export const removePartition = (partitions, id) => {
    return partitions.map((partition) => {
        if (partition.id === id) {
            return null;
        }
        if (partition.children.length > 0) {
            return {
                ...partition,
                children: removePartition(partition.children, id),
            };
        }
        return partition;
    })
        .filter(Boolean);
};
