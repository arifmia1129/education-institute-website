const generateUniqueId = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 10000);

  const uniqueId = parseInt(`${timestamp}${randomNum}`);

  return uniqueId;
};

export default generateUniqueId;
