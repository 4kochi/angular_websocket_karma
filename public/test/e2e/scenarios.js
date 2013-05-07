'use strict';

describe('Demo app', function () {
    it('should show data', function () {
        browser().navigateTo('/index');

        sleep(3);

        expect(repeater('table tbody tr').count()).toBe(3);
    });

    it('should show data from socket', function () {
        browser().navigateTo('/socket');

        sleep(3);

        expect(repeater('table tbody tr').count()).toBe(4);
    });
});