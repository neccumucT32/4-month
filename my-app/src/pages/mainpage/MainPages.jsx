import About from "../../components/About/About";
import Title from "../../components/Title/Title";

function MainPages() {
  return (
    <>
      <About info={{ title: "Some Title", body: "Some body" }} />
      <Title />
    </>
  );
}
export default MainPages;
