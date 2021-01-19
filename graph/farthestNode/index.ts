export type Edge = [number, number];

export interface Graph {
	[key: number]: number[];
}

export default function solution(n: number, edges: Edge[]): number {
	const graph = buildGraph(edges);

	const visited = Array(n + 1).fill(false);
	const dist = Array(n + 1).fill(Infinity);

	dist[0] = 0;
	dist[1] = 0;

	const queue = [1];

	while (queue.length) {
		const currentNode = queue.shift() as number;
		if (visited[currentNode]) continue;

		const adjs = graph[currentNode];

		adjs.forEach((adj) => {
			if (dist[currentNode] + 1 < dist[adj]) {
				dist[adj] = dist[currentNode] + 1;
				queue.push(adj);
			}
		});

		visited[currentNode] = true;
	}

	let max = 0;
	let answer = 0;

	dist.forEach((d) => {
		if (d > max) {
			max = d;
			answer = 1;
		} else if (d === max) {
			answer += 1;
		}
	});

	return answer;
}

function buildGraph(edges: Edge[]): Graph {
	const graph: Graph = {};

	edges.forEach(([from, to]) => {
		if (!graph[from]) graph[from] = [];
		if (!graph[to]) graph[to] = [];
		graph[from].push(to);
		graph[to].push(from);
	});

	return graph;
}
