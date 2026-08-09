export default function Resume() {
  return (
    <section id="resume" style={{ padding: "40px", backgroundColor: "#111", color: "#fff" }}>
      <h1>My Professional Resume</h1>
      <iframe
        src="/Markevian_Jones_Android_Developer_Resume.pdf"
        title="Markevian Resume"
        style={{
          width: "100%",
          height: "90vh",
          border: "none",
          borderRadius: "8px",
        }}
      />
    </section>
  );
}
