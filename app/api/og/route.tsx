import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("Failed to load font data");
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters from URL
    const lang = searchParams.get("lang") || "id";
    const isEnglish = lang === "en";

    // Define content based on language
    const content = {
      badge: isEnglish
        ? "Custom • Functional • Durable"
        : "Kustom • Fungsional • Tahan Lama",
      headline1: isEnglish
        ? "Craft Furniture & Interiors That Invite You to"
        : "Rancang Furnitur & Interior yang Mengajak Anda",
      headline2: isEnglish ? '"Lenggah" (Sit)' : '"Lenggah"',
      subheadline: isEnglish
        ? "Comfort you can feel, aesthetics that last. Custom from concept to installation."
        : "Kenyamanan yang terasa, estetika yang bertahan. Kustom dari ide hingga pemasangan.",
      cta: isEnglish
        ? "Get Your Free Design Consultation →"
        : "Dapatkan Konsultasi Desain Gratis →",
    };

    // Combine all text for font loading
    const allText = `${content.badge}${content.headline1}${content.headline2}${content.subheadline}${content.cta}Lenggah lenggah.com`;

    // Load fonts with the correct font family names and weights
    const [interFont, playfairFont] = await Promise.all([
      loadGoogleFont("Inter:wght@400;500;700", allText),
      loadGoogleFont(
        "Playfair+Display:wght@400;700",
        content.headline1 + content.headline2 + "Lenggah"
      ),
    ]);

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage:
              "url(https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "80px",
            position: "relative",
          }}
        >
          {/* Dark Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              display: "flex",
            }}
          />

          {/* Content - positioned above overlay */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
              position: "relative",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F4E8E1",
                color: "#302621",
                padding: "12px 24px",
                borderRadius: "9999px",
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "Inter",
                marginBottom: "32px",
                border: "1px solid #CEC5AD",
              }}
            >
              {content.badge}
            </div>

            {/* Main Headline - matches text-display class (font-serif = Playfair) */}
            <div
              style={{
                fontSize: "48px",
                fontWeight: "700",
                fontFamily: "Playfair Display",
                color: "white",
                lineHeight: "1.1",
                marginBottom: "16px",
                textAlign: "center",
                maxWidth: "800px",
              }}
            >
              {content.headline1}
            </div>

            {/* Lenggah Highlight - also uses font-serif like the hero */}
            <div
              style={{
                fontSize: "56px",
                fontWeight: "700",
                fontFamily: "Playfair Display",
                color: "#F4E8E1",
                lineHeight: "1.1",
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              {content.headline2}
            </div>

            {/* Subheadline - matches text-body-large class (default font = Inter) */}
            <div
              style={{
                fontSize: "20px",
                fontFamily: "Inter",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.4",
                marginBottom: "40px",
                textAlign: "center",
                maxWidth: "700px",
              }}
            >
              {content.subheadline}
            </div>

            {/* Single Engaging CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0B5509",
                color: "#F4E8E1",
                padding: "20px 40px",
                borderRadius: "50px",
                fontSize: "20px",
                fontWeight: "700",
                fontFamily: "Inter",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                border: "2px solid #CEC5AD",
              }}
            >
              {content.cta}
            </div>
          </div>

          {/* Lenggah Logo/Branding */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "40px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              zIndex: 1,
            }}
          >
            <div
              style={{
                fontSize: "24px",
                fontWeight: "700",
                fontFamily: "Playfair Display",
                color: "#F4E8E1",
              }}
            >
              Lenggah
            </div>
            <div
              style={{
                width: "3px",
                height: "24px",
                backgroundColor: "#CEC5AD",
              }}
            />
            <div
              style={{
                fontSize: "14px",
                fontFamily: "Inter",
                color: "#CEC5AD",
              }}
            >
              lenggah.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: interFont,
            style: "normal",
            weight: 400,
          },
          {
            name: "Playfair Display",
            data: playfairFont,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    console.log(`Failed to generate OG image: ${errorMessage}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
