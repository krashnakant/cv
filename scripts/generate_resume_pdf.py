from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "krashna-chaurasia-resume.pdf"

PAGE_W, PAGE_H = A4
SIDEBAR_W = 170
MAIN_X = 188
MAIN_RIGHT = PAGE_W - 20
MAIN_W = MAIN_RIGHT - MAIN_X

BLACK = colors.HexColor("#222222")
BODY = colors.HexColor("#3F3F3F")
MUTED = colors.HexColor("#777777")
LINE = colors.HexColor("#AFAFAF")
SIDEBAR = colors.HexColor("#E5E5E5")
CIRCLE = colors.HexColor("#C7C7C7")


def wrap_lines(text, font_name, font_size, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if stringWidth(candidate, font_name, font_size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(c, text, x, y, max_width, font_name="Helvetica", font_size=8.2, leading=11, color=BODY):
    c.setFont(font_name, font_size)
    c.setFillColor(color)
    for line in wrap_lines(text, font_name, font_size, max_width):
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_section_heading(c, text, x, y, width, font_size=9.2):
    c.setFont("Helvetica-Bold", font_size)
    c.setFillColor(BLACK)
    c.drawString(x, y, text.upper())
    c.setStrokeColor(LINE)
    c.setLineWidth(0.45)
    c.line(x, y - 3, x + width, y - 3)
    return y - 16


def draw_sidebar_item(c, label, value, x, y, width):
    c.setFont("Helvetica-Bold", 7.8)
    c.setFillColor(BLACK)
    c.drawString(x, y, label)
    y -= 12
    return draw_wrapped(c, value, x, y, width, font_size=7.5, leading=10.5, color=BODY) - 6


def draw_bullets(c, bullets, x, y, width):
    for text in bullets:
        c.setFillColor(BODY)
        c.setFont("Helvetica", 8.35)
        c.drawString(x, y, "-")
        y = draw_wrapped(c, text, x + 10, y, width - 10, font_size=8.35, leading=11.7, color=BODY)
        y -= 3.2
    return y


def draw_role(c, company, role, dates, bullets, y, note=None):
    c.setFillColor(BLACK)
    c.setFont("Helvetica-Bold", 10.2)
    c.drawString(MAIN_X, y, company)
    c.setFont("Helvetica", 7.4)
    c.setFillColor(MUTED)
    c.drawRightString(MAIN_RIGHT, y, dates)
    y -= 14
    c.setFont("Helvetica-Bold", 8.8)
    c.setFillColor(BODY)
    c.drawString(MAIN_X, y, role)
    y -= 12
    if note:
        y = draw_wrapped(c, note, MAIN_X, y, MAIN_W, font_name="Helvetica-Oblique", font_size=7.4, leading=9.4, color=MUTED)
        y -= 2
    y = draw_bullets(c, bullets, MAIN_X + 8, y, MAIN_W - 8)
    return y - 14


def build_resume():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(
        str(OUTPUT),
        pagesize=A4,
        pageCompression=1,
    )
    c.setTitle("Krashna Kant Chaurasia - Senior Software Engineer Resume")
    c.setAuthor("Krashna Kant Chaurasia")
    c.setSubject("Senior Software Engineer resume")

    c.setFillColor(colors.white)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    c.setFillColor(SIDEBAR)
    c.rect(0, 0, SIDEBAR_W, PAGE_H, stroke=0, fill=1)

    c.setFillColor(CIRCLE)
    c.circle(85, 770, 38, stroke=0, fill=1)
    c.setFillColor(BLACK)
    c.setFont("Helvetica-Bold", 17)
    c.drawCentredString(85, 764, "KC")

    sx = 13
    sw = SIDEBAR_W - 26
    sy = 688

    sy = draw_section_heading(c, "Contact", sx, sy, sw)
    for line in [
        "+49 176 411 27572",
        "krashna.chaurasia@yahoo.com",
        "Mannheim, Germany",
        "linkedin.com/in/krashna-chaurasia",
        "github.com/krashnakant",
        "krashna.in",
    ]:
        c.setFont("Helvetica", 7.5)
        c.setFillColor(BODY)
        c.drawString(sx, sy, line)
        sy -= 15
    sy -= 9

    sy = draw_section_heading(c, "Certifications", sx, sy, sw)
    sy = draw_sidebar_item(c, "Professional Cloud Architect", "Google Cloud | 2025", sx, sy, sw)
    sy = draw_sidebar_item(c, "Generative AI Leader", "Google Cloud | 2026", sx, sy, sw)

    sy = draw_section_heading(c, "Education", sx, sy, sw)
    sy = draw_sidebar_item(
        c,
        "RGPV, India",
        "B.E. Electronics & Telecommunication Engineering\n2008 - 2012".replace("\n", " "),
        sx,
        sy,
        sw,
    )

    sy = draw_section_heading(c, "Key Skills", sx, sy, sw)
    skill_groups = [
        ("Architecture", "System design, API design, microservices"),
        ("Languages", "TypeScript, JavaScript, Java, Kotlin"),
        ("Frontend", "React, Next.js"),
        ("Backend", "Node.js, NestJS, Spring Boot, REST APIs"),
        ("Cloud & DevOps", "GCP, AWS, Terraform, Docker, GitHub Actions, CI/CD"),
        ("Databases", "Firestore, PostgreSQL, SQL"),
        ("Observability", "Datadog, Grafana, FluentD"),
    ]
    for label, value in skill_groups:
        sy = draw_sidebar_item(c, label, value, sx, sy, sw)

    sy = draw_section_heading(c, "Languages", sx, sy, sw)
    sy = draw_sidebar_item(c, "English", "Professional proficiency", sx, sy, sw)
    sy = draw_sidebar_item(c, "German", "A1 - Learning", sx, sy, sw)
    sy = draw_sidebar_item(c, "Hindi", "Native", sx, sy, sw)

    c.setFillColor(BLACK)
    c.setFont("Helvetica-Bold", 27)
    c.drawString(MAIN_X, 786, "Krashna Kant Chaurasia")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 11)
    c.drawString(MAIN_X, 768, "Senior Software Engineer | Cloud-Native Platforms")
    c.setStrokeColor(LINE)
    c.setLineWidth(0.55)
    c.line(MAIN_X, 758, MAIN_RIGHT, 758)

    my = 742
    my = draw_section_heading(c, "Profile", MAIN_X, my, MAIN_W, font_size=9.4)
    profile = (
        "Senior Software Engineer with 12+ years of experience building cloud-native enterprise platforms across Europe. "
        "Hands-on across architecture, backend and frontend implementation, infrastructure as code, CI/CD, and production operations. "
        "GCP Professional Cloud Architect and Generative AI Leader certified. Open to Senior Software Engineer, Technical Lead, and Lead Software Engineer roles in Germany and across the EU."
    )
    my = draw_wrapped(c, profile, MAIN_X, my, MAIN_W, font_size=8.35, leading=12, color=BODY)
    my -= 10

    my = draw_section_heading(c, "Professional Experience", MAIN_X, my, MAIN_W, font_size=9.4)
    my = draw_role(
        c,
        "BAUHAUS Deutschland",
        "Senior Cloud Developer",
        "Aug 2021 - Present | Germany (Hybrid)",
        [
            "Started the enterprise product configurator platform as its sole engineer, defining the architecture and building its initial foundations before two external engineers joined.",
            "Build and evolve cloud-native services with TypeScript, Node.js, NestJS, React, GCP, Firestore, and Terraform.",
            "Develop infrastructure as code and CI/CD workflows with GitHub Actions to support repeatable, reliable releases.",
            "Design APIs and integration patterns while working across engineering, product, UX, and vendor teams.",
        ],
        my,
    )
    my = draw_role(
        c,
        "HSE Home Shopping Europe GmbH",
        "Full Stack Web Developer",
        "Oct 2019 - Jun 2021 | Germany",
        [
            "Built and maintained e-commerce capabilities for customers across Germany, Austria, and Switzerland.",
            "Developed backend services and APIs with Kotlin and Spring Boot, alongside customer-facing features in React.",
            "Worked with event-driven microservices and Docker-based services running on AWS.",
            "Contributed to checkout, product-presentation, and back-office integrations with product and design.",
        ],
        my,
    )
    my = draw_role(
        c,
        "HARMAN International",
        "Product Engineer - DevOps Engineer",
        "Mar 2016 - Sep 2019 | India - Germany",
        [
            "Built backend services for enterprise clients, including British Telecom IoT, using Java 8 and Spring Boot.",
            "Developed REST APIs, modular service layers, production integrations, and analytics-reporting implementations.",
            "Built cloud infrastructure and delivery automation for Samsung BIXBY AI services focused on European markets.",
            "Provisioned environments with Terraform and Ansible and automated deployments with Spinnaker and Jenkins.",
            "Implemented logging and monitoring with FluentD, Datadog, and Grafana.",
        ],
        my,
        note="Key projects: Samsung BIXBY AI | British Telecom IoT | GM NG-NPM",
    )
    my = draw_role(
        c,
        "Fiserv",
        "Software Developer",
        "2013 - 2014 | Pune, India",
        [
            "Developed web application features and REST modules for a global fintech platform using Java, JSP, and Spring MVC.",
            "Built MVC controllers, service layers, and repository modules from business requirements.",
            "Contributed to requirement analysis, testing support, and implementation of core banking features.",
        ],
        my,
    )

    c.setStrokeColor(LINE)
    c.setLineWidth(0.45)
    c.line(MAIN_X, 26, MAIN_RIGHT, 26)
    c.setFont("Helvetica", 6.2)
    c.setFillColor(MUTED)
    c.drawCentredString(
        (MAIN_X + MAIN_RIGHT) / 2,
        16,
        "Germany permanent resident | No visa sponsorship required | Available with three months notice",
    )

    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    build_resume()
