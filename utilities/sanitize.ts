const sanitize = (title: string): string => {
  let string = title.trim().toLowerCase().replace(/ /g, "-").replace(/_/g, "-").replace(/\//g, "");
  const replacements = {
    a: "áäàâ",
    e: "éëèê",
    i: "íïìî",
    o: "óöòô",
    u: "úöùû",
    n: "ñ",
  };

  return string.replace(/[á-ÿ]/g, (v): string => {
    for (let key of Object.keys(replacements)) {
      if (replacements[key].indexOf(v) >= 0) {
        return key;
      }
    }
  });
};

export default sanitize;
