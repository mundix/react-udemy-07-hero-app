
const heroContext = require.context('../assets/heroes', true);

export const heroeImages = (id) => {
    return heroContext(`./${id}.jpg`).default;
}
