import { ModelActionType } from './ModelActions';

export const initialState = {
    video: 'TestMP4.mp4'
};

export default function reducer(state, action) {
    switch (action.type) {
        case ModelActionType.Reset:
        default:
            return initialState;
    }
}
