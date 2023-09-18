import { NextResponse } from "next/server";

const posts = [
  {
    title: "Exciting Day at the Park",
    slug: "exciting-day-at-the-park",
    content: "Spent the day at the park with friends. Such a blast!",
  },
  {
    title: "Delicious Dinner Recipe",
    slug: "delicious-dinner-recipe",
    content:
      "Tried a new dinner recipe tonight - it was amazing! Here's how I made it...",
  },
  {
    title: "Traveling Adventures",
    slug: "traveling-adventures",
    content:
      "Just got back from an incredible trip. I can't wait to share my travel stories and photos!",
  },
  {
    title: "Gardening Tips",
    slug: "gardening-tips",
    content:
      "Spent the weekend in the garden. Here are some gardening tips I learned.",
  },
  {
    title: "Movie Night Recommendations",
    slug: "movie-night-recommendations",
    content:
      "Looking for a movie to watch tonight? Here are some of my top recommendations.",
  },
  {
    title: "Fitness Journey Update",
    slug: "fitness-journey-update",
    content:
      "Making progress on my fitness journey. Check out my latest workout routine and results.",
  },
  {
    title: "New Book Review",
    slug: "new-book-review",
    content:
      "Just finished reading an amazing book. Here's my review and why I loved it.",
  },
  {
    title: "Tech Gadgets Wishlist",
    slug: "tech-gadgets-wishlist",
    content:
      "Dreaming of the latest tech gadgets. Here's my wishlist of must-have gadgets.",
  },
  {
    title: "Cooking Adventures",
    slug: "cooking-adventures",
    content:
      "Experimented with some new recipes in the kitchen. Here's what I cooked up.",
  },
  {
    title: "DIY Home Improvement",
    slug: "diy-home-improvement",
    content:
      "Transformed a room in my house with some DIY home improvement projects.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
