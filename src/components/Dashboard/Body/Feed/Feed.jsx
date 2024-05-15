import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import "./Feed.css";

const Feed = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [visibleRepos, setVisibleRepos] = React.useState(4);
  let repositoryId = "";

  const fetchRepoId = async (repoName) => {
    console.log(repoName);
    try {
      const response = await axios.post(
        "https://github-clone-be.vercel.app/repos/repoid",
        {
          repositoryName: repoName,
        }
      );
      console.log("Id fetched", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch repoId:", error);
      return null;
    }
  };

  const handleViewMore = () => {
    setVisibleRepos(repositories.length);
  };

  React.useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true);
      try {
        const id = localStorage.getItem("userId");
        const response = await fetch(
          `https://github-clone-be.vercel.app/repos/getAll/${id}`
        );
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <>
      <div className="cards">
        <div className="dashboard-card-container" style={{}}>
          <div className="home-result-container">
            <h1 className="HomeText" style={{ margin: "0" }}>
              Home
            </h1>
            {isLoading ? (
              <Typography className="dashboard-card" variant="body1">
                {" "}
                Loading repositories...
              </Typography>
            ) : repositories.length === 0 ? (
              <Box>
                <Card
                  className="dashboard-card"
                  variant="outlined"
                  sx={{
                    marginBottom: "20px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Welcome to GitHub
                    </Typography>
                    <Typography variant="body2" color="whitesmoke">
                      Start exploring repositories!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Get Started</Button>
                  </CardActions>
                </Card>
              </Box>
            ) : (
              repositories
                .slice(0, visibleRepos)
                .reverse()
                .map((repo, index) => (
                  <Box key={index}>
                    <Card
                      className="dashboard-card"
                      variant="outlined"
                      sx={{
                        marginBottom:
                          index === repositories.length - 1 ? "20px" : "0",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {repo.name}
                        </Typography>
                        <Typography variant="body2" color="whitesmoke">
                          {repo.content[0]}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={async () => {
                            repositoryId = await fetchRepoId(repo.name);
                            navigate(`/repoview/${repositoryId}`);
                          }}
                        >
                          View Repository
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                ))
            )}

            {visibleRepos < repositories.length && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleViewMore}
                sx={{
                  width: "100%",
                }}
              >
                View More
              </Button>
            )}
          </div>

          <div className="side-content-left-container">
            <Card
              sx={{
                width: "90%",
                minWidth: "300px",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  GitHub Trending
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Check out the most popular repositories on GitHub.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Trending</Button>
              </CardActions>
            </Card>

            <Card sx={{ width: "90%" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  GitHub Trending
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Check out the most popular repositories on GitHub.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Trending</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
