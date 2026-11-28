"use strict";

(() => {
  const data = window.G1HubData;
  if (!data || !data.site || !Array.isArray(data.subjects)) return;

  const iconPaths = {
    anatomy: '<path d="M12 3.5v5m0 3v8.8m0-11.8c-2.8 0-4.6 1.7-4.6 4.2v2.8c0 1.2-.8 2.2-1.8 2.7m6.4-9.7c2.8 0 4.6 1.7 4.6 4.2v2.8c0 1.2.8 2.2 1.8 2.7M9.4 6.5h5.2M7.8 15.2c2.8-.4 5.6-.4 8.4 0M9.5 21h5m-2.5-2.6v2.5"/>',
    care: '<path d="M12 20s-7.5-4.3-7.5-10a4.2 4.2 0 0 1 7.5-2.5A4.2 4.2 0 0 1 19.5 10c0 5.7-7.5 10-7.5 10Z"/><path d="M7.8 12h2.4l1.3-2.4 2.1 4.5 1.1-2.1h1.5"/>',
    terminology: '<path d="M6.5 5.5h11M12 4v2m-2.7 4.2c1.4 2.4 3.6 4.5 6.4 5.8M17.2 9c-1.2 3.3-4.5 6.6-8.1 8.1M6 20l4.2-9.8 4.2 9.8m-6.9-3.4h5.5"/>',
    microbiology: '<circle cx="10" cy="10" r="4.2"/><circle cx="16.5" cy="15.5" r="3"/><path d="m7 6.8-1.2-1.2m7.4 1.1 1.2-1.2m-8.7 7.6-1.2 1.2m7.5-1.2 1.2 1.2M16.5 8V6m4 4h-2m0 9h2m-5 0v2M5 18h2"/><circle cx="10" cy="10" r=".7"/><circle cx="16.5" cy="15.5" r=".6"/>',
    biochemistry: '<path d="M9 4h6m-5 0v6.1l-5.2 8.3A2.3 2.3 0 0 0 6.8 22h10.4a2.3 2.3 0 0 0 2-3.6L14 10.1V4m-7.2 12h10.4"/><circle cx="10" cy="18" r=".7"/><circle cx="15.8" cy="17" r=".7"/>',
    fundamentals: '<path d="M5 7.5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"/><path d="M8 7.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-7 6h6m-3-3v6"/>',
    rights: '<path d="M12 3 5 6v5c0 4.3 2.8 7.8 7 10 4.2-2.2 7-5.7 7-10V6l-7-3Z"/><path d="M12 8v5m0 3.2h.01"/>',
    arabic: '<path d="M5 7.5c2.4-2.2 4.2-2.2 6.5 0s4.1 2.2 7.5 0M5 12c2.4-2.2 4.2-2.2 6.5 0s4.1 2.2 7.5 0M5 16.5c2.4-2.2 4.2-2.2 6.5 0s4.1 2.2 7.5 0M5 21h14"/>',
    english: '<path d="M5 5.5h14M12 5v1m-2.2 3.3c1.2 2.2 3.2 4 5.8 5.2M17 9c-1.1 3-4 5.9-7.3 7.2M6 20l3.7-8.7 3.8 8.7m-6.2-3h5"/>',
    students: '<circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8m1.2 2.2a5 5 0 0 1 3.3 4.7"/>',
    notes: '<path d="M7 3.5h7l4.5 4.5v12.3H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z"/><path d="M14 4v4h4M8.5 12h7m-7 3.5h7m-7 3.5h4"/>',
    arrow: '<path d="M5 12h13m-5-5 5 5-5 5"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M5 17v3h14v-3"/>',
    schedule: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M7.5 3v4m9-4v4M3.5 9.5h17M7.5 13h3m3 0h3m-9 4h3m3 0h3"/>',
    file: '<path d="M7 3.5h7l4.5 4.5v12H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z"/><path d="M14 4v4h4M8.5 13h7m-7 3.5h7"/>'
  };

  const makeIcon = (name, className = "") => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.65");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    if (className) svg.setAttribute("class", className);
    svg.innerHTML = iconPaths[name] || iconPaths.file;
    return svg;
  };

  const setText = (selector, text) => {
    document.querySelectorAll(selector).forEach((node) => { node.textContent = text; });
  };

  const renderHome = () => {
    const grid = document.querySelector("#course-grid");
    if (!grid) return;
    const courses = data.subjects.map((subject) => ({ ...subject, isNotes: false }));
    const groupCards = [];
    const students = Array.isArray(data.students) ? data.students : [];
    groupCards.push({ id: "students", name: "طلاب المجموعة الأولى (G1)", description: `${students.length} طالباً وطالبة`, icon: "students", color: "#578174", isStudents: true });
    if (data.schedule) groupCards.push({ ...data.schedule, id: "schedule", isSchedule: true });
    groupCards.push({ id: "notes", name: "الملاحظات", description: "تنبيهات المجموعة ومواعيدها", icon: "notes", color: "#a07b52", isNotes: true });
    document.querySelector("#course-count").textContent = String(courses.length).padStart(2, "0");

    const renderCards = (items, target) => {
      if (!target) return;
      items.forEach((course, index) => {
        const card = document.createElement("a");
        card.className = `course-card${course.isNotes ? " course-card-notes" : ""}${course.isSchedule ? " course-card-schedule" : ""}${course.isStudents ? " course-card-students" : ""}`;
        card.href = course.isStudents ? "students.html" : course.isNotes ? "notes.html" : course.isSchedule ? "schedule.html" : `subject.html?id=${encodeURIComponent(course.id)}`;
        card.style.setProperty("--course-accent", course.color);
        card.setAttribute("aria-label", `افتح ${course.name}`);

        const indexLabel = document.createElement("span");
        indexLabel.className = "course-index";
        indexLabel.textContent = String(index + 1).padStart(2, "0");
        const icon = document.createElement("span");
        icon.className = "course-icon";
        icon.append(makeIcon(course.icon));
        const copy = document.createElement("span");
        copy.className = "course-copy";
        const title = document.createElement("strong");
        title.textContent = course.name;
        const description = document.createElement("small");
        description.textContent = course.description;
        copy.append(title, description);
        const arrow = document.createElement("span");
        arrow.className = "course-arrow";
        arrow.append(makeIcon("arrow"));
        card.append(indexLabel, icon, copy, arrow);
        target.append(card);
      });
    };

    renderCards(courses, grid);
    renderCards(groupCards, document.querySelector("#group-tools-grid"));

    renderSocialLinks();
  };

  const renderSocialLinks = () => {
    const footer = document.querySelector("#footer-socials");
    if (!footer) return;
    const networks = [
      { name: "Instagram", key: "instagram", base: "https://www.instagram.com/" },
      { name: "Telegram", key: "telegram", base: "https://t.me/" }
    ];
    networks.forEach((network) => {
      const username = String(data.site.social?.[network.key] || "").trim();
      const link = document.createElement("a");
      link.textContent = network.name;
      if (username && !username.startsWith("YOUR_")) {
        link.href = network.base + encodeURIComponent(username.replace(/^@/, ""));
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      } else {
        link.href = "#";
        link.setAttribute("aria-disabled", "true");
        link.title = `أضف اسم مستخدم ${network.name} في js/data.js`;
        link.addEventListener("click", (event) => event.preventDefault());
      }
      footer.append(link);
    });
  };

  const renderSubject = () => {
    const id = new URLSearchParams(window.location.search).get("id");
    const parentSubject = data.subjects.find((item) => item.sections?.some((section) => section.id === id));
    const selectedSection = parentSubject?.sections.find((section) => section.id === id);
    const subject = selectedSection || data.subjects.find((item) => item.id === id);
    if (!subject) {
      document.querySelector("#subject-content .breadcrumb").hidden = true;
      document.querySelector("#subject-banner").hidden = true;
      document.querySelector("#subject-content .lectures-section").hidden = true;
      document.querySelector("#subject-missing").hidden = false;
      return;
    }

    document.title = `${subject.name} — ${data.site.groupName}`;
    setText("#subject-title, #subject-breadcrumb", subject.name);
    document.querySelector("#subject-description").textContent = subject.description;
    document.querySelector("#subject-banner").style.setProperty("--course-accent", subject.color);
    document.querySelector("#subject-icon").append(makeIcon(subject.icon));

    if (parentSubject) {
      const parentLink = document.querySelector("#subject-parent-link");
      parentLink.href = `subject.html?id=${encodeURIComponent(parentSubject.id)}`;
      parentLink.textContent = parentSubject.name;
      parentLink.hidden = false;
      document.querySelector("#subject-parent-divider").hidden = false;
    }

    if (subject.book) {
      renderRightsBook(subject.book);
      document.querySelector("#rights-resource").hidden = false;
      document.querySelector(".lectures-section").hidden = true;
      return;
    }

    if (Array.isArray(subject.sections)) {
      renderSubjectOptions(subject.sections);
      document.querySelector("#subject-options").hidden = false;
      document.querySelector(".lectures-section").hidden = true;
      return;
    }

    if (subject.resource) {
      renderSingleResource(subject.resource);
      document.querySelector("#single-resource").hidden = false;
      document.querySelector(".lectures-section").hidden = true;
      return;
    }

    const lectures = Array.isArray(subject.lectures) ? subject.lectures : [];
    const list = document.querySelector("#lecture-list");
    document.querySelector("#lecture-count").textContent = `${lectures.length} ${lectures.length === 1 ? "محاضرة" : "محاضرات"}`;
    document.querySelector("#lecture-empty").hidden = lectures.length > 0;

    lectures.forEach((lecture, index) => {
      const row = document.createElement("article");
      row.className = "lecture-row";
      const number = document.createElement("span");
      number.className = "lecture-number";
      number.textContent = String(lecture.number || index + 1).padStart(2, "0");
      const details = document.createElement("span");
      details.className = "lecture-details";
      const title = document.createElement("strong");
      title.textContent = lecture.title;
      details.append(title);
      if (lecture.type) {
        const type = document.createElement("small");
        type.textContent = lecture.type;
        details.append(type);
      }
      row.append(number, details);
      if (lecture.url) {
        const open = document.createElement("a");
        open.className = lecture.downloadName ? "lecture-download-button" : "lecture-open";
        open.href = lecture.url;
        open.setAttribute("aria-label", `افتح ${lecture.title}`);
        if (lecture.downloadName) {
          open.download = lecture.downloadName;
          open.append(makeIcon("download"));
          const label = document.createElement("span");
          label.textContent = "تحميل";
          open.append(label);
        } else if (/^https?:/i.test(lecture.url)) {
          open.target = "_blank";
          open.rel = "noopener noreferrer";
          open.append(makeIcon("arrow"));
        } else {
          open.append(makeIcon("arrow"));
        }
        row.append(open);
      }
      list.append(row);
    });
  };

  const renderSubjectOptions = (sections) => {
    const list = document.querySelector("#subject-option-list");
    sections.forEach((section, index) => {
      const card = document.createElement("a");
      card.className = "subject-option-card";
      card.href = `subject.html?id=${encodeURIComponent(section.id)}`;
      card.style.setProperty("--course-accent", section.color || "#638e67");
      card.setAttribute("aria-label", `افتح ${section.name}`);
      const number = document.createElement("span");
      number.className = "subject-option-number";
      number.textContent = String(index + 1).padStart(2, "0");
      const icon = document.createElement("span");
      icon.className = "subject-option-icon";
      icon.append(makeIcon(section.icon));
      const copy = document.createElement("span");
      copy.className = "subject-option-copy";
      const title = document.createElement("strong");
      title.textContent = section.name;
      const description = document.createElement("small");
      description.textContent = section.description;
      copy.append(title, description);
      const arrow = document.createElement("span");
      arrow.className = "subject-option-arrow";
      arrow.append(makeIcon("arrow"));
      card.append(number, icon, copy, arrow);
      list.append(card);
    });
  };

  const renderSingleResource = (resource) => {
    document.querySelector("#single-resource-title").textContent = resource.title;
    document.querySelector("#single-resource-description").textContent = resource.description || "";
    const download = document.querySelector("#single-resource-download");
    download.href = resource.url;
    if (resource.downloadName) download.download = resource.downloadName;
  };

  const renderRightsBook = (book) => {
    const download = document.querySelector("#rights-book-download");
    download.href = book.url;
    if (book.downloadName) download.download = book.downloadName;

    const tree = document.querySelector("#rights-toc-tree");
    (book.contents || []).forEach((door) => {
      const doorDetails = document.createElement("details");
      doorDetails.className = "toc-door";
      const doorSummary = document.createElement("summary");
      doorSummary.append(makeIcon("file"));
      const doorTitle = document.createElement("span");
      doorTitle.textContent = door.title;
      const doorState = document.createElement("span");
      doorState.className = "toc-state-icon";
      doorState.setAttribute("aria-hidden", "true");
      doorState.textContent = "+";
      doorSummary.append(doorTitle, doorState);
      doorDetails.append(doorSummary);

      const chapterList = document.createElement("div");
      chapterList.className = "toc-chapter-list";
      (door.chapters || []).forEach((chapter, chapterIndex) => {
        const chapterDetails = document.createElement("details");
        chapterDetails.className = "toc-chapter";
        const chapterSummary = document.createElement("summary");
        const chapterNumber = document.createElement("span");
        chapterNumber.className = "toc-chapter-number";
        chapterNumber.textContent = String(chapterIndex + 1).padStart(2, "0");
        const chapterTitle = document.createElement("span");
        chapterTitle.className = "toc-chapter-title";
        chapterTitle.textContent = chapter.title;
        const chapterState = document.createElement("span");
        chapterState.className = "toc-state-icon";
        chapterState.setAttribute("aria-hidden", "true");
        chapterState.textContent = "+";
        chapterSummary.append(chapterNumber, chapterTitle, chapterState);
        chapterDetails.append(chapterSummary);

        const mabhathList = document.createElement("ol");
        mabhathList.className = "toc-mabhath-list";
        (chapter.mabahith || []).forEach((mabhath, mabhathIndex) => {
          const item = document.createElement("li");
          const number = document.createElement("span");
          number.className = "toc-mabhath-number";
          number.textContent = `المبحث ${String(mabhathIndex + 1).padStart(2, "0")}`;
          const title = document.createElement("span");
          title.className = "toc-mabhath-title";
          title.textContent = mabhath;
          item.append(number, title);
          mabhathList.append(item);
        });
        chapterDetails.append(mabhathList);
        chapterList.append(chapterDetails);
      });

      doorDetails.append(chapterList);
      tree.append(doorDetails);
    });
  };

  const renderNotes = () => {
    const list = document.querySelector("#notice-list");
    if (!list) return;
    const notes = Array.isArray(data.notes) ? data.notes : [];
    document.querySelector("#notes-empty").hidden = notes.length > 0;
    const labels = { exam: "امتحان", alert: "تنبيه", announcement: "إعلان", schedule: "جدول" };

    notes.forEach((note) => {
      const card = document.createElement("article");
      card.className = `notice-card notice-${labels[note.category] ? note.category : "announcement"}`;
      const top = document.createElement("div");
      top.className = "notice-meta";
      const category = document.createElement("span");
      category.className = "notice-category";
      category.textContent = labels[note.category] || labels.announcement;
      top.append(category);
      if (note.date) {
        const date = document.createElement("time");
        date.textContent = note.date;
        date.dateTime = note.date;
        top.append(date);
      }
      const title = document.createElement("h3");
      title.textContent = note.title;
      const body = document.createElement("p");
      body.textContent = note.body;
      card.append(top, title, body);
      list.append(card);
    });
  };

  const renderStudents = () => {
    const list = document.querySelector("#student-list");
    if (!list) return;
    const students = Array.isArray(data.students) ? data.students : [];
    document.title = `طلاب المجموعة الأولى (G1) — ${data.site.groupName}`;
    const count = document.querySelector("#student-count");
    if (count) count.textContent = String(students.length).padStart(2, "0");

    students.forEach((student, index) => {
      const isDeveloper = student === "حسن زيد حياوي جعفر";
      const row = document.createElement("li");
      row.className = `student-row${isDeveloper ? " student-row-developer" : ""}`;
      const number = document.createElement("span");
      number.className = "student-number";
      number.textContent = String(index + 1).padStart(2, "0");
      const name = document.createElement("span");
      name.className = "student-name";
      name.textContent = student;
      row.append(number, name);
      if (isDeveloper) {
        const badge = document.createElement("span");
        badge.className = "student-role";
        badge.textContent = "مطور المنصة";
        row.append(badge);
      }
      list.append(row);
    });
  };

  const renderSchedule = () => {
    if (!data.schedule) return;
    document.title = `${data.schedule.title} — ${data.site.groupName}`;
    const source = data.schedule.image;
    const previewImage = document.querySelector("#schedule-preview-image");
    const dialogImage = document.querySelector("#schedule-dialog-image");
    const description = document.querySelector("[data-schedule-description]");
    if (previewImage) previewImage.src = source;
    if (dialogImage) dialogImage.src = source;
    if (description) description.textContent = data.schedule.description;

    const dialog = document.querySelector("#schedule-dialog");
    const closeButton = document.querySelector("#schedule-dialog-close");
    document.querySelectorAll("#schedule-image-open, #schedule-image-open-secondary").forEach((openButton) => {
      openButton.addEventListener("click", () => dialog?.showModal());
    });
    closeButton?.addEventListener("click", () => dialog?.close());
    dialog?.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  };

  setText("[data-group-name]", data.site.groupName);
  setText("[data-group-tagline]", data.site.tagline);
  setText("[data-owner-name]", data.site.ownerName);
  setText("[data-owner-role]", data.site.ownerRole);

  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "subject") renderSubject();
  if (page === "notes") renderNotes();
  if (page === "schedule") renderSchedule();
  if (page === "students") renderStudents();
})();
