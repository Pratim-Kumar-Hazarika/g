import "./App.css";
import { Button } from "@repo/ui/button";
function App() {
  return (
    <>
      <Button appName="react-app">
        Turbo Repo + Github Actions( CI/ CD) + Docker Image + Ec2 Ubuntu
      </Button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={
              "https://qph.cf2.quoracdn.net/main-qimg-9e5755aa6e49871940a0ad1e502be064-pjlq"
            }
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={
              "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/inspirational-quote-by-mark-zuckerberg-201708-1501848318.jpg"
            }
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Always a student!!</h1>
    </>
  );
}

export default App;
