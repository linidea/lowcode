function getState(store, moduleName, stateName) {
    return store.state[moduleName][stateName];
}

function setState(store, moduleName, mutationName, value) {
    store.commit(`${moduleName}/${mutationName}`, value);
}

export {getState, setState};
