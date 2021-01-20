interface Hash {
  [key: string]: number;
}

export default function solution(
  participant: string[],
  completion: string[],
): string {
  const result = participant.reduce((hash, player) => {
    if (!hash[player]) hash[player] = 0;
    hash[player] += 1;

    return hash;
  }, {} as Hash);

  completion.forEach((player) => {
    result[player] -= 1;
    if (result[player] === 0) delete result[player];
  });

  return Object.keys(result)[0];
}
