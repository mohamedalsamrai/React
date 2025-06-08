
function ListItems({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListItems;