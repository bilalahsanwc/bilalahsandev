export const fadeUp = {
    initial: {
        opacity: 0,
        y: 20,
    },
    whileInView: {
        opacity: 1,
        y: 0,
    },
    viewport: {
        once: true,
        amount: 0.5,
    },
    transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
    },
};

export const fadeLeft = {
    initial: {
        opacity: 0,
        x: -30,
    },
    whileInView: {
        opacity: 1,
        x: 0,
    },
    viewport: {
        once: true,
        amount: 0.5,
    },
    transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
    },
};

export const fadeRight = {
    initial: {
        opacity: 0,
        x: 20,
    },
    whileInView: {
        opacity: 1,
        x: 0,
    },
    viewport: {
        once: true,
        amount: 0.5,
    },
    transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
    },
    exit: {
        opacity: 0,
        x: 20,
    }
};

export const scaleIn = {
    initial: {
        opacity: 0,
        scale: 0.6,
    },
    whileInView: {
        opacity: 1,
        scale: 1,
    },
    viewport: {
        once: true,
        amount: 0.5,
    },
    transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
    },
};

export const fadeIn = {
    initial: {
        opacity: 0,
    },
    whileInView: {
        opacity: 1,
    },
    viewport: {
        once: true,
        amount: 0.5,
    },
    transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
    },
};
