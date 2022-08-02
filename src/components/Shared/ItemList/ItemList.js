import './ItemList.css';
import Item from '../Item/Item';

function ItemList({ products }) {
    return (
        products.map(x => (
            <div key={x.id} className='main-card-container'>
                <Item id={x.id} imgUrl={x.thumbnail} category={x.category} name={x.title} price={x.price} />
            </div>
        ))
    );
}

export default ItemList;