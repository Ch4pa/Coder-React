import Itemcontainer from "../ItemContainer/Itemcontainer"


const Home = ({  items, deleteItems }) => {
  return (
    <div>
      <Itemcontainer items={items} deleteItems={deleteItems}/>
      
    </div>

  )
}

export default Home