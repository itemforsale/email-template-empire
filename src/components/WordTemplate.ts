import { Document, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { Template } from "@/data/templates/types";

export function generateWordDocument(template: Template): Document {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: template.title,
          heading: HeadingLevel.HEADING_1,
          spacing: { after: 200 }
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Category: ${template.category}`,
              size: 24
            }),
            new TextRun({
              text: " • ",
              size: 24
            }),
            new TextRun({
              text: `Platform: ${template.platform === "twitter" ? "X" : template.platform.charAt(0).toUpperCase() + template.platform.slice(1)}`,
              size: 24
            })
          ],
          spacing: { after: 400 }
        }),
        new Paragraph({
          text: template.content,
          spacing: { after: 400 }
        }),
        new Paragraph({
          text: "Generated with DNOutreach.com",
          alignment: AlignmentType.CENTER,
          spacing: { before: 400 }
        })
      ]
    }]
  });

  return doc;
}