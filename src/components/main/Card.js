import CardToday from "../Calendar/CardToday";
import TodoList from "../Calendar/TodoList";
import NoList from "./NoList";

export default function Card({ item, month, day }) {
  return (
    <li className="bg-[#fff] w-[94%] min-h-[400px] max-h-[400px] overflow-y-auto mx-auto rounded-[10px] relative shadow-lg">
      <ul>
        {item.id ? (
          item.content.map((list, index) => (
            <TodoList key={index} content={list}></TodoList>
          ))
        ) : (
          <NoList />
        )}
      </ul>
    </li>
  );
}
