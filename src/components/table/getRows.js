export const getRows = (rows) => {
  if (!rows.length) return [];
  else {
    return rows.map((item, index) => ({ id: index + 1, ...item }));
  }
};
