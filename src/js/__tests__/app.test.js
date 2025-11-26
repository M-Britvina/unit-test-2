import sortHeroes from "../app";

test.each([
    [
        [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ],
        [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ]
    ],
    [
        [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ],
        [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ]
    ],
    [
        [
            {name: 'маг', health: 10},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 100},
        ],
        [
            {name: 'мечник', health: 100},
            {name: 'лучник', health: 80},
            {name: 'маг', health: 10},
        ]
    ]
])(
    ('should return correct health indicator'),
    (heroes, expected) => {
        const result = sortHeroes(heroes);

        expect(result).toEqual(expected);
    }
);
