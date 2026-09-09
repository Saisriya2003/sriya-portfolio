"""Generate an ATS-safe single-column resume (DOCX)."""

from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING, WD_TAB_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor, Twips


OUTPUTS = [
    Path(r"C:\Users\saisr\OneDrive\Desktop\personal_files\Pettem_Sai_Sriya_Resume.docx"),
    Path(r"C:\Users\saisr\sriya-portfolio\Pettem_Sai_Sriya_Resume.docx"),
]


def set_run_font(run, name="Calibri", size=10.5, bold=False, color=None):
    run.font.name = name
    run._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    run.font.size = Pt(size)
    run.bold = bold
    if color is not None:
        run.font.color.rgb = color


def set_paragraph_spacing(paragraph, before=0, after=0, line=240):
    pf = paragraph.paragraph_format
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
    pf.line_spacing_rule = WD_LINE_SPACING.EXACTLY
    pf.line_spacing = Twips(line)


def add_bottom_border(paragraph):
    pPr = paragraph._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "12")
    bottom.set(qn("w:space"), "1")
    bottom.set(qn("w:color"), "1F4E79")
    pBdr.append(bottom)
    pPr.append(pBdr)


def add_text(paragraph, text, **kwargs):
    run = paragraph.add_run(text)
    set_run_font(run, **kwargs)
    return run


def heading(doc, text):
    p = doc.add_paragraph()
    set_paragraph_spacing(p, before=7, after=3, line=230)
    add_text(p, text.upper(), size=11.5, bold=True, color=RGBColor(0x1F, 0x4E, 0x79))
    add_bottom_border(p)
    return p


def body(doc, text, after=3):
    p = doc.add_paragraph()
    set_paragraph_spacing(p, before=0, after=after, line=216)
    add_text(p, text, size=10.5)
    return p


def bullet(doc, text):
    p = doc.add_paragraph(style="List Bullet")
    set_paragraph_spacing(p, before=0, after=1, line=226)
    p.clear()
    add_text(p, text, size=10.5)
    return p


def role_line(doc, left, right):
    p = doc.add_paragraph()
    set_paragraph_spacing(p, before=4, after=0, line=216)
    tab_stops = p.paragraph_format.tab_stops
    tab_stops.add_tab_stop(Inches(7.5), WD_TAB_ALIGNMENT.RIGHT)
    add_text(p, left, size=10.5, bold=True)
    add_text(p, "\t" + right, size=10.5)
    return p


def sub_line(doc, text):
    p = doc.add_paragraph()
    set_paragraph_spacing(p, before=0, after=2, line=220)
    add_text(p, text, size=10)
    return p


def build():
    doc = Document()

    section = doc.sections[0]
    section.top_margin = Inches(0.45)
    section.bottom_margin = Inches(0.4)
    section.left_margin = Inches(0.55)
    section.right_margin = Inches(0.55)
    section.page_width = Inches(8.5)
    section.page_height = Inches(11)

    styles = doc.styles
    normal = styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(10.5)
    normal._element.rPr.rFonts.set(qn("w:eastAsia"), "Calibri")

    bullet_style = styles["List Bullet"]
    bullet_style.font.name = "Calibri"
    bullet_style.font.size = Pt(10.5)
    pf = bullet_style.paragraph_format
    pf.left_indent = Inches(0.25)
    pf.first_line_indent = Inches(-0.15)

    name = doc.add_paragraph()
    name.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(name, before=0, after=0, line=260)
    add_text(name, "PETTEM SAI SRIYA", size=16, bold=True, color=RGBColor(0x1F, 0x4E, 0x79))

    title = doc.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(title, before=0, after=1, line=210)
    add_text(title, "Full Stack Developer  |  Python  ·  React  ·  Node.js  ·  GenAI", size=11, bold=True)

    contact = doc.add_paragraph()
    contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(contact, before=0, after=2, line=210)
    add_text(
        contact,
        "Hyderabad, Telangana, India  |  9921890019  |  saisriyavarma@gmail.com  |  linkedin.com/in/saisriyavarma  |  github.com/Saisriya2003",
        size=10,
    )

    heading(doc, "Professional Summary")
    body(
        doc,
        "Full Stack Developer at GenAI Lakes building React, TypeScript, Node.js, and Python applications. "
        "Skilled in REST APIs, FastAPI, MongoDB, PostgreSQL, and Generative AI including RAG, embeddings, "
        "semantic search, and LLM-based document question answering. B.Tech ECE, CGPA 7.6.",
        after=1,
    )

    heading(doc, "Technical Skills")
    skills = [
        ("Languages: ", "Python, JavaScript, TypeScript, SQL, HTML, CSS"),
        ("Frameworks: ", "React, Node.js, Express.js, FastAPI, Tailwind CSS"),
        ("Databases: ", "MongoDB, PostgreSQL, MySQL, SQLAlchemy"),
        ("Developer Tools: ", "Git, GitHub, VS Code, Vite, REST APIs, JWT"),
        (
            "AI / ML: ",
            "Generative AI, RAG, Large Language Models (LLM), Embeddings, Semantic Search, Neural Networks, Voice AI",
        ),
    ]
    for label, value in skills:
        p = doc.add_paragraph()
        set_paragraph_spacing(p, before=0, after=1, line=226)
        add_text(p, label, size=10.5, bold=True)
        add_text(p, value, size=10.5)

    heading(doc, "Professional Experience")

    role_line(
        doc,
        "Full Stack Developer  |  GenAI Lakes  |  Hyderabad, India",
        "July 2025 – Present",
    )
    for item in [
        "Designed and developed full-stack web applications using React, JavaScript, HTML, CSS, and REST APIs.",
        "Integrated secure RESTful APIs and backend services; implemented database operations with MongoDB, MySQL, and PostgreSQL.",
        "Debugged and tested application performance and reliability while shipping Generative AI and web features with cross-functional teams.",
    ]:
        bullet(doc, item)

    role_line(
        doc,
        "Frontend Development Intern  |  AICTE",
        "July 2024 – February 2025",
    )
    bullet(
        doc,
        "Completed the AICTE Frontend Development Internship; built a resume builder web application using HTML, CSS, JavaScript, React, and responsive UI.",
    )

    heading(doc, "Projects")

    role_line(
        doc,
        "PostPilot — AI Social Media Management Platform",
        "July 2026 – August 2026",
    )
    sub_line(doc, "Tech: TypeScript, React, Python, FastAPI, PostgreSQL, MongoDB, REST APIs, Tailwind CSS")
    for item in [
        "Built a full-stack platform to create, schedule, and publish content across YouTube, Instagram, Facebook, Twitter, LinkedIn, and TikTok.",
        "Developed a TypeScript React frontend (Vite, Tailwind CSS) and a Python FastAPI backend with REST APIs, JWT, PostgreSQL, and MongoDB; added Gemini captions, video analysis, dashboards, and OAuth.",
    ]:
        bullet(doc, item)

    role_line(
        doc,
        "Manager Monitoring Assistant — AI Status Call System",
        "2025",
    )
    sub_line(doc, "Tech: React, Node.js, Express.js, MongoDB, MySQL, REST APIs, Voice AI")
    bullet(
        doc,
        "Developed an AI status-call system for employee and field-agent tracking with outbound calls, transcription, monitoring dashboards, alerts, call logging, and reporting.",
    )

    role_line(
        doc,
        "AI-Based RAG Application — Document Question Answering",
        "2025",
    )
    sub_line(doc, "Tech: Python, FastAPI, React, PostgreSQL, RAG, LLM, Embeddings")
    bullet(
        doc,
        "Built a Retrieval-Augmented Generation (RAG) system with document ingestion, embeddings, semantic search, and LLM answers through FastAPI, React, and PostgreSQL.",
    )

    role_line(
        doc,
        "Identification of Fake Profiles Across Online Social Networks  (Team)",
        "April 2025 – May 2025",
    )
    bullet(
        doc,
        "Built a Python deep learning model using artificial neural networks and backpropagation to score friend-request authenticity on social-network data. Tech: Python, Machine Learning, Neural Networks.",
    )

    heading(doc, "Education")
    body(
        doc,
        "B.Tech, Electronics and Communication Engineering  |  Malla Reddy Institute of Technology and Science, Hyderabad  |  Nov 2021 – Aug 2025  |  CGPA 7.6",
        after=1,
    )
    body(
        doc,
        "Intermediate  |  Telangana State Residential Junior College (Girls), Bheemadevarapalle  |  Jun 2019 – Jul 2021  |  88%",
        after=1,
    )
    body(
        doc,
        "Secondary School  |  Trinity High School, Mancherial  |  May 2018 – Jun 2019  |  GPA 9.2",
        after=1,
    )

    heading(doc, "Certifications")
    body(
        doc,
        "AICTE Frontend Development Internship (Responsive UI, HTML, CSS, JavaScript, React). Hands-on certifications in API Integration, Database Management, and Full-Stack Development.",
        after=0,
    )

    saved = []
    for path in OUTPUTS:
        path.parent.mkdir(parents=True, exist_ok=True)
        doc.save(path)
        saved.append(str(path))
    return saved


if __name__ == "__main__":
    for p in build():
        print(p)
