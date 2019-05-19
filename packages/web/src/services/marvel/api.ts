import axios from 'axios';
import { Md5 } from 'ts-md5/dist/md5';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const PRIVATE_KEY = '5249b84d9f90373e5e3f75eb361a39f7347b56af';
const PUBLIC_KEY = '9c5bc47ad318773387eff6f0c393068b';

const generateAccessParams = () : string => {
    const hash = new Md5();
    const timestamp = Number(new Date());
    const stringTimestamp = timestamp.toString();

    hash.appendStr(stringTimestamp)
    .appendStr(PRIVATE_KEY)
        .appendStr(PUBLIC_KEY);
    return `&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.end()}`;
};

const getHeros = async (page: number) => {
    const limit = 30;
    const offset = page * limit;
    return axios.get(`${urlBaseMarvel}characters?offset=${offset}&orderBy=name&limit=${limit}${generateAccessParams()}`);
};

export {
    getHeros,
};
