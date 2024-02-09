import { defineType } from "sanity";

const companies = [
  { title: "Wellbe", value: "wellbe" },
  { title: "Figuro", value: "figuro" },
  { title: "Jakroo", value: "jakroo" },
];

const profile = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "firstPharagraph",
      title: "First Paragraph",
      type: "text",
    },
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "secondPharagraph",
      title: "Second Paragraph",
      type: "text",
    },
    {
      name: "firstCompanyLogo",
      title: "First Company Logo",
      type: "string",
      options: {
        list: companies,
      },
    },
    {
      name: "thirdPharagraph",
      title: "Third Paragraph",
      type: "text",
    },
    {
      name: "SecondCompanyLogo",
      title: "Second Company Logo",
      type: "string",
      options: {
        list: companies,
      },
    },
    {
      name: "fourthPharagraph",
      title: "Fourth Paragraph",
      type: "text",
    },
    // ... other fields like social media links, contact information, etc.
  ],
});

export default profile;
