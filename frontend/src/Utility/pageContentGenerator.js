export function generatePageContent(content) {
    return content.map((content, index) => {
      return (
        <>
          <h3>{content.question}</h3>
          <p>{content.answer}</p>
        </>
      );
    });
  }