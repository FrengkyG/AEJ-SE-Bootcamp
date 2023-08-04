describe("Test API used for Food Meal", () => {
  it("Check initial fetch API", async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const result = await res.json();
    expect(result.meals).not.toBeNull();
  });

  it("Check search with keyword", async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Pasta");
    const result = await res.json();
    expect(result.meals).not.toBeNull();
  });

  it("Check search with random keyword", async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=ASDLKJAUXIO");
    const result = await res.json();
    expect(result.meals).toBeNull();
  });
});
