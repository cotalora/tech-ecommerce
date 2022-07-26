import './ItemList.css';
import Item from '../Item/Item';

function ItemList(props) {
    const { products } = props;
    return (
        products.map(x => (
            <div key={x.id} className='main-card-container'>
                <Item id={x.id} imgUrl={x.thumbnail} category={x.category} name={x.title} price={x.price} stock={x.stock} />
            </div>
        ))
    );
}

export default ItemList;