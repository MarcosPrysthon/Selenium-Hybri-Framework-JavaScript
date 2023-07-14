const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, Math.ceil(time * 1000)));
};

export default sleep;