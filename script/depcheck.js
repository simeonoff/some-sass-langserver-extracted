const path = require("path");
const execSync = require("child_process").execSync;
const semver = require("semver");

const deps = {};

try {
  const packageJSON = require(
    path.resolve(__dirname, "..", "tmp/vscode-scss/server/package.json"),
  );
  Object.entries(packageJSON.dependencies).map(([package, version]) => {
    version = version.replace("`", "");
    if (!deps[package]) {
      deps[package] = [];
    }

    const v = semver.minVersion(version).version;
    if (!deps[package].includes(v)) {
      deps[package].push(v);
    }
  });
} catch (e) {}

console.log(deps);

Object.entries(deps).forEach(([package, versions]) => {
  const version = versions.sort((a, b) => {
    return semver.gt(a, b) ? -1 : 1;
  })[0];
  if (versions.length != 1) {
    console.error(
      `${package} has multiple versions (${versions}). ${version} is selected.`,
    );
  }
  execSync(
    version === "0.0.0"
      ? `npm i -S ${package}`
      : `npm i -S ${package}@">=${version}"`,
    {
      cwd: path.resolve(__dirname, "../"),
      stdio: "inherit",
    },
  );
});
