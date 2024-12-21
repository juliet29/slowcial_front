export const convertIsoDate = (isoDate: string) => {
  return new Date(isoDate).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" });
};

export const limitTextCharacters = (text: string, charLimit: number=100) => {
  return `${text.slice(0, charLimit)}...`;
};
