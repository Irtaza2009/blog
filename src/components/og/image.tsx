/** @jsxImportSource preact */
import { type CollectionEntry } from "astro:content";

export default function OGImage(props: CollectionEntry<"blog">) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      padding: "3rem",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      color: "white",
      backgroundColor: "#6366f1"
    }}>
      <h1 style={{
        fontWeight: "bold",
        fontSize: "6rem", 
        marginBottom: "1rem",
        textAlign: "center"
      }}>{props.data.title}</h1>
      <p style={{
        fontSize: "3rem", 
        marginBottom: "3rem",
        textAlign: "center"
      }}>{props.data.description}</p>
    </div>
  );
}