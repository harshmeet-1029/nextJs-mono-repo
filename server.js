const express = require("express");
const next = require("next");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const isDev = true; // Process environment check for dev mode

// Function to fetch template data
const getTemplateData = async (headers = null) => {
  try {
    let url = `http://localhost:5000/api/template-data`; // Replace with the correct backend URL
    const response = await axios.get(url, headers);
    console.log("response: ", response?.data);
    return response?.data || null;
  } catch (error) {
    console.error("Error fetching template data:", error);
    return null;
  }
};

// Function to determine the theme number based on templateId
const getThemeNumber = (templateId) => {
  const THEME_TYPE = {
    theme1: "30ku4radr2z81nzkktzn",
    theme2: "6rhjgsgbp7yeqhq80p6q",
    theme3: "guvp397l8etj1qyr0is4",
    theme4: "snb4vfytglrqkc89crlq",
    theme5: "skafav6qk31v4igcwpgp",
    theme6: "l8etjdr2z8p7yeqv6qk",
    theme7: "BI55jo0sGeC3mtp7V1kO",
    theme8: "rOVE8B1C0HhjZe9yndvh",
    theme9: "cf8g3c2j8m0e6l5riyax",
    theme10: "iamzvejapwxcmerislj0",
    theme11: "8sa44zdutvf9drnqgzxk",
    theme12: "40ku5rbes3y92mylluym",
    theme13: "51lv6dcft2z83ozmmxzn",
  };

  const themeGroups = {
    group1: [THEME_TYPE.theme2, THEME_TYPE.theme4],
    group2: [
      THEME_TYPE.theme1,
      THEME_TYPE.theme6,
      THEME_TYPE.theme10,
      THEME_TYPE.theme11,
      THEME_TYPE.theme12,
      THEME_TYPE.theme13,
    ],
    group3: [
      THEME_TYPE.theme3,
      THEME_TYPE.theme5,
      THEME_TYPE.theme7,
      THEME_TYPE.theme8,
      THEME_TYPE.theme9,
    ],
  };

  if (themeGroups.group1.includes(templateId)) return "1";
  if (themeGroups.group2.includes(templateId)) return "2";
  if (themeGroups.group3.includes(templateId)) return "3";
  return "1";
};

// Function to start the template server
const startTemplateServer = (templatePath, req, res) => {
  const nextApp = next({
    dev: isDev,
    dir: path.join(__dirname, "templates", templatePath),
  });

  const handle = nextApp.getRequestHandler();
  nextApp
    .prepare()
    .then(() => handle(req, res))
    .catch((err) => {
      console.error("Error in serving template:", err);
      res.status(500).send("Internal Server Error");
    });
};

// Function to start the main server
const startServer = async () => {
  const server = express();

  // Set up wildcard route to handle all incoming requests
  server.get("*", async (req, res) => {
    const domainOrigin = req?.headers?.host || "";
    console.log("Incoming request from host:", domainOrigin);

    // Fetch template data based on the domain
    const headers = { headers: { origin: domainOrigin } };
    const templateData = await getTemplateData(headers);

    if (!templateData) {
      console.error("Template data not found for host:", domainOrigin);
      return res.status(404).send("Template not found");
    }

    const templateId = templateData?.templateId;
    const themeNumber = getThemeNumber(templateId);
    const templatePath = `template${themeNumber}`;

    console.log(`Serving template ${themeNumber} for host ${domainOrigin}`);

    const buildFolderPath = path.join(
      __dirname,
      "templates",
      templatePath,
      ".next"
    );

    // Check if build exists, if not, build it
    if (!isDev && !fs.existsSync(buildFolderPath)) {
      console.log("Build folder not found. Running build...");
      const { execSync } = require("child_process");
      execSync("next build", {
        cwd: path.join(__dirname, "templates", templatePath),
      });
    }

    // Serve the template after ensuring the build folder is available
    startTemplateServer(templatePath, req, res);
  });

  // Start the express server
  server.listen(8080, () => {
    console.log(`> Server ready on http://localhost:8080`);
  });
};

// Start the application
startServer().catch((err) => {
  console.error("Error starting server:", err);
});
