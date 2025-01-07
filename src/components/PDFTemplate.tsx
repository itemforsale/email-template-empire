import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Template } from "@/data/templates/types";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: "#000000",
    fontFamily: "Helvetica-Bold",
  },
  metadata: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    color: "#000000",
    fontSize: 12,
  },
  content: {
    fontSize: 12,
    lineHeight: 1.6,
    color: "#000000",
    padding: 20,
    borderRadius: 8,
    border: "1pt solid #cccccc",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    left: 40,
    right: 40,
    fontSize: 10,
    color: "#666666",
    textAlign: "center",
  },
  bullet: {
    width: 3,
    height: 3,
    margin: "0 8px",
    backgroundColor: "#000000",
    borderRadius: "50%",
  },
});

interface PDFTemplateProps {
  template: Template;
}

export function PDFTemplate({ template }: PDFTemplateProps) {
  const platformDisplay = template.platform === "twitter" ? "X" : template.platform.charAt(0).toUpperCase() + template.platform.slice(1);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>{template.title}</Text>
          <View style={styles.metadata}>
            <Text>{template.category}</Text>
            <View style={styles.bullet} />
            <Text>Platform: {platformDisplay}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text>{template.content}</Text>
        </View>
        <Text style={styles.footer}>Generated with DNOutreach.com</Text>
      </Page>
    </Document>
  );
}