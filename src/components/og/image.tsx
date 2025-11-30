import { type CollectionEntry } from "astro:content";

export function createOGImage(props: CollectionEntry<"blog">) {
  // Format the date to be more readable
  const formattedDate = new Date(props.data.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return {
    type: 'div',
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "3rem",
        alignItems: "flex-start",
        textAlign: "left",
        justifyContent: "center",
        color: "white",
        backgroundColor: "#6366f1",
        fontFamily: 'Outfit',
      },
      children: [
        {
          type: 'h1',
          props: {
            style: {
              display: "flex",
              fontWeight: "bold",
              fontSize: "6rem",
              marginBottom: "1rem",
              textAlign: "left"
            },
            children: props.data.title
          }
        },
        props.data.description && {
          type: 'p',
          props: {
            style: {
              display: "flex",
              fontSize: "3rem",
              marginBottom: "1.5rem",
              textAlign: "left"
            },
            children: props.data.description
          }
        },
        {
          type: 'div',
          props: {
            style: {
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0.5rem",
              paddingRight: "3rem" // Add right padding to match container padding
            },
            children: [
              {
                type: 'p',
                props: {
                  style: {
                    fontSize: "2rem",
                    opacity: 0.9
                  },
                  children: formattedDate
                }
              },
              {
                type: 'p',
                props: {
                  style: {
                    fontSize: "2rem",
                    opacity: 0.9
                  },
                  children: "Irtaza"
                }
              }
            ]
          }
        }
      ].filter(Boolean)
    }
  };
}