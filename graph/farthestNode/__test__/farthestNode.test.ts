import solution, { Edge, Graph } from '..';

const n1 = 6;
const edge1: Edge[] = [
	[3, 6],
	[4, 3],
	[3, 2],
	[1, 3],
	[1, 2],
	[2, 4],
	[5, 2],
];

const n2 = 8;
const edge2: Edge[] = [
	[1, 3],
	[2, 5],
	[3, 7],
	[2, 8],
	[5, 3],
	[6, 4],
	[5, 8],
	[1, 7],
	[2, 4],
];

describe('Farthest Nodes', () => {
	it('should return 3', () => {
		expect(solution(n1, edge1)).toEqual(3);
	});
});
