import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailTemplate from "./pages/EmailTemplate";
// import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AnalysisResults from "./pages/AnalysisResults";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { Toaster } from "sonner";
function App() {
  return (
    <>
    <Toaster position="top-right" richColors />
    <Router>
      <Routes>
        <Route path="/email-preview" element={<EmailTemplate />} />
        {/* <Route path="/" element={<LandingPage/>}/> */}
         <Route path="/" element={<HomePage/>}/>
         <Route path="/analysis" element={<AnalysisResults/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/terms-of-service" element={<TermsOfService/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
