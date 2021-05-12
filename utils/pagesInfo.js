import { N_PER_PAGE, TOTAL_POKEMON } from './constants';

export function getPagesInfo(pageNumber) {
    const page = parseInt(pageNumber);
    const total = N_PER_PAGE * page;
    const offset = page > 0 ? ( ( page - 1 ) * N_PER_PAGE ) : 0;
    let nextPage = page + 1;
    let limit = N_PER_PAGE;

    if (total > TOTAL_POKEMON) {
        limit = ((total - TOTAL_POKEMON) - N_PER_PAGE) * -1;
        nextPage = false;
    }

    return {
        limit,
        offset,
        nextPage
    }
}