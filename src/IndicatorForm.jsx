import { useState } from "react";
import "./IndicatorForm.css";

export default function IndicatorForm() {
    const [form, setForm] = useState({
        username: "",
        id: "",
        grade1: 0,
        grade2: 0,
        targetGrade: [6.0],
        semester: [""],
        frequency: [""],
        major: [""],
        subject: [""],
        status: true,
    });

    const targetGrades = [6.0, 7.0, 8.0];
    const semesters = ["1º", "2º"];
    const majors = ["Software Engineer", "Computer Science", "DEV Ops."];
    const subjects = ["Database", "Back end", "Front end", "Project"];
    const frequencies = ["Weekly", "Monthly", "Annually"];
    const average = Math.floor((form.grade1 + form.grade2)/2);

function handleChange(e) {
    const { name, value, type, checked, selectedOptions } = e.target;

    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: checked }));
    } else if (type === "select-multiple") {
      const vals = Array.from(selectedOptions).map((o) => o.value);
      setForm((f) => ({ ...f, [name]: vals }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting Indicator:", form);
    alert("Saved! (Check the console for the payload)");
  }

  return (
    <div className="indicator-page">
      <form className="indicator-card" onSubmit={handleSubmit}>
        <h1 className="indicator-title">Student Form</h1>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter the username..."
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="id">Code</label>
            <input
              id="id"
              name="id"
              type="number"
              value={form.id}
              onChange={handleChange}
              placeholder="Enter ID, e.g. 00037..."
              required
            />
          </div>
        </div>

        <h2 className="section-title">Grades</h2>

        <div className="form-grid">
            <div className="form-field">
                <label htmlFor="grade1">Grade 1</label>
                <input
                id="grade1"
                name="grade1"
                type="number"
                inputMode="decimal"
                step="0.5"
                value={form.grade1}
                onChange={handleChange}
                placeholder="0.0"
                />
            </div>

            <div className="form-field">
                <label htmlFor="grade2">Grade 2</label>
                <input
                id="grade2"
                name="grade2"
                type="number"
                inputMode="decimal"
                step="0.5"
                value={form.grade2}
                onChange={handleChange}
                placeholder="0.0"
                />
            </div>

            <div className="form-field">
                <label htmlFor="situation">Situation</label>
                <label
                    id="situation"
                    name="situation"
                    onChange={handleChange}
                    placeholder="Put the grades and target grade to get a situation"
                >
                </label>
            </div>
        </div>

        <div className="form-grid">
            <div className="form-field">
                <label htmlFor="targetGrade">Target Grade</label>
                <select
                id="targetGrade"
                name="targetGrade"
                value={form.targetGrade}
                onChange={handleChange}
                >
                {targetGrades.map((g) => (
                    <option key={g} value={g}>
                    {g}
                    </option>
                ))}
                </select>
            </div>

            <div className="form-field">
                <label htmlFor="semester">Semester</label>
                <select
                    id="semester"
                    name="semester"
                    value={form.semester}
                    onChange={handleChange}
                >
                    {semesters.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </select>
            </div>
        </div>

        <div className="form-grid">
            <div className="form-field">
                <label htmlFor="frequency">Frequency</label>
                <select
                    id="frequency"
                    name="frequency"
                    value={form.frequency}
                    onChange={handleChange}
                >
                    {frequencies.map((f) => (
                    <option key={f} value={f}>
                        {f}
                    </option>
                ))}
                </select>
            </div>

            <div className="form-field">
                <label htmlFor="major">Major</label>
                <select
                    id="major"
                    name="major"
                    value={form.major}
                    onChange={handleChange}
                >
                    {majors.map((m) => (
                        <option key={m} value={m}>
                            {m}
                        </option>
                    ))}    
                </select>
            </div>
        </div>

        <div className="form-grid">
            <div className="form-field">
            <label htmlFor="subject">Subject(s)</label>
            <select
                id="subject"
                name="subject"
                multiple
                value={form.subject}
                onChange={handleChange}
                aria-describedby="themesHelp"
            >
                {subjects.map((s) => (
                <option key={s} value={s}>
                    {s}
                </option>
                ))}
            </select>
            <small id="themesHelp" className="help-text">
                Hold Ctrl/Cmd to select multiple.
            </small>
            </div>

            <div className="form-field switch-field">
            <label htmlFor="active">Status</label>
            <label className="switch">
                <input
                id="active"
                name="active"
                type="checkbox"
                checked={form.status}
                onChange={handleChange}
                />
                <span className="slider" />
            </label>
            </div>
        </div>

        <div className="actions">
          <button type="submit" className="primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
