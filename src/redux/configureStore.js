import {createStore, combineReducers} from 'redux';
import { Campsites } from '../shared/campsites';
import { Comments } from '../shared/comments';
import { Partners } from '../shared/partners';
import { Promotions } from '../shared/promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );

    return store;