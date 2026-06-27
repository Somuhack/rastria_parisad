const categories = ["Music","Singing","Art And Craft","Cooking","Dancing","Painting","Photography","Writing","Coding","Gardening","Fitness"];
const durations = [3, 6, 9, 12, 18, 24];

export const courses = Array.from({ length: 50 }, (_, i) => {
  const duration = durations[i % durations.length];
  const category = categories[i % categories.length];

  return {
    id: i + 1,
    title: `${category} Course ${i + 1}`,
    code: `ICCE/${1000 + i}`,
    duration,
    category,
    image: `https://picsum.photos/300/200?random=${i + 1}`,
  };
});