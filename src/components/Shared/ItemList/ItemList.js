import './ItemList.css';
import Item from '../Item/Item';

function ItemList(props) {
    const { products } = props;
    return (
        products.map(x => (
            <div key={x.id} className='main-card-container'>
                <Item imgUrl={x.imgUrl} category={x.category} name={x.name} price={x.price} stock={x.stock} />
            </div>
        ))
    );
}

export default ItemList;