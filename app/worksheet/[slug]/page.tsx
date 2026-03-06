



type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {

  const { slug } = await params
  const title = slug.replace(/-/g, " ")

return (
  <div
    style={{
      background: "#f8fafc",
      minHeight: "100vh",
      padding: "40px 20px"
    }}
  >

    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto"
      }}
    >

      {/* TITLE */}

      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "10px",
          textTransform: "capitalize"
        }}
      >
        {title}
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "30px"
        }}
      >
        Fun printable worksheet for curious kids.
      </p>


      {/* DOWNLOAD BUTTON */}

      <div style={{ textAlign: "center", marginBottom: "30px" }}>

        <a
          href={`/worksheets/${slug}.pdf`}
          download
          style={{
            background: "#22c55e",
            color: "white",
            padding: "14px 26px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "16px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
          }}
        >
          Download Worksheet
        </a>

      </div>


      {/* PDF VIEWER CARD */}

      <div
        style={{
          background: "white",
          borderRadius: "14px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          padding: "20px"
        }}
      >

        <h3
          style={{
            marginBottom: "15px",
            fontSize: "18px"
          }}
        >
          Preview
        </h3>

        <iframe
          src={`/worksheets/${slug}.pdf`}
          width="100%"
          height="700"
          style={{
            border: "1px solid #eee",
            borderRadius: "8px"
          }}
          title={title}
        />

      </div>

    </div>

  </div>
)}
