import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { Template } from "@/data/templates/types";

// Register a professional font
Font.register({
  family: "Inter",
  src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2",
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Inter",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: "#1a1a1a",
  },
  metadata: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    color: "#666666",
    fontSize: 12,
  },
  content: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#333333",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 8,
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
});

interface PDFTemplateProps {
  template: Template;
}

export function PDFTemplate({ template }: PDFTemplateProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>{template.title}</Text>
          <View style={styles.metadata}>
            <Text>Category: {template.category}</Text>
            <Text>•</Text>
            <Text>Platform: {template.platform}</Text>
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