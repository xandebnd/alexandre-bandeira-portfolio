"use server";

export const getRepos = async () => {
  try {
    const res = await fetch("https://api.github.com/users/xandebnd/repos");

    const data = await res.json();

    return data;
  } catch (er) {
    console.error(er);
  }
};
