import solution from "./marathon";

describe("Hash/Marathon", () => {
  it('should return "leo"', () => {
    expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toEqual("leo");
  });

  it('should return "vinko"', () => {
    expect(
      solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"],
      ),
    ).toEqual("vinko");
  });

  it('should return "mislav"', () => {
    expect(
      solution(
        ["mislav", "stanko", "mislav", "ana"],
        ["stanko", "ana", "mislav"],
      ),
    ).toEqual("mislav");
  });
});
