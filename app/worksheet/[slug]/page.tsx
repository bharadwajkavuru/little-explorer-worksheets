



type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {

  const { slug } = await params
  const title = slug.replace(/-/g, " ")

  return (
    <div style={{
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "40px 20px"
    }}>

      <h1 style={{
        textAlign: "center",
        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "30px"
      }}>
        {title}
      </h1>

      {/* PDF PREVIEW */}

      <div style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "30px"
      }}>

<h3 style={{ marginBottom: "10px" }}>
Preview
</h3>

<p>/worksheets/{slug}.pdf</p>

<iframe
  src={`/worksheets/${slug}.pdf`}
  width="100%"
  height="600"
  style={{ border: "none" }}
  title={title}
/>
      </div>

      {/* DOWNLOAD BUTTON */}

      <div style={{ textAlign: "center" }}>

        <a
          href={`/worksheets/${slug}.pdf`}
          download
          style={{
            background: "#22c55e",
            color: "white",
            padding: "14px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Download Worksheet
        </a>

      </div>

    </div>
  )
}
