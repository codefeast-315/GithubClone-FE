import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";

// import pages
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import LoginPage from "./components/AuthPage/loginPage";
import RepositriesPage from "./components/RepostriesPage/RepositriesPage";
import SearchPage from "./components/SearchPage/SearchPage";
import Repo from "./components/RepoView/Repo";
import PullReqest from "./components/PullRequest/PullRequest";
import NotificationPage from "./components/NotificationPage/NotificationPage";
import IssueView from "./components/IssueView/IssueView";
import IssueDetails from "./components/IssueDetails/IssueDetails";
import CreateNewIssue from "./components/CreateNewIssue/CreateNewIssue";
import CreateRepo from "./components/CreateRepo/CreateRepo";
import EditCode from "./components/EditCode/EditCode";
import RepoSettingPage from "./components/RepoSettingsPage/RepoSettingPage";
import { useAuth } from "./authContext";
import SignUpPage from "./components/AuthPage/SignUpPage";
import CommitHistory from "./components/CommitHistory/CommitHistory";
import UploadFile from "./components/UploadFile/UploadFile";
import CreateRepoDetail from "./components/CreateRepoDetail/CreateRepoDetail";

const ProjectRoutes = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Fetch the current user ID from local storage
    const userIdFromStorage = localStorage.getItem("userId");

    // If a user ID is found in local storage, set the currentUser state
    if (userIdFromStorage && !currentUser) {
      setCurrentUser(userIdFromStorage);
    }

    if (
      !userIdFromStorage &&
      !["/auth", "/signup"].includes(window.location.pathname)
    ) {
      navigate("/auth");
    }

    if (userIdFromStorage && window.location.pathname == "/auth") {
      navigate("/");
    }
  }, [currentUser, navigate, setCurrentUser]);

  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/auth",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/repo",
      element: <RepositriesPage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/repoview/:repositoryId",
      element: <Repo />,
    },
    {
      path: "/pullrequest/:repositoryId",
      element: <PullReqest />,
    },
    {
      path: "/issue/:repositoryId",
      element: <IssueView />,
    },
    {
      path: "/notification",
      element: <NotificationPage />,
    },
    {
      path: "/issueDetails/:issueId",
      element: <IssueDetails />,
    },
    {
      path: "/addIssue/:repositoryId",
      element: <CreateNewIssue />,
    },
    {
      path: "/createRepo",
      element: <CreateRepo />,
    },
    {
      path: "/createRepoDetail/:repositoryId",
      element: <CreateRepoDetail />,
    },
    {
      path: "/editcode/:repositoryId",
      element: <EditCode />,
    },
    {
      path: "/repoSettings/:repositoryId",
      element: <RepoSettingPage />,
    },
    {
      path: "/commitHistory",
      element: <CommitHistory />,
    },
    {
      path: "/uploadFile/:repositoryId",
      element: <UploadFile />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
