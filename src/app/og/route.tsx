import { ImageResponse } from "next/og";
import { RESUME_DATA } from "@/data/resume-data";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#FAF9F0",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(217, 119, 87, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(217, 119, 87, 0.05) 0%, transparent 50%)",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #C9A227 0%, #D4A84B 50%, #C9A227 100%)",
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            width: "100%",
          }}
        >
          {/* Avatar */}
          <img
            src={RESUME_DATA.avatarUrl}
            alt=""
            width={180}
            height={180}
            style={{
              borderRadius: "100%",
              border: "5px solid #C9A227",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          />

          {/* Text content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              flex: 1,
            }}
          >
            {/* Title badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#C9A227",
                fontSize: "22px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Senior Full Stack Developer & Tech Lead
            </div>

            {/* Name */}
            <div
              style={{
                fontSize: "64px",
                fontWeight: 700,
                color: "#1a1a1a",
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              {RESUME_DATA.name}
            </div>

            {/* About */}
            <div
              style={{
                fontSize: "24px",
                color: "#666",
                lineHeight: 1.4,
                maxWidth: "600px",
              }}
            >
              10+ years building scalable applications. GCP Certified. Based in Germany.
            </div>

            {/* Skills badges */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
                flexWrap: "wrap",
              }}
            >
              {["TypeScript", "React", "Node.js", "GCP", "AWS", "Kubernetes"].map(
                (skill) => (
                  <div
                    key={skill}
                    style={{
                      backgroundColor: "rgba(201, 162, 39, 0.15)",
                      color: "#8B7355",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "18px",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#888",
            fontSize: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>krashna.in</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span>Available for opportunities</span>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
