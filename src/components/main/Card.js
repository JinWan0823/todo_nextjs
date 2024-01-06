import CardToday from "../Calendar/CardToday";
import TodoList from "../Calendar/TodoList";
import NoList from "./NoList";

export default function Card({ item, month, day }) {
  return (
    <li className="bg-[#fff] w-full min-h-[400px] max-h-[400px] overflow-y-auto mx-auto rounded-[10px] relative shadow-lg mt-[4px] solid-border">
      <CardToday month={month} day={day} />
      <ul>
        {item.id ? (
          item.content.map((list, index) => (
            <TodoList
              key={index}
              content={list}
              index={index}
              item={item}
            ></TodoList>
          ))
        ) : (
          <NoList />
        )}
      </ul>
    </li>
  );
}
