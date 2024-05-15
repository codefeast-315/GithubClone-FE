import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateRepo.css";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import {
  ActionList,
  ActionMenu,
  FormControl,
  TextInput,
  Checkbox,
  RadioGroup,
  Radio,
  Box,
  Button,
} from "@primer/react";
import { LockIcon, RepoIcon } from "@primer/octicons-react";
import axios from "axios";

const FilterInput = ({ placeholder, value, onChange }) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    sx={{
      backgroundColor: "black",
      border: "1px solid white",
      color: "white",
    }}
  />
);

const CreateRepo = ({ ownerName, RepoName }) => {
  const navigate = useNavigate();

  const ownerNames = ["Prasun60", "JohnDoe", "JaneSmith", "Alice", "Bob"];
  const [filter, setFilter] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [selectedRadio, setSelectedRadio] = useState("public");
  const [description, setDescription] = useState("");
  const [addReadme, setAddReadme] = useState(false);
  const [repoName, setRepoName] = useState("");

  const filteredNames = ownerNames.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
    setVisibility(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddReadmeChange = (event) => {
    setAddReadme(event.target.checked);
  };

  const handleRepoNameChange = (event) => {
    setRepoName(event.target.value); // Update the repository name state variable
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      userId: "6617042d19a58e34628738ad",
      repositoryName: repoName,
      description: description,
      visibility: visibility === "public",
      content: "",
      issues: [],
    };
    try {
      const response = await axios.post(
        "https://github-clone-be.vercel.app/repos/create",
        formData
      );
      console.log(response.data);
      navigate(`/createRepoDetail/${response.data.repositoryId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar title="New Repository" />
      <hr />
      <div className="createRepoForm">
        <hr />
        <div className="textNew">
          <div
            className="Box-sc-g0xbh4-0 englDy"
            style={{ marginBottom: "20px" }}
          >
            <h1 className="Heading__StyledHeading-sc-1c1dgg0-0 jsAuBe">
              Create a new repository
            </h1>
            <span className="Text-sc-17v1xeu-0 gkiJPx">
              <div className="Box-sc-g0xbh4-0">
                A repository contains all project files, including the revision
                history.
                <span className="Text-sc-17v1xeu-0 gPDEWA">
                  {" "}
                  Already have a project repository elsewhere?{" "}
                  <a
                    data-inline="true"
                    href="/new/import"
                    data-hydro-click='{"event_type":"repository_create.click","payload":{"event_target":"IMPORT_REPOSITORY_LINK","originating_url":"https://github.com/new","user_id":112550626}}'
                    data-hydro-click-hmac="bce4c473d840a589caae737b27e79c11d38d24f151688f757c0cbc4fceed07ae"
                    data-ga-click="Create Repository, import repository, location:repo new"
                    className="Link__StyledLink-sc-14289xe-0 dvQLCc"
                  >
                    Import a repository.
                  </a>
                </span>
              </div>
            </span>
          </div>
          <span className="asterisk">
            Required fields are marked with an asterisk (*).
          </span>

          <div className="fieldButtons">
            <div className="ownerDropdown">
              <label
                htmlFor="owner-menu"
                className="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 likhti"
              >
                <span display="flex" className="Box-sc-g0xbh4-0 hnmzXm">
                  <div className="Box-sc-g0xbh4-0 bYQyDU">Owner*</div>
                </span>
              </label>
              <ActionMenu id="owner-menu">
                <ActionMenu.Button
                  sx={{
                    backgroundColor: "#3d424d",
                    border: "1px solid white",
                    color: "white",
                    width: "12vw",
                    height: "32px",
                    "&:focus": {
                      backgroundColor: "black",
                      borderColor: "white",
                      color: "black",
                    },
                  }}
                >
                  {ownerName || "Select Owner"}
                </ActionMenu.Button>

                <ActionMenu.Overlay
                  sx={{
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  <ActionList
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      "&:focus": {
                        backgroundColor: "black",
                        color: "black",
                      },
                    }}
                  >
                    <FilterInput
                      placeholder="filter"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    />
                    <ActionList.Divider />
                    {filteredNames.map((name) => (
                      <ActionList.Item
                        key={name}
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                          },
                        }}
                      >
                        {name}
                      </ActionList.Item>
                    ))}
                    <ActionList.Divider />
                    <ActionList.Item
                      variant="primary"
                      sx={{
                        backgroundColor: "black",
                        color: "green",
                        "&:hover": {
                          backgroundColor: "black",
                        },
                      }}
                    >
                      Login with other
                    </ActionList.Item>
                  </ActionList>
                </ActionMenu.Overlay>
              </ActionMenu>
            </div>

            <div className="RepoNameField">
              <label
                htmlFor="repo-name-input"
                className="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 likhti"
              >
                <span display="flex" className="Box-sc-g0xbh4-0 hnmzXm">
                  <div className="Box-sc-g0xbh4-0 bYQyDU">Repository name*</div>
                </span>
              </label>
              <FormControl>
                <TextInput
                  id="repo-name-input"
                  value={repoName}
                  onChange={handleRepoNameChange}
                  sx={{
                    backgroundColor: "black",
                    border: "1px solid white",
                    color: "white",
                    width: "12vw",
                    height: "32px",
                    "&:hover": {
                      backgroundColor: "black",
                      borderColor: "white",
                      color: "#3d424d",
                    },
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div className="greatRepo">
            Great repository names are short and memorable.
          </div>
          <div className="description">
            <label
              htmlFor="description-input"
              className="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 likhti"
            >
              Description{" "}
              <span className="Text-sc-17v1xeu-0 eUyEBU">(optional)</span>
            </label>
            <TextInput
              id="description-input"
              value={description}
              onChange={handleDescriptionChange}
              sx={{
                backgroundColor: "black",
                border: "1px solid white",
                color: "white",
                width: "100%",
                height: "32px",
                "&:hover": {
                  backgroundColor: "black",
                  borderColor: "white",
                  color: "#3d424d",
                },
              }}
            />
          </div>
          <hr className="bodyline" />
          <div className="visibilityOptions">
            <Box display="grid" sx={{ gap: 2 }}>
              <RadioGroup
                sx={{
                  color: "white",
                }}
                value={selectedRadio}
                onChange={handleRadioChange}
              >
                <RadioGroup.Label
                  sx={{
                    fontSize: 20,
                  }}
                >
                  Visibility
                </RadioGroup.Label>
                <FormControl>
                  <Radio name="radioChoices" value="public" />
                  <FormControl.Label
                    sx={{
                      color: "white",
                    }}
                  >
                    <span className="Icon">
                      <RepoIcon size={20} />
                    </span>
                    Public
                    <p>
                      Anyone on the internet can see this repository. You choose
                      who can commit.
                    </p>
                  </FormControl.Label>
                </FormControl>
                <FormControl>
                  <Radio name="radioChoices" value="private" />
                  <FormControl.Label
                    sx={{
                      color: "white",
                    }}
                  >
                    <span className="Icon">
                      <LockIcon size={20} />
                    </span>
                    Private
                    <p>You choose who can see and commit to this repository.</p>
                  </FormControl.Label>
                </FormControl>
              </RadioGroup>
            </Box>
          </div>
          <hr className="bodyline" />
          <div className="AddReadmeCheck">
            <FormControl required={true}>
              <FormControl.Label sx={{ color: "white" }}>
                Add Readme
              </FormControl.Label>
              <Checkbox checked={addReadme} onChange={handleAddReadmeChange} />
            </FormControl>
          </div>
          <hr className="bodyline" />
          <div
            className="CreateRepoButton"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="primary"
              onClick={handleSubmit}
              sx={{ color: "black", backgroundColor: "#26cd4d" }}
            >
              Create Repository
            </Button>
          </div>
          {/* endbody */}
        </div>
      </div>
    </>
  );
};

export default CreateRepo;
