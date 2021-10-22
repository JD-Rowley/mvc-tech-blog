const {format_date, format_plural} = require('../utils/helper');

test('format_date() returns a date string', () => {
    const date = new Date('2021-10-22 16:12:03');

    expect(format_date(date)).toBe('10/22/2021');
});

test('format_plural() returns a pluralized word', () => {
    const word1 = format_plural('tiger', 1);
    const word2 = format_plural('lion', 2);

    expect(word1).toBe('tiger');
    expect(word2).toBe('lions');
})