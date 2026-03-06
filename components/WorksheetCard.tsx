type Props = {
  slug: string
  age?: string
  audience?: string
}

export default function WorksheetCard({ slug, age, audience }: Props) {

  const title = slug.replace(/-/g," ")

  return (

    <div style={{
      background:"white",
      borderRadius:"14px",
      overflow:"hidden",
      boxShadow:"0 8px 20px rgba(0,0,0,0.06)"
    }}>

      {/* Preview Image */}

      <img
        src={`/worksheets/${slug}.png`}
        alt={title}
        style={{
          width:"100%",
          display:"block"
        }}
      />

      <div style={{ padding:"18px" }}>

        <h3 style={{
          fontSize:"20px",
          marginBottom:"8px",
          textTransform:"capitalize"
        }}>
          {title}
        </h3>

        {/* Optional metadata */}

        {age && (
          <p style={{color:"#666",marginBottom:"4px"}}>
            Age: {age}
          </p>
        )}

        {audience && (
          <p style={{color:"#666",marginBottom:"12px"}}>
            For: {audience}
          </p>
        )}

        {/* Button */}

        <a
          href={`/worksheet/${slug}`}
          style={{
            display:"inline-block",
            marginTop:"8px",
            background:"#22c55e",
            color:"white",
            padding:"12px 20px",
            borderRadius:"10px",
            fontWeight:"600",
            textDecoration:"none",
            fontSize:"15px"
          }}
        >
          View Worksheet
        </a>

      </div>

    </div>
  )
}
