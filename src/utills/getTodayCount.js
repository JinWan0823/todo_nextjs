export const getTodayCount = async () => {
  const date = new Date();
  const today = date.getDate();
  const month = date.getMonth() + 1;
  try {
    const data = await fetch(
      `https://uneven-pickle-verse.glitch.me/todolist?month=${month}&date=${today}`
    );
    const response = await data.json();

    const list = response[0].content;
    const filterSuccess = list.filter((v) => v.success);

    const count = {
      goal: filterSuccess.length,
      total: list.length,
    };
    console.log(count);
    return count;
  } catch (error) {
    console.error(error);
  }
};
