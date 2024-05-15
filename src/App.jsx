import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ProjectRoutes from "./Routes";

import { ThemeProvider } from "@primer/react";
import { AuthProvider } from "./authContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="91345958396-beb4723vdvoj27ueujgpvru8chf0hsir.apps.googleusercontent.com">
      <ThemeProvider>
        <div className="App">
          <AuthProvider>
            <Router>
              <ProjectRoutes />
            </Router>
          </AuthProvider>
        </div>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};
export default App;
