import { heroes } from '../data/heroes';


export const getHeroById = (id) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    return heroes.filter( hero => hero.id === id);
}

