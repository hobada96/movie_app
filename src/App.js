const foodLike = [
    {
        id : 1,
        name : "kimbap"},
    {
        id : 2,
        name : "sushi"},
    {
        id : 3,
        name : "bread"}
]

const Food = ({name}) =>{
    return(
        <div>
            <h2>i like {name}</h2>
        </div>
    )
}
function App() {
  return (
    <div className="App">
        {foodLike.map(dish => (
            <Food key = {dish.id} name={dish.name}></Food>
        ))}

    </div>
  );
}

export default App;
