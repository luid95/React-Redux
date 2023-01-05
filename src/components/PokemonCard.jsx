import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StartButton'; 
import './PokemonList.css';
import { setFavorite } from '../actions/index'

const PokemonCard = ({ name, image, types, id }) => {
    const dispatch = useDispatch();
    const typesString = types.map(elem => elem.type.name).join(', ');

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }));
    }

    return <Card
        title={name}
        cover={ <img src={image} alt={name} />}
        extra={<StarButton isFavorite onClick={ handleOnFavorite } />}
    >
       <Meta description={ typesString } /> 
    </Card>
}

export default PokemonCard;