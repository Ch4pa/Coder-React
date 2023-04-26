import Itemcontainer from "../../components/ItemContainer/Itemcontainer";

function Buzos({ productos, input, items, deleteItems }) {
  return (
    <div>
      <Itemcontainer items={items} />
    </div>
  );
}

export default Buzos;
