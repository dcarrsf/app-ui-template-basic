export const ModelActionType = {
    Reset: 'reset'
};

export function reset() {
    return {
        type: ModelActionType.Reset
    };
}
