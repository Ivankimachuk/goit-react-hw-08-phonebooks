import { Helmet } from "react-helmet";
import { Heading } from "components/Emotion.styled";


function HomePage() {
  return (
    <main>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home Page</title>
    </Helmet>
    <Heading>Welcome</Heading>
  </main>
  )
};

export default HomePage;



