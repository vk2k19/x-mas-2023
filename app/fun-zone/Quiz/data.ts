import { randomUUID } from "crypto";

export const questions = [{
    id: 1,
    label: 'How many times did you add or left code smell?',
    answers: [{
        id: 2,
        label: 'One',
        score: 5
    }, {
        id: 3,
        label: 'Too Many',
        score: 0
    }, {
        id: 4,
        label: 'Don\'t Know',
        score: -10
    }, {
        id: 5,
        label: 'Never',
        score: 10
    }]
}, {
    id: 6,
    label: 'How many times did you go above and beyond?',
    answers: [{
        id: 7,
        label: 'A few',
        score: 10
    }, {
        id: 8,
        label: 'Too Many',
        score: 20
    }, {
        id: 9,
        label: 'Don\'t Know',
        score: 5
    }, {
        id: 10,
        label: 'Never',
        score: 0
    }]
}, {
    id: 11,
    label: 'How many times did you help your peers?',
    answers: [{
        id: 12,
        label: 'A few',
        score: 10
    }, {
        id: 13,
        label: 'Too Many',
        score: 20
    }, {
        id: 14,
        label: 'Don\'t Know',
        score: 5
    }, {
        id: 15,
        label: 'Never',
        score: 0
    }]
}, {
    id: 16,
    label: 'How many times you had unhealthy arguments with your FnF',
    answers: [{
        id: 17,
        label: 'A few',
        score: -5
    }, {
        id: 18,
        label: 'Too Many',
        score: -10
    }, {
        id: 19,
        label: 'Don\'t Know',
        score: 0
    }, {
        id: 20,
        label: 'Never',
        score: 10
    }]
}, {
    id: 21,
    label: 'Did you learn something new this year?',
    answers: [{
        id: 22,
        label: 'A few',
        score: 5
    }, {
        id: 23,
        label: 'Too Many',
        score: 10
    }, {
        id: 24,
        label: 'Don\'t Know',
        score: 0
    }, {
        id: 25,
        label: 'Not at all',
        score: -10
    }]
}, {
    id: 26,
    label: 'Finished sprint goals on time',
    answers: [{
        id: 27,
        label: 'A few',
        score: 5
    }, {
        id: 28,
        label: 'Too Many',
        score: 10
    }, {
        id: 29,
        label: 'Don\'t Know',
        score: 0
    }, {
        id: 30,
        label: 'Not at all',
        score: -10
    }]
}]