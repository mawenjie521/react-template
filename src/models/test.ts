export default {
    namespace: 'test',
    state: {
        value: 'this is app app test',
    },
    reducers: {
        setValue(state: any, { payload }: any) {
            return { ...state, value: payload };
        },
    },
    effects: {},
};
