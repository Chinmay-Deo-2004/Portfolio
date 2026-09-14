---
title: "Chinmay's Portfolio"
date: 2026-09-15
summary: "Personal portfolio showcasing bio, research, projects, experience, awards, volunteering, and hobbies."
type: landing
sections:
  - id: intro
    block: hero
    design:
        spacing:
          padding:
            - 4rem
            - 0
            - 4rem
            - 0
        background:
          color:
            dark: "#1f2937"
            light: "#f9fafb"
          gradient:
            end: transparent
            size: "70%"
            type: radial
            shape: circle
            start: primary-400
            position: center
        text_color_light: false
    content:
        text: "I'm a passionate developer and researcher. Explore my work, experience, and interests."
        title: "Hi, I'm [Chinmay]!"
        eyebrow: Welcome to My Portfolio
        primary_action:
          url: "#projects"
          icon: hero/arrow-down
          text: View Projects
          style: gradient
        secondary_action:
          url: "#contact"
          icon: hero/mail
          text: Contact Me
          style: ghost
  - id: projects
    block: portfolio
    design:
        columns: 3
    content:
        count: 6
        title: Projects
        archive:
          text: View All Projects
          enable: true
        buttons:
          - tag: "*"
            name: All
          - tag: Research
            name: Research
          - tag: Experience
            name: Experience
          - tag: Volunteering
            name: Volunteering
          - tag: Hobbies
            name: Hobbies
        filters:
          folders:
            - projects
        subtitle: A selection of my recent work
        default_button_index: 0
  - id: experience
    block: resume-experience
    design:
        date_format: January 2006
        is_education_first: false
    content:
        text: Highlights from my recent roles and education.
        username: me
  - id: awards
    block: resume-awards
    design:
        date_format: January 2006
    content:
        text: Selected recognition and certifications.
        title: Awards
        username: me
  - id: volunteering-hobbies
    block: markdown
    design:
        background:
          color:
            dark: "#111827"
            light: "#ffffff"
    content:
        text:
          |
            ### Volunteering
            
            Details about my volunteering work.
            
            ### Hobbies
            
            A few things I enjoy outside of work.
  - id: contact
    block: contact-info
    design:
        background:
          color:
            dark: "#1f2937"
            light: "#f3f4f6"
    content:
        email: "your.email@example.com"
        phone: ""
        title: Get in Touch
        location: ""
        description: Feel free to reach out to me for collaborations or questions.
---
