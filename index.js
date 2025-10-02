import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const markCommit = async (dateString) => {
  const date = moment(dateString).format();

  const data = {
    date: date,
  };

  await jsonfile.writeFile(path, data);
  const git = simpleGit();
  await git.add([path]);
  await git.commit(date, { "--date": date });
  await git.push();
};

const runCommits = async () => {
  await markCommit("2024-09-30");
  await markCommit("2024-09-04");
  await markCommit("2024-09-01");
};

runCommits();