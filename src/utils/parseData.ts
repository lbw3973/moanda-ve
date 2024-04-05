export const getUploadDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}월 ${day}일, ${year}년 `;
};
