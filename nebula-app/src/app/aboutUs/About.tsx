import MainContent from "./components/MainContent";

export default function About() {

    function generateNetworkNodes() {
        const nodes = [];
        const nodeCount = 20;

        for (let i = 0; i < nodeCount; i++) {
            const angle = (i / nodeCount) * 2 * Math.PI;
            const radius = 120 + Math.random() * 80;
            const x = 200 + radius * Math.cos(angle);
            const y = 200 + radius * Math.sin(angle);

            nodes.push({ id: i, x, y });
        }

        return nodes;
    }

    const nodes = generateNetworkNodes();

    // Generate connections between nodes
    function generateConnections(nodes) {
        const connections = [];
        nodes.forEach((node, i) => {
            // Connect each node to 2-4 other nodes
            const connectionCount = 2 + Math.floor(Math.random() * 3);
            for (let j = 0; j < connectionCount; j++) {
                const targetIndex = Math.floor(Math.random() * nodes.length);
                if (targetIndex !== i) {
                    connections.push({
                        from: node,
                        to: nodes[targetIndex]
                    });
                }
            }
        });
        return connections;
    }

    const connections = generateConnections(nodes);

    return (
        <MainContent
            connections={connections}
            nodes={nodes}
        />
    );
}